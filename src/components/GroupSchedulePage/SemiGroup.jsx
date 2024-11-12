import { styled } from 'styled-components';
import { Button } from '@ui';

export default function SemiGroup({ title = '세부 그룹 제목', children }) {
  return (
    <Container>
      <TitleLine>
        <Title>{title}</Title>
        <GroupFoldButton />
      </TitleLine>
      {children}
    </Container>
  );
}

const Container = styled.div`
  margin: 0.5rem 0;
`;

const TitleLine = styled.div``;

const Title = styled.div`
  position: relative;
  padding-left: 0.5rem;
  &::before {
    content: '';
    position: absolute;
    top: 0px;
    left: 0px;
    width: 4px;
    height: 100%;
    background-color: #e4617a;
  }
`;

const GroupFoldButton = styled(Button)`
  width: 3rem;
  height: 1.5rem;
  margin: 0.25rem;
`;
