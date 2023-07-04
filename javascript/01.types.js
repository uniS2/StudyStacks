/* 자료형
1. Number : 특수 숫자 값 포함한다. (Infinity, -Infinity, NaN)
2. BigInt : 정수의 한계는 ±2**53으로 숫자 뒤에 n을 붙인다.
3. String : ` template literal (template string)
4. Boolean. : true, false
*/

// 숫자형
let _billion = 1_000_000_000; // 언더바 사용
let billion = 1e9 // 10진수는 e

let width = '123.456px';
console.log(parseInt(width)); // 123. Math.floor
console.log(parseFloat(width)); // 123.456

console.log(Math.random()); // 0~1 난수 발생


// 문자형
// 백틱 이용한 문자열 보간(String Interporation) = template literal
function sum(a, b) {
  return a+b;
}
console.log(`3 + 5 = ${sum(3, 5)}`);


/*------ 자신만의 독립 자료형 형성 ------
5. Null : nothing. empty. unknown
6. Undefined : 값이 할당되지 않는 상태로 이런 변수의 초기값을 의미한다.
------------------------------------*/


/*
7. Object (array, function) : 데이터 컬렉션 이나 복잡한 개체(entity) 를 표현한다. <-> 원시(primitive) 자료형
8. Symbol : 객체의 고유한 식별자 (unique identifier) 로서 map과 const 만으로 해결되지 않는 값들을 의미한다. 라이브러리 개발자 등이 주로 사용한다. */


// typeof
// 내장 객체 또한 객체형
console.log(typeof (Math)); // "object"

// null은 별도의 고유한 자료형을 가지는 특수 값으로 객체가 아니나 객체로 나온다.이는 오류이나 하위 호환성 유지를 위해 수정하지 않은 상태이다.
console.log(typeof null); // "object"

// 자료형 중 함수형은 따로 없으나 하위 호환성 유지를 위해 수정하지 않은 상태이다.
console.log(typeof alert);  // "function"