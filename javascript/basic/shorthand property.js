// 조원별명을 이용한 맞춤형 user 예제 만들고 출력하기
let user = {
  name: "notion girl",
  age: 26,
  mbti: "TTTT",
  favorite: "E**",
};

function createUser(
  name,
  age,
  mbti,
  favorite
){
  return {
      [name]: age,
      mbti,
      favorite
  };
}

const user1 = createUser("E**",27,"FFFF","notion girl");

console.log(user1); // {E**: 27, mbti: 'FFFF', favorite: 'notion girl'}