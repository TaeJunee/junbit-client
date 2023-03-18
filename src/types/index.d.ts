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
  datetime: Date
  diffRateRank: number
  market: string
  prevDayDiffRateRank: number | null
  prevDiffRateRank: number | null
  volumeDiff: number
  volumeDiffRate: number
}
interface TradePriceRankDto {
  datetime: Date
  diffRank: number
  diffRateRank: number
  market: string
  prevDiffRank: number | null
  prevDayDiffRank: number | null
  prevDayDiffRateRank: number | null
  prevDiffRateRank: number | null
  priceDiff: number
  priceDiffRate: number
}
interface TokenData {
  [key: string]: {
    kr_name: string
    en_name: string
  }
}
