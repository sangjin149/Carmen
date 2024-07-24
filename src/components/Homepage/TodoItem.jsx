import { styled } from "styled-components";

import Checkbox from "@ui/Checkbox";

export default function TodoItem({ todoData, groupColor }) {
    let { title, id, checked, description } = todoData;

    function handleClickTodoDone() {
        checked = !checked;
    }

    return (
        <Container>
            <TitleContainer>
                <Checkbox id={id} name={id} onClick={handleClickTodoDone} checkedColor={groupColor} />
                <Title>{title}</Title>
            </TitleContainer>
            <Description>{description}</Description>
        </Container>
    );
}

const Container = styled.article`
    display: flex;
    flex-direction: column;
`;

const TitleContainer = styled.div`
    display: flex;
    align-items: center;
`;

const Title = styled.div`
    height: 1.5rem;
    line-height: 1.5rem;
    font-size: 0.875rem;
`;

const Description = styled.div`
    padding-left: 1.25rem;
    font-size: 0.8rem;
`;
