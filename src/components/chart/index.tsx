import { useRef, useState } from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { currentRadioOption } from '../../redux/radioOption/radioOptionSlice'
import BarChart from './barChart'
import ScatterPlotChart from './scatterPlotChart'
import LineChart from './lineChart'
import {
  GetTokenPriceRankDto,
  GetTokenVolumeRankDto,
} from '../../redux/api/token/chart/dtos'
import { ScaleBand, ScaleLinear, ScaleTime } from 'd3'
import useScale from './useScale'
import useResize from '../../hooks/useResize'

export type XScaleBand = ScaleTime<number, number, never>
export type XScaleTime = ScaleTime<number, number, never>
export type YScale = ScaleLinear<number, number, never>

export interface ChartProps {
  volumeData: GetTokenVolumeRankDto[]
  priceData: GetTokenPriceRankDto[]
  volumeDataLoading?: boolean
  priceDataLoading?: boolean
  volumeDataSuccess?: boolean
  priceDataSuccess?: boolean
}

export default function Chart({
  volumeData,
  priceData,
  volumeDataLoading,
  priceDataLoading,
  volumeDataSuccess,
  priceDataSuccess }: ChartProps) {

  const type = useSelector(currentRadioOption)
  const ref = useRef<HTMLDivElement>(null)

  const { width } = useResize(ref)
  const height = 420
  const marginTop = 20
  const marginBottom = 120
  const marginBottom2 = marginBottom * 2
  const marginLeft = 80
  const marginRight = 20
  
  const innerWidth = width! - marginLeft - marginRight
  const lineChartInnerHeight = height - marginTop - marginBottom
  const barChartInnerHeight = height - marginTop - marginBottom2

  const {
    xScaleVolumeSum,
    xScaleVolumeRank,
    xScalePriceSum,
    xScalePriceRank,
    yScaleVolumeSum,
    yScalePriceSum,
    yScaleVolumeSumRank,
    yScaleVolumeDiffRateRank,
    yScalePriceSumRank,
    yScalePriceDiffRank,
    yScalePriceDiffRateRank,
  } = useScale(volumeData, priceData, innerWidth, barChartInnerHeight, lineChartInnerHeight)
  console.log(priceData)
  return (
    <Wrapper ref={ref}>
      <RankChartWrapper>
        {(volumeDataSuccess || priceDataSuccess) && 
        <svg width="100%" height={height} viewBox={`0 0 ${width} ${height}`}>
          <g className='g-main' transform={`translate(${marginLeft}, ${marginTop})`}>
            <ScatterPlotChart
              type={type}
              innerWidth={innerWidth}
              innerHeight={lineChartInnerHeight}
              volumeData={volumeData}
              priceData={priceData}
              xScaleVolumeRank={xScaleVolumeRank}
              xScalePriceRank={xScalePriceRank}
              yScaleVolumeSumRank={yScaleVolumeSumRank}
              yScaleVolumeDiffRateRank={yScaleVolumeDiffRateRank}
              yScalePriceSumRank={yScalePriceSumRank}
              yScalePriceDiffRank={yScalePriceDiffRank}
              yScalePriceDiffRateRank={yScalePriceDiffRateRank}
            />
            <LineChart
              type={type}
              innerWidth={innerWidth}
              innerHeight={lineChartInnerHeight}
              volumeData={volumeData}
              priceData={priceData}
              xScaleVolumeRank={xScaleVolumeRank}
              xScalePriceRank={xScalePriceRank}
              yScaleVolumeSumRank={yScaleVolumeSumRank}
              yScaleVolumeDiffRateRank={yScaleVolumeDiffRateRank}
              yScalePriceSumRank={yScalePriceSumRank}
              yScalePriceDiffRank={yScalePriceDiffRank}
              yScalePriceDiffRateRank={yScalePriceDiffRateRank}
            />
          </g>
        </svg>}
      </RankChartWrapper>
      <SumChartWrapper>
        {(volumeDataSuccess || priceDataSuccess) && 
        <svg width='100%' height={height / 1.6} viewBox={`0 0 ${width} ${height / 1.6}`}>
          <g className='g-main' transform={`translate(${marginLeft}, ${marginTop})`}>
            <BarChart
              type={type}
              innerWidth={innerWidth}
              innerHeight={barChartInnerHeight}
              volumeData={volumeData}
              priceData={priceData}
              xScaleVolumeSum={xScaleVolumeSum}
              xScalePriceSum={xScalePriceSum}
              yScaleVolumeSum={yScaleVolumeSum}
              yScalePriceSum={yScalePriceSum}
            />
          </g>
        </svg>}
      </SumChartWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  svg {
    max-width: 100%;
  }
`
const RankChartWrapper = styled.div`
  width: 100%;
  margin-bottom: 30px;

  .svg-path {
    fill: none;
    stroke-width: 3;
  }
  .svg-circle {
    r: 3;
  }
  .sum-rank {
    stroke: red;
  }
  .sum-rank.svg-circle {
    fill: red;
  }
  .diff-rank {
    stroke: yellow;
  }
  .diff-rank.svg-circle {
    fill: yellow;
  }
  .diff-rate-rank {
    stroke: green;
  }
  .diff-rate-rank.svg-circle {
    fill: green;
  }
`
const SumChartWrapper = styled.div`
  width: 100%;
`
