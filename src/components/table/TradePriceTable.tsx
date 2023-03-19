import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { TableHead, TableBody, UpDownIndicator } from './TableStyle'
import { tokenData } from '../../infra/token'
import { TokenData } from 'types'
import { GetTradePriceRankDto } from '../../redux/api/token/tradePrice/dtos'

interface PriceTableProps {
  data: GetTradePriceRankDto[] | undefined
  type: PriceRankType
}

export default function PriceTable({ type, data }: PriceTableProps) {
  const navigate = useNavigate()
  const cloneData = data && [...data]
  const sortedCloneData =
    type === 'DIFF'
      ? cloneData?.sort((a, b) => a.priceDiffRank - b.priceDiffRank)
      : cloneData?.sort((a, b) => a.priceDiffRateRank - b.priceDiffRateRank)
  return (
    <Wrapper>
      <TableHead>
        <div className="table-head__row">
          <div className="table-head__column rank">
            <span>순위</span>
          </div>
          <div className="table-head__column name">
            <span>코인명</span>
          </div>
          <div className="table-head__column rank-up-or-down">
            <span>전기 대비</span>
          </div>
          <div className="table-head__column day-rank-up-or-down">
            <span>
              전일 동기
              <br />
              대비
            </span>
          </div>
          <div className="table-head__column price-diff">
            {type === 'DIFF' ? (
              <span>
                전기 대비
                <br />
                변화량 (원)
              </span>
            ) : (
              <span>
                전기 대비
                <br />
                변화율 (%)
              </span>
            )}
            <br />
          </div>
        </div>
      </TableHead>
      <TableBody>
        {sortedCloneData?.map((value, index) => {
          const rank =
            type === 'DIFF' ? value.priceDiffRank : value.priceDiffRateRank
          const prevRank =
            type === 'DIFF'
              ? value.prevPriceDiffRank
              : value.prevPriceDiffRateRank
          const prevDayRank =
            type === 'DIFF'
              ? value.prevDayPriceDiffRank
              : value.prevDayPriceDiffRateRank
          const prevDiff = prevRank === null ? 'N/A' : rank - prevRank
          const prevDayDiff = prevDayRank === null ? 'N/A' : rank - prevDayRank
          const rankUp = typeof prevDiff === 'number' && prevDiff < 0
          const dayRankUp = typeof prevDayDiff === 'number' && prevDayDiff < 0
          return (
            <div
              className="table-body__row"
              key={index}
              onClick={() =>
                navigate(
                  `/chart/${
                    tokenData[value.market as keyof TokenData].en_name
                  }`,
                  {
                    state: {
                      tokenName:
                        tokenData[value.market as keyof TokenData].kr_name,
                    },
                  },
                )
              }
            >
              <div className="rank">
                <span>{rank}</span>
              </div>
              <div className="name">
                <span>
                  {tokenData[value.market as keyof TokenData].kr_name}
                </span>
              </div>
              <div className="rank-up-or-down">
                <UpDownIndicator up={rankUp} unChanged={prevDiff === 0}>
                  {prevDiff === 'N/A' || prevDiff === 0
                    ? ''
                    : rankUp
                    ? '▲'
                    : '▼'}
                </UpDownIndicator>
                {prevDiff === 0
                  ? '-'
                  : typeof prevDiff === 'number'
                  ? Math.abs(prevDiff)
                  : 'N/A'}
              </div>
              <div className="day-rank-up-or-down">
                <UpDownIndicator up={dayRankUp} unChanged={prevDayDiff === 0}>
                  {prevDayDiff === 'N/A' || prevDayDiff === 0
                    ? ''
                    : dayRankUp
                    ? '▲'
                    : '▼'}
                </UpDownIndicator>
                {prevDayDiff === 0
                  ? '-'
                  : typeof prevDayDiff === 'number'
                  ? Math.abs(prevDayDiff)
                  : 'N/A'}
              </div>
              <div className="price-diff">
                {type === 'DIFF' ? (
                  <span>
                    {Intl.NumberFormat('ko-KR', {
                      notation: 'compact',
                      maximumFractionDigits: 2,
                    }).format(value.priceDiff)}
                  </span>
                ) : (
                  <span>
                    {(
                      (Math.round(value.priceDiffRate * 10000) / 10000) *
                      100
                    ).toFixed(2)}
                    %
                  </span>
                )}
              </div>
            </div>
          )
        })}
      </TableBody>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  .rank {
    flex: 1 1 10%;
  }
  .name {
    flex: 1 1 26%;
  }
  .rank-up-or-down {
    flex: 1 1 17%;
  }
  .day-rank-up-or-down {
    flex: 1 1 17%;
  }
  .price-diff {
    flex: 1 1 20%;
  }
`
