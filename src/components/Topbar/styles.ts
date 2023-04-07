import { styled } from "@mui/system";
import {AppBar as MuiAppBar} from '@mui/material'

export const AppBar = styled(MuiAppBar)`
  background: transparent;
  border-bottom: 1px solid #2C5364; //TODO: change to theme color
  box-shadow: none;
`;

// ${(props) => props.theme.palette.background.paper}