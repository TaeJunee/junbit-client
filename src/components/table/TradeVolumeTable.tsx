import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { TableHead, TableBody, UpDownIndicator } from './TableStyle'
import { tokenData } from '../../infra/token'

interface VolumeTableProps {
  data: TradeVolumeRankDto[] | undefined
}

export default function VolumeTable({ data }: VolumeTableProps) {
  const navigate = useNavigate()
  const cloneData = data && [...data]
  const sortedCloneData = cloneData?.sort((a, b) => a.volumeDiffRateRank - b.volumeDiffRateRank)

  return (
    <Wrapper>
      <TableHead>
        <div className='table-head__row'>
          <div className="table-head__column rank"><span>순위<br /><span className='parentheses'>(변화율)</span></span></div>
          <div className="table-head__column name"><span>코인명</span></div>
          <div className="table-head__column rank-up-or-down"><span>전기 대비</span></div>
          <div className='table-head__column day-rank-up-or-down'><span>전일 동기<br />대비</span></div>
          <div className='table-head__column volume-diff'>
            <span>
              전기 대비<br />
              변화량
              <span className='parentheses'> (개)</span>
            </span>
          </div>
          <div className="table-head__column volume-diff-rate">
            <span>
              전기 대비<br />
              변화율
              <span className='parentheses'> (%)</span>
            </span>
          </div>
        </div>
      </TableHead>
      <TableBody>
        {sortedCloneData?.map((value, index) => {
            const prevDiff =
              value.prevVolumeDiffRateRank === null
                ? 'N/A'
                : value.volumeDiffRateRank - value.prevVolumeDiffRateRank
            const prevDayDiff =
              value.prevDayVolumeDiffRateRank === null
                ? 'N/A'
                : value.volumeDiffRateRank - value.prevDayVolumeDiffRateRank
            const rankUp = typeof prevDiff === 'number' && prevDiff < 0
            const dayRankUp =
              typeof prevDayDiff === 'number' && prevDayDiff < 0
            return (
              <div
                className='table-body__row'
                key={index}
                onClick={() =>
                  navigate(
                    `/chart/${
                      tokenData[value.market as keyof TokenData].en_name
                    }`,
                    {
                      state: {
                        tokenName:
                          tokenData[value.market as keyof TokenData]
                            .kr_name,
                      },
                    },
                  )
                }
              >
                <div className='rank'>
                  <span>{value.volumeDiffRateRank}</span>
                </div>
                <div className='name'>
                  <span>
                    {tokenData[value.market as keyof TokenData].kr_name}
                  </span>
                </div>
                <div className='rank-up-or-down'>
                  <UpDownIndicator
                    up={rankUp}
                    unChanged={prevDiff === 0}
                  >
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
                <div className='day-rank-up-or-down'>
                  <UpDownIndicator
                    up={dayRankUp}
                    unChanged={prevDayDiff === 0}
                  >
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
                <div className='volume-diff'>
                  <span>
                    {Intl.NumberFormat('ko-KR', {
                      notation: "compact",
                      maximumFractionDigits: 2
                    }).format(value.volumeDiff)}
                  </span>
                </div>
                <div className='volume-diff-rate'>
                  <span>
                    {(
                      (Math.round(value.volumeDiffRate * 10000) / 10000) *
                      100
                    ).toFixed(2)}
                    %
                  </span>
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
    flex: 1 0 12%;
  }
  .name {
    flex: 1 1 24%;
  }
  .rank-up-or-down {
    flex: 1 1 16%;
  }
  .day-rank-up-or-down {
    flex: 1 1 16%;
  }
  .volume-diff {
    flex: 1 1 16%;
  }
  .volume-diff-rate {
    flex: 1 1 16%;
  }
  span {
    font-size: 14px;
  }
`
