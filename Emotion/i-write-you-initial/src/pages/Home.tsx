/** @jsxImportSource @emotion/react */
import { useNavigate } from 'react-router-dom';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

// @emotion/react
const hotpink = css({
  color: 'hotpink',
  background: ['red', 'linear-gradient(#e66465, #9198e5)'],
  '&:hover': css({ color: 'whitesmoke' }),
});

/* const green = css({
  color: 'green',
  '&:hover': css({
    color: 'hotpink',
  }),
}); */

// @emotion/styled
const Div = styled.div`
  display: flex;
  color: whitesmoke;
  background: linear-gradient(#59bbe2, #9198e5);
  &:hover {
    color: blueviolet;
  }
`;

const Button = styled.button`
  color: black;
  margin: 0.25rem;
`;

export default function Home() {
  const navigate = useNavigate();

  return (
    <>
      <div
        css={css({
          color: 'green',
          '&:hover': hotpink,
        })}
      >
        그린
      </div>
      <div css={hotpink}>핫핑크</div>

      <Div>바이올렛</Div>
      <div>
        <Button type="button" onClick={() => navigate('/emotionstyled')}>
          스타일드 컴포넌트 예제
        </Button>
        <Button type="button" onClick={() => navigate('/composition')}>
          컴포지션 예제
        </Button>
        <Button type="button" onClick={() => navigate('/object')}>
          객체 스타일링 예제
        </Button>
      </div>
    </>
  );
}
