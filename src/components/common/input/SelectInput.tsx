import { forwardRef } from 'react'
import styled, { css } from 'styled-components'
import icArrowLeft from '../../../assets/icons/arrow-left.svg'
import theme from '../../../style/theme'

type SelectInputType = 'TIME' | 'UNIT'

interface SelectInputProps {
  type: SelectInputType
  className?: string
  isOpen: boolean
  defaultText: string
  optionList: {
    value: UnitType | number
    displayText: string
  }[]
  onClick: () => void
  onClickSet: (value: number | UnitType, displayText: string) => void
}

const SelectInput = forwardRef<HTMLDivElement, SelectInputProps>(
  (
    { className, type, isOpen, defaultText, optionList, onClick, onClickSet },
    ref
  ) => {
    return (
      <Wrapper
        className={className}
        type={type}
        ref={ref}
        isOpen={isOpen}
        onClick={onClick}
      >
        <div className="control-panel__option-wrapper">
          <span className="control-panel__option-text">{defaultText}</span>
          <img
            className="ic-arrow control-panel__unit-option"
            src={icArrowLeft}
            alt="더 보기"
          />
        </div>
        {isOpen && (
          <ul className="control-panel__option-ul">
            {optionList.map((value, index) => (
              <li
                key={index}
                className="control-panel__option-li"
                onClick={() => onClickSet(value.value, value.displayText)}
              >
                <span>{value.displayText}</span>
              </li>
            ))}
          </ul>
        )}
      </Wrapper>
    )
  }
)

export default SelectInput

const Wrapper = styled.div<{ type: string; isOpen: boolean }>`
  width: 100%;
  height: ${props => (props.type === 'TIME' ? '50%' : '50px')};
  ${props =>
    props.type === 'TIME'
      ? css``
      : css`
          border: 1px solid ${theme.colors.grey30};
          border-radius: 12px;
        `}
  position: relative;
  cursor: pointer;
  .control-panel__unit-option {
    transform: ${props => (props.isOpen ? 'rotate(90deg)' : 'rotate(-90deg)')};
  }
`
