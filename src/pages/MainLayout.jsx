import { Outlet } from 'react-router-dom';
import { styled } from 'styled-components';

import { Sidebar } from '@components/Sidebar';

export default function MainLayout() {
  return (
    <Container>
      <Sidebar />
      <Outlet />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;
