import { axisBottom, select } from 'd3'
import moment from 'moment'
import { useEffect, useRef } from 'react'
import { XScaleBand, XScaleTime } from '..'

interface AxisBottomProps {
  innerHeight: number
  xScale: XScaleBand | XScaleTime
}

export default function AxisBottom({ innerHeight, xScale }: AxisBottomProps) {
  const xAxisRef = useRef<SVGGElement>(null)

  useEffect(() => {
    const xAxisG = select(xAxisRef.current!)
    const xAxis = axisBottom<any>(xScale)
    xAxis.tickFormat(d => moment(d).locale('ko').format('M월DD일 a h시'))
    xAxisG.call(xAxis)

    xAxisG
      .attr('transform', `translate(0, ${innerHeight})`)
      .selectAll('text')
      .attr('transform', `translate(-10, 0) rotate(-36)`)
      .style('text-anchor', 'end')
  }, [innerHeight, xScale])

  return <g ref={xAxisRef} className="axis axis-bottom" />
}
