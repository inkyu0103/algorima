import styled from "@emotion/styled";
import { blockList, functionList } from "../constants";
import Block from "./Block";
export default function Aside() {
  return (
    <AsideContainer>
      <strong>Data Block</strong>
      {blockList.map(({ id, item }) => (
        <Block key={id} name={item.name} item={item} />
      ))}

      <strong>Function Block</strong>
      {functionList.map(({ id, item }) => (
        <Block key={id} name={item.name} item={item} />
      ))}
    </AsideContainer>
  );
}

const AsideContainer = styled.aside`
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
`;
