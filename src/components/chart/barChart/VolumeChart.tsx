import { GetTokenVolumeRankDto } from '../../../redux/api/token/chart/dtos'
import { XScaleBand, YScale } from '..'
import ToolTip from '../tolltip/ToolTip'
import { currentlyHoverOn, setHoverOn } from '../../../redux/chart/chartSlice'
import { useDispatch, useSelector } from 'react-redux'

interface VolumeChartProps {
  data: GetTokenVolumeRankDto[]
  innerHeight: number
  xScale: XScaleBand
  yScale: YScale
}

export default function VolumeChart({
  data,
  xScale,
  yScale,
  innerHeight,
}: VolumeChartProps) {
  const dispatch = useDispatch()
  const hoveredValue = useSelector(currentlyHoverOn)
  return (
    <>
      {data?.map((d, index, array) => {
        const xPosition = xScale(d.datetime)
        const yPosition = yScale(d.volumeSum)
        return (
          <g key={d.datetime} className="svg-rect">
            <rect
              x={xPosition}
              y={yPosition}
              width={xScale.bandwidth()}
              height={innerHeight - yPosition}
              fill="#ff6361"
              opacity={
                hoveredValue === null || hoveredValue === 'volumeSum' ? 1 : 0.2
              }
              onMouseEnter={() => dispatch(setHoverOn('volumeSum'))}
              onMouseOut={() => dispatch(setHoverOn(null))}
            />
            <ToolTip
              type="합계(개)"
              hoverOn="volumeSum"
              index={index}
              length={array.length}
              value={d.volumeSum}
              xPosition={xPosition}
              yPosition={yPosition}
              datetime={d.datetime}
            />
          </g>
        )
      })}
    </>
  )
}
