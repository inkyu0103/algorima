import styled from "@emotion/styled";
import { useDrop } from "react-dnd";
import { defaultAccept, isMessageNull, isRightDropZone } from "../constants";
import { setData, setFunc, setResult } from "../redux/slice";
import { useDispatch } from "react-redux";
import Delete from "../assets/images/Delete.png";
import { colorMap } from "../color";

interface DropZoneInterface {
  message: string;
  acceptType: string;
}

export default function DropZone({ message, acceptType }: DropZoneInterface) {
  const dispatch = useDispatch();
  const handleClick = () => {
    if (acceptType === defaultAccept.DATA) {
      dispatch(setData({ data: null }));
      dispatch(setResult({ result: null }));
      return;
    }

    dispatch(setResult({ result: null }));
    dispatch(setFunc({ func: null }));
  };

  const [{ isOver, getDraggedItem }, dropRef] = useDrop(() => ({
    accept: defaultAccept.BLOCK,
    drop: (monitor: any) => {
      // diffrent type filter
      if (!isRightDropZone(monitor.contentType, acceptType)) return;

      if (acceptType === defaultAccept.DATA) {
        dispatch(setData({ data: monitor.content }));
      }

      if (acceptType === defaultAccept.FUNCTION) {
        dispatch(setFunc({ func: monitor.name }));
      }
    },
    collect: (monitor): any => ({
      isOver: monitor.isOver(),
      getDraggedItem: monitor.getItem(),
    }),
  }));
  return (
    <DropZoneContainer
      ref={dropRef}
      isOver={isOver}
      isRightZone={getDraggedItem?.contentType === acceptType}
      isMessageNull={isMessageNull(message)}
    >
      {message}
      {!isMessageNull(message) && (
        <DeleteButton iconUrl={Delete} onClick={handleClick} />
      )}
    </DropZoneContainer>
  );
}

const DeleteButton = styled.button<{ iconUrl: string }>`
  width: 16px;
  height: 16px;
  position: absolute;
  background: transparent;
  border: 0;
  outline: 0;
  background-image: ${({ iconUrl }) => `url(${iconUrl})`};
  background-size: cover;
  top: 5px;
  right: 5px;
  cursor: pointer;
`;

const DropZoneContainer = styled.div<{
  isOver: boolean;
  isRightZone: boolean;
  isMessageNull: boolean;
}>`
  width: 100px;
  height: 200px;
  position: relative;
  display: flex;
  margin: 10px;
  justify-content: center;
  align-items: center;
  background: ${({ isMessageNull }) =>
    isMessageNull ? colorMap.GREY0 : colorMap.MINT2};
  border: ${({ isOver, isRightZone }) => {
    if (isOver) {
      return isRightZone ? `2px solid ${colorMap.MINT3}` : "2px solid red";
    }
  }};
  border-radius: 15px;
  text-align: center;
`;
