import styled from 'styled-components'
import theme from '../../style/theme'
import icArrowLeft from '../../assets/icons/arrow-left.svg'
import icArrowRight from '../../assets/icons/arrow-right.svg'
import useControlPanelViewModel from './useControlPanel'
import RadioInput from './radioInput'
import Datetime from './datetime'
import Unit from './unit'

const ControlPanel = () => {
  const { openPanel, handleTogglePanel, handleClickApplyOption } =
    useControlPanelViewModel()

  return (
    <Wrapper isOpen={openPanel}>
      <TogglePanelButton onClick={handleTogglePanel}>
        <img
          src={openPanel ? icArrowLeft : icArrowRight}
          alt={openPanel ? '닫기' : '열기'}
        />
      </TogglePanelButton>
      <ControllerWrapper isOpen={openPanel}>
        <RadioInput />
        <Datetime />
        <Unit />
        <ApplyButtonWrapper>
          <button onClick={handleClickApplyOption}>적용하기</button>
        </ApplyButtonWrapper>
      </ControllerWrapper>
    </Wrapper>
  )
}

export default ControlPanel

const Wrapper = styled.div<{ isOpen: boolean }>`
  position: relative;
  width: ${(props) => (props.isOpen ? '360px' : '0px')};
  height: 100%;
  background: white;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease-in-out;
  flex-shrink: 0;
`
const TogglePanelButton = styled.div`
  position: absolute;
  top: 5px;
  right: -40px;
  width: 40px;
  height: 40px;
  padding: 12px;
  background-color: white;
  border: 1px solid ${theme.colors.grey40};
  border-radius: 0 12px 12px 0;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
  }
`
const ControllerWrapper = styled.div<{ isOpen: boolean }>`
  padding: 0 30px;
  display: ${(props) => (props.isOpen ? 'flex' : 'none')};
  flex-direction: column;

  .ic-arrow {
    width: 16px;
    height: 16px;
  }
  .control-panel__title {
    font-size: 16px;
    font-weight: bold;
  }
  .control-panel__option-wrapper {
    height: 100%;
    padding: 0 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .control-panel__option-text {
    font-size: 14px;
  }
  .control-panel__option-ul {
    width: 100%;
    height: 210px;
    position: absolute;
    top: 50px;
    z-index: 10;
    background: white;
    border-radius: 0 0 8px 8px;
    overflow-y: scroll;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
    ${theme.options.scrollBar};
  }
  .control-panel__option-li {
    height: 42px;
    padding: 0 16px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid ${theme.colors.grey20};
    cursor: pointer;

    :hover {
      background: ${theme.colors.grey10};
    }
    span {
      width: 100%;
      font-size: 14px;
    }
  }
`

const ApplyButtonWrapper = styled.div`
  width: 100%;
  padding: 30px 0;

  button {
    width: 100%;
    height: 50px;
    font-size: 16px;
    font-weight: bold;
    color: white;
    background: ${theme.colors.red};
    border-radius: 8px;
  }
`
