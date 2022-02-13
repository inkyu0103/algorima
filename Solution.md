# Solution

### 겪은 문제점들

1. 어떤 라이브러리를 사용할 것인가?

   **상태관리 : redux-toolkit**

   지금까지 가장 많이 사용해봤기 때문에, 빠르게 구성할 수 있어서 사용했습니다.

   아래에서 언급할 non-serialize 문제 때문에 recoil을 사용해볼까 생각도 했지만, 새로운 라이브러리를 익히는데 소요되는 시간때문에 다른 방식으로 문제를 해결하였습니다.

   **Drag and Drop관련 : react-dnd**

   여러 라이브러리들이 있었지만, 제한된 시간 내에 과제를 완성해야 하다보니 공식문서가 잘 정리되어있고, 보기에 직관적인 라이브러리를 선택하기로 했습니다.

   [참고자료: 채널톡 - react dnd tips & tricks ](https://channel.io/ko/blog/react-dnd-tips-tricks)

   **CSS : emotion**

   유니크한 class id를 생각하지 않아도 되고, 변수들을 직접 사용할 수 있는 편리함이 있어 사용하였습니다.
   <br/>

2. 블록을 올바르지 않은 슬롯에 드래그 했을 때도 반응하게 하는 방법
   react dnd를 사용하면서, 가장 크게 겪었던 어려움은 데이터 블럭을 함수 슬롯에 드래그 했을 때도, 슬롯이 반응하게 하는 부분이었습니다.

   ![잘못된 슬롯 반응](./doc/잘못된%20슬롯%20반응.gif)

   블록(drag-type)의 타입과 슬롯(drop-accept)의 타입이 같아야 반응하도록 구현이 되어있어서, 모든 블록과 모든 슬롯의 타입을 **`'Block'`** 으로 지정하였습니다.

   그리고, 블록 및 슬롯 데이터를 입력할 때, 다음과 같이 작성하여, **`'contentType'`** 으로 블록과 슬롯의 타입 일치여부를 따로 검사하였습니다.

   ```typescript
   interface blockType {
     id: number;
     item: {
       name: string;
       content: string;
       contentType: string;
     };
   }
   ```

3. store에 함수를 넣을 수 없었던 문제

   기존에는 함수 슬롯에 블록을 놓으면 해당 함수를 dispatch 하는 방식으로 구현하려 하였습니다.
   그러나 redux에서 non serializable value에 대해서는 에러를 발생시켰습니다.
   redux의 middleware 설정을 바꾸어 해결하려 하였으나, 기대한대로 동작하지 않아, 해당 함수의 이름을 dispatch 하고, **`functionMap`**을 작성하여 해당 함수를 가져오는 방식으로 해결하였습니다.
   non serializable value을 지원하는 recoil의 사용도 고려하였으나, 학습 시간때문에 제외하였습니다.

   ```typescript
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

   export const functionMap = new Map(
     functionList.map(({ item }) => [item.name, item.content])
   );
   ```
