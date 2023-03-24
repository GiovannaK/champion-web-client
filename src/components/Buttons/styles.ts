import { Button as MuiButton } from "@mui/material";
import { styled } from "@mui/system";

type ButtonProps = {
  buttonColor: {palette: string, hierarchy: string};
  buttonSize: number;
  isDisabled?: boolean;
  fontWeight: number;
  isUppercase?: boolean;
  width?: string;
  height?: string;
};
export const Button = styled(MuiButton)<ButtonProps>`
  font-size: ${(props) => props.theme.spacing(props.buttonSize)};
  font-weight: ${(props) => props.fontWeight};
  background: ${(props) => props.theme.palette[props.buttonColor.palette][props.buttonColor.hierarchy]};
  text-transform: ${(props) => (props.isUppercase ? "uppercase" : "none")};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;
