import { styled } from "styled-components";

import MenuItem from "@components/GroupMenuItem.jsx";

export default function GroupMenu() {
    return (
        <div>
            <Title>일정 분류</Title>
            <List>
                <MenuItem />
                <MenuItem />
                <MenuItem />
                <MenuItem />
                <MenuItem />
            </List>
        </div>
    );
}

const Title = styled.div`
    height: 32px;
    line-height: 32px;
`;

const List = styled.ul`
    list-style: none;
    padding-left: 0;
    margin-top: 0;
`;
