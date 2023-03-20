import { line } from 'd3'
import { XScaleTime, YScale } from '..'
import { GetTokenVolumeRankDto } from '../../../redux/api/token/chart/dtos'

interface VolumeChartProps {
  data: GetTokenVolumeRankDto[]
  xScale: XScaleTime
  yScale1: YScale
  yScale2: YScale
}

export default function VolumeChart({
  data,
  xScale,
  yScale1,
  yScale2,
}: VolumeChartProps) {
  return (
    <>
      <g className='line-chart volume-chart sum-rank'>
        <path
          className="svg-path sum-rank"
          d={line<GetTokenVolumeRankDto>()
            .x((d) => xScale(new Date(d.datetime)) )
            .y((d) => yScale1(d.volumeSumRank))(data)!}
        />
      </g>
      <g className='line-chart volume-chart diff-rate-rank'>
        <path
          className="svg-path diff-rate-rank"
          d={line<GetTokenVolumeRankDto>()
            .x((d) => xScale(new Date(d.datetime)))
            .y((d) => yScale2(d.volumeDiffRateRank))(data)!}
        />
      </g>
    </>
  )
}
