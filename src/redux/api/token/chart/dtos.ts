export interface GetTokenVolumeRankDto {
  unit: number
  market: string
  datetime: string
  volumeSum: number
  volumeDiffRate: number
  volumeSumRank: number
  volumeDiffRateRank: number
}

export interface GetTokenPriceRankDto {
  unit: number
  market: string
  datetime: string
  priceSum: number
  priceDiff: number
  priceDiffRate: number
  priceSumRank: number
  priceDiffRank: number
  priceDiffRateRank: number
}
