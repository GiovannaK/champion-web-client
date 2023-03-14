import { Paper } from "@mui/material";
import { styled } from "@mui/system";
import {AppBar as MAppBar} from '@mui/material'

export const AppBar = styled(MAppBar)`
  background: transparent;
  border-bottom: 1px solid #626161;
`;

// ${(props) => props.theme.palette.background.paper}