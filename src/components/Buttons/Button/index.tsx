import React from "react";
import * as S from "../styles";

type ButtonProps = {
  text: string;
  variant: "text" | "outlined" | "contained";
  size: number;
  width?: string;
  fontWeight?: number;
  isUppercase?: boolean;
  icon?: React.ReactNode;
  isEndIcon?: boolean;
  height?: string;
};

export const Button = ({
  text,
  variant,
  width,
  fontWeight,
  isUppercase,
  isEndIcon,
  icon,
  height,
  size
}: ButtonProps) => {
  const buttonColor = { palette: "primary", hierarchy: "main" };
  const iconPosition = isEndIcon ? "endIcon" : "startIcon";
  return (
    <S.Button
      buttonSize={2}
      fontWeight={fontWeight ?? 500}
      buttonColor={buttonColor}
      variant={variant}
      width={width}
      height={height}
      isUppercase={isUppercase}
      {...{ [iconPosition]: icon }}
    >
      {text}
    </S.Button>
  );
};
