declare module '*.otf' {
  const value: any
  export = value
}

declare module '*.png' {
  const value: any
  export = value
}

declare module '*.svg' {
  const value: any
  export = value
}
type UnitType = 1 | 2 | 4 | 8 | 12 | 24
type RadioOptionType = 'VOLUME' | 'PRICE'
type PriceRankType = 'DIFF' | 'DIFF_RATE'
interface TradeVolumeRankDto {
  unit: number
  market: string
  datetime: Date
  volumeDiff: number
  volumeDiffRate: number
  volumeDiffRateRank: number
  prevVolumeDiffRank: number | null
  prevVolumeDiffRateRank: number | null
  prevDayVolumeDiffRank: number | null
  prevDayVolumeDiffRateRank: number | null
}
interface TradePriceRankDto {
  unit: number
  market: string
  datetime: Date
  priceDiff: number
  priceDiffRate: number
  priceDiffRank: number
  priceDiffRateRank: number
  prevPriceDiffRank: number | null
  prevPriceDiffRateRank: number | null
  prevDayPriceDiffRank: number | null
  prevDayPriceDiffRateRank: number | null
}
interface TokenData {
  [key: string]: {
    kr_name: string
    en_name: string
  }
}
