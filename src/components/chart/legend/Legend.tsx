import { useDispatch } from 'react-redux'
import { LegendItems } from 'types'
import { setHoverOn } from '../../../redux/chart/hoverSlice'

interface LegendProps {
  type: string
  legendItems: LegendItems
  innerWidth: number
  onHover: (item: any) => void
}

export default function Legend({
  type,
  legendItems,
  innerWidth,
  onHover,
}: LegendProps) {
  const dispatch = useDispatch()
  return (
    <g>
      {legendItems[type as keyof LegendItems].map((item, index, array) => (
        <g
          className="legend"
          transform={`translate(${innerWidth / (array.length * 2)}, -10)`}
          onMouseEnter={() => {
            onHover(item.value)
            dispatch(setHoverOn(item.value))
          }}
          onMouseOut={() => {
            onHover(null)
            dispatch(setHoverOn(null))
          }}
        >
          <line
            x1={10 + index * 150}
            y1={0}
            x2={30 + index * 150}
            y2={0}
            strokeWidth={3}
            fill="none"
            stroke={item.color}
          />
          <text
            className="legend__text"
            transform={`translate(${35 + index * 150}, 5)`}
            fontSize={12}
          >
            {item.text}
          </text>
        </g>
      ))}
    </g>
  )
}
