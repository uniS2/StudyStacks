/* --- // $ [javascript.info] 후손 노드 개수 세기
ul과 li 노드로 구성된 트리 구조 문서가 있다고 가정해 봅시다.

li 노드 전체를 대상으로 아래와 같은 작업을 하려 합니다. 조건을 만족시킬 수 있는 코드를 작성해 보세요.

1. li 노드 안에 있는 텍스트를 출력
2. li 노드 아래에 있는 모든 <li> 태그의 개수를 출력
https://ko.js.cx/task/tree-info/solution/
------------------------------------------------------- */

// 1. li 노드 안에 있는 텍스트를 출력
for (let li of document.querySelectorAll('li')){
  let title = li.firstChild.data;
  // let title = li.firstElementChild

  title = title.trim();

  let count = li.querySelectorAll('li').length;

  console.log(`${title} : ${count}`)
}


/* --- // $ [javascript.info] 주석 안의 태그
스크립트를 실행 결과를 예측해보세요.
------------------------------------------------------- */

  let body = document.body;   // <body><!--BODY--></body>

  body.innerHTML = "<!--" + body.tagName + "-->";

  // alert( body.firstChild.data ); // 얼럿 창엔 어떤 내용이 출력될까요?
  // let answer = prompt('답은 무엇인가요?','')

  (body.firstChild.data == "BODY") && ('정답입니다!')


/* 
<body>의 콘텐츠가 <!--BODY-->로 대체된다.
tagName은 항상 대문자이기 때문에 body.tagName은 "BODY"가 된다.

<body>의 콘텐츠가 교체되면서 주석이 유일한 자식 노드가 된다.
주석 노드의 data 프로퍼티엔 주석 내용(<!--...--> 안쪽의 내용)이 저장되므로 data 프로퍼티의 값은 "BODY"입니다.
 */