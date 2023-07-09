# loop
- while, do, do..while 반복문 작성 연습을 위한 폴더입니다.
---

## 목차

- [문법](#문법)
- 예제
  - [소수 구하기](#소수-구하기)
  - 구구단 출력하기 [바로가기](/javascript/04.loop-condition/multiplation.js)
    주어진 예제 함수로 생성하기 [바로가기](/javascript/04.function/multiplication.js)

---

## 문법
**[반복문]**
```javascript
/ 지역변수 선언시 블록 스코프 주의!
// begin, step 생략 가능
for(begin;condition;step){
  // 본문
  console.log(i);
  i++;
}


while(condition){
  // 본문
}

// 처음 한번은 무조건 실행
do {
  // 본문
} while (condition)
```

---

## 예제
### 소수 구하기
[바로가기](/javascript/04.loop/primeNumber.js)
```javascript
nextPrime:
for(;i <= number; i++){
  for(let j=2; j<i; j++){
    if(i % j == 0) continue nextPrime;
  }
  result.push(i)  // 배열에 구한 소수값 넣기
}

console.log(result)  // 출력
```

1. 일반적인 `continue`문은 가장 안쪽의 반복문에 적용되어 해당 반복문의 현재 반복을 건너뛰고 다음 반복으로 진행된다.
2. 허나, `continue nextPrime` 과 같이 레이블을 지정한 경우, 해당 레이블(`nextPrime`)이 붙은 외부 반복문으로 이동하여 다음 반복(step)을 시작하는 역할을 한다.
3. 따라서, nextPrime 은 레이블로 continue 문과 함께 사용되며, 다음 for 루프를 시작하는 지점을 나타낸다.