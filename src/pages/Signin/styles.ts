import styled from "styled-components";
import { shade } from "polished";
import BackgroundImage from "../../assets/images/sign-in-background.png";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  place-content: center;
  align-items: center;
  width: 100%;
  max-width: 700px;

  form {
    width: 300px;
    margin: 80px 0;
    text-align: center;

    h1 {
      margin-bottom: 24px;
    }

    input {
      width: 100%;
      background: #232129;
      border-radius: 10px;
      border: 2px solid #232129;
      padding: 16px;
      color: #f4ede8;

      & + input {
        margin-top: 8px;
      }
      &::placeholder {
        color: #666360;
      }
    }
    button {
      background: #ff9000;
      height: 56px;
      border-radius: 10px;
      border: 0;
      padding: 0 16px;
      color: #312e38;
      width: 100%;
      font-weight: 500;
      margin-top: 16px;
      transition: background-color 0.2s;
      &:hover {
        background: ${shade(0.2, "#ff9000")};
      }
    }
    a {
      color: #f4ede8;
      display: block;
      margin-top: 24px;
      text-decoration: none;
      transition: color 0.2s;

      &:hover {
        color: ${shade(0.2, "#f4ede8")};
      }
    }
  }
  > a {
    color: #ff9000;
    display: block;
    margin-top: 24px;
    text-decoration: none;
    transition: color 0.2s;
    display: flex;
    align-items: center;

    &:hover {
      color: ${shade(0.2, "#ff9000")};
    }

    svg {
      margin-right: 16px;
    }
  }
`;
export const Background = styled.div`
  flex: 1;
  background: url(${BackgroundImage}) no-repeat;
  background-size: cover;
`;