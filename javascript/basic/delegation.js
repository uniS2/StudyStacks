// ? 바닐라 자바스크립트

const data = [
  {
    id: 1,
    src: "visual1.jpg",
    alt: "모던한 테이블과 화분의 조화를 표현한 공간",
  },
  {
    id: 2,
    src: "visual2.jpg",
    alt: "강렬한 의자의 색상과 따뜻한 느낌의 공간",
  },
  {
    id: 3,
    src: "visual3.jpg",
    alt: "호텔 라운지 느낌의 편안한 의자가 있는 공간",
  },
  {
    id: 4,
    src: "visual4.jpg",
    alt: "물방을 모양의 독특한 디자인의 의자들을 나열한 공간",
  },
];

const nav = getNode(".navigation");
// const list = getNodes('.navagation li') // Nodelist -> forEach
const visualImage = getNode(".visual img");

function handleSlider(e) {
  e.preventDefault();

  const target = e.target.closest("li");
  const anchor = e.target.closest("a");

  if (!target || !anchor) return;

  // * 3) for, forEach => classList.remove ( removeClass )
    /* list.forEach((li) => {
    removeClass(li, 'is-active');
  }) */

  // * 2) children => htmlcollection  : 자식 요소들을 수집
  const list = [...navigation.children];
  const index = attr(target, "data-index");

  list.forEach((li) => removeClass(li, "is-active"));
  addClass(target, "is-active");

  visualImage.setAttribute("src", `./assets/part01/${data[index - 1].src}`);
  visualImage.setAttribute("alt", data[index - 1].alt);
}

nav.addEventListener("click", handleSlider);
