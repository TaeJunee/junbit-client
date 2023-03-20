import { useRef } from 'react'
import styled from 'styled-components'
import VolumeTable from '../../components/table/TradeVolumeTable'
import PriceTable from '../../components/table/TradePriceTable'
import ControlPanel from '../../components/controlPanel'
import useFetchData from './useFetchData'
import useResize from '../../hooks/useResize'

export default function MainPage() {
  const tableContainerRef = useRef<HTMLDivElement>(null)
  const { width } = useResize(tableContainerRef)

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

  return (
    <Wrapper>
      <ControlPanel />
      <TableContainer className="wrapper-table" ref={tableContainerRef}>
        <div className="wrapper-inner">
          <TimeInfo>
            <span>
              {`${new Date(datetime).toLocaleString()}: ${unit.value}시간 단위`}
            </span>
          </TimeInfo>
          {radioOption === 'VOLUME' && <VolumeTable data={volumeData} />}
          {radioOption === 'PRICE' && (
            <PriceTable type={radioPriceOption} data={priceData} />
          )}
        </div>
        {typeof width === 'number' && width > 1200 && (
          <div className="wrapper-inner">
            <TimeInfo>
              <span>
                {`${new Date(
                  resetDatetime(datetime, unit.value),
                ).toLocaleString()}: ${unit.value}시간 단위`}
              </span>
            </TimeInfo>
            {radioOption === 'VOLUME' && <VolumeTable data={prevVolumeData} />}
            {radioOption === 'PRICE' && (
              <PriceTable type={radioPriceOption} data={prevPriceData} />
            )}
          </div>
        )}
      </TableContainer>
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
const TableContainer = styled.div`
  width: 100%;
  height: calc(100% - 36px);
  padding: 30px;
  display: flex;
  gap: 20px;
`
const TimeInfo = styled.div`
  padding-bottom: 20px;
  text-align: end;
  span {
    font-weight: bold;
  }
`
