import { styled } from "styled-components";
import { SidebarToday, SidebarCalendar, Star } from "@icons";
import { NavLink } from "react-router-dom";

import Svg from "@ui/Svg";

export default function SidebarMenu() {
    return (
        <Container>
            <li>
                <MenuItem to="/today">
                    <Svg src={SidebarToday} containerStyle={TodayIconContainerStyle} alt="today icon" />
                    오늘의 일정
                </MenuItem>
            </li>
            <li>
                <MenuItem to="/calendar">
                    <Svg src={SidebarCalendar} containerStyle={CalendarIconContainerStyle} alt="calendar icon" />
                    달력
                </MenuItem>
            </li>
            <li>
                <MenuItem to="/important">
                    <Svg src={Star} containerStyle={StarIconContainerStyle} alt="star icon" />
                    중요한 일정
                </MenuItem>
            </li>
        </Container>
    );
}

const Container = styled.ul``;

const IconContainerStyle = {
    width: "1.75rem",
    height: "100%",
    marginRight: "0.5rem",
    display: "flex",
};

const TodayIconContainerStyle = {
    ...IconContainerStyle,
    paddingLeft: "3px",
    paddingTop: "6px",
};

const CalendarIconContainerStyle = {
    ...IconContainerStyle,
    paddingLeft: "5px",
    paddingTop: "9px",
};

const StarIconContainerStyle = {
    ...IconContainerStyle,
    paddingLeft: "4px",
    paddingTop: "8px",
};

const MenuItem = styled(NavLink)`
    display: flex;
    align-items: center;
    height: 2.5rem;
    font-size: 1.125rem;
    text-decoration: none;
    color: black;
`;
