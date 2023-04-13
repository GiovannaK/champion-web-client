import { Box as MuiBox} from '@mui/system'
import React from 'react'
import { styled } from "@lib/styled";

type ContainerProps = {
  children: React.ReactNode
  mb?: number
  mt?: number
  ml?: number
  mr?: number
  smMb?: number
  smMt?: number
  smMl?: number
  smMr?: number
  minHeight?: string
  maxHeight?: string
  smMinHeight?: string
  smMaxHeight?: string
}


export const Box = styled(MuiBox)<ContainerProps>`
  ${(props) => props.theme.breakpoints.up("md")} {
    margin-top: ${props => props.theme.spacing(props.mt || 0)};
    margin-bottom: ${props => props.theme.spacing(props.mb || 0)};
    margin-left: ${props => props.theme.spacing(props.ml || 0)};
    margin-right: ${props => props.theme.spacing(props.mr || 0)};
    min-height: ${props => props.minHeight || 'auto'};
    max-height: ${props => props.maxHeight || 'auto'};
  };
  ${(props) => props.theme.breakpoints.down("md")} {
    margin-top: ${props => props.theme.spacing(props.mt || 0)};
    margin-bottom: ${props => props.theme.spacing(props.mb || 0)};
    margin-left: ${props => props.theme.spacing(props.ml || 0)};
    margin-right: ${props => props.theme.spacing(props.mr || 0)};
    min-height: ${props => props.minHeight || 'auto'};
    max-height: ${props => props.maxHeight || 'auto'};
  };
  ${(props) => props.theme.breakpoints.down("sm")} {
    margin-top: ${props => props.theme.spacing(props.smMt || 0)};
    margin-bottom: ${props => props.theme.spacing(props.smMb || 0)};
    margin-left: ${props => props.theme.spacing(props.smMl || 0)};
    margin-right: ${props => props.theme.spacing(props.smMr || 0)};
    min-height: ${props => props.smMinHeight || 'auto'};
    max-height: ${props => props.smMaxHeight || 'auto'};
  };
`;



export const Container = (props: ContainerProps) => {
  return (
    <Box {...props}>
      {props.children}
    </Box>
  )
}
