import Checkbox from "@ui/Checkbox";
import { styled } from "styled-components";

export default function HomeTodoList() {
    return (
        <Container>
            <Title>To Do</Title>
            <TodoGroup>
                <GroupTitleContainer>
                    <TitleStripe />
                    <Grouptitle>분류1</Grouptitle>
                </GroupTitleContainer>
                <GroupTodoList>
                    <Todo>
                        <TodoTitleContainer>
                            <Checkbox id="group1" name="group1-checked" label="todo item 1" />
                        </TodoTitleContainer>
                        <TodoDetail>
                            훈장등의 영전은 이를 받은 자에게만 효력이 있고, 어떠한 특권도 이에 따르지 아니한다. 국군은
                            국가의 안전보장과 국토방위의 신성한 의무를 수행함을 사명으로 하며, 그 정치적 중립성은
                            준수된다...
                        </TodoDetail>
                    </Todo>
                </GroupTodoList>
            </TodoGroup>
        </Container>
    );
}

const Container = styled.section`
    width: 20rem;
    padding-left: 1rem;
    display: flex;
    flex-direction: column;
`;

const Title = styled.h2`
    margin: 0;
    border-bottom: 1px solid #f0f0f0;
    font-size: 18px;
`;

const TodoGroup = styled.div`
    padding: 6px 0px;

    display: flex;
    flex-direction: column;
`;

const GroupTitleContainer = styled.div`
    margin: none;
    height: 26px;

    display: flex;
    flex-direction: row;
    align-items: center;
`;

const TitleStripe = styled.div`
    width: 3px;
    height: 16px;
    background-color: #e4617a;
`;

const Grouptitle = styled.h3`
    height: 16px;
    margin: 0;
    padding-left: 3px;
    line-height: 16px;
    font-size: 14px;
`;

const GroupTodoList = styled.div`
    display: flex;
    flex-direction: column;
`;

const Todo = styled.article`
    display: flex;
    flex-direction: column;
`;

const TodoTitleContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const TodoDetail = styled.div`
    padding-left: 20px;
`;
