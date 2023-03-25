import { axisRight, select } from 'd3'
import { useEffect, useRef } from 'react'
import { YScale } from '..'

interface AxisRightProps {
  innerWidth: number
  yScale: YScale
}

export default function AxisRight({ innerWidth, yScale }: AxisRightProps) {
  const yAxisRef = useRef<SVGGElement>(null)

  useEffect(() => {
    const yAxisG = select(yAxisRef.current!)
    const yAxis = axisRight(yScale)
    yAxisG.call(yAxis)
  }, [yScale])

  return (
    <g className="axis-right-group">
      <g
        ref={yAxisRef}
        transform={`translate(${innerWidth}, 0)`}
        className="axis axis-right"
      />
    </g>
  )
}
