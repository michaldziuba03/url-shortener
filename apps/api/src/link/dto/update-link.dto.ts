import {
  IsBoolean,
  IsOptional,
  IsString,
  IsUrl,
  MaxLength,
} from 'class-validator';
import { Trim } from '../../shared/trim.transformer';
import { LINK_NAME_MAX } from '../link.constants';
import { UtmParamsDto } from './utm-params.dto';

export class UpdateLinkDto extends UtmParamsDto {
  @IsUrl()
  @IsOptional()
  url?: string;

  @IsString()
  @MaxLength(LINK_NAME_MAX)
  @Trim()
  @IsOptional()
  name?: string;

  @IsBoolean()
  @IsOptional()
  isArchived?: boolean;

  @IsUrl()
  @IsOptional()
  iosRedirect?: string;

  @IsUrl()
  @IsOptional()
  androidRedirect?: string;
}
