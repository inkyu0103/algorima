import styled from "@emotion/styled";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Aside from "./Aside";
import { colorMap } from "../color";
import { defaultAccept, isMessageNull } from "../constants";
import DropZone from "./DropZone";

interface MainInterface {
  data: string | null;
  func: string | null;
  result: string | null;
}

export default function Main({ data, func, result }: MainInterface) {
  return (
    <DndProvider backend={HTML5Backend}>
      <Aside />
      <MainContainer>
        <DropZone
          message={data || "데이터 슬롯"}
          acceptType={defaultAccept.DATA}
        />
        <DropZone
          message={func || "함수 슬롯"}
          acceptType={defaultAccept.FUNCTION}
        />
        <ResultBlock isMessageNull={isMessageNull(result)}>
          {result || "결과 슬롯"}
        </ResultBlock>
      </MainContainer>
    </DndProvider>
  );
}

const MainContainer = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const ResultBlock = styled.div<{ isMessageNull: boolean }>`
  width: 100px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ isMessageNull }) =>
    isMessageNull ? colorMap.GREY0 : colorMap.MINT2};
  border-radius: 15px;
  margin: 10px;
  text-align: center;
`;
