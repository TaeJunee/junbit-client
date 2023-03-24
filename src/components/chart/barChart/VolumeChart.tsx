import { GetTokenVolumeRankDto } from '../../../redux/api/token/chart/dtos'
import { XScaleBand, YScale } from '..'

interface VolumeChartProps {
  data: GetTokenVolumeRankDto[]
  hoveredValue: string | null
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
  return (
    <>
      {data?.map(d => (
        <rect
          key={d.datetime}
          x={xScale(new Date(d.datetime))}
          y={yScale(d.volumeSum)}
          width={20}
          height={innerHeight - yScale(d.volumeSum)}
          fill="#ff6361"
        />
      ))}
    </>
  )
}
