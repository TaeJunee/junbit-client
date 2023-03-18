import { useCallback, useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import VolumeTable from '../../components/table/TradeVolumeTable'
import PriceTable from '../../components/table/TradePriceTable'
import ControlPanel from '../../components/controlPanel'
import useFetchData from './useFetchData'
import theme from '../../style/theme'

export default function MainPage() {
  const tableWrapperRef = useRef<HTMLDivElement>(null)
  const [width, setWidth] = useState<number | undefined>(
    tableWrapperRef.current?.offsetWidth,
  )

  const {
    datetime,
    unit,
    radioOption,
    radioPriceOption,
    resetDatetime,
    volumeData,
    isVolumeDataLoading,
    prevVolumeData,
    isPrevVolumeDataLoading,
    priceData,
    isPriceDataLoading,
    prevPriceData,
    isPrevPriceDataLoading,
  } = useFetchData()

  const setOffsetWidth = useCallback(() => {
    setWidth(tableWrapperRef.current?.offsetWidth)
  }, [tableWrapperRef])

  useEffect(() => {
    window.addEventListener('resize', () => {
      setOffsetWidth()
    })
    return () => {
      window.removeEventListener('resize', () => {
        setOffsetWidth()
      })
    }
  }, [setOffsetWidth])

  useEffect(() => {
    setOffsetWidth()
  }, [setOffsetWidth])

  return (
    <Wrapper>
      <ControlPanel />
      <TableWrapper className="wrapper-table" ref={tableWrapperRef}>
        <div className="wrapper-inner">
          <TableLabel>
            <span>
              {`${new Date(datetime).toLocaleString()}: ${unit.value}시간 단위`}
            </span>
          </TableLabel>
          {radioOption === 'VOLUME' && <VolumeTable data={volumeData} />}
          {radioOption === 'PRICE' && <PriceTable type={radioPriceOption} data={priceData} />}
        </div>
        {typeof width === 'number' && width > 1200 && (
          <div className="wrapper-inner">
            <TableLabel>
              <span>
                {`${new Date(
                  resetDatetime(datetime, unit.value),
                ).toLocaleString()}: ${unit.value}시간 단위`}
              </span>
            </TableLabel>
            {radioOption === 'VOLUME' && <VolumeTable data={prevVolumeData} />}
            {radioOption === 'PRICE' && <PriceTable type={radioPriceOption} data={prevPriceData} />}
          </div>
        )}
      </TableWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
  height: calc(100% - 80px);
  display: flex;

  .wrapper-inner {
    width: 100%;
  }
`
const TableWrapper = styled.div`
  width: 100%;
  height: calc(100% - 36px);
  padding: 20px;
  display: flex;
  gap: 20px;
`
const TableLabel = styled.div`
  padding-bottom: 20px;
  text-align: end;
  span {
    font-weight: bold;
  }
`
