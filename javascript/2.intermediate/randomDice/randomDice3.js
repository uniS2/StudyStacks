// #05.randomDice 실습

// [phase-3] 초기화 시키기
// 1. 아이템 지우기


getNode("..buttonGroup > button"); // 맨 처음요소만 반환
const buttonList = getNodes(".buttongroup > button"); // buttonList[0]
const [startButton, recordButton, resetButton] = getNodes(
  ".buttongroup > button"
);
const recordListWrapper = getNode(".recordListWrapper"); // 2-2.2
const tbody = getNode(".recordList tbody"); // 2-3.주사위 값을 넣어줄 공간

let count = 0; // 2-3. 주사위의 횟수를 나타내는 변수
let total = 0; // 2-3. 주사위의 총합을 나타내는 변수

// 2-3. reder. 렌더링
// 2-5. 생성
function createItem(value) { // template 생성함수
  return /* html */ `
  <tr>
    <td>${++count}</td>
    <td>${value}</td>
    <td>${(total += value)}</td>
  </tr>
`;
}

// 2-5. 실행
function renderRecordItem(){
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
      stopAnimation = setInterval(diceAnimation, 100);

      recordButton.disabled = true;
      resetButton.disabled = true;
    } else {
      clearInterval(stopAnimation);

      recordButton.disabled = false;
      resetButton.disabled = false;
    }
    isClicked = !isClicked;
  };
})();

function handleRecord() {
  recordListWrapper.hidden = false;

  renderRecordItem()
}

function handleReset() {
  recordListWrapper.hidden = true; // 2-2.4
  
  recordButton.disabled = true;
  resetButton.disabled = true;

  // 3-1.
  // 1. tbody 내의 textContent = ''
  // 2. count, total 변수 = 0
  clearContents(tbody);

  count = 0;  // 횟수 = 0 -> (1회 실행시) ++count : 1
  total = 0;  // 합계 = 0 -> (1회 실행시) +value : diceValue (1~6 random)

}

startButton.addEventListener('click', handleRollingDice);
recordButton.addEventListener('click', handleRecord);
resetButton.addEventListener('click', handleReset);