import { styled } from "styled-components";
import { SidebarAddSchedule } from "@icons";

import Svg from "@ui/Svg";
import Button from "@ui/Button";
import { Header, SidebarMenu, GroupMenu } from "@components/Sidebar";
import { Link } from "react-router-dom";

export default function Sidebar() {
    return (
        <Container>
            <Header />
            <nav>
                <AddButtonContainer>
                    <AddScheduleButton>
                        <AddIcon src={SidebarAddSchedule} alt="add schedule icon" />
                        <AddScheduleLink to="/addschedule">
                            <strong>작업 추가</strong>
                        </AddScheduleLink>
                    </AddScheduleButton>
                </AddButtonContainer>
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

const AddButtonContainer = styled.div`
    height: 4rem;
    display: flex;
    align-items: center;
`;

const AddScheduleButton = styled(Button)`
    width: 8rem;
    height: 2.5rem;
    border-radius: 1.25rem;

    display: flex;
    align-items: center;

    background-color: white;
    border: 2px solid #aad9bb;

    font-family: "NanumSquareB";
    filter: drop-shadow(0px 4px 4px rgb(0, 0, 0, 0.25));
`;

const AddScheduleLink = styled(Link)`
    text-decoration: none;
    color: black;
`;

const AddIcon = styled(Svg)`
    padding-left: 0.25rem;
    padding-right: 0.75rem;
`;
