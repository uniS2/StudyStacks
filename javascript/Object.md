# 객체

---

# 목차

- [arguments](#arguments)

---

## arguments
- 함수에 전달된 인수에 해당하는 ```Array``` 형태의 객체이다. (유사 배열)
- 함수 안에서만 접근 가능한 인수들의 집합 객체로서 배열과 유사한 형태를 지닌다.
- 매개변수를 전달하지 않아도 자동으로 생성해 준다. 
- 코드 실습 [바로가기](/javascript/function/array-function.js)
```javascript
// 다음과 같은 형태로 출력
function func0() {
  console.log(arguments);
}
```
