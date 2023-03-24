import { useEffect, useRef, useState } from 'react'
import moment from 'moment'
import theme from '../../../style/theme'
import {
  GetTokenPriceRankDto,
  GetTokenVolumeRankDto,
} from '../../../redux/api/token/chart/dtos'
import { XScaleTime, YScale } from '..'
import { useDispatch, useSelector } from 'react-redux'
import {
  currentlyCirCleHoverOn,
  currentlyRankHoverOn,
  currentlyToolTipHoverOn,
  setCircleHoverOn,
  setRankHoverOn,
  setToolTipHoverOn,
} from '../../../redux/chart/hoverSlice'

interface ToolTipProps {
  type: RadioOptionType
  data: GetTokenVolumeRankDto[] | GetTokenPriceRankDto[]
  xScaleVolumeRank: XScaleTime
  xScalePriceRank: XScaleTime
  yScaleVolumeSumRank: YScale
  yScaleVolumeDiffRateRank: YScale
  yScalePriceSumRank: YScale
  yScalePriceDiffRank: YScale
  yScalePriceDiffRateRank: YScale
}

export default function ToolTip({
  type,
  data,
  xScaleVolumeRank,
  xScalePriceRank,
  yScaleVolumeSumRank,
  yScaleVolumeDiffRateRank,
  yScalePriceSumRank,
  yScalePriceDiffRank,
  yScalePriceDiffRateRank,
}: ToolTipProps) {
  const dispatch = useDispatch()
  const hoveredCircleValue = useSelector(currentlyCirCleHoverOn)
  const hoveredRankValue = useSelector(currentlyRankHoverOn)

  if (type === 'VOLUME') {
    return (
      <>
        {(data as GetTokenVolumeRankDto[]).map(d => {
          const xPosition = xScaleVolumeRank(new Date(d.datetime))
          const yPosition = yScaleVolumeSumRank(d.volumeSumRank)
          const yPosition2 = yScaleVolumeDiffRateRank(d.volumeDiffRateRank)
          return (
            <>
              {hoveredCircleValue === d.datetime &&
                hoveredRankValue === d.volumeSumRank && (
                  <g className="tooltip tooltip-volume-sum-rank">
                    <rect
                      x={xPosition + 10}
                      y={yPosition}
                      width={100}
                      height={40}
                      fill="white"
                      stroke="black"
                    />
                    <text
                      className="tooltip__text"
                      transform={`translate(${xPosition + 16}, ${
                        yPosition + 16
                      })`}
                      fontSize={10}
                      stroke={theme.colors.grey90}
                      fontWeight="normal"
                    >
                      <tspan x={0} y={0}>
                        순위: {d.volumeSumRank}
                      </tspan>
                      <tspan x={0} y={16}>
                        {moment(d.datetime)
                          .locale('ko')
                          .format('M월DD일 a h시')}
                      </tspan>
                    </text>
                  </g>
                )}
              {hoveredCircleValue === d.datetime &&
                hoveredRankValue === d.volumeDiffRateRank && (
                  <g className="tooltip tooltip-volume-diff-rate-tank">
                    <rect
                      x={xPosition + 10}
                      y={yPosition2}
                      width={100}
                      height={40}
                      fill="white"
                      stroke="black"
                    />
                    <text
                      className="tooltip__text"
                      transform={`translate(${xPosition + 16}, ${
                        yPosition2 + 16
                      })`}
                      fontSize={10}
                      stroke={theme.colors.grey90}
                      fontWeight="normal"
                    >
                      <tspan x={0} y={0}>
                        순위: {d.volumeDiffRateRank}
                      </tspan>
                      <tspan x={0} y={16}>
                        {moment(d.datetime)
                          .locale('ko')
                          .format('M월DD일 a h시')}
                      </tspan>
                    </text>
                  </g>
                )}
            </>
          )
        })}
      </>
    )
  } else
    return (
      <>
        {(data as GetTokenPriceRankDto[]).map(d => {
          const xPosition = xScalePriceRank(new Date(d.datetime))
          const yPosition = yScalePriceSumRank(d.priceSumRank)
          const yPosition2 = yScalePriceDiffRank(d.priceDiffRank)
          const yPosition3 = yScalePriceDiffRateRank(d.priceDiffRateRank)
          return (
            <>
              {hoveredCircleValue === d.datetime &&
                hoveredRankValue === d.priceSumRank && (
                  <g className="tooltip tooltip-price-sum-rank">
                    <rect
                      x={xPosition + 10}
                      y={yPosition}
                      width={100}
                      height={40}
                      fill="white"
                      stroke="black"
                    />
                    <text
                      className="tooltip__text"
                      transform={`translate(${xPosition + 16}, ${
                        yPosition + 16
                      })`}
                      fontSize={10}
                      stroke={theme.colors.grey90}
                      fontWeight="normal"
                    >
                      <tspan x={0} y={0}>
                        순위: {d.priceSumRank}
                      </tspan>
                      <tspan x={0} y={16}>
                        {moment(d.datetime)
                          .locale('ko')
                          .format('M월DD일 a h시')}
                      </tspan>
                    </text>
                  </g>
                )}
              {hoveredCircleValue === d.datetime &&
                hoveredRankValue === d.priceDiffRank && (
                  <g className="tooltip tooltip-price-diff-rank">
                    <rect
                      x={xPosition + 10}
                      y={yPosition2}
                      width={100}
                      height={40}
                      fill="white"
                      stroke="black"
                    />
                    <text
                      className="tooltip__text"
                      transform={`translate(${xPosition + 16}, ${
                        yPosition2 + 16
                      })`}
                      fontSize={10}
                      stroke={theme.colors.grey90}
                      fontWeight="normal"
                    >
                      <tspan x={0} y={0}>
                        순위: {d.priceDiffRank}
                      </tspan>
                      <tspan x={0} y={16}>
                        {moment(d.datetime)
                          .locale('ko')
                          .format('M월DD일 a h시')}
                      </tspan>
                    </text>
                  </g>
                )}
              {hoveredCircleValue === d.datetime &&
                hoveredRankValue === d.priceDiffRateRank && (
                  <g className="tooltip tooltip-price-diff-rate-rank">
                    <rect
                      x={xPosition + 10}
                      y={yPosition3}
                      width={100}
                      height={40}
                      fill="white"
                      stroke="black"
                    />
                    <text
                      className="tooltip__text"
                      transform={`translate(${xPosition + 16}, ${
                        yPosition3 + 16
                      })`}
                      fontSize={10}
                      stroke={theme.colors.grey90}
                      fontWeight="normal"
                    >
                      <tspan x={0} y={0}>
                        순위: {d.priceDiffRateRank}
                      </tspan>
                      <tspan x={0} y={16}>
                        {moment(d.datetime)
                          .locale('ko')
                          .format('M월DD일 a h시')}
                      </tspan>
                    </text>
                  </g>
                )}
            </>
          )
        })}
      </>
    )
}
