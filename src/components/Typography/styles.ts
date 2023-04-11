import { Typography as MuiTypography } from "@mui/material";
import { styled } from "@lib/styled";
import { TypographyProps } from ".";

type Props = Omit<TypographyProps, 'text'>

export const Typography = styled(MuiTypography)<Props>`
  ${(props) => props.theme.breakpoints.up("md")} {
    font-size: ${props => props.theme.spacing(props.fontSizeMd)};
  };
  ${(props) => props.theme.breakpoints.down("sm")} {
    font-size: ${props => props.theme.spacing(props.fontSizeSm)};
  };
  font-weight: ${props => props.fontWeight};
  color: ${props => props.color};
  text-align: ${props => props.alignText};
  text-transform: ${props => props.isUppercase ? "uppercase" : "none"};
`;
