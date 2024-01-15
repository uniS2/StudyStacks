import isPropValid from '@emotion/is-prop-valid';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { useNavigate } from 'react-router-dom';

interface PropsType {
  primary?: boolean;
  className?: string;
  color?: string;
}

// elements와 components 스타일링
const H1 = styled.h1`
  color: gray;
  padding: 1rem;
`;

const Home = styled.button`
  display: flex;
  background-color: whitesmoke;
  color: black;
`;

// props에 기반한 스타일 설정
const Button = styled.button`
  color: ${(props: PropsType) => (props.primary ? 'hotpink' : 'green')};
`;

// 컴포넌트 스타일 확장
const Basic = ({ className }: PropsType) => (
  <div className={className}>스타일 확장</div>
);

const Expend = styled(Basic)`
  color: hotpink;
`;

// `withComponent` 메서드 사용하여 렌더링 요소 변경
const Section = styled.section`
  background: cornflowerblue;
  color: #fff;
`;

const Aside = Section.withComponent('aside');

// 커스터마이징 prop 포워딩
const Custom = styled('h1', {
  shouldForwardProp: (prop) => isPropValid(prop) && prop !== 'color',
})((props) => ({
  color: props.color,
}));

// 동적 스타일링 컴포징
const dynamicStyle = (props: PropsType) =>
  css`
    color: ${props.color};
  `;

const Container = styled.div`
  ${dynamicStyle};
`;

// 중첩 컴포넌트
const Nesting = styled('span')`
  color: lightgreen;

  & > strong {
    color: hotpink;
  }
`;

function EmotionStyled() {
  const navigate = useNavigate();

  return (
    <>
      <H1>props에 기반한 스타일 설정</H1>
      <Button primary>메인컬러</Button>
      <Button>서브컬러</Button>

      <H1>컴포넌트 스타일 확장</H1>
      <Expend />

      <H1>`withComponent` 메서드 사용한 렌더링 요소 변경</H1>
      <div>
        <Section>기존요소</Section>
        <Aside>변경요소</Aside>
      </div>

      <H1>`shouldForwardProp`와 `isPropValid`</H1>
      <Custom color="lightgreen">커스터마이징 prop 포워딩</Custom>

      <H1>동적 스타일링 컴포징</H1>
      <Container color="lightblue">동적 스타일링 컴포징</Container>

      <H1>중첩 컴포넌트</H1>
      <Nesting>
        This is <strong>nested</strong>.
      </Nesting>

      <Home type="button" onClick={() => navigate('/')}>
        홈으로 이동
      </Home>
    </>
  );
}

export default EmotionStyled;
