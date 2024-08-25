import { styled } from 'styled-components';
import { Link } from 'react-router-dom';
import LogoIcon from '@assets/Logo.png';

import { SidebarAlarm, SidebarFold } from '@icons';
import { Icon, Button } from '@ui';

export default function Header() {
  return (
    <Container>
      <Link to="/">
        <Logo src={LogoIcon} alt="logo" />
      </Link>
      <ButtonPanel>
        <HeaderButton>
          <Icon src={SidebarAlarm} alt="alarm" />
        </HeaderButton>
        <HeaderButton>
          <Icon src={SidebarFold} alt="fold" />
        </HeaderButton>
      </ButtonPanel>
    </Container>
  );
}

const Container = styled.header`
  height: 2.5rem;

  display: flex;
  place-content: center;
`;

const Logo = styled.img`
  width: 8rem;
  height: 2.5rem;
`;

const ButtonPanel = styled.div`
  height: 100%;
  flex-grow: 1;
  padding-left: 0.75rem;

  display: flex;
  place-content: center flex-end;
`;

const HeaderButton = styled(Button)`
  width: 2rem;
  height: 2.5rem;
  padding-left: 2px;
`;
