import { getColor, IIconProps } from "./utils";

export const ExitIcon = ({ color, size = "24", ...props }: IIconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={getColor(color)}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
   <path d="M21.7129 22.0001H6.78466C6.59327 22.0001 6.49757 21.9043 6.49757 21.7129V14.5359C6.49757 14.3445 6.59327 14.2488 6.78466 14.2488C6.97605 14.2488 7.07174 14.3445 7.07174 14.5359V21.4258H21.4258V2.47847H7.07174V9.84686C7.07174 10.0383 6.97605 10.134 6.78466 10.134C6.59327 10.134 6.49757 10.0383 6.49757 9.84686V2.28701C6.49757 2.09562 6.59327 2 6.78466 2H21.7129C21.9043 2 22 2.09562 22 2.28701V21.8086C22 21.8086 21.9043 22.0001 21.7129 22.0001Z" />
<path d="M13.8661 12.4306H2.28708C2.0957 12.4306 2 12.3348 2 12.1434C2 11.952 2.0957 11.8563 2.28708 11.8563H13.8661C14.0574 11.8563 14.1531 11.952 14.1531 12.1434C14.1531 12.2391 14.0574 12.4306 13.8661 12.4306Z" />
<path d="M11.3779 14.4401C11.2822 14.4401 11.1865 14.4402 11.1865 14.3445C11.0908 14.2488 11.0908 14.0574 11.2822 13.9617L13.7702 12.1435L11.2822 10.3253C11.1865 10.2296 11.0908 10.0382 11.1865 9.94246C11.2822 9.84676 11.4736 9.75109 11.5693 9.84679L14.3444 11.8563C14.4401 11.952 14.4401 11.9521 14.4401 12.0478C14.4401 12.1435 14.4401 12.2391 14.3444 12.2391L11.5693 14.2487C11.5693 14.4401 11.4736 14.4401 11.3779 14.4401Z" />
  </svg>
);