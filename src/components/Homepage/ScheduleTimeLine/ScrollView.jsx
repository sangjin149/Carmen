import { styled } from 'styled-components';

export default function ScrollView({ children, ...props }) {
  return <Container {...props}>{children}</Container>;
}

const Container = styled.section`
  overflow-x: hidden;
  overflow-y: scroll;
`;
