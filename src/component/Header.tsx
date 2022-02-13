import styled from "@emotion/styled";
import { useDispatch } from "react-redux";
import { colorMap } from "../color";
import { functionMap } from "../constants";
import { setResult } from "../redux/slice";

interface HeaderInterface {
  data: string | null;
  func: string | null;
}

export default function Header({ data, func }: HeaderInterface) {
  const dispatch = useDispatch();

  const handleClick = () => {
    if (data && func) {
      const targetFunction: any = functionMap.get(func);
      dispatch(setResult({ result: targetFunction(data) }));
      return;
    }

    alert("데이터 또는 함수 슬롯이 비어있습니다.");
  };

  return (
    <HeaderContainer>
      <ExecuteButton onClick={handleClick}>실행하기</ExecuteButton>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.header`
  width: 100%;
  height: 75px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  border-bottom: 2px solid ${colorMap.GREY1};
`;

const ExecuteButton = styled.button`
  width: 100px;
  height: 40px;
  margin-right: 30px;
  background: ${colorMap.GREY0};
  color: white;
  font-weight: 800;
  border: none;
  cursor: pointer;
  border-radius: 15px;
`;
