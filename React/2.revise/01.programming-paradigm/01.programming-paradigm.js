//# 명령형 프로그래밍
const courses = [
  {
    id: 1,
    name: " imperative programming",
  },
  {
    id: 2,
    name: "declarative programming ",
  },
];

console.log("원본데이터\n", courses);

// 전개구문: 얕은 복사 (shallow copy)
let updateCourses = []; // [...courses]

// 기능1. 좌우 공백 제거
/* for(let i=0, l=courses.length; i<l; i++){
  const course = {...courses[i]}; // {...updateCourses}
  course.name = course.name.trim();
  updateCourses[i] = course;
} */

//^ for...of 구문 사용하기
for (const course of courses) {
  const updatedCourse = { ...course };
  updatedCourse.name = updatedCourse.name.trim();
  updateCourses.push(updatedCourse);
}

// 기능2. 대문자화
/* for (let i = 0, l = courses.length; i < l; i++) {
  const course = updateCourses[i];
  course.name = course.name.toUpperCase();
} */

//^ for...of 구문 사용하기
for (const course of updateCourses) {
  course.name = course.name.toUpperCase();
}

// 기능3. 배열 원소의 `name` 속성의 공백을 밑줄(_)로 변경하는 기능 추가
/* for (let i = 0, l = updateCourses.length; i < l; i++) {
  const course = updateCourses[i];
  course.name = course.name.replace(/\s+/g, "_");
} */

//^ for...of 구문 사용하기
for (let course of updateCourses) {
  course.name = course.name.replace(/\s+/g, "_");
}

console.log("업데이트 데이터\n", updateCourses);

/* 
^ console.assert() : 주어진 가정이 거짓인 경우 콘솔에 오류 메시지를 출력
^ Object.is() : 두 값이 같은 값인지 결정 (정적 메서드)
*/
console.assert(
  !Object.is(courses, updateCourses),
  "🚨 courses와 updateCourses는 동일한 객체이다."
);


//# 선언형 프로그래밍
const subjects = [
  {
    id: 1,
    name: " imperative programming",
  },
  {
    id: 2,
    name: "declarative programming ",
  },
];


//# JavaScript 프로그래밍 패러다임
// → 함수(function)를 사용해 구현합니다.

// → 클래스(class)를 사용해 구현합니다. (참고: https://mzl.la/3QrTKlF)