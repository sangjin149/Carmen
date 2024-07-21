import { styled } from "styled-components";
import { SidebarToday, SidebarCalendar, Star } from "@icons";

import Svg from "@ui/Svg";

export default function SidebarMenu() {
    return (
        <Container>
            <MenuItem>
                <Svg src={SidebarToday} containerStyle={TodayIconContainerStyle} alt="today icon" />
                오늘의 일정
            </MenuItem>
            <MenuItem>
                <Svg src={SidebarCalendar} containerStyle={CalendarIconContainerStyle} alt="calendar icon" />
                달력
            </MenuItem>
            <MenuItem>
                <Svg src={Star} containerStyle={StarIconContainerStyle} alt="star icon" />
                중요한 일정
            </MenuItem>
        </Container>
    );
}

const Container = styled.ul``;

const MenuItem = styled.li`
    display: flex;
    align-items: center;
    height: 2.5rem;
    font-size: 1.125rem;
`;

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
