import { GetTokenPriceRankDto } from '../../../redux/api/token/chart/dtos'
import { XScale, YScale } from '..'
import { curveCardinal, line } from 'd3'

interface PriceChartProps {
  data: GetTokenPriceRankDto[]
  xScale: XScale
  yScale1: YScale
  yScale2: YScale
  yScale3: YScale
}

export default function PriceChart({ data, xScale, yScale1, yScale2, yScale3 }: PriceChartProps) {
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
          .y(d => yScale1(d['priceSumRank']))(data)}
      />
    </g>
    <g>
      <path
        className="svg-path diff-rank"
        d={line()
          .curve(curveCardinal)
          // @ts-ignore
          .x(d => xScale(d['datetime']) as number)
          // @ts-ignore
          .y(d => yScale2(d['priceDiffRank']))(data)}
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
          .y(d => yScale3(d['priceDiffRateRank']))(data)}
        />
    </g>
    </>
  )
}
