import { apiSlice } from '../../apiSlice'

export const tradeVolumeRankSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getTradeVolumeRank: builder.query<
      { payload: TradeVolumeRankDto[] },
      { unit: UnitType; datetime: string }
    >({
      query: ({ unit, datetime }) => ({
        url: 'token/trade-volume-rank',
        params: { unit, datetime },
      }),
      providesTags: (result, error, arg) => [
        { type: 'TradeVolumeRank', id: 'LIST' },
      ],
    }),
  }),
})

export const { useGetTradeVolumeRankQuery } = tradeVolumeRankSlice
