import { GetTokenVolumeRankDto } from '../../../redux/api/token/chart/dtos'
import { XScaleBand, YScale } from '..'

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
  return (
    <>
      {data?.map((d) => (
        <rect
          key={d.datetime}
          x={xScale(new Date(d.datetime))}
          y={innerHeight - yScale(d.volumeSum)}
          width={20}
          height={yScale(d.volumeSum)}
          fill="#ff6361"
        />
      ))}
    </>
  )
}
