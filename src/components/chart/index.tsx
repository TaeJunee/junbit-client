import { useRef, useState } from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { currentRadioOption } from '../../redux/table/radioOption/radioOptionSlice'
import BarChart from './barChart'
import ScatterPlotChart from './scatterPlotChart'
import LineChart from './lineChart'
import Legend from './legend/Legend'
import {
  GetTokenPriceRankDto,
  GetTokenVolumeRankDto,
} from '../../redux/api/token/chart/dtos'
import { ScaleLinear, ScaleTime } from 'd3'
import useScale from './useScale'
import useResize from '../../hooks/useResize'
import theme from '../../style/theme'
import { legendItems } from '../../infra/chart/legend'
import ToolTip from './tolltip/ToolTip'
import {
  currentlyBarHoverOn,
  currentlyCirCleHoverOn,
  currentlyHoverOn,
} from '../../redux/chart/hoverSlice'

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

const height = 420
const marginTop = 20
const marginBottom = 120
const marginBottom2 = marginBottom * 2
const marginLeft = 80
const marginRight = 20
const lineChartInnerHeight = height - marginTop - marginBottom
const barChartInnerHeight = height - marginTop - marginBottom2

export default function Chart({
  volumeData,
  priceData,
  volumeDataLoading,
  priceDataLoading,
  volumeDataSuccess,
  priceDataSuccess,
}: ChartProps) {
  const type: RadioOptionType = useSelector(currentRadioOption)
  const ref = useRef<HTMLDivElement>(null)
  const [hoveredValue, setHoveredValue] = useState(null)
  const { width } = useResize(ref)
  const innerWidth = width! - marginLeft - marginRight
  const hoveredItem = useSelector(currentlyHoverOn)

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
  } = useScale(
    volumeData,
    priceData,
    innerWidth,
    barChartInnerHeight,
    lineChartInnerHeight
  )

  return (
    <Wrapper ref={ref}>
      <RankChartWrapper>
        {(volumeDataSuccess || priceDataSuccess) && (
          <svg width="100%" height={height} viewBox={`0 0 ${width} ${height}`}>
            <g
              className="g-main"
              transform={`translate(${marginLeft}, ${marginTop})`}
            >
              <Legend
                type={type}
                legendItems={legendItems.line}
                innerWidth={innerWidth}
                onHover={setHoveredValue}
              />
              <ScatterPlotChart
                type={type}
                hoveredValue={hoveredItem}
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
                hoveredValue={hoveredItem}
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
              <ToolTip
                type={type}
                data={type === 'VOLUME' ? volumeData : priceData}
                xScaleVolumeRank={xScaleVolumeRank}
                xScalePriceRank={xScalePriceRank}
                yScaleVolumeSumRank={yScaleVolumeSumRank}
                yScaleVolumeDiffRateRank={yScaleVolumeDiffRateRank}
                yScalePriceSumRank={yScalePriceSumRank}
                yScalePriceDiffRank={yScalePriceDiffRank}
                yScalePriceDiffRateRank={yScalePriceDiffRateRank}
              />
            </g>
          </svg>
        )}
      </RankChartWrapper>
      <SumChartWrapper>
        {(volumeDataSuccess || priceDataSuccess) && (
          <svg
            width="100%"
            height={height / 1.6}
            viewBox={`0 0 ${width} ${height / 1.6}`}
          >
            <g
              className="g-main"
              transform={`translate(${marginLeft}, ${marginTop})`}
            >
              <Legend
                type={type}
                legendItems={legendItems.sum}
                innerWidth={innerWidth}
                onHover={hoveredValue => console.log(hoveredValue)}
              />
              <BarChart
                type={type}
                hoveredValue={hoveredValue}
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
          </svg>
        )}
      </SumChartWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  svg {
    max-width: 100%;
    text {
      cursor: default;
    }
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
    r: 2.5;
  }
  .svg-circle-hidden {
    opacity: 0;
    r: 12;
  }
  .sum-rank {
    stroke: ${theme.colors.tomato};
  }
  .sum-rank.svg-circle {
    fill: ${theme.colors.tomato};
  }
  .diff-rank {
    stroke: ${theme.colors.blue};
  }
  .diff-rank.svg-circle {
    fill: ${theme.colors.blue};
  }
  .diff-rate-rank {
    stroke: ${theme.colors.green};
  }
  .diff-rate-rank.svg-circle {
    fill: ${theme.colors.green};
  }
`
const SumChartWrapper = styled.div`
  width: 100%;
`
