import { Toolbar as MuiToolbar} from "@mui/material";
import { styled } from "@lib/styled";


export const Toolbar = styled(MuiToolbar)`
  ${props => props.theme.breakpoints.up("md")} {
    margin-top: 10rem;
  };
  ${props => props.theme.breakpoints.down("md")} {
    margin-top: 5rem;
  }
`;


