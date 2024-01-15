/** @jsxImportSource @emotion/react */
// https://emotion.sh/docs/object-styles#examples
import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import facepaint from 'facepaint';

interface propsType {
  fontSize?: number;
}

const H1 = styled.h1`
  color: gray;
  padding: 1rem;
`;

const Button = styled.button(
  {
    color: 'pink',
    backgroundColor: 'cornflowerblue',
  },
  (props: propsType) => ({
    fontSize: props.fontSize,
  })
);

function Object() {
  const navigate = useNavigate();

  // `Facepaint` 패키지 활용한 미디어 쿼리
  const breakpoints = [576, 768, 992, 1200];
  const mq = facepaint(breakpoints.map((bp) => `@media (min-width: ${bp}px)`));

  return (
    <>
      <H1>css prop | child 선택자</H1>
      <div
        css={{
          color: 'pink',
          backgroundColor: 'cornflowerblue',
          '& .name': {
            backgroundColor: 'orange',
          },
        }}
      >
        핑크
        <div className="name">오렌지</div>
      </div>

      <H1>styled</H1>
      <Button fontSize={16}>핑크 컬러 버튼</Button>

      <H1>미디어쿼리</H1>
      <div
        css={{
          color: 'white',
          '@media(min-width: 37.5rem)': {
            color: 'orange',
          },
        }}
      >
        스크린 너비가 넓으면 `오렌지`, 너비가 좁으면(600px 미만) `화이트`
      </div>

      <H1>숫자 값</H1>
      <div
        css={{
          position: 'relative',
          zIndex: 200,
          padding: 8,
        }}
      >
        padding 8px, z-index 200
      </div>

      <H1>배열</H1>
      <div
        css={[
          { color: 'white' },
          { backgroundColor: 'yellowgreen' },
          { padding: 8 },
        ]}
      >
        연두색 배경 색상에 검정 글자 색상, 패딩 8px
      </div>

      <H1>대체</H1>
      <div
        css={{
          background: ['white', 'linear-gradient(#e66465, #9198e5)'],
          color: '#fff',
          height: 50,
        }}
      >
        그레디언트를 지원하는 브라우저는 선형 그레디언트로 배경이 렌더링되지만,
        지원하지 않는 브라우저에서는 하양색으로 렌더링 됨
      </div>

      <H1>미디어쿼리 상세 예제</H1>
      <div
        css={mq({
          color: ['green', 'gray', 'hotpink'],
        })}
      >
        `Facepaint` 패키지 활용한 미디어 쿼리
      </div>

      <div>
        <button type="button" onClick={() => navigate('/')}>
          홈으로 이동
        </button>
      </div>
    </>
  );
}

export default Object;
