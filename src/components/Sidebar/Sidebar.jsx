import { styled } from "styled-components";
import { Link } from "react-router-dom";
import { SidebarAddSchedule } from "@icons";

import { Button, Svg } from "@ui";
import { Header, SidebarMenu, GroupMenu } from "@components/Sidebar";

export default function Sidebar() {
    return (
        <Container>
            <Header />
            <nav>
                <AddScheduleButton>
                    <Svg src={SidebarAddSchedule} alt="add schedule icon" />
                    <AddScheduleLink to="/addschedule">
                        <strong>작업 추가</strong>
                    </AddScheduleLink>
                </AddScheduleButton>
                <SidebarMenu />
                <GroupMenu />
            </nav>
        </Container>
    );
}

const Container = styled.div`
    width: 14rem;
    height: 100%;
    padding-top: 0.75rem;
    padding-left: 0.75rem;
    display: flex;
    flex-direction: column;

    border-right: 1px solid #f0f0f0;
`;

const AddScheduleButton = styled(Button)`
    margin-top: 1rem;
    width: 8rem;
    height: 2.5rem;
    padding-left: 0.5rem;

    display: flex;
    align-items: center;

    border: 2px solid #aad9bb;
    border-radius: 1.25rem;
    background-color: white;
    filter: drop-shadow(0px 4px 4px rgb(0, 0, 0, 0.25));

    font-family: "NanumSquareB";
`;

const AddScheduleLink = styled(Link)`
    padding-left: 0.7rem;
    text-decoration: none;
    color: black;
`;
