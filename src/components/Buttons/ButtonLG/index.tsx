import React from "react";
import { Button } from "../styles";

type ButtonLGProps = {
  text: string;
  variant: "text" | "outlined" | "contained";
  width?: string;
  fontWeight?: number;
  isUppercase?: boolean;
  icon?: React.ReactNode;
  isEndIcon?: boolean;
};

export const ButtonLG = ({
  text,
  variant,
  width,
  fontWeight,
  isUppercase,
  isEndIcon,
  icon
}: ButtonLGProps) => {
  const buttonColor = { palette: "primary", hierarchy: "main" };
  const iconPosition = isEndIcon ? "endIcon" : "startIcon";
  return (
    <Button
      buttonSize={2}
      fontWeight={fontWeight ?? 500}
      buttonColor={buttonColor}
      variant={variant}
      width={width}
      isUppercase={isUppercase}
      {...{ [iconPosition]: icon }}
    >
      {text}
    </Button>
  );
};
