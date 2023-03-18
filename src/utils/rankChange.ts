export const rankChange = (rank1: number, rank2: number) => {
  const result = rank1 - rank2
  if (result < 0) {
    return Math.abs(result)
  } else if (result > 0) {
    return Math.abs(result)
  } else return '-'
}
