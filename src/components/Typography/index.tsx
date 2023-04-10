import React from "react";
import { Typography as Stypography } from "./styles";
export type TypographyProps = {
  fontSizeMd: number;
  fontSizeSm: number;
  fontWeight: number;
  color: string;
  isUppercase: boolean;
  text: string;
  textAlign: string;
};

export const Typography = ({
  color,
  fontSizeMd,
  fontWeight,
  isUppercase,
  fontSizeSm,
  textAlign,
  text
}: TypographyProps) => {
  return (
    <Stypography
      color={color}
      fontSizeMd={fontSizeMd}
      fontWeight={fontWeight}
      fontSizeSm={fontSizeSm}
      textAlign={textAlign}
      isUppercase={isUppercase}
    >
      {text}
    </Stypography>
  );
};
