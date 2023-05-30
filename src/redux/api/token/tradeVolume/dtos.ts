export interface GetTradeVolumeRankDto {
  unit: number
  korean_name?: string
  english_name?: string
  market: string
  datetime: Date
  volumeDiff: bigint
  volumeDiffRate: number
  volumeDiffRateRank: number
  prevVolumeDiffRank: number | null
  prevVolumeDiffRateRank: number | null
  prevDayVolumeDiffRank: number | null
  prevDayVolumeDiffRateRank: number | null
}
