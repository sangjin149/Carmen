import { styled } from "styled-components";

import Image from "@ui/Image.jsx";

import { Dot } from "@icons";

export default function GroupMenuItem({ groupName, groupColor }) {
    return (
        <Item>
            <Bullet svg={Dot} alt="dot icon" fill={groupColor ?? "#FF8181"} containerStyle={bulletContainerStyle} />
            {groupName ?? "이름 없음"}
        </Item>
    );
}

const Item = styled.li`
    height: 32px;
    display: flex;
    align-items: center;
`;

const Bullet = styled(Image)`
    width: 12px;
    height: 12px;
    padding: 6px;
    padding-top: 8px;
`;

const bulletContainerStyle = {
    display: "flex",
    alignItems: "center",
};
