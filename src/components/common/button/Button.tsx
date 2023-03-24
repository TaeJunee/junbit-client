import { MouseEventHandler, PropsWithChildren } from 'react'
import styled, { css } from 'styled-components'
import theme from '../../../style/theme'

type ButtonType = 'FILLED' | 'OUTLINE' | null
interface ButtonProps extends PropsWithChildren {
  buttonType?: ButtonType
  className?: string
  onClick: MouseEventHandler
}

const Button = (props: ButtonProps) => {
  return (
    <Wrapper
      buttonType={props.buttonType || null}
      className={props.className}
      onClick={props.onClick}
    >
      <button>{props.children}</button>
    </Wrapper>
  )
}

export default Button

const Wrapper = styled.div<{ buttonType: ButtonType }>`
  ${props =>
    props.buttonType === 'FILLED'
      ? css`
          background: ${theme.colors.red};
        `
      : css`
          background: white;
          border: 1px solid ${theme.colors.grey40};
        `};

  button {
    width: 100%;
    height: 100%;
    background: none;
    color: ${props =>
      props.buttonType === 'OUTLINE' ? theme.colors.grey90 : 'white'};
    border: none;
  }
`
