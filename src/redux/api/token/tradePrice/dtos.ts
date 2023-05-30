export interface GetTradePriceRankDto {
  unit: number
  korean_name?: string
  english_name?: string
  market: string
  datetime: Date
  priceDiff: bigint
  priceDiffRate: number
  priceDiffRank: number
  priceDiffRateRank: number
  prevPriceDiffRank: number | null
  prevPriceDiffRateRank: number | null
  prevDayPriceDiffRank: number | null
  prevDayPriceDiffRateRank: number | null
}
