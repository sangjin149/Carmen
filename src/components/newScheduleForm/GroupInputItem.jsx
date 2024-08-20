import { Dot } from "@icons";
import { Icon } from "@ui";
import { styled } from "styled-components";

export default function GroupInputItem({ description, groupColor = "#000000" }) {
    return (
        <Container>
            <Icon src={Dot} style={{ fill: groupColor }} />
            {description}
        </Container>
    );
}

const Container = styled.div`
    display: flex;
`;
