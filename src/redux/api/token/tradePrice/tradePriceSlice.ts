import { GetTradePriceRankDto } from './dtos'
import { apiSlice } from '../../apiSlice'

export const tradePriceRankSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getTradePriceRank: builder.query<
      { payload: GetTradePriceRankDto[] },
      { unit: UnitType; datetime: string }
    >({
      query: ({ unit, datetime }) => ({
        url: 'token/trade-price-rank',
        params: { unit, datetime },
      }),
      providesTags: (result, error, arg) => [
        { type: 'TradePriceRank', id: 'LIST' },
      ],
    }),
  }),
})

export const { useGetTradePriceRankQuery } = tradePriceRankSlice
