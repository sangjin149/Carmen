import { styled } from "styled-components";
import { SidebarToday, SidebarCalendar, Star } from "@icons";

import Image from "@ui/Image";

export default function SidebarMenu() {
    return (
        <Container>
            <MenuItem>
                <Image svg={SidebarToday} style={TodayIconStyle} containerStyle={IconContainerStyle} alt="today icon" />
                오늘의 일정
            </MenuItem>
            <MenuItem>
                <Image
                    svg={SidebarCalendar}
                    style={CalendarIconStyle}
                    containerStyle={IconContainerStyle}
                    alt="calendar icon"
                />
                달력
            </MenuItem>
            <MenuItem>
                <Image svg={Star} style={StarIconStyle} containerStyle={IconContainerStyle} alt="star icon" />
                중요한 일정
            </MenuItem>
        </Container>
    );
}

const Container = styled.ul`
    list-style: none;
    padding-left: 0;
`;

const MenuItem = styled.li`
    display: flex;
    align-items: center;
    height: 40px;
`;

const IconContainerStyle = {
    width: "28px",
    height: "100%",
    display: "flex",
};

const TodayIconStyle = {
    width: "22px",
};

const CalendarIconStyle = {
    width: "18px",
};

const StarIconStyle = {
    width: "20px",
};
