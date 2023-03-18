import styled from 'styled-components'
import icSearchWhite from '../../../assets/icons/search-white.svg'
import theme from '../../../style/theme'

interface SearchInputProps {
  onClick: () => void
}

const SearchInput = (props: SearchInputProps) => {
  return (
    <Wrapper>
      <input type="text" />
      <button onClick={props.onClick}>
        <img src={icSearchWhite} alt="검색 아이콘" />
      </button>
    </Wrapper>
  )
}

export default SearchInput

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  padding: 8px;
  height: 50px;
  border-radius: 24px;
  border: 1px solid ${theme.colors.grey30};
  box-shadow: 2px 1px 4px rgba(0, 0, 0, 0.1);

  input {
    width: 85%;
    height: 100%;
    padding: 0 12px;
    color: ${theme.colors.grey90};
    border: none;
    font-size: 18px;

    &:active {
      border: none;
    }

    &:focus {
      outline: none;
    }
  }

  button {
    width: 36px;
    height: 36px;
    border: none;
    outline: none;
    border-radius: 50%;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 6px;
    right: 6px;
    background: ${theme.colors.red};
    &:active {
      background: ${theme.colors.red};
    }
  }
  img {
    width: 22px;
    height: 22px;
  }
`
