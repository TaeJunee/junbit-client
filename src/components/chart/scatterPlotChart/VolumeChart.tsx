import { XScale, YScale } from ".."
import { GetTokenVolumeRankDto } from "../../../redux/api/token/chart/dtos"

interface VolumeChartProps {
  data: GetTokenVolumeRankDto[]
  xScale: XScale
  yScale1: YScale
  yScale2: YScale
}

export default function VolumeChart({ data, xScale, yScale1, yScale2 }: VolumeChartProps) {
  return (
    <>
    <g>
      {data?.map((d) => (
        <circle
          className='svg-circle sum-rank'
          key={d.datetime}
          cx={xScale(d.datetime)}
          cy={yScale1(d.volumeSumRank)}
        />
      ))}
    </g>
    <g>
      {data?.map((d) => (
        <circle
          className='svg-circle diff-rate-rank'
          key={d.datetime}
          cx={xScale(d.datetime)}
          cy={yScale2(d.volumeDiffRateRank)}
        />
      ))}
    </g>
    </>
  )
}