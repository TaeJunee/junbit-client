import { axisLeft, select } from 'd3'
import { useEffect, useRef } from 'react'
import { YScale } from '..'
import theme from '../../../style/theme'

interface AxisLeftProps {
  innerWidth: number
  yScale: YScale
}

export default function AxisLeft({ innerWidth, yScale }: AxisLeftProps) {
  const yAxisRef = useRef<SVGGElement>(null)

  useEffect(() => {
    const yAxisG = select(yAxisRef.current!)
    const yAxis = axisLeft(yScale)
    yAxisG.call(yAxis)
  }, [yScale])

  return (
    <g className='axis-left-group'>
      <g ref={yAxisRef} className='axis axis-left'/>
      {yScale.ticks().map(tickValue => (
        <g key={tickValue} transform={`translate(0, ${yScale(tickValue)})`}>
          <line x2={innerWidth} stroke={theme.colors.grey30} />
        </g>
      ))
      }
    </g>
  )
}
