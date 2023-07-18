# 메서드. method

---

# 목차

- 개념정리 [바로가기](https://www.notion.so/925ebf9e539a463f91b3ee5192881171?pvs=4#c901ada7dffe442a857082c4d79d7d04)
- [예제](#예제)
- 실습 [바로가기](/javascript/object/method-this.js)

---

## 예제
[메소드와 이 메소드가 가리키는 this 찾기 - 객체 리터럴에서 'this' 사용] [바로가기](https://ko.javascript.info/task/object-property-this)
1. 함수 makeUser는 객체를 반환합니다.

이 객체의 ref에 접근하면 어떤 결과가 발생하고, 그 이유는 뭘까요?
```javascript
function makeUser() {
  return {
    name: "John",
    ref: this
  };
};

let user = makeUser();

alert( user.ref.name ); // 결과가 어떻게 될까요?
```

- 나의 대답: this는 window를 가리키므로 에러
- 답지: this 값을 설정시 객체 정의가 사용되지 않기 때문이다. (호출 시점에 결정)
  - 위 코드에서 makeUser() 내 this는 함수로써 호출되었기 때문에 undefined가 된다.
  - this 값은 전체 함수가 되버린다.


[체이닝][바로가기](https://ko.javascript.info/task/chain-calls)
2. 