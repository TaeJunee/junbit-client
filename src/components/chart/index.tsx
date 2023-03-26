import { Suspense, lazy, useRef } from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { currentRadioOption } from '../../redux/controlPanel/radioOption/radioOptionSlice'
import {
  GetTokenPriceRankDto,
  GetTokenVolumeRankDto,
} from '../../redux/api/token/chart/dtos'
import { ScaleBand, ScaleLinear, ScaleTime } from 'd3'
import useScale from './useScale'
import useResize from '../../hooks/useResize'
import theme from '../../style/theme'
import { legendItems } from '../../infra/chart/legend'
const BarChart = lazy(() => import('./barChart'))
const ScatterPlotChart = lazy(() => import('./scatterPlotChart'))
const LineChart = lazy(() => import('./lineChart'))
const Legend = lazy(() => import('./legend/Legend'))

export type XScaleBand = ScaleBand<string>
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
const marginRight = 40
const lineChartInnerHeight = height - marginTop - marginBottom
const barChartInnerHeight = height - marginTop - marginBottom2
const radius = 2.5
const radiusHidden = 12
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
  const { width } = useResize(ref)
  const innerWidth = width! - marginLeft - marginRight

  const {
    xScaleVolumeSum,
    xScaleVolumeRank,
    xScalePriceSum,
    xScalePriceRank,
    yScaleVolumeSum,
    yScalePriceSum,
    yScaleVolumeDiffRate,
    yScalePriceDiff,
    yScalePriceDiffRate,
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
      <Suspense fallback={<div>로딩 중 ...</div>}>
        {width && (
          <>
            <RankChartWrapper>
              {(volumeDataSuccess || priceDataSuccess) && (
                <svg
                  width="100%"
                  height={height}
                  viewBox={`0 0 ${width} ${height}`}
                >
                  <g
                    className="g-main"
                    transform={`translate(${marginLeft}, ${marginTop})`}
                  >
                    <Legend
                      type={type}
                      legendItems={legendItems.line}
                      innerWidth={innerWidth}
                    />
                    <LineChart
                      type={type}
                      subType="RANK"
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
                    <ScatterPlotChart
                      type={type}
                      subType="RANK"
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
                      radius={radius}
                      radiusHidden={radiusHidden}
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
                    />
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
                    <LineChart
                      type={type}
                      subType="NOT_RANK"
                      innerWidth={innerWidth}
                      innerHeight={lineChartInnerHeight}
                      volumeData={volumeData}
                      priceData={priceData}
                      xScaleVolumeRank={xScaleVolumeRank}
                      xScalePriceRank={xScalePriceRank}
                      yScaleVolumeDiffRate={yScaleVolumeDiffRate}
                      yScalePriceDiff={yScalePriceDiff}
                      yScalePriceDiffRate={yScalePriceDiffRate}
                    />
                    <ScatterPlotChart
                      type={type}
                      subType="NOT_RANK"
                      volumeData={volumeData}
                      priceData={priceData}
                      xScaleVolumeRank={xScaleVolumeRank}
                      xScalePriceRank={xScalePriceRank}
                      yScaleVolumeDiffRate={yScaleVolumeDiffRate}
                      yScalePriceDiff={yScalePriceDiff}
                      yScalePriceDiffRate={yScalePriceDiffRate}
                      radius={radius}
                      radiusHidden={radiusHidden}
                    />
                  </g>
                </svg>
              )}
            </SumChartWrapper>
          </>
        )}
      </Suspense>
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
    &:hover ~ .tooltip {
      display: block;
    }
  }
  .svg-rect {
    &:hover .tooltip {
      display: block;
    }
  }
  .tooltip {
    display: none;
    &:hover {
      display: block;
    }
    .tooltip-box:last-child {
      x: -20;
    }
  }
`
const RankChartWrapper = styled.div`
  width: 100%;
  margin-bottom: 30px;

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
  .diff-rate {
    stroke: ${theme.colors.green};
  }
  .diff-rate.svg-circle {
    fill: ${theme.colors.green};
  }
  .diff {
    stroke: ${theme.colors.blue};
  }
  .diff.svg-circle {
    fill: ${theme.colors.blue};
  }
`
