import { line } from 'd3'
import { XScaleTime, YScale } from '..'
import { GetTokenVolumeRankDto } from '../../../redux/api/token/chart/dtos'
import { useDispatch } from 'react-redux'
import { setHoverOn } from '../../../redux/chart/hoverSlice'

interface VolumeChartProps {
  data: GetTokenVolumeRankDto[]
  hoveredValue: string | null
  xScale: XScaleTime
  yScale1: YScale
  yScale2: YScale
}

export default function VolumeChart({
  data,
  hoveredValue,
  xScale,
  yScale1,
  yScale2,
}: VolumeChartProps) {
  const dispatch = useDispatch()
  return (
    <>
      <g
        opacity={
          hoveredValue === null || hoveredValue === 'volumeSumRank' ? 1 : 0.2
        }
        className="line-chart volume-chart sum-rank"
        onMouseEnter={() => dispatch(setHoverOn('volumeSumRank'))}
        onMouseOut={() => dispatch(setHoverOn(null))}
      >
        <path
          className="svg-path sum-rank"
          d={
            line<GetTokenVolumeRankDto>()
              .x(d => xScale(new Date(d.datetime)))
              .y(d => yScale1(d.volumeSumRank))(data)!
          }
        />
      </g>
      <g
        opacity={
          hoveredValue === null || hoveredValue === 'volumeDiffRateRank'
            ? 1
            : 0.2
        }
        className="line-chart volume-chart diff-rate-rank"
        onMouseEnter={() => dispatch(setHoverOn('volumeDiffRateRank'))}
        onMouseOut={() => dispatch(setHoverOn(null))}
      >
        <path
          className="svg-path diff-rate-rank"
          d={
            line<GetTokenVolumeRankDto>()
              .x(d => xScale(new Date(d.datetime)))
              .y(d => yScale2(d.volumeDiffRateRank))(data)!
          }
        />
      </g>
    </>
  )
}
