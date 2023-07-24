// #05.randomDice 실습

// [phase-1] 주사위 굴리기
// 1. dice animation 불러오기
// 2. 주사위 굴리기 버튼을 클릭하면 diceAnimation 실행 될 수 있도록.
// 3. 토글시 애니메이션 재생/정지
// 4. 클로저 + IIFE 를 사용한 변수 보호

getNode('.buttonGroup > button')  // 맨 처음요소만 반환
const buttonList = getNodes('.buttongroup > button')  // buttonList[0]
const [startButton, recordButton, resetButton] = getNodes('.buttongroup > button')

// 1-4. 전역 변수 오염
// let isClicked = false;  // 1-3
// let stopAnimation;  // 1-3

/* // 1-4. 클로저
function 함수 1{
  변수 선언 1
  변수 선언 2

  function 함수 2{
    return 함수2 본문
  }
} */



const handleRollingDice = (() => {
  let isClicked = false;  // 1-4
  let stopAnimation;  // 1-4

  // diceAnimation ()  // 1-1
  // 1-3. 밖에서 선언된 isClicked = false -> if(!isClicked) 문에서 조건이 true가 되어서 setInterval 실행. => 이후 isClicked = !isClicked; 문을 만나서 isClicked = true;
  // 1-3. 두 번째 실행: isClicked = true -> if(!isClicked) 문에서 조건이 false가 되어서 clearInterval(stopAnimation) 실행 => 중단. => isClicked = !isClicked; 문을 만나서 isClicked = false;

  return () => {  // function(){
    if(!isClicked) {
      /* setInterval(() => { // 1-2
        diceAnimation ()
      }, 100); */
      stopAnimation = setInterval(diceAnimation, 100);  // 주사위가 돌아가는 애니메이션
    } else {
      clearInterval(stopAnimation)
    }
    isClicked = !isClicked;
  }
})();




startButton.addEventListener('click', handleRollingDice);