import { styled } from "@lib/styled";
import { Typography as MuiTypography } from "@mui/material";

export const Typography = styled(MuiTypography)`
  ${(props) => props.theme.breakpoints.up("md")} {
    font-size: ${(props) => props.theme.spacing(3)};
  };
  ${(props) => props.theme.breakpoints.down("sm")} {
    font-size: ${(props) => props.theme.spacing(2.5)};
  };
`
