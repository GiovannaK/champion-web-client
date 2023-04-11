import React from "react";
import { Typography as Stypography } from "./styles";
export type TypographyProps = {
  fontSizeMd: number;
  fontSizeSm: number;
  fontWeight: number;
  color: string;
  isUppercase: boolean;
  text: string;
  alignText: string;
  variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'subtitle1' | 'subtitle2' | 'inherit';
};

export const Typography = ({
  color,
  fontSizeMd,
  fontWeight,
  isUppercase,
  fontSizeSm,
  alignText,
  text,
  variant
}: TypographyProps) => {
  return (
    <Stypography
    variant={variant}
      color={color}
      fontSizeMd={fontSizeMd}
      fontWeight={fontWeight}
      fontSizeSm={fontSizeSm}
      alignText={alignText}
      isUppercase={isUppercase}
    >
      {text}
    </Stypography>
  );
};
