import { axisLeft, select } from "d3"
import { useEffect, useRef } from "react"
import { YScale } from ".."

interface AxisLeftProps {
  yScale: YScale
}

export default function AxisLeft({ yScale }: AxisLeftProps) {
  const yAxisRef = useRef<SVGGElement>(null)
  
  useEffect(() => {
    const yAxisG = select(yAxisRef.current!)
    const yAxis = axisLeft(yScale)
    yAxisG
      .call(yAxis)
  }, [yScale])

  
  return (
    <g ref={yAxisRef} />
  )
}
