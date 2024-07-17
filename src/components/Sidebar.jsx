import { styled } from "styled-components";

import Button from "@ui/Button.jsx";
import Header from "@components/Header.jsx";
import SidebarMenu from "@components/SidebarMenu.jsx";
import GroupMenu from "@components/GroupMenu.jsx";

import AddScheduleIcon from "@icons/Add.png";

export default function Sidebar() {
    return (
        <Container>
            <Header />
            <nav>
                <AddScheduleButton>
                    <AddIcon src={AddScheduleIcon} alt="add schedule icon" />
                    <strong>작업 추가</strong>
                </AddScheduleButton>
                <SidebarMenu />
                <GroupMenu />
            </nav>
        </Container>
    );
}

const Container = styled.div`
    width: 208px;
    height: 100%;
    padding-top: 12px;
    padding-left: 12px;
    display: flex;
    flex-direction: column;

    border-right: 1px solid #f0f0f0;
`;

const AddScheduleButton = styled(Button)`
    width: 128px;
    height: 40px;
    border-radius: 20px;

    display: flex;
    align-items: center;

    background-color: white;
    border: 2px solid #aad9bb;

    filter: drop-shadow(0px 4px 4px rgb(0, 0, 0, 0.25));
`;

const AddIcon = styled.img`
    padding-left: 4px;
    padding-right: 12px;
`;
