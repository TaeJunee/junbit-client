import { useLocation, useParams } from 'react-router-dom'
import styled from 'styled-components'

export default function ChartPage() {
  const location = useLocation()
  const tokenKRName = location.state?.tokenName
  const { token_name } = useParams()
  return (
    <Wrapper>
      {token_name} {tokenKRName} 차트 페이지입니다
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
  height: calc(100% - 80px);
`
