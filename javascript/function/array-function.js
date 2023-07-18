// 함수 선언 -> 일반 함수 (표현)식
// 수업 복습
let calculateTotal = function () {
  let total = 0;

  // * 1. for 문
  /* for (let i = 0; i < arguments.length; i++){
    // console.log(arguments[i]);
    total += arguments[i];
  } */

  // * 2. for..of 문
  /* for (let value of arguments){
    total += value;
  } */

  // ? 배열 아니라 배열 메서드-반복문 사용 불가능
  // * 3. forEach 빌려쓰기
  /* Array.prototype.forEach.call(arguments, function (item) {
    total += item;
  }) */

  // * 4. slice 빌려쓰기 -> 배열로 만들기
  // Array의 slice 기능을 유사배열인 arguments가 call() 메서드를 통해 빌려서 진짜 배열을 realArray에 담는다.
  let realArray = Array.prototype.slice.call(arguments);
  realArray.forEach(function(item){
    total += item;
  })


  return total;
}

calculateTotal(1000, 500, 200, 6500, 100);