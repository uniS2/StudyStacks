# 변수 선언 방식: var

## 1. var는 const, let과 달리 블록 스코프를 가지지 않는다.
- **전역 스코프** 또는 **함수 스코프** 를 가진다.
- if, for문 등의 코드 블럭은 블럭 수준의 렉시컬 환경이 만들어지지 않아 관통됨에 주의한다.

    ```JS
    // 전역 스코프 예시
    if (true) {
      var test = false;
    }
    
    alert(test);  // false. if 블록이 끝났지만 접근 가능하다.
    ```

    ```JS
    // 함수 스코프 예시 (함수 레벨 변수)
    function isPayment() {
      if (true) {
        var isPayment = true;
      }

      alert(isPayment);   // 제대로 값을 출력한다.
    }

    isPayment();
    alert(isPayment);   // ReferenceError: phrase is not defined
    ```  

## 2. 변수의 중복 선언을 무한대로 허용한다.  

## 3. **호이스팅** - 선언 전에도 사용가능한 ```var```
    ```js
    function isPayment() {
      isPayment = true;

      alert(isPayment);

      var isPayment;
    }

    isPayment();
    ```

  - 함수 스코프 내에서 ```var```로 선언한 모든 변수는 함수의 최상단에 **끌어 올려지기(hoisted)** 때문에 선언 전에도 사용가능하다.

  - 단, **선언은 호이스팅 되지만 할당은 호이스팅 되지 않는다.**

## 4. **즉시 실행 함수 표현식** (IIFE)
  - var도 블록 레벨 스코프를 가질 수 있게 설정하는 실행 함수 표현식을 말한다.
  - 함수 표현식을 만들고 바로 호출하여 실행하는 구조이며, 자신만의 변수를 가지고 있다.
  ```js
  (function() {

  let sayHello = "Hello";

  alert(sayHello); // Hello

  })(); 
  ```

- 참고자료: [오래된 var | 모던 JavaScript 튜토리얼](https://ko.javascript.info/var)
