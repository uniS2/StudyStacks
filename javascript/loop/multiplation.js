/* continue 문을 연습하고 구구단 출력하기 반복문을 만들어보자 -------------*/
// 1 ~ 10 홀수만 내림차순으로 출력하기
for(let i = 10; i>0; i--) {
    if (i % 2 == 1){
        // console.log(i);
    }
};

// continue를 사용하여 !!
for(let i = 10; i>0; i--) {
    if (i % 2 === 0){
        continue;
    }
    // console.log(i);
};


// 구구단: 2~9단 출력하기

// for문
for(let i = 2; i <= 9; i++){
    for(let a = 1; a <= 9; a++){
        let multi = i * a;
        console.log(`${i} x ${a} = ${multi}`);
    }
    // console.log('\n');
};


// while문
let i = 2;

while (i < 10){
  let j = 1;
  while(j < 10) {
    console.log(`${i} x ${j} = ${i*j}`);
    j++;
  }
//   console.log("\n");
  i++;
}


// 구구단: 2의 배수가 들어가지 않는 구구단
for(let i = 2; i <= 9; i++){
    for(let a = 1; a <= 9; a++){
        let multi = i * a;

        if (multi % 2 !== 0){
          console.log(`${i} x ${a} = ${multi}`);
        }
    }
    // console.log('\n');
};

for(let i = 1; i <= 9; i++){
    for(let a = 1; a <= 9; a++){
        let multi;
        multi = i * a;
        
        if (multi % 2 === 0){
            continue;  // continue 문 사용
        }

        console.log(`${i} x ${a} = ${multi}`);
    }
    console.log('\n');
};