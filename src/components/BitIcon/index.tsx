import { makeStyles } from "@fluentui/react-components";

import type { BitSize, BitValue } from "@/utils";

import type { FC } from "@/types";

import OneSVG from "@/assets/icons/one.svg?react";
import ZeroSVG from "@/assets/icons/zero.svg?react";

const useClasses = makeStyles({
  large: {
    height: "20px",
    width: "20px",
  },
  medium: {
    height: "16px",
    width: "16px",
  },
  small: {
    height: "13px",
    width: "13px",
  },
});

export type BitIconProps = {
  bit: BitValue;
  size: BitSize;
};

export const BitIcon: FC<BitIconProps> = ({ bit, size }) => {
  const className = useClasses();

  return bit === "0" ? <ZeroSVG className={className[size]} /> : <OneSVG className={className[size]} />;
};
