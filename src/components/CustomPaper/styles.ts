import { Paper } from "@mui/material";
import { styled } from "@lib/styled";

export const PaperStyled = styled(Paper)`
  /* background: #0F2027;  /* fallback for old browsers */
  /* background: -webkit-linear-gradient(to right, #203A43, #203A43, #0F2027);  Chrome 10-25, Safari 5.1-6 */ 
  background: ${(props) => props.theme.palette.background.default};
  min-height: 100vh;
  min-width: 100%;
  z-index: -2;
  position: absolute;
`;
