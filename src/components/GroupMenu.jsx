import { styled } from "styled-components";

import MenuItem from "@components/GroupMenuItem";

export default function GroupMenu() {
    return (
        <div style={{ flexGrow: 1 }}>
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
    height: 3rem;
    line-height: 3rem;
    font-size: 1.25rem;
`;

const List = styled.ul`
    margin-top: 0px;
`;
