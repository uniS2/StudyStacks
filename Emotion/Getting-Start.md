# ![Emotion](/Emotion/assets/emotion.png) Getting Start

- [ Getting Start](#-getting-start)
- [👩‍🎤 Introduction](#-introduction)
  - [🤔 그렇다면 Emotion은 어떻게 사용할까?](#-그렇다면-emotion은-어떻게-사용할까)
    - [1. Framework Agnostic](#1-framework-agnostic)
    - [2. React](#2-react)
  - [사용예시](#사용예시)
- [👩‍🎤 Install](#-install)
  - [React + Emotion](#react--emotion)
  - [React + Styled Component](#react--styled-component)
  - [Babel plugin](#babel-plugin)
    - [.babelrc](#babelrc)
- [👩‍🎤 The css Prop](#-the-css-prop)
  - [Babel Preset](#babel-preset)
    - [.babelrc](#babelrc-1)
  - [JSX Pragma](#jsx-pragma)
  - [Object 스타일](#object-스타일)
  - [String 스타일](#string-스타일)
  - [스타일 우선순위](#스타일-우선순위)
- [👩‍🎤 Styled Components](#-styled-components)
- [👩‍🎤 Composition](#-composition)
- [👩‍🎤 Object Styles](#-object-styles)
  - [Object Styles example](#object-styles-example)
- [👩‍🎤 Nested Selectors](#-nested-selectors)
- [👩‍🎤 Media Queries](#-media-queries)
  - [재사용 가능한 미디어 쿼리](#재사용-가능한-미디어-쿼리)
  - [facepaint](#facepaint)
- [👩‍🎤 Global Styles](#-global-styles)
- [👩‍🎤 Package Summaries](#-package-summaries)

<br />
<br />

# 👩‍🎤 Introduction

**👩‍🎤 CSS-in-JS library designed for high performance style composition**

- **JavaScript로 CSS 스타일을 작동** 하도록 설계된 라이브러리
- 강력하고 예측 가능한 스타일 구성 제공
- source maps, labels, and testing utilities 같은 개발자 경험 또한 제공
- 문자열과 객체 스타일을 모두 지원

<br />

- 필요한 컴포넌트 페이지의 CSS 스타일 요소만 로딩 가능한 장점
- 모던 브라우저 뿐만 아니라, IE 11 브라우저 또한 지원

<br />

## 🤔 그렇다면 Emotion은 어떻게 사용할까?

### 1. [Framework Agnostic](https://emotion.sh/docs/@emotion/css)

- 설치: `npm i @emotion/css`
- [Vanilla 사용법](https://emotion.sh/docs/install#vanilla)

### 2. React

**1. `@emotion/react` 패키지 설치**

```bash
npm i @emotion/react
```

**2. 특징**

- `css` prop 지원

  1. 벤더 프리픽스 자동 제공 및 중첩 규칙, 미디어 쿼리 모두 지원
  2. `styled` 컴포넌트, 요소 스타일을 직접 설정 가능

- 서버 사이드 렌더링 지원
- 테마(Theme) 지원
- ESLint 플러그인 지원

<br />

## 사용예시

- [@emotion/react와 styled 컴포넌트 예시](/Emotion/i-write-you-initial/src/pages/Home.tsx) (효윤님, 동호님 감사합니다 🙇🏻‍♀️)
- vscode 확장프로그램: [vscode-styled-components](https://marketplace.visualstudio.com/items?itemName=styled-components.vscode-styled-components)

<br />
<br />

# 👩‍🎤 Install

## React + Emotion

- React 사용시 가장 활용하기 쉬운 방법은 ` @emotion/react` 패키지를 설치하여 사용하는 것입니다.

  ```bash
  npm i -D @emotion/react
  ```

- css prop는 동적으로 클래스 이름을 생성합니다.

  ```js
  import { css } from "@emotion/react";

  const green = css({
    color: "green",
    "&:hover": css({
      color: "hotpink",
    }),
  });

  const Green = () => <div css={green}>그린</div>;
  ```

<br />

## React + Styled Component

- `@emotion/styled` 패키지를 설치하여 `styled` React 컴포넌트를 활용할 수 있습니다.

  ```js
  import styled from "@emotion/styled";

  const Div = styled.div`
    color: whitesmoke;
    background: linear-gradient(#59bbe2, #9198e5);
    &:hover {
      color: blueviolet;
    }
  `;

  reder(<Div>바이올렛</Div>);
  ```

<br />

## Babel plugin

- Babel 플러그인을 설치하면 스타일 압축/최적화 하고, 소스맵과 라벨을 제공하여 보다 나은 개발자 경험을 제공합니다.

```bash
npm install --save-dev @emotion/babel-plugin
```

### .babelrc

`"emotion"`은 반드시 바벨 config `plugins` 리스트의 첫번째 항목으로 설정되어야합니다.

```json
{
  "plugins": ["@emotion", ...다른플러그인]
}
```

`env` 옵션을 사용할 경우 또한 반드시 Emotion 플러그인이 먼저 배치되어야 합니다.

```json
{
  "env": {
    "production": {
      "plugins": ["@emotion", ...otherBabelPlugins]
    }
  },
  "plugins": ["@emotion"]
}
```

<br />
<br />

# 👩‍🎤 The css Prop

- components를 스타일링하는 간결하고 유연한 API를 제공합니다.
- **Babel Preset** 을 추가하거나 **JSX Pragma** 를 설정하여 컴파일된 JSX 코드는 `React.createElement` API 대신 `jsx` 함수 사용할 수 있습니다.

  ```js
  // input
  <img src="avatar.png" alt="" />;

  // Before (React.createElement API)
  React.createElement("img", { src: "avatar.png", alt: "" });

  // After (jsx Pragma)
  jsx("img", { src: "avatar.png", alt: "" });
  ```

<br />

## Babel Preset

`CRA` 또는 사용자 정의 Babel 구성을 허용하지 않는 다른 도구에서는 정상적으로 작동하지 않습니다.

### .babelrc

[@emotion/babel-preset-css-prop](https://emotion.sh/docs/@emotion/babel-preset-css-prop)

```json
{
  "presets": ["@emotion/babel-preset-css-prop"]
}
```

```js
const Link = (props) => (
  <a
    css={{
      color: "hotpink",
      "&:hover": {
        color: "darkorchid",
      },
    }}
    {...props}
  />
);
```

<br />

## JSX Pragma

`css` prop를 사용하는 소스 파일 상단에 jsx pragma를 설정합니다. <br /> 이 옵션은 css prop 함수를 사용하거나, Babel 구성을 사용할 수 없는 프로젝트에서 사용해야 할 때 활용합니다. (`CRA`, `codesandbox`)

```js
/** @jsx jsx */
import { jsx } from "@emotion/react";
```

<br />

## Object 스타일

- 추가 import 없이 바로 사용 가능 합니다.
- ❗CSS 문법(kebab-case) 대신, JavaScript 문법(camelCase)을 사용해야 합니다.

```jsx
render(
  <div
    css={css({
      backgroundColor: "green",
      "&:hover": hotpink,
    })}
  >
    그린
  </div>
);
```

<br />

## String 스타일

- ❗반드시 `@emotion/react` 패키지에서 `css` 함수를 추출해 사용합니다.
- 태그 탬플릿 리터럴을 사용하여 내부에 CSS 문법(kebab-case)의 코드를 작성할 수 있습니다. <br /> ❗`css` 함수가 반환하는 값은 계산된 결과를 포함한 스타일 객체이며, CSS 클래스 이름 값으로 사용할 수 없습니다.

```jsx
import { css } from "@emotion/react";

const color = "green";

render(
  <div
    css={css`
      background-color: ${color};
      &:hover : hotpink;
    `}
  >
    This has a hotpink background.
  </div>
);
```

<br />

## 스타일 우선순위

- 공식문서 예제: [Style Precedence](https://emotion.sh/docs/css-prop#style-precedence)

# [👩‍🎤 Styled Components](/Emotion/Styled-Components.md)

# 👩‍🎤 Composition

- [야무쌤 노션 설명 참고](https://euid.notion.site/Emotion-c3ca462342ec4ddba5e1867520f80174)
- 😃 컴포지션은 Emotion에서 가장 강력하고 유용한 패턴 중 하나입니다.
- `css` 함수를 사용해 작성한 스타일 블록을 다른 컴포넌트의 스타일로 인터폴레이션(보간, 삽입) 할 수 있습니다.

```jsx
const base = css`
  color: hotpink;
`;

render(
  <div
    css={css`
      ${base};
      background-color: #eee;
    `}
  >
    This is hotpink.
  </div>
);
```

<br />
<br />

# 👩‍🎤 Object Styles

- 😃 객체를 통한 스타일 작성 또한 Emotion이 제공하는 강력한 패턴입니다.
- 일반적인 CSS 작성법인 kebab-case 대신 cameCase를 사용해 작성합니다.
- `css` prop과 함께 사용할 때 유용합니다.

<br />

## [Object Styles example](https://emotion.sh/docs/object-styles#examples)

1. css prop
2. styled
3. child 선택자
4. 미디어 쿼리
5. 숫자 값: 단위 없는 숫자 값은 `px` 처리
6. 배열: 각 항목이 병합된 스타일 적용
7. 대체(Fallbacks): 스타일 속성 값으로 배열을 사용 시 대체 값을 설정
8. css 함수: `css prop`에 `css` 함수의 실행 결과 값을 설정

   ```jsx
   const hotpink = css({
     color: "hotpink",
   });

   render(
     <div>
       <p css={hotpink}>핫핑크</p>
     </div>
   );
   ```

9. 컴포지션

   ```jsx
   import { jsx, css } from "@emotion/react";
   const hotpink = css({
     color: "hotpink",
   });

   const hotpinkHoverOrFocus = css({
     "&:hover,&:focus": hotpink,
   });

   const hotpinkWithBlackBackground = css(
     {
       backgroundColor: "black",
       color: "green",
     },
     hotpink
   );

   render(
     <div>
       <p css={hotpink}>핫핑크</p>
       <button css={hotpinkHoverOrFocus}>
         초점 이동 또는 마우스가 올라가면 핫핑크로 변경 됨
       </button>
       <p css={hotpinkWithBlackBackground}>
         배경 색상은 `검정`, 글자 색상은 `핫핑크`
       </p>
     </div>
   );
   ```

<br />
<br />

# 👩‍🎤 Nested Selectors

`&` 를 사용한 상위 요소가 컴포넌트를 중첩한 상황 스타일링

```jsx
import { css } from "@emotion/react";

const paragraph = css`
  color: white;

  header & {
    color: green;
  }
`;
render(
  <div>
    <header>
      <p css={paragraph}>헤더 내부에 위치한 단락은 녹색 글자로 표현됩니다.</p>
    </header>
    <p css={paragraph}>
      이 단락은 헤더에 포함되지 않았으므로 흰색 글자로 표현됩니다.
    </p>
  </div>
);
```

<br />
<br />

# 👩‍🎤 Media Queries

😃 블록 내부에 선택자를 사용하지 않고 미디어 쿼리를 사용합니다.

## 재사용 가능한 미디어 쿼리

- 반복 작업과 일관성을 위해 상수로 작성하여 사용합니다. (관리 용이)
- ❗문법의 불편함

```jsx
const breakpoints = [576, 768, 992, 1200];

const mq = breakpoints.map((bp) => `@media (min-width: ${bp}px)`);

render(
  <div>
    <div
      css={{
        color: "green",
        [mq[0]]: {
          color: "gray",
        },
        [mq[1]]: {
          color: "hotpink",
        },
      }}
    >
      Some text!
    </div>
    <p
      css={css`
        color: green;
        ${mq[0]} {
          color: gray;
        }
        ${mq[1]} {
          color: hotpink;
        }
      `}
    >
      Some other text!
    </p>
  </div>
);
```

<br />

## facepaint

- `facepaint` 패키지를 활용하면 각 미디어 쿼리에 배열로 포함되어야 하는 각 CSS 속성을 정의할 수 있어 편리합니다.
- ❗`facepaint`는 객체 스타일링에서만 적용됩니다.

```bash
pnpm i facepaint
pnpm i --save-dev facepaint
pnpm i --save-dev @types/facepaint
```

```jsx
import facepaint from "facepaint";

const breakpoints = [576, 768, 992, 1200];

const mq = facepaint(breakpoints.map((bp) => `@media (min-width: ${bp}px)`));

render(
  <div
    css={mq({
      color: ["green", "gray", "hotpink"],
    })}
  >
    Some text.
  </div>
);
```

<br />
<br />

# 👩‍🎤 Global Styles

- 스타일을 전역적으로 삽입한다는 차이점
- 단, 스타일이 변경되거나, Global 컴포넌트가 마운트 해제되면 전역 스타일 또한 함께 제거됩니다.
- [GlobalStyle.tsx 예제](/Emotion/i-write-you-initial/src/style/GlobalStyle.tsx) 🙇🏻‍♀️🙇🏻‍♀️

<br />
<br />

# 👩‍🎤 Package Summaries

- [공식문서](https://emotion.sh/docs/package-summary)
- [야무쌤 문서](https://euid.notion.site/2d416b9f8c244de0b582fe3bc1fd899f)
