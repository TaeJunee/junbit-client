import { max, min, scaleBand, scaleLinear } from "d3"
import { GetTokenPriceRankDto, GetTokenVolumeRankDto } from "../../redux/api/token/chart/dtos"

export default function useScale(volumeData: GetTokenVolumeRankDto[], priceData: GetTokenPriceRankDto[], innerWidth: number, innerHeight: number) {
  const xScaleVolumeSum = scaleBand()
    .domain(volumeData.map((d: GetTokenVolumeRankDto) => d.datetime))
    .range([0, innerWidth])
    .padding(0.2)

  const yScaleVolumeSum = scaleLinear()
    .domain([0, max(volumeData, d => d.volumeSum) as number])
    .range([innerHeight, 0])

  const xScalePriceSum = scaleBand()
    .domain(priceData.map((d: GetTokenPriceRankDto) => d.datetime))
    .range([0, innerWidth])
    .padding(0.2)

  const yScalePriceSum = scaleLinear()
    .domain([0, max(priceData, (d) => d.priceSum) as number])
    .range([innerHeight, 0])
  
    const yScaleVolumeSumRank = scaleLinear()
      .domain([
        min(volumeData as GetTokenVolumeRankDto[], d => d.volumeSumRank) as number,
        max(volumeData as GetTokenVolumeRankDto[], d => d.volumeSumRank) as number
      ])
      .range([innerHeight, 0])
      .nice()

    const yScaleVolumeDiffRateRank = scaleLinear()
      .domain([min(volumeData as GetTokenVolumeRankDto[], d => d.volumeDiffRateRank) as number, max(volumeData as GetTokenVolumeRankDto[], d => d.volumeDiffRateRank) as number])
      .range([innerHeight, 0])
      .nice()

    const yScalePriceSumRank = scaleLinear()
      .domain([min(priceData as GetTokenPriceRankDto[], d => d.priceSumRank) as number, max(priceData as GetTokenPriceRankDto[], d => d.priceSumRank) as number])
      .range([innerHeight, 0])
    const yScalePriceDiffRank = scaleLinear()
      .domain([min(priceData as GetTokenPriceRankDto[], d => d.priceDiffRank) as number, max(priceData as GetTokenPriceRankDto[], d => d.priceDiffRank) as number])
      .range([innerHeight, 0])
    const yScalePriceDiffRateRank = scaleLinear()
      .domain([min(priceData as GetTokenPriceRankDto[], d => d.priceDiffRateRank) as number, max(priceData as GetTokenPriceRankDto[], d => d.priceDiffRateRank) as number])
      .range([innerHeight, 0])
  
  return {
    xScaleVolumeSum,
    yScaleVolumeSum,
    xScalePriceSum,
    yScalePriceSum,
    yScaleVolumeSumRank,
    yScaleVolumeDiffRateRank,
    yScalePriceSumRank,
    yScalePriceDiffRank,
    yScalePriceDiffRateRank
  }
}