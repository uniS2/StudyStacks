// 메소드와 이 메소드가 가리키는 this 찾기
/*-------------------------------------------
1. 계산기 만들기
calculator라는 객체를 만들고 세 메서드를 구현해 봅시다.

read()에선 프롬프트 창을 띄우고 더할 값 두 개를 입력받습니다. 입력받은 값은 객체의 프로퍼티에 저장합니다.
sum()은 저장된 두 값의 합을 반환합니다.
mul()은 저장된 두 값의 곱을 반환합니다.
let calculator = {
  // ... 여기에 답안 작성 ...
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );
--------------------------------------------*/

//! this를 써주어야 현재 객체 값을 받아온다..!
let calculator = {
  read() {
    this.a = +prompt("첫 번째 값?:", "");
    this.b = +prompt("두 번째 값?:", "");
  },
  sum() {
    return this.a + this.b;
  },
  mul() {
    return this.a * this.b;
  },
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());


//# 수업 실습 ----------------------------------------------

//* 객체 안에 메서드는 concise method(일반함수 구문) - this: 호출대상
//^ method 안에 함수는 무조건 arrow function - this: 부모의 실행 컨텍스트 탐색

const user = {
  foo() {
    console.log(this);
    const bar = () => {
      console.log(this); //^ 부모(foo())의 this(객체 user)를 가져옴
    };
    bar(); //^ 알아서 실행
  },
};

const eatingList = {
  total: 0,
  date: "2023. 07. 13",
  tabIndex: 5,
  menu: [
    { name: "떡볶이", price: 5000, count: 10 },
    { name: "치킨", price: 15000, count: 3 },
    { name: "마라탕", price: 8000, count: 5 },
  ],
  totalPrice() {
    //* 1. for..of문 이용
    /* for(let item of eatingList.menu){
      this.total += item.price * item.count;
    }
    return this.total; */

    //* 2. forEach문 이용
    /* this.menu.forEach((item) => {
      this.total += item.price * item.count;
    })
    return this.total; */

    //* 3. reduce() 메서드 이용
    //! redece(), map() 메서드는 return 필수
    return this.menu.reduce(
      (price, item) => price + item.price * item.count,
      0
    );
  },
};

eatingList.totalPrice();

//* JavaScript의 this는 런타임 중에 결정되므로 상대적으로 유연
// 메서드 단축 구문

const shopingCategory = {
  name: "사야할 상품 목록",
  items: [
    { id: "A1", text: "떡볶이 밀키트", price: 3500 },
    { id: "F1", text: "딸기", price: 10000 },
  ],
  getItem(index) {
    return this.items[index];
  },
  addItem(newItem) {
    this.items.push(newItem);
  },
};

shopingCategory.addItem({
  id: "C14",
  text: "양파링",
  price: 2500,
});

/* for (let i = 0; i < shopingCategory.items.length; i++) {
  console.log(shopingCategory.getItem(i));
} */
/* shopingCategory.items.forEach(element => {
  console.log(element);
}); */
