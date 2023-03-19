export interface GetTradeVolumeRankDto {
  unit: number
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
