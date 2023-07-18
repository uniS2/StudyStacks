# function
- 함수 작성 연습을 위한 폴더입니다.  

---

## 목차

- [기본 문법](#문법)
  - [함수 표현식](#함수-표현식)
  - [콜백 함수](#콜백-함수)  
  - [화살표 함수](#화살표-함수)
- 예제
  - javascript-info [바로가기](/javascript/function/function.js)
  - n단 출력하기 [바로가기](/javascript/function/multiplication.js)  
    참고: 구구단 예제 변형 [바로가기](/javascript/loop/multiplation.js)
  - 나이별 주류 허용 문제 [바로가기](/javascript/function/drinking.js)

---

## 문법
**[함수]**
1. 선언
2. 표현식

```javascript
function 함수이름(매개변수) {
  // 함수 본문. return 값이 없으면 undefined 반환

  // 에러 직접 발생시킬 경우
  if (조건1 || 조건2) {  // Truthy할 경우 실행
    throw new Error(
      '에러 문구 입력'
    );
  }

  return ...;
}

 // 함수를 변수에 할당 후 출력 또는 바로 출력 통해 결과값 확인
let 변수 = 함수이름1(인자);  // 함수에 전달
console.log(변수);
```  
  
### 함수 표현식
```javascript
let 변수1 = function() {
  // 함수 본문
}

변수1;  // 함수 본문(소스 코드)을 문자형으로 바꾸어 출력

const 변수2 = 함수이름1;  // 함수를 복사해 다른 변수에 할당
변수2();  // 함수값 반환
```
- 자바스크립트는 다른 언어와 달리 함수를 특별한 종류의 **값**으로 취급한다.  
  
#### 함수 표현식 vs 함수 선언
| Category | function declaration | function expression |
|:--------:|----------------------|---------------------|
|생성시|독립된 구문 형태|표현식의 일부|
|호출|실제 실행 흐름이 해당 함수에 도달했을때|정의되기 전도 가능 -> *but. Bad Case*|
|lexical environment|함수 본문 전체 -> Binding Object. 언제든지|선언된 변수만 -> TDZ(임시 사각지역). 할당 전 불가|
|예시|var: undefined 반환 -> 함수 호출 X|let, const: 참조 오류|
|스코프|코드 블록 내 가능. 밖 불가능|블록 내외 모두 가능|
- 스크립트 실행 전, Global context 환경에서 전역에 선언된 함수 선언문을 찾고, 해당 함수를 생성한다.
- 따라서, 스크립트가 실행되기 전 '초기화 단계'에서 함수 선언 방식으로 정의한 함수가 생성된다.

### 콜백 함수
```javascript
function warning(notification, permit, prohibit){
  if (confirm(notification)) permit()
  else prohibit();
}

warning(
  "이곳은 위험할 수 있습니다. 들어가시겠습니까?",
  function() { console.log("입장을 허락합니다."); },
  function() { console.log("입장을 불허합니다."); }
);
``` 
- 함수를 인수로 전달하고 "나중에 호출(back)"
- 위와 같이 이름 없이 선언한 함수를 "익명함수(anonymous function)"이라 한다.  
  
### 화살표 함수  
- 함수로서의 기능만 수행하기 때문에 성능적으로 훨씬 가볍다.

#### 함수 선언문, 함수 표현식과 차이점
1. arguments 화살표 함수 -> ```...args ``` 
  
2. ```constructor```, 객체를 생성하는 생성자를 가지고 있지 않다.  
  
3. ```this```가 가리키는 대상이 다르다. - 부모의 this가 가리키는 window 출력 