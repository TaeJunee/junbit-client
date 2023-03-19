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
declare type UnitType = 1 | 2 | 4 | 8 | 12 | 24
declare type RadioOptionType = 'VOLUME' | 'PRICE'
declare type PriceRankType = 'DIFF' | 'DIFF_RATE'
declare type ChartType = 'BAR' | 'SCATTER_PLOT' | 'LINE'
declare type RankOption = 'volumeSumRank' | 'volumeDiffRateRank' | 'priceSumRank' | 'priceDiffRank' | 'priceDiffRateRank'

declare module 'types' {
  interface TokenData {
    [key: string]: {
      kr_name: string
      en_name: string
    }
  }
}
