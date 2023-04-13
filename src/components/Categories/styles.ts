import { styled } from "@lib/styled";
export const Image = styled('img')`
  width: 100%; 
  min-height: 100%;
  opacity: 0.55;
  transition: 0.3s ease-in-out;
  cursor: pointer;
  &:hover {
    opacity: 2;
    transform: scale(1.02);
  }
`