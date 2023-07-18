/* -- // $ [javascript.info] 요소 검색하기
테이블과 폼이 있는 문서가 있다고 가정합시다.

아래 조건에 맞는 요소는 어떻게 찾을 수 있을까요?

id="age-table"인 테이블
테이블 내의 label 요소 모두(총 3개)
테이블 내의 첫 번째 td(Age가 적힌 곳)
name="search"인 form
폼의 첫 번째 input
폼의 마지막 input
별도의 창에서 table.html을 열어 브라우저 내 도구를 사용해 문제를 풀어보세요. (https://ko.javascript.info/task/find-elements/table.html)
------------------------------------------------------- */

// ^ 1. id="age-table"인 테이블
document.querySelector('#age-table');

// ^ 2. 테이블 내의 label 요소 모두(총 3개)
// table.getElementsByTagName('label')
document.querySelectorAll('#age-list label');  // NodeList(3) [label, label, label]

// ^ 3. 테이블 내의 첫 번째 td(Age가 적힌 곳)
// table.rows[0].cells[0]
// table.getElementsByTagName('td')[0]
document.querySelector('td');
table.querySelector('td');

// ^ 4. name="search"인 form
// let form = document.getElementsByName('search')[0]
document.querySelector('form[name="search"]');

// ^ 5. 폼의 첫 번째 input
document.querySelector('input');

// ^ 6. 폼의 마지막 input
let inputs = document.querySelectorAll('input');
inputs[inputs.length-1];