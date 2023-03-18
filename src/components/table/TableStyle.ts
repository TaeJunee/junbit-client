import styled from "styled-components";
import theme from "../../style/theme";

export const TableHead = styled.div`
  width: 100%;
  height: 60px;
  background-color: ${theme.colors.grey90};
  border-radius: 12px;
  .table-head__row {
    height: 100%;
    display: flex;
    align-items: center;
  }
  .table-head__column {
    display: flex;
    justify-content: center;
    align-items: center;
    span {
      text-align: center;
      line-height: 20px;
      color: white;
      font-weight: bold;
    }
  }
`
export const TableBody = styled.div`
  height: calc(100% - 62.5px);
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  ${theme.options.scrollBar};

  .table-body__row {
    width: 98.5%;
    display: flex;
    background-color: white;
    margin: 3px;
    border-radius: 12px;
    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.2);
    transition: all 0.3s ease;

    &:hover {
      height: 62px;
      cursor: pointer;
      box-shadow: 0 1px 6px rgba(0, 0, 0, 0.4);
    }

    div {
      height: 60px;
      display: flex;
      justify-content: center;
      align-items: center;
      span {
        text-align: center;
      }
    }

  }
`
export const UpDownIndicator = styled.span<{ up: boolean; unChanged: boolean }>`
  color: ${(props) =>
    !props.unChanged && (props.up ? theme.colors.red : theme.colors.blue)};
`