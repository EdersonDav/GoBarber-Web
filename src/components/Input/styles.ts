import styled from "styled-components";

export const ContainerInput = styled.div`
  width: 100%;
  background: #232129;
  border-radius: 10px;
  border: 2px solid #232129;
  padding: 16px;
  color: #666360;
  display: flex;
  align-items: center;
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
