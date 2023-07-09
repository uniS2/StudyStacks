// 출처: javascript.info
// 소수 구하는 문제

let number = 10;
let i = 2;
let result = [];  // 결과값을 출력할 배열

nextPrime:
for(;i <= number; i++){
  for(let j=2; j<i; j++){
    if(i % j == 0) continue nextPrime;
  }
  result.push(i)  // 배열에 구한 소수값 넣기
}

console.log(result)  // 출력

/* nextPrime 은 레이블로 continue 문과 함께 사용되며, 다음 for 루프를 시작하는 지점을 나타낸다.
일반적인 `continue`문은 가장 안쪽의 반복문에 적용되어 해당 반복문의 현재 반복을 건너뛰고 다음 반복으로 진행된다.
허나, 'continue nextPrime' 과 같이 레이블을 지정한 경우, 해당 레이블(nextPrime)이 붙은 외부 반복문으로 이동하여 다음 반복(step)을 시작하는 역할을 한다. */