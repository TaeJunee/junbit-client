import { TokenData } from 'types'

export const getKeyByValue = (obj: TokenData, value: string) => {
  return Object.keys(obj).find((key) => obj[key].en_name === value)
}
