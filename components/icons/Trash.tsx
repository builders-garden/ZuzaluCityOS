import * as React from 'react';
import { IconProps } from 'types';

export const TrashIcon: React.FC<IconProps> = ({
  size = 6,
  color = 'white',
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      width={`${size * 4}px`}
      height={`${size * 4}px`}
      fill={color}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M11.0001 2.98546V3.13665C11.6366 3.19492 12.2678 3.27154 12.8932 3.36599C13.1247 3.40095 13.3555 3.43837 13.5854 3.4782C13.8575 3.52533 14.0399 3.78411 13.9927 4.0562C13.9456 4.32829 13.6868 4.51066 13.4147 4.46352C13.3683 4.45549 13.3219 4.44755 13.2754 4.43971L12.6051 13.1534C12.525 14.1954 11.6561 15 10.611 15H5.38913C4.34406 15 3.47517 14.1954 3.39502 13.1534L2.72474 4.43971C2.67826 4.44755 2.63183 4.45549 2.58542 4.46352C2.31333 4.51066 2.05455 4.32829 2.00742 4.0562C1.96029 3.78411 2.14265 3.52533 2.41474 3.4782C2.64467 3.43837 2.87543 3.40095 3.10699 3.36599C3.73239 3.27154 4.3636 3.19492 5.00008 3.13665V2.98546C5.00008 1.94248 5.80844 1.05212 6.87704 1.01794C7.24994 1.00601 7.62432 1 8.00008 1C8.37585 1 8.75022 1.00601 9.12313 1.01794C10.1917 1.05212 11.0001 1.94248 11.0001 2.98546ZM6.90901 2.01743C7.27126 2.00584 7.63498 2 8.00008 2C8.36518 2 8.7289 2.00584 9.09115 2.01743C9.59423 2.03352 10.0001 2.45596 10.0001 2.98546V3.06055C9.33851 3.02038 8.67164 3 8.00008 3C7.32852 3 6.66166 3.02038 6.00008 3.06055V2.98546C6.00008 2.45596 6.40593 2.03352 6.90901 2.01743ZM6.67248 5.98078C6.66187 5.70484 6.42957 5.48976 6.15364 5.50037C5.8777 5.51098 5.66261 5.74328 5.67322 6.01922L5.90399 12.0192C5.9146 12.2952 6.1469 12.5102 6.42284 12.4996C6.69878 12.489 6.91386 12.2567 6.90325 11.9808L6.67248 5.98078ZM10.3263 6.01922C10.3369 5.74328 10.1219 5.51098 9.84591 5.50037C9.56998 5.48976 9.33768 5.70484 9.32707 5.98078L9.0963 11.9808C9.08568 12.2567 9.30077 12.489 9.57671 12.4996C9.85265 12.5102 10.0849 12.2952 10.0956 12.0192L10.3263 6.01922Z"
        fill="#FF5E5E"
      />
    </svg>
  );
};