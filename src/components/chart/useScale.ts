import { max, min, scaleBand, scaleLinear } from 'd3'
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
  const xScaleVolumeDomain = volumeData.map(d => d.datetime).reverse()
  const xScalePriceDomain = priceData.map(d => d.datetime).reverse()
  const xScaleVolumeSum = scaleBand()
    .domain(xScaleVolumeDomain)
    .range([0, innerWidth])
    .padding(0.2)
  const xScaleVolumeRank = scaleBand()
    .domain(xScaleVolumeDomain)
    .range([0, innerWidth])
    .padding(0.2)
  const xScalePriceSum = scaleBand()
    .domain(xScalePriceDomain)
    .range([0, innerWidth])
    .padding(0.2)
  const xScalePriceRank = scaleBand()
    .domain(xScalePriceDomain)
    .range([0, innerWidth])
    .padding(0.2)
  const yScaleVolumeSum = scaleLinear()
    .domain([0, max(volumeData, d => d.volumeSum) as number])
    .range([barChartInnerHeight, 0])
    .nice()
  const yScalePriceSum = scaleLinear()
    .domain([0, max(priceData, d => d.priceSum) as number])
    .range([barChartInnerHeight, 0])
    .nice()
  const yScaleVolumeDiffRate = scaleLinear()
    .domain([
      min(volumeData, d => d.volumeDiffRate * 100) as number,
      max(volumeData, d => d.volumeDiffRate * 100) as number,
    ])
    .range([barChartInnerHeight, 0])
    .nice()
  const yScalePriceDiff = scaleLinear()
    .domain([
      min(priceData, d => d.priceDiff) as number,
      max(priceData, d => d.priceDiff) as number,
    ])
    .range([barChartInnerHeight, 0])
    .nice()
  const yScalePriceDiffRate = scaleLinear()
    .domain([
      min(priceData, d => d.priceDiffRate * 100) as number,
      max(priceData, d => d.priceDiffRate * 100) as number,
    ])
    .range([barChartInnerHeight, 0])
    .nice()
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
    yScaleVolumeDiffRate,
    yScalePriceDiff,
    yScalePriceDiffRate,
    yScaleVolumeSumRank,
    yScaleVolumeDiffRateRank,
    yScalePriceSumRank,
    yScalePriceDiffRank,
    yScalePriceDiffRateRank,
  }
}
