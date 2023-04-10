import { styled } from "@lib/styled";
import { Box as MuiBox } from "@mui/system";

export const Box = styled(MuiBox)`
  ${(props) => props.theme.breakpoints.up("md")} {
    font-size: ${(props) => props.theme.spacing(3)};
  };
  ${(props) => props.theme.breakpoints.down("sm")} {
    font-size: ${(props) => props.theme.spacing(2.5)};
  };
`
