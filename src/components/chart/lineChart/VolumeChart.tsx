import { curveCardinal, line } from "d3"
import { XScale, YScale } from ".."
import { GetTokenVolumeRankDto } from "../../../redux/api/token/chart/dtos"

interface VolumeChartProps {
  data: GetTokenVolumeRankDto[]
  xScale: XScale
  yScale1: YScale
  yScale2: YScale
}

export default function VolumeChart({ data, xScale, yScale1, yScale2 }: VolumeChartProps) {
  return (
    <>
    <g>
      <path
        className="svg-path sum-rank"
        d={line()
          .curve(curveCardinal)
          // @ts-ignore
          .x(d => xScale(d['datetime']) as number)
          // @ts-ignore
          .y(d => yScale1(d['volumeSumRank']))(data)
        }
      />
    </g>
    <g>
      <path
        className="svg-path diff-rate-rank"
        d={line()
          .curve(curveCardinal)
          // @ts-ignore
          .x(d => xScale(d['datetime']) as number)
          // @ts-ignore
          .y(d => yScale2(d['volumeDiffRateRank']))(data)}
        />
    </g>
    </>
  )
}