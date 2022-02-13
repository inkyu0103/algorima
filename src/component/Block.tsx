import styled from "@emotion/styled";
import { useDrag } from "react-dnd";
import { defaultAccept } from "../constants";

interface BlockInterface {
  name: string;
  item: {
    content: string | Function;
    contentType: string;
  };
}

export default function Block({ name, item }: BlockInterface) {
  const [, dragRef] = useDrag(() => ({
    type: defaultAccept.BLOCK,
    item,
  }));

  return <BlockContainer ref={dragRef}>{name}</BlockContainer>;
}

const BlockContainer = styled.article`
  width: 150px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-bottom: 10px;
  border: 1px solid black;
`;
