export function toUpperCase(yourString: string) {
  return yourString.toUpperCase();
}
export function wordNum(yourString: string) {
  return yourString.split(" ").length;
}
export function reverse(yourString: string) {
  return yourString.split("").reverse().join("");
}
export function isRightDropZone(dragType: string, dropType: string) {
  return dragType === dropType;
}

export const isMessageNull = (message: string | null) => {
  return (
    message === null ||
    message === "함수 슬롯" ||
    message === "데이터 슬롯" ||
    message === "결과 슬롯"
  );
};

export const defaultAccept = {
  BLOCK: "Block",
  DATA: "data",
  FUNCTION: "function",
};

export const blockList = [
  {
    id: 0,
    item: {
      name: "모두를 위한 AI",
      content: "모두를 위한 AI",
      contentType: "data",
    },
  },
  {
    id: 1,
    item: {
      name: "Smarter alone,Smartest together",
      content: "Smarter alone,Smartest together",
      contentType: "data",
    },
  },
  {
    id: 2,
    item: {
      name: "Make AI work for the rest of us",
      content: "Make AI work for the rest of us",
      contentType: "data",
    },
  },
];

export const functionList = [
  {
    id: 3,

    item: {
      name: "toUpperCase",
      content: toUpperCase,
      contentType: "function",
    },
  },
  {
    id: 4,

    item: { name: "wordNum", content: wordNum, contentType: "function" },
  },
  {
    id: 5,
    item: { name: "reverse", content: reverse, contentType: "function" },
  },
];

export const functionMapping = new Map(
  functionList.map(({ item }) => [item.name, item.content])
);
