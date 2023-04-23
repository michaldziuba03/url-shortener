import {
  BadRequestException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { AccountRepository, ResetTokenRepository } from '@libs/data';
import * as argon2 from 'argon2';
import { generateGravatar, generateToken } from '../shared/utils';
import {
  RegisterDTO,
  LoginDTO,
  ResetPasswordRequestDTO,
  ResetPasswordDTO,
} from './dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly accountRepository: AccountRepository,
    private readonly resetTokenRepository: ResetTokenRepository,
  ) {}

  async register(data: RegisterDTO) {
    const userExists = await this.accountRepository.exists({
      email: data.email,
    });

    if (userExists) {
      throw new BadRequestException('Account already exists');
    }

    const verificationToken = await generateToken(128);
    const hashedPassword = await argon2.hash(data.password);
    const account = await this.accountRepository.create({
      email: data.email,
      name: data.name,
      password: hashedPassword,
      picture: generateGravatar(data.email),
      verificationToken,
    });

    return account;
  }

  async login(data: LoginDTO) {
    const account = await this.accountRepository.findByEmail(data.email);

    if (!account) {
      throw new UnauthorizedException('Invalid email or password');
    }

    const isMatching = await argon2.verify(account.password, data.password);
    if (!isMatching) {
      throw new UnauthorizedException('Invalid email or password');
    }

    return account;
  }

  async resetPasswordRequest(data: ResetPasswordRequestDTO) {
    const account = await this.accountRepository.findByEmail(data.email);
    if (!account) {
      return;
    }
    // handle accounts registered with OAuth providers:
    if (!account.password) {
      return;
    }

    const token = await generateToken(64);
    await this.resetTokenRepository.createResetToken(account.id, token);
    console.log('Reset token:', token);
  }

  async resetPassword(data: ResetPasswordDTO) {
    const resetMeta = await this.resetTokenRepository.findByToken(data.token);
    if (!resetMeta) {
      throw new NotFoundException('Invalid reset token');
    }

    const hashedPassword = await argon2.hash(data.password);
    const account = await this.accountRepository.findOneAndUpdate(
      {
        id: resetMeta.userId,
      },
      {
        password: hashedPassword,
      },
    );

    await this.resetTokenRepository.clearTokens(resetMeta.userId);

    return account;
  }
}
