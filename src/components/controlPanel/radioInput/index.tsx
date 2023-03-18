import styled, { css } from 'styled-components'
import theme from '../../../style/theme'
import { useDispatch, useSelector } from 'react-redux'
import {
  currentRadioOption,
  setRadioOption,
  currentRadioPriceOption,
  setRadioPriceOption,
} from '../../../redux/radioOption/radioOptionSlice'

export default function RadioInput() {
  const dispatch = useDispatch()
  const radioOption = useSelector(currentRadioOption)
  const radioPriceOption = useSelector(currentRadioPriceOption)
  return (
    <Wrapper>
      <span className="control-panel__title">거래량 선택</span>
      <div className="control-panel__radio-wrapper">
        <MainLabel
          htmlFor="trade-volume"
          className='label label-main'
          checked={radioOption === 'VOLUME'}
          onClick={() => dispatch(setRadioOption('VOLUME'))}
        >
          <input id="trade-volume" type="radio" value="VOLUME" />
          <span className="radio-selector radio-selector-main">
            <div></div>
          </span>
          <span className="radio-text">거래량(수량)</span>
        </MainLabel>
        <MainLabel
          htmlFor="trade-price"
          className='label label-main'
          checked={radioOption === 'PRICE'}
          onClick={() => dispatch(setRadioOption('PRICE'))}
        >
          <input id="trade-price" type="radio" value="PRICE" />
          <span className="radio-selector radio-selector-main">
            <div></div>
          </span>
          <span className="radio-text">거래량(금액)</span>
        </MainLabel>
      </div>
      <div className='control-panel__select-detail'>
        <div
          className="control-panel__select-detail__inner-wrapper control-panel__select-detail__volume"
        >
          <div className="line"></div>
          <div>
            <SubLabel
              htmlFor="volume-diff-rate"
              className='label label-sub'
              checked
              active={radioOption === 'VOLUME'} 
            >
              <input id="volume-diff-rate" type="radio" value="DIFF_RATE" />
              <span className="radio-selector radio-selector-sub volume-diff-rate">
                <div></div>
              </span>
              <span className="radio-text radio-text-sub">변화율 보기</span>
            </SubLabel>
          </div>
        </div>
        <div
          className="control-panel__select-detail__inner-wrapper control-panel__select-detail__price"

        >
          <div className="line"></div>
          <div>
            <SubLabel
              htmlFor="price-diff"
              className='label label-sub'
              checked={radioPriceOption === 'DIFF'}
              active={radioOption === 'PRICE'}
              onClick={() => radioOption === 'PRICE' && dispatch(setRadioPriceOption('DIFF'))}
            >
              <input id="price-diff" type="radio" value="DIFF" />
              <span className="radio-selector radio-selector-sub price-diff">
                <div></div>
              </span>
              <span className="radio-text radio-text-sub">변화량 보기</span>
            </SubLabel>
            <SubLabel
              htmlFor="price-diff-rate"
              className='label label-sub'
              checked={radioPriceOption === 'DIFF_RATE'}
              active={radioOption === 'PRICE'}
              onClick={() => radioOption === 'PRICE' && dispatch(setRadioPriceOption('DIFF_RATE'))}
            >
              <input id="price-diff-rate" type="radio" value="DIFF_RATE" />
              <span className="radio-selector radio-selector-sub price-diff-rate">
                <div></div>
                </span>
              <span className="radio-text radio-text-sub">변화율 보기</span>
            </SubLabel>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  padding: 30px 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
  border-bottom: 1px solid ${theme.colors.grey20};

  .control-panel__radio-wrapper {
    display: flex;
    justify-content: space-between;
  }
  .control-panel__select-detail {
    display: flex;
    justify-content: flex-end;
    gap: 64px;
  }
  .label {
    position: relative;
    display: flex;
    align-items: center;
    
    input {
      display: none;
      position: absolute;
    }
    .radio-text {
      position: relative;
    }
    .radio-selector {
      display: inline-block;
      position: relative;
      border-radius: 50%;
    }
  }
  .control-panel__select-detail__inner-wrapper {
    width: 115px;
    align-self: flex-end;
    display: flex;
    justify-content: flex-end;
    gap: 8px;
  
    label:first-child {
      margin-bottom: 10px;
    }
    .line {
      width: 1px;
      height: 42px;
      background-color: ${theme.colors.grey30};
    }
  }
`
const MainLabel = styled.label<{ checked: boolean }>`
  cursor: pointer;
  gap: 12px;
  .radio-text-main {
    font-size: 16px;
  }
  .radio-selector-main {
    min-width: 20px;
    min-height: 20px;
    border: ${(props) =>
      props.checked ? null : `0.5px solid ${theme.colors.grey30}`};
    background-color: ${(props) => (props.checked ? theme.colors.red : 'white')};

    div {
      width: 10px;
      height: 10px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      border-radius: 50%;
      background-color: ${(props) => (props.checked ? 'white' : null)};
    }
  }
`
const SubLabel = styled.label<{ checked: boolean, active: boolean }>`
  cursor: ${props => props.active ? 'pointer' : 'default'};
  gap: 8px;

  .radio-selector-sub {
    min-width: 16px;
    min-height: 16px;
    border: ${(props) =>
      props.checked ? null : `0.5px solid ${theme.colors.grey30}`};
    background-color: ${(props) => (props.checked && props.active ? theme.colors.red : props.checked ? theme.colors.grey30: 'white')};
    
    div {
      width: 8px;
      height: 8px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      border-radius: 50%;
      background-color: white;
    }
  }
  .radio-text-sub {
    color: ${props => props.active ? '' : theme.colors.grey30};
    font-size: 14px;
  }
`