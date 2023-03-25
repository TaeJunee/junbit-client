import { GetTokenPriceRankDto } from '../../../redux/api/token/chart/dtos'
import { XScaleBand, YScale } from '..'
import ToolTip from '../tolltip/ToolTip'
import { useDispatch, useSelector } from 'react-redux'
import { currentlyHoverOn, setHoverOn } from '../../../redux/chart/chartSlice'

interface PriceChartProps {
  data: GetTokenPriceRankDto[]
  innerHeight: number
  xScale: XScaleBand
  yScale: YScale
}

export default function PriceChart({
  data,
  xScale,
  yScale,
  innerHeight,
}: PriceChartProps) {
  const dispatch = useDispatch()
  const hoveredValue = useSelector(currentlyHoverOn)
  return (
    <>
      {data?.map((d, index, array) => {
        const xPosition = xScale(d.datetime)
        const yPosition = yScale(d.priceSum)
        return (
          <g key={d.datetime} className="svg-rect">
            <rect
              x={xPosition}
              y={yPosition}
              width={xScale.bandwidth()}
              height={innerHeight - yPosition}
              fill="#ff6361"
              opacity={
                hoveredValue === null || hoveredValue === 'priceSum' ? 1 : 0.2
              }
              onMouseEnter={() => dispatch(setHoverOn('priceSum'))}
              onMouseOut={() => dispatch(setHoverOn(null))}
            />
            <ToolTip
              type="합계(원)"
              hoverOn="priceSum"
              index={index}
              length={array.length}
              value={d.priceSum}
              xPosition={xPosition}
              yPosition={yPosition - 20}
              datetime={d.datetime}
            />
          </g>
        )
      })}
    </>
  )
}
