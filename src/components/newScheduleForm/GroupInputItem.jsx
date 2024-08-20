import { Dot } from "@icons";
import { Icon } from "@ui";
import { styled } from "styled-components";

export default function GroupInputItem({ name, groupColor = "#000000" }) {
    return (
        <ItemContainer>
            <GroupColorIcon src={Dot} containerWidth={14} size={14} fill={groupColor} />
            {name}
        </ItemContainer>
    );
}

const ItemContainer = styled.div`
    display: flex;
    width: 4rem;
    height: 1.5rem;
    align-items: center;
`;

const GroupColorIcon = styled(Icon)`
    margin-right: 4px;
    fill: ${(props) => props.fill};
`;
