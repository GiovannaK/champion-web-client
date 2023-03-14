import { Paper } from "@mui/material";
import { styled } from "@mui/system";

export const PaperStyled = styled(Paper)`
  /* background: linear-gradient(to right, #16222a, #3a6073); 
  background: -webkit-linear-gradient(to right, #16222a, #3a6073);  */
  background: #0F2027;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #203A43, #203A43, #0F2027);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #203A43, #203A43, #0F2027); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  min-height: 100vh;
  min-width: 100%;
  z-index: -2;
  position: absolute;
`;

// ${(props) => props.theme.palette.background.paper}