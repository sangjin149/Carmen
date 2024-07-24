import { styled } from "styled-components";

import { GroupMenuItem } from "@components/Sidebar";

export default function GroupMenu() {
    return (
        <div style={{ flexGrow: 1 }}>
            <Title>일정 분류</Title>
            <List>
                <GroupMenuItem />
                <GroupMenuItem />
                <GroupMenuItem />
                <GroupMenuItem />
                <GroupMenuItem />
            </List>
        </div>
    );
}

const Title = styled.div`
    height: 3rem;
    line-height: 3rem;
    font-size: 1.25rem;
`;

const List = styled.ul`
    margin-top: 0px;
`;
