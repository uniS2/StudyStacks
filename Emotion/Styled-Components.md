# 👩‍🎤 Styled Components

- `@emotion/styled` 패키지가 제공하는 `styled` 함수를 통해 스타일이 첨부된 React 구성 요소를 만드는 방법입니다.
- [styled-components](https://styled-components.com/)와 [glamorous](https://glamorous.rocks/)에 많은 영향을 받았습니다.
- 실습 예제: [EmotionStyled 컴포넌트](/Emotion/i-write-you-initial/src/pages/EmotionStyled.tsx)

## elements와 components 스타일링

`styled` 함수는 html 태그나 React 컴포넌트를 통한 스타일링을 제외하면 `css` 함수와 유사합니다.

```jsx
const Button = styled.button`
  color: turquoise;
`;

render(<Button>)
```

## props에 기반한 스타일 설정

함수에 전달된 props를 읽어 동적 스타일링 할 수 있습니다.

```jsx
const Button = styled.button`
  color: ${(props: PropsType) => (props.primary ? "hotpink" : "green")};
`;

function EmotionStyled() {
  return (
    <>
      <Button primary>메인컬러</Button>
      <Button>서브컬러</Button>
    </>
  );
}
```

## 컴포넌트 스타일 확장

- HTML 표준 컴포넌트가 아닌, 사용자가 작성한 React 컴포넌트 스타일을 확장할 수 있습니다.
- ❗컴포넌트 스타일 확장을 위해 `className` 속성 설정이 필요합니다.

```jsx
const Basic = ({ className }: PropsType) => (
  <div className={className}>스타일 확장</div>
);

const Expend = styled(Basic)`
  color: hotpink;
`;

render(<Expend />);
```

## `withComponent` 메서드 사용하여 렌더링 요소 변경

- React 컴포넌트의 `withComponent` 메서드를 사용해 렌더링 될 요소 이름을 변경할 수 있습니다.
- styled-components의 [withComponent 방식](https://styled-components.com/docs/api#withcomponent)과 동일

```jsx
const Section = styled.section`
  background: cornflowerblue;
  color: #fff;
`;

const Aside = Section.withComponent("aside");
```

## 스타일 컴포넌트 타겟팅

- styled-components와 유사하게, emotion 스타일 컴포넌트 또한 다른 컴포넌트를 CSS 선택자 처럼 대상으로 설정할 수 있습니다.
- ❗`@emotion/babel-plugin`를 사용해야 합니다.
- 객체 스타일 방식에서도 사용할 수 있습니다.

```jsx
const Child = styled.div`
  color: red;
`;

const Parent = styled.div`
  ${Child} {
    color: green;
  }
`;

render(
  <div>
    <Parent>
      <Child>부모 컴포넌트 내부에 위치한 자식 컴포넌트 (Green)</Child>
    </Parent>
    <Child>부모 컴포넌트 내부에 위치하지 않은 자식 컴포넌트 (Red)</Child>
  </div>
);
```

## 객체 스타일

```jsx
// This API was inspired by glamorous. ❤️

const H1 = styled.h1(
  {
    fontSize: 20,
  },
  (props) => ({ color: props.color })
);

render(<H1 color="lightgreen">This is lightgreen.</H1>);
```

## 커스터마이징 prop 포워딩

- Emotion은 기본적으로 모든 props (예외 theme)를 컴포넌트에 전달하고, HTML 표준 속성만 필터링 하여 다시 props로 전달합니다.
- `shouldForwardProp` 함수를 전달하여 사용자 설정할 수 있습니다.
- `@emotion/is-prop-valid` 패키지의 `isPropValid` 함수를 사용해 HTML 속성으로 유효하지 않은 prop 또한 filter할 수 있습니다.
- [styled-components](https://styled-components.com/docs/api#transient-props)는 더 쉬운 방식을 제공합니다.

```jsx
import isPropValid from "@emotion/is-prop-valid";
// ..

const H1 = styled("h1", {
  shouldForwardProp: (prop) => isPropValid(prop) && prop !== "color",
})((props) => ({
  color: props.color,
}));

render(<H1 color="lightgreen">커스터마이징 prop 포워딩</H1>);
```

## 동적 스타일 컴포징

prop에 기반한 동적 스타일을 만들고, 다른 컴포넌트와 병합(사용)합니다.

```jsx
import styled from "@emotion/styled";
import { css } from "@emotion/react";

const dynamicStyle = (props) =>
  css`
    color: ${props.color};
  `;

const Container = styled.div`
  ${dynamicStyle};
`;
render(<Container color="lightgreen">동적 스타일 컴포징</Container>);
```

## `as` prop

스타일 컴포넌트의 렌더링 되는 요소를 변경합니다.

```jsx
const Button = styled.button`
  color: hotpink;
`;

render(
  <Button as="a" href="https://github.com/emotion-js/emotion">
    Emotion ⌁ GitHub
  </Button>
);
```

## 중첩 컴포넌트

& 기호를 사용해 컴포넌트 선택자를 중첩합니다.

```jsx
const Nesting = styled("span")`
  color: lightgreen;

  & > strong {
    color: hotpink;
  }
`;

render(
  <Nesting>
    This is <strong>nested</strong>.
  </Nesting>
);
```
