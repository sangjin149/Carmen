import { styled } from 'styled-components';
import { SidebarToday, SidebarCalendar, Star } from '@icons';
import { NavLink } from 'react-router-dom';

import { Icon } from '@ui';

export default function SidebarMenu() {
  return (
    <Container>
      <li>
        <MenuItem to="/today">
          <Icon src={SidebarToday} alt="today icon" containerWidth={22} />
          <MenuLabel>오늘의 일정</MenuLabel>
        </MenuItem>
      </li>
      <li>
        <MenuItem to="/calendar">
          <Icon src={SidebarCalendar} alt="calendar icon" containerWidth={22} />
          <MenuLabel>달력</MenuLabel>
        </MenuItem>
      </li>
      <li>
        <MenuItem to="/important">
          <Icon src={Star} alt="star icon" containerWidth={22} />
          <MenuLabel>중요한 일정</MenuLabel>
        </MenuItem>
      </li>
    </Container>
  );
}

const Container = styled.ul``;

const MenuItem = styled(NavLink)`
  display: flex;
  align-items: center;
  height: 2.5rem;
  font-size: 1.125rem;
  text-decoration: none;
  color: black;
`;

const MenuLabel = styled.div`
  padding-left: 0.5rem;
`;
