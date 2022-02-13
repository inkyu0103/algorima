import { Global, css } from "@emotion/react";
import styled from "@emotion/styled";
import Header from "./component/Header";
import Main from "./component/Main";
import { RootState } from "./redux/store";
import { useSelector } from "react-redux";

export default function App() {
  const { data, func, result } = useSelector((state: RootState) => state);
  return (
    <>
      <Global styles={globalStyle} />
      <AppContainer>
        <Header data={data} func={func} />
        <ContentContainer>
          <Main data={data} func={func} result={result} />
        </ContentContainer>
      </AppContainer>
    </>
  );
}

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const ContentContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

const globalStyle = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Nanum Gothic", sans-serif;
  }
  html {
    width: 100%;
    height: 100%;
  }
  body {
    width: 100%;
    height: 100%;
    min-height: 100vh;
  }
  #root {
    width: 100%;
    height: 100%;
  }
  ul {
    list-style: none;
  }
  a {
    text-decoration: none;
  }
`;
