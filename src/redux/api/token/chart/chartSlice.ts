import { apiSlice } from '../../apiSlice'
import { GetTokenPriceRankDto, GetTokenVolumeRankDto } from './dtos'

export const chartSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getTokenVolumeRank: builder.query<
      { payload: GetTokenVolumeRankDto[] },
      { market: string; unit: UnitType; datetime: string }
    >({
      query: ({ market, unit, datetime }) => ({
        url: 'token/chart/volume',
        params: { market, unit, datetime },
      }),
      providesTags: (result, error, arg) => [
        { type: 'VolumeRankChart', id: 'LIST' },
      ],
    }),
    getTokenPriceRank: builder.query<
      { payload: GetTokenPriceRankDto[] },
      { market: string; unit: UnitType; datetime: string }
    >({
      query: ({ market, unit, datetime }) => ({
        url: 'token/chart/price',
        params: { market, unit, datetime },
      }),
      providesTags: (result, error, arg) => [
        { type: 'PriceRankChart', id: 'LIST' },
      ],
    }),
  }),
})

export const { useGetTokenVolumeRankQuery, useGetTokenPriceRankQuery } =
  chartSlice
