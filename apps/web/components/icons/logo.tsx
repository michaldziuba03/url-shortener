import { LucideProps } from 'lucide-react';
import React from 'react';

export const Logo: React.FC<LucideProps> = (props) => {
  return (
    <svg
      viewBox="0 0 32 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M0 5C0 2.23857 2.23858 0 5 0H27C29.7614 0 32 2.23858 32 5V24.4945V27.1576C32 29.9191 29.7614 32.1576 27 32.1576H26.3489H5C2.23858 32.1576 0 29.9191 0 27.1576V5Z"
        fill="black"
      />
      <g clip-path="url(#clip0_409_13)">
        <path
          d="M23.4876 21.232L26.3394 18.4295C25.7872 17.5095 25.5956 16.4234 25.8003 15.3746C26.0051 14.3258 26.5922 13.3864 27.4516 12.7324C28.311 12.0784 29.3837 11.7548 30.4686 11.8222C31.5536 11.8896 32.5762 12.3434 33.3449 13.0985C34.1136 13.8537 34.5756 14.8583 34.6442 15.9241C34.7128 16.9898 34.3834 18.0436 33.7176 18.8878C33.0519 19.7321 32.0956 20.3088 31.028 20.51C29.9603 20.7111 28.8547 20.5228 27.9182 19.9804L25.0665 22.7819L31.7894 29.3862C31.9969 29.5899 32.1615 29.8318 32.2738 30.098C32.386 30.3642 32.4438 30.6496 32.4438 30.9377C32.4438 31.2259 32.386 31.5112 32.2738 31.7774C32.1615 32.0437 31.9969 32.2855 31.7894 32.4893L23.4876 24.334L15.1858 32.4893C14.9784 32.2855 14.8138 32.0437 14.7015 31.7774C14.5892 31.5112 14.5314 31.2259 14.5314 30.9377C14.5314 30.6496 14.5892 30.3642 14.7015 30.098C14.8138 29.8318 14.9784 29.5899 15.1858 29.3862L21.9077 22.783L19.057 19.9815C18.1206 20.5239 17.0149 20.7122 15.9473 20.5111C14.8797 20.3099 13.9234 19.7332 13.2576 18.8889C12.5919 18.0447 12.2625 16.9909 12.3311 15.9251C12.3997 14.8594 12.8617 13.8548 13.6303 13.0996C14.399 12.3445 15.4217 11.8907 16.5066 11.8233C17.5915 11.7559 18.6642 12.0795 19.5237 12.7335C20.3831 13.3875 20.9702 14.3269 21.1749 15.3757C21.3797 16.4245 21.188 17.5106 20.6359 18.4305L23.4876 21.2298L23.4876 21.232ZM30.1871 14.0068C29.5949 14.0068 29.0268 14.238 28.608 14.6494C28.1892 15.0608 27.954 15.6188 27.954 16.2006C27.954 16.7824 28.1892 17.3404 28.608 17.7518C29.0268 18.1632 29.5949 18.3944 30.1871 18.3944C30.7794 18.3944 31.3474 18.1632 31.7662 17.7518C32.185 17.3404 32.4203 16.7824 32.4203 16.2006C32.4203 15.6188 32.185 15.0608 31.7662 14.6494C31.3474 14.238 30.7794 14.0068 30.1871 14.0068ZM16.7881 14.0068C16.1959 14.0068 15.6278 14.238 15.209 14.6494C14.7902 15.0608 14.555 15.6188 14.555 16.2006C14.555 16.7824 14.7902 17.3404 15.209 17.7518C15.6278 18.1632 16.1959 18.3943 16.7881 18.3943C17.3804 18.3943 17.9484 18.1632 18.3672 17.7518C18.786 17.3404 19.0213 16.7824 19.0213 16.2006C19.0213 15.6188 18.786 15.0608 18.3672 14.6494C17.9484 14.238 17.3804 14.0068 16.7881 14.0068Z"
          fill="#FAFAFA"
        />
      </g>
      <defs>
        <clipPath id="clip0_409_13">
          <rect
            width="21.9113"
            height="22.5419"
            fill="white"
            transform="translate(32 32.1577) rotate(-180)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};
