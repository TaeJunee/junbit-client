import { GetTokenVolumeRankDto } from '../../../redux/api/token/chart/dtos'
import { XScale, YScale } from '..'

interface VolumeChartProps {
  data: GetTokenVolumeRankDto[]
  innerHeight: number
  xScale: XScale
  yScale: YScale
}

export default function VolumeChart({ data, xScale, yScale, innerHeight }: VolumeChartProps) {
  return (
    <>
      {data?.map((d) => (
        <rect
          key={d.datetime}
          x={xScale(d.datetime)}
          y={innerHeight - yScale(d.volumeSum)}
          width={xScale.bandwidth()}
          height={yScale(d.volumeSum)}
          fill='#ff6361'
        />
      ))}
    </>
  )
}