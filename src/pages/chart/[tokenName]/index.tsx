import styled from 'styled-components'
import ControlPanel from '../../../components/controlPanel'
import useFetchData from './useFetchData'
import Chart from '../../../components/chart'

export default function ChartPage() {
  const {
    volumeData,
    priceData,
    volumeDataLoading,
    priceDataLoading,
    volumeDataSuccess,
    priceDataSuccess
  } = useFetchData()

  return (
    <Wrapper>
      <ControlPanel />
      <ChartContainer>
        <Chart
          volumeData={volumeData ?? []}
          priceData={priceData ?? []}
          volumeDataLoading={volumeDataLoading}
          priceDataLoading={priceDataLoading}
          volumeDataSuccess={volumeDataSuccess}
          priceDataSuccess={priceDataSuccess}
        />
      </ChartContainer>
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
const ChartContainer = styled.div`
  width: 100%;
  height: calc(100% - 36px);
  padding: 30px;
  gap: 20px;
`
