import moment from 'moment'
import theme from '../../../style/theme'
import { useDispatch } from 'react-redux'
import { setHoverOn } from '../../../redux/chart/chartSlice'

interface ToolTipProps {
  type: string
  hoverOn: string
  value: number
  index: number
  length: number
  xPosition: number | undefined
  yPosition: number | undefined
  datetime: string
}

export default function ToolTip({
  type,
  hoverOn,
  index,
  length,
  value,
  xPosition,
  yPosition,
  datetime,
}: ToolTipProps) {
  const dispatch = useDispatch()
  const convertValue = (value: number) => {
    if (type === '순위') {
      return value
    } else {
      return (Math.round(value * 100) / 100).toLocaleString()
    }
  }
  return (
    <g
      className="tooltip"
      transform={length - index > 20 ? 'translate(-110, 0)' : ''}
      onMouseEnter={() => dispatch(setHoverOn(hoverOn))}
      onMouseLeave={() => dispatch(setHoverOn(null))}
    >
      <rect
        className="tooltip-box"
        x={xPosition! + 6}
        y={yPosition}
        width={135}
        height={40}
        fill="white"
        stroke="black"
      />
      <text
        className="tooltip__text"
        transform={`translate(${xPosition! + 12}, ${yPosition! + 16})`}
        fontSize={10}
        fill="white"
        stroke={theme.colors.grey90}
      >
        <tspan x={0} y={0}>
          {type}: {convertValue(value)}
        </tspan>
        <tspan x={0} y={16}>
          {moment(datetime).locale('ko').format('M월DD일 a h시')}
        </tspan>
      </text>
    </g>
  )
}
