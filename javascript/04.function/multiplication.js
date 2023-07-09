// 04.loop-condition/multiplation.js 예제 함수로 만들기

// 함수 만들기
// n ~ 9 단 출력하기
function multiplication(n) {
  for (let i = n; i <= 9; i++){
    for (let j = 1; j < 10; j ++) {
      console.log(`${i} x ${j} = ${i*j}`);
    }
    console.log('\n');
  }
  let condition = (n !== 9) ? `${n}~9단 출력하기` : '9단 출력하기';
  return condition;
}

multiplication(9);


// n 단 출력하기
function multiply(n) {
  for(let i = 1; i < 10; i++){
    console.log(`${n} x ${i} = ${n*i}`);
  }
  return `${n}단 출력하기`;
};

multiply(8);