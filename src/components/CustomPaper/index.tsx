import React from 'react'
import * as S from './styles'

export const PaperComponent = ({children}: any) => {
  return (
    <S.PaperStyled square elevation={0}>
      {children}
    </S.PaperStyled>
  )
}