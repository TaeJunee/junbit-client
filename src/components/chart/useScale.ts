import { max, min, scaleBand, scaleLinear, scaleTime } from 'd3'
import {
  GetTokenPriceRankDto,
  GetTokenVolumeRankDto,
} from '../../redux/api/token/chart/dtos'

export default function useScale(
  volumeData: GetTokenVolumeRankDto[],
  priceData: GetTokenPriceRankDto[],
  innerWidth: number,
  barChartInnerHeight: number,
  lineChartInnerHeight: number
) {
  const xScaleVolumeSum = scaleTime()
  .domain([
    min(volumeData, d => new Date(d.datetime)) as Date,
    max(volumeData, d => new Date(d.datetime)) as Date
  ])
  .range([0, innerWidth])
  .nice()

  const xScaleVolumeRank = scaleTime()
    .domain([
      min(volumeData, d => new Date(d.datetime)) as Date,
      max(volumeData, d => new Date(d.datetime)) as Date
    ])
    .range([0, innerWidth])
    .nice()
  const xScalePriceSum = scaleTime()
  .domain([
    min(priceData, d => new Date(d.datetime)) as Date,
    max(priceData, d => new Date(d.datetime)) as Date
  ])
  .range([0, innerWidth])
  .nice()

  const xScalePriceRank = scaleTime()
    .domain([
      min(priceData, d => new Date(d.datetime)) as Date,
      max(priceData, d => new Date(d.datetime)) as Date
    ])
    .range([0, innerWidth])
    .nice()
    
  const yScaleVolumeSum = scaleLinear()
    .domain([0, max(volumeData, (d) => d.volumeSum) as number])
    .range([barChartInnerHeight, 0])

  const yScalePriceSum = scaleLinear()
    .domain([0, max(priceData, (d) => d.priceSum) as number])
    .range([barChartInnerHeight, 0])

  const yScaleVolumeSumRank = scaleLinear()
    .domain([1, 115])
    .range([0, lineChartInnerHeight])

  const yScaleVolumeDiffRateRank = scaleLinear()
    .domain([1, 115])
    .range([0, lineChartInnerHeight])

  const yScalePriceSumRank = scaleLinear()
    .domain([1, 115])
    .range([0, lineChartInnerHeight])
  const yScalePriceDiffRank = scaleLinear()
    .domain([1, 115])
    .range([0, lineChartInnerHeight])
  const yScalePriceDiffRateRank = scaleLinear()
    .domain([1, 115])
    .range([0, lineChartInnerHeight])

  return {
    xScaleVolumeRank,
    xScaleVolumeSum,
    xScalePriceSum,
    xScalePriceRank,
    yScaleVolumeSum,
    yScalePriceSum,
    yScaleVolumeSumRank,
    yScaleVolumeDiffRateRank,
    yScalePriceSumRank,
    yScalePriceDiffRank,
    yScalePriceDiffRateRank,
  }
}
