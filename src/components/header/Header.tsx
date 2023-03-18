import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import Logo from '../../assets/images/logo.png'
import SearchInput from '../common/input/SearchInput'
import icProfile from '../../assets/icons/profile.svg'
import icBurgerSimple from '../../assets/icons/burger-simple.svg'
import theme from '../../style/theme'

const Header = () => {
  const navigate = useNavigate()

  return (
    <Wrapper>
      <LogoArea>
        <img src={Logo} alt="로고 이미지" onClick={() => navigate('/')} />
      </LogoArea>
      <SearchArea>
        <SearchInput onClick={() => {}} />
      </SearchArea>
      <ProfileArea>
        <ProfileWrapper>
          <img src={icBurgerSimple} alt="메뉴 아이콘" />
          <img src={icProfile} alt="프로필 아이콘" />
        </ProfileWrapper>
      </ProfileArea>
    </Wrapper>
  )
}

export default Header

const Wrapper = styled.header`
  width: 100%;
  height: 80px;
  position: relative;
  z-index: 100;
  padding: 0 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${theme.colors.grey30};
`
const LogoArea = styled.div`
  flex: 1 0 140px;
  img {
    width: 140px;
    height: 100%;
    cursor: pointer;
  }
`
const SearchArea = styled.div`
  flex: 0 1 auto;
  min-width: 360px;
`
const ProfileArea = styled.div`
  flex: 1 0 140px;
  display: flex;
  justify-content: flex-end;
`
const ProfileWrapper = styled.div`
  width: 100px;
  height: 50px;
  padding: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid ${theme.colors.grey30};
  box-shadow: 2px 1px 4px rgba(0, 0, 0, 0.1);
  border-radius: 24px;
  cursor: pointer;

  img {
    width: 30px;
    height: 30px;
  }
`
