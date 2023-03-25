import { line } from 'd3'
import { XScaleBand, YScale } from '..'
import { GetTokenVolumeRankDto } from '../../../redux/api/token/chart/dtos'
import { useDispatch, useSelector } from 'react-redux'
import { currentlyHoverOn, setHoverOn } from '../../../redux/chart/chartSlice'

interface VolumeChartProps {
  subType: string
  data: GetTokenVolumeRankDto[]
  xScale: XScaleBand
  yScale1?: YScale
  yScale2?: YScale
  yScale3?: YScale
}

export default function VolumeChart({
  subType,
  data,
  xScale,
  yScale1,
  yScale2,
  yScale3,
}: VolumeChartProps) {
  const dispatch = useDispatch()
  const hoveredValue = useSelector(currentlyHoverOn)
  const moveRight = xScale.bandwidth() / 2
  if (subType === 'RANK') {
    return (
      <>
        <g
          opacity={
            hoveredValue === null || hoveredValue === 'volumeSum' ? 1 : 0.2
          }
          className="line-chart volume-chart sum-rank"
          onMouseEnter={() => dispatch(setHoverOn('volumeSum'))}
          onMouseOut={() => dispatch(setHoverOn(null))}
          transform={`translate(${moveRight}, 0)`}
        >
          <path
            className="svg-path sum-rank"
            d={
              line<GetTokenVolumeRankDto>()
                .x(d => xScale(d.datetime)!)
                .y(d => yScale1!(d.volumeSumRank))(data)!
            }
          />
        </g>
        <g
          opacity={
            hoveredValue === null || hoveredValue === 'volumeDiffRate' ? 1 : 0.2
          }
          className="line-chart volume-chart diff-rate-rank"
          onMouseEnter={() => dispatch(setHoverOn('volumeDiffRate'))}
          onMouseOut={() => dispatch(setHoverOn(null))}
          transform={`translate(${moveRight}, 0)`}
        >
          <path
            className="svg-path diff-rate-rank"
            d={
              line<GetTokenVolumeRankDto>()
                .x(d => xScale(d.datetime)!)
                .y(d => yScale2!(d.volumeDiffRateRank))(data)!
            }
          />
        </g>
      </>
    )
  } else
    return (
      <g
        opacity={
          hoveredValue === null || hoveredValue === 'volumeDiffRate' ? 1 : 0.2
        }
        className="line-chart volume-chart diff-rate"
        onMouseEnter={() => dispatch(setHoverOn('volumeDiffRate'))}
        onMouseOut={() => dispatch(setHoverOn(null))}
        transform={`translate(${moveRight}, 0)`}
      >
        <path
          className="svg-path diff-rate"
          d={
            line<GetTokenVolumeRankDto>()
              .x(d => xScale(d.datetime)!)
              .y(d => yScale3!(d.volumeDiffRate * 100))(data)!
          }
        />
      </g>
    )
}
