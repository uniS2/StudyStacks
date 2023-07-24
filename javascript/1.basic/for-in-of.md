# for..in, for..of 반복문 이해하기

---

# 목차

- [for..in 반복문](#forin)
- [for..of 반복문](#forof)
- [forEach 반복문](#foreach)

---

## for..in
- 객체에 주로 사용한다.
- 배열에 사용할 경우 순환을 할 수 있으나 용도에 적합하지 않다. (진짜 객체의 설정한 키 값까지 나온다.) [MDN 설명](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/for...in)
  ```javascript
  const book = {
    title: "Pride and Prejudice",
    author: {
      name: "Jane Austen",
      counrty: "United Kingdom"
    },
    language: "english",
    genre: "romance",
    year: '1813.01.28'
  }

  // for..in 문을 통해 조회한다
  for(let key in book) {
    console.log(key, book[key]);
  }
  ```  

- Enumerable 한 속성만 조회한다.
  - 자바스크립트에서 객체 속성들은 내부적으로 사용하는 숨겨진 속성들을 가지고 있다.
  - 그 중 하나인 ```[[Enumerable]]```(셀 수 있는) 값이 for in 구문에서 true로 셋팅이 되어 모든 열거 가능한 속성에 대해 반복할 수 있다. (열거형 속성)
  - 객체의 모든 내장 메서드를 비롯해 각종 내장 프로퍼티 같은 비열거형 속성은 반복되지 않는다.
  
### 단점 
- 객체의 prototype도 반복문으로 출력이 된다.
  ```javascript
  Object.prototype.nickName = 'Jane';
  // for..in 문을 통해 조회한다
  for(let key in book) {
     console.log(`key : ${key} / value : ${book[key]}`);
  }
  ```
  
  ![결과](./assets/04.for-add-prototypeResult.png "for..in문 조회 결과")  
    
### 해결방법
- "객체 자신(Own)의 속성(Property)을 가지고(has) 있는지 확인하는 방법"이 덮어쓰여질 수 있는 위험에 대처하는 안전한 방식은?
- ```let key = book.hasOwnProperty(key)``` 와 같이 생성한 객체에서 속성을 조회할 경우 생성한 객체에 ```hasOwnProperty```속성을 생성하는 등의 위험이 있어 적절하지 않다.
- 따라서, 자바스크립트 언어 자체의 능력. 진짜 객체의 원본(prototype)에서 call() 메서드를 통해 hasOwnProperty 기능을 빌려 생성한 객체 book의 요소만 불러온다.

  ```javascript
  for(let key in book){
    // Object.prototype.hasOwnProperty.call(book,key);
    if(({}).hasOwnProperty.call(book, key)){
      console.log(`key : ${key} / value : ${book[key]}`);
    }
  }
  ```  
    
---  
  
## for..of
- 배열에 주로 사용한다.
- String, arguments, NodeList(getElementByClassName,querySelectorAll), Map, Set과 같은 자료형에도 사용이 가능하다. => iterable인 자료형에 적용가능
  - iterable 자료형에 대한 간단히 설명하면 ```[Symbol.iterator]```라는 메서드를 가지고 있는 자료형이다.
  - ```[Symbol.iterator()]```


---  
  
## forEach  
- Array 객체, Map, Set 등에서 사용가능한 메서드이다.
- forEach 구문의 인자로 callback 함수를 등록 할 수 있다.
  ```javascript
  let items = ['itme1', 'item2', 'item3'];

  items.forEach(function(item) {
    console.log(item);
  })
  ```

---

#### 참고자료
for in, for of 반복문 [블로그 바로가기](https://velog.io/@hoon_dev/JavaScript-for-in-for-of-%EB%B0%98%EB%B3%B5%EB%AC%B8-%EC%9D%B4%ED%95%B4%ED%95%98%EA%B8%B0)