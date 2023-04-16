import { styled } from "@mui/system";
import {AppBar as MuiAppBar} from '@mui/material'

export const AppBar = styled(MuiAppBar)`
  background: transparent;
  box-shadow: none;
`;

// ${(props) => props.theme.palette.background.paper}