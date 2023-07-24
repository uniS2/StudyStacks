# 메모이제이션 (memoization)

---

# 목차

- [memoization 기술은 왜 필요할까?](#memorization-은-왜-필요할까)
- [피보나치 수열 예제](#피보나치-수열)
- [수업복습: memo.js](#수업-복습--memojs)

---

## memoization 은 왜 필요할까?
- memoization이란?
  - '함수의 입력과 출력을 저장하고, 같은 입력이 들어오면 저장된 출력을 반환하는 기술' 이다.
  - 풀어서 설명하면 '컴퓨터 프로그램이 동일한 계산을 반복할 때, 이전에 계산한 값을 메모리에 저장함으로써 동일한 계산의 반복 수행을 제거하여 프로그램 실행 속도를 빠르게 하는 기술' 이다.
  - 함수를 여러 번 호출해도 성능 저하를 최소화 할 수 있다.
- 즉, **함수의 성능을 향상**하고, **리소스를 절약**한다.

### 사용 방법
  1. (간단한 방법) 함수의 입력과 출력을 저장하는 객체를 생성하는 방법으로, 호출시 객체에서 입력을 찾고, 없다면 함수를 호출하고 출력을 저장한다.
   => 이 방법을 사용해보자!
  2. 함수의 입력을 키로 출력을 값으로 하는 맵을 생성하는 방법도 있다.

## 피보나치 수열
- 예시
```javascript
fib(n) {
   if n is 1 or 2, return 1;
   return fib(n-1) + fib(n-2); }
```
- 메모이제이션을 사용하는 자바스크립트 코드
   
```javascript
const fibo = (num, memo) => {

      memo = memo || {} // memoization : 빈객체 생성

      if(memo[num]){
          return memo[num]
      }
      if(num<=1){
          return num;
      }
      return fibo(num-1, memo) + fibo(num-2, memo); }
```
  - memo[num]의 값이 있을 경우 저장한 출력을 반환한다.
  - 없을 경우 재귀 함수를 통해 값을 찾은 후 도출한 출력값을 저장한다.

## 수업 복습 : memo.js
```javascript
// 1. 빈 객체 생성
const cache = {}

// 2. callback 
export const memo = (key, callback) => {
  if(!callback) return cache[key];  // 해당 키를 가지는 변수만 반환

  if(cache[key]){
    console.warn(`${key}는 이미 캐시된 값이 존재합니다.`);
    return cache[key]
  }

  cache[key] = callback();  // computed property
  console.log(cache);
}

// 3. memoization
memo('cube', () => getNode('#cube'))  // getNode 한 값 자체가 casche[key]의 value로 설정됨
memo('cube', () => 1,2,3) // * 덮어쓰기 되므로 중복 처리!

console.log(memo('cube'));  // div#cube
```
1. `memo` 함수
    - 함수의 입력값과 출력값의 쌍을 `cache` 객체에 저장한다.
    - 두 번째 호출시, `cache` 객체에 이미 `cube` 키에 대한 값이 저장되어 있으므로, `callback()` 함수를 호출하지 않고 `cache` 객체에서 값을 반환한다.

2. memoization 사용
    - `getNode` 한 값 자체가 `cache[cube]` 의 `value` 값으로 설정된다.
    - 이미 설정되어 있는 값을 다시 설정하므로, `cache` 객체의 `cube` 에 대한 값을 덮어씌운다.