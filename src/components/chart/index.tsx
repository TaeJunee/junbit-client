import { useMemo, useRef } from "react"
import styled from "styled-components"
import { useSelector } from "react-redux"
import { currentRadioOption } from "../../redux/radioOption/radioOptionSlice"
import BarChart from "./barChart"
import ScatterPlotChart from "./scatterPlotChart"
import LineChart from "./lineChart"
import { GetTokenPriceRankDto, GetTokenVolumeRankDto } from "../../redux/api/token/chart/dtos"
import { ScaleBand, ScaleLinear, max, min, scaleBand, scaleLinear } from "d3"
import useScale from "./useScale"
import useResize from "../../hooks/useResize"

export type XScale = ScaleBand<string>
export type YScale = ScaleLinear<number, number, never>

export interface ChartProps {
  volumeData: GetTokenVolumeRankDto[]
  priceData: GetTokenPriceRankDto[]
}

export default function Chart({ volumeData, priceData }: ChartProps) {
  const type = useSelector(currentRadioOption)
  const ref = useRef<HTMLDivElement>(null)
  const { width } = useResize(ref) ?? 1540
  const height = 680
  const margin = { top: 20, right: 40, bottom: 20, left: 20 }
  const innerWidth = useMemo(() => width! - margin.left - margin.right, [width, margin.left, margin.right])
  const innerHeight = useMemo(() => height! - margin.top - margin.bottom, [height, margin.top, margin.bottom])
  const {
    xScaleVolumeSum,
    yScaleVolumeSum,
    xScalePriceSum,
    yScalePriceSum,
    yScaleVolumeSumRank,
    yScaleVolumeDiffRateRank,
    yScalePriceSumRank,
    yScalePriceDiffRank,
    yScalePriceDiffRateRank
  } = useScale(volumeData, priceData, innerWidth, innerHeight)
  
  return (
    <>
      <RankChartWrapper ref={ref}>
        <svg>
          <g>
            <LineChart
              type={type}
              innerHeight={innerHeight}
              volumeData={volumeData}
              priceData={priceData}
              xScaleVolumeSum={xScaleVolumeSum}
              yScaleVolumeSumRank={yScaleVolumeSumRank}
              yScaleVolumeDiffRateRank={yScaleVolumeDiffRateRank}
              xScalePriceSum={xScalePriceSum}
              yScalePriceSumRank={yScalePriceSumRank}
              yScalePriceDiffRank={yScalePriceDiffRank}
              yScalePriceDiffRateRank={yScalePriceDiffRateRank}
            />
            <ScatterPlotChart
              type={type}
              innerHeight={innerHeight}
              volumeData={volumeData}
              priceData={priceData}
              xScaleVolumeSum={xScaleVolumeSum}
              yScaleVolumeSumRank={yScaleVolumeSumRank}
              yScaleVolumeDiffRateRank={yScaleVolumeDiffRateRank}
              xScalePriceSum={xScalePriceSum}
              yScalePriceSumRank={yScalePriceSumRank}
              yScalePriceDiffRank={yScalePriceDiffRank}
              yScalePriceDiffRateRank={yScalePriceDiffRateRank}
            />
          </g>
        </svg>
      </RankChartWrapper>
      <SumChartWrapper>
        <svg>
          <g>
            <BarChart
              type={type}
              innerHeight={innerHeight}
              volumeData={volumeData}
              priceData={priceData}
              xScaleVolumeSum={xScaleVolumeSum}
              yScaleVolumeSum={yScaleVolumeSum}
              xScalePriceSum={xScalePriceSum}
              yScalePriceSum={yScalePriceSum}
            />
          </g>
        </svg>
      </SumChartWrapper>
    </>

  )
}

const RankChartWrapper = styled.div`
  width: 100%;
  height: 40%;
  margin-bottom: 60px;

  svg {
    width: 100%;
    height: 100%;
  }

  .svg-path {
    fill: none;
    stroke-width: 3;
  }
  .svg-circle {
    r: 3
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
    fill: green
  }
`
const SumChartWrapper = styled.div`
  width: 100%;
  height: 30%;

  svg {
    width: 100%;
    height: 100%;
  }
`