export const legendItems = {
  line: {
    VOLUME: [
      {
        text: '거래량 합계 순위',
        color: '#FF6347',
        value: 'volumeSumRank',
      },
      {
        text: '거래량 변화율 순위',
        color: '#3DD666',
        value: 'volumeDiffRateRank',
      },
    ],
    PRICE: [
      {
        text: '거래량 합계 순위',
        color: '#FF6347',
        value: 'priceSumRank',
      },
      {
        text: '거래량 변화량 순위',
        color: '#03A9F4',
        value: 'priceDiffRank',
      },
      {
        text: '거래량 변화율 순위',
        color: '#3DD666',
        value: 'priceDiffRateRank',
      },
    ],
  },
  sum: {
    VOLUME: [
      {
        text: '거래량 합계(수량)',
        color: 'red',
        value: 'volumeSum',
      },
    ],
    PRICE: [
      {
        text: '거래량 합계(금액)',
        color: 'red',
        value: 'priceSum',
      },
    ],
  },
}
