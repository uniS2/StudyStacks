// 출처: 본인. uniS2
// 나이별 주류 허용 문제

/*  STEP1 ----------------------------------------------------------------
function checkAge(age) {
  if (age > 19) {
    return true;
  } else {
    return confirm('청소년에게는 주류를 판매할 수 없습니다.');
  }
}

다음 문제를 물음표 연산자 ? 와 OR 연산자 || 를 사용하여 바꾸시오. ----------------------------------------------------------------*/

// 물음표 연산자 ?를 사용하여 본문 작성하기
function checkAge(age) {
  return (age > 19) ? true : confirm("청소년에게는 주류를 판매할 수 없습니다.");
}

// OR 연산자 ||를 사용하여 본문 작성하기
function checkAge2(age) {

  return (age > 19) || confirm("청소년에게는 주류를 판매할 수 없습니다.");
}

// 실행방법
// 변수 age는 prompt 메서드 이용하기
// let age = prompt("당신의 나이는 몇 살 입니까?", "");
// checkAge(age);
// checkAge2(age);


/* STEP2 ----------------------------------------------------------------
나이가 20살인 경우에는 '성인이 된 것을 축하합니다.'라는 문구를 출력한다.
나이가 19살 이하인 경우에는 '청소년에게는 주류를 판매할 수 없습니다.'라는 경고를 출력하여 주세요.
----------------------------------------------------------------*/

// if 문 사용하기
function checkAge(age) {
  if (age > 20) {
    return true;
  } else if (age === 20) {
    return '성인이 된 것을 축하합니다.';
  } else {
    throw new Error('청소년에게는 주류를 판매할 수 없습니다.');
  }
}

// 삼항 연산자 사용하기
function checkAge(age) {
  return (age > 20) ? true
  : (age === 20) ? '성인이 된 것을 축하합니다.' : '청소년에게는 주류를 판매할 수 없습니다.';
}

// 실행
// let age = +prompt("당신의 나이는 몇 살 입니까?", "");
// checkAge(age);


/* STEP3 ----------------------------------------------------------------
변수 age를 숫자로 입력하지 않을 경우 경고를 출력하여 주세요.
----------------------------------------------------------------*/
function numberError(age){
  if (typeof(age) != 'number') {
    throw new Error('checkAge 함수의 매개변수는 숫자를 입력해야 합니다.');
  }
  // return (typeof(age) == 'number' ) || confirm('checkAge 함수의 매개변수는 숫자를 입력해야 합니다.');
}


function checkAge(age) {
  numberError(age);
  
  if (age > 20) {
    return true;
  } else if (+age === 20) {
    return '성인이 된 것을 축하합니다.';
  } else {
    throw new Error('청소년에게는 주류를 판매할 수 없습니다.');
  }
}

// 실행
let age = prompt("당신의 나이는 몇 살 입니까?", "");
checkAge(age);