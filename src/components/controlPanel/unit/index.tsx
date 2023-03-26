import styled from 'styled-components'
import theme from '../../../style/theme'
import useUnit from './useUnit'
import { unitOptions } from '../../../infra/controlPanel/options'
import SelectInput from '../../common/input/SelectInput'

export default function Unit() {
  const {
    unit,
    isOpenUnitOption,
    unitOptionRef,
    handleSetUnit,
    handleToggleUnitOption,
  } = useUnit()

  return (
    <Wrapper>
      <span className="control-panel__title">단위시간 선택</span>
      <SelectInput
        ref={unitOptionRef}
        type="UNIT"
        isOpen={isOpenUnitOption}
        defaultText={unit.displayText}
        optionList={unitOptions}
        onClick={handleToggleUnitOption}
        onClickSet={handleSetUnit}
      />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
  padding: 30px 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
  border-bottom: 1px solid ${theme.colors.grey20};
`
