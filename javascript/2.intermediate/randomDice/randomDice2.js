// #05.randomDice 실습

// [phase-2] 레코드 리스트 control / view
// 1. 주사위가 멈추면 기록/초기화 버튼 활성화
/* 2. hiidden 속성
     1.- 기록 버튼 이벤트 바인딩
     2.- hidden 속성 false 만들기 = visible
     3.- 초기화 버튼 이벤트 바인딩 => hidden = true;
     4.- hidden 속성 true 만들기 */
// 3. 주사위 값을 가져와서 렌더링
// 4. 스크롤 위치 내리기
// 5. 함수 분리

getNode(".buttonGroup > button"); // 맨 처음요소만 반환
const buttonList = getNodes(".buttongroup > button"); // buttonList[0]
const [startButton, recordButton, resetButton] = getNodes(
  ".buttongroup > button"
);
const recordListWrapper = getNode(".recordListWrapper"); // 2-2.2
const tbody = getNode(".recordList tbody"); // 2-3.주사위 값을 넣어줄 공간

// 2-3. reder. 렌더링
//* 2-5. 생성
function createItem(value) { // template 생성함수
  return /* html */ `
  <tr>
    <td>${++count}</td>
    <td>${value}</td>
    <td>${(total += value)}</td>
  </tr>
`;
}

//* 2-5. 실행
function renderRecordItem(){
    // 2-3. 주사위 값 => 큐브의 'data-dice' 속성값을 가져와서 사용하겠다.
  /* cube 요소(주사위)의 dice 속성을 변경하여 주사위의 숫자를 설정합니다.
  setAttr : node.dataset[prop] => data-dice */
  const diceValue = attr("#cube", "data-dice"); // 2-3. 1) 주사위 속성값 가져오기

  insertLast(tbody, createItem(diceValue)); // 값 넣어주기

  endScroll(recordListWrapper); // 스크롤 항상 밑에
}

const handleRollingDice = (() => {
  let isClicked = false; // 1-4
  let stopAnimation; // 1-4

  return () => {
    // function(){
    if (!isClicked) {
      // 2-1. 주사위 애니메이션 활성 - 기록, 초기화 버튼 누를 수 없도록 => disabled = true;
      stopAnimation = setInterval(diceAnimation, 100); // 주사위가 돌아가는 애니메이션
      recordButton.disabled = true;
      resetButton.disabled = true;
    } else {
      // 2-1. 주사위 애니메이션 비활성 - 주사위, 기록, 초기화 버튼 모두 누를수있게 => disabled = false;
      clearInterval(stopAnimation);
      recordButton.disabled = false;
      resetButton.disabled = false;
    }
    isClicked = !isClicked;
  };
})();

let count = 0; // 2-3. 주사위의 횟수를 나타내는 변수
let total = 0; // 2-3. 주사위의 총합을 나타내는 변수

function handleRecord() {
  recordListWrapper.hidden = false; // 2-2.2 기록리스트 나타내기

  //* 2. 실행
  renderRecordItem()
  /* const diceValue = attr("#cube", "data-dice"); // 주사위의 값 가져오기

  //* 1. 생성: template
 /*  let template = `
    <tr>
      <td>${++count}</td>
      <td>${diceValue}</td>
      <td>${(total += diceValue)}</td>
    </tr>
  `; */

  // 2-3. reder. 렌더링
  // createItem(diceValue) ===> template

  // tbody.insertAdjacentHTML('beforeend',template); // 2-3. 유틸함수 이용하기
  // insertLast(tbody, createItem(diceValue)); // 렌더링 => 생성 함수로 이동

  // 2-4. 스크롤 위치 내리기
  // scrollHeight: 요소 콘텐츠의 총 높이, scrollTop: 요소의 수직 스크롤 바 위치
  // recordListWrapper.scrollTop = recordListWrapper.scrollHeight;
  // endScroll(recordListWrapper); */
}

function handleReset() {
  recordListWrapper.hidden = true; // 2-2.4
}

startButton.addEventListener("click", handleRollingDice);
recordButton.addEventListener("click", handleRecord); // 2-2.1
resetButton.addEventListener("click", handleReset); // 2-2.3
