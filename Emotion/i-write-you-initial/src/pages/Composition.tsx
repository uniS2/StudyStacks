/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useNavigate } from 'react-router-dom';

const base = css`
  background-color: darkgreen;
  color: turquoise;
`;

const danger = css`
  color: red;
`;

function Composition() {
  const navigate = useNavigate();

  return (
    <>
      <div>
        <div css={base}>청록색(turquoise)</div>
        <div css={[danger, base]}>base 스타일 &gt; danger 스타일 (청록색)</div>
        <div css={[base, danger]}>base 스타일 &lt; danger 스타일 (빨간색)</div>
      </div>
      <div>
        <button type="button" onClick={() => navigate('/')}>
          홈으로 이동
        </button>
      </div>
    </>
  );
}

export default Composition;
