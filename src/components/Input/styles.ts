import styled, { css } from "styled-components";

interface Props {
  isFocus: boolean;
  isField: boolean;
}

export const ContainerInput = styled.div<Props>`
  width: 100%;
  background: #232129;
  border-radius: 10px;
  border: 2px solid #232129;
  padding: 16px;
  color: #666360;
  display: flex;
  align-items: center;

  ${(props) =>
    props.isFocus &&
    css`
      border: 2px solid #ff9000;
      color: #ff9000;
    `}
  ${(props) =>
    props.isField &&
    css`
      color: #ff9000;
    `}

  input {
    color: #f4ede8;
    flex: 1;
    background: transparent;
    border: none;
    &::placeholder {
      color: #666360;
    }
  }
  svg {
    margin-right: 16px;
  }

  & + div {
    margin-top: 8px;
  }
`;
