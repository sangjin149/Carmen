import { styled } from "styled-components";
import TodoItem from "@components/Homepage/TodoItem";

export default function HomeTodoList({ todoGroupList }) {
    return (
        <Container>
            <Title>To Do</Title>
            {todoGroupList.map(({ id, name, color: groupColor, todoList }) => (
                <TodoGroup key={id}>
                    <Grouptitle $stripeColor={groupColor}>{name}</Grouptitle>
                    <GroupTodoList>
                        {todoList.map((todo) => (
                            <TodoItem key={todo.id} todoData={todo} groupColor={groupColor} />
                        ))}
                    </GroupTodoList>
                </TodoGroup>
            ))}
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

const Grouptitle = styled.h3`
    height: 1.5rem;
    margin: 0;
    padding-left: 6px;

    position: relative;
    line-height: 1.5rem;
    font-size: 0.875rem;

    &::before {
        content: "";
        position: absolute;
        top: 0.25rem;
        left: 0px;
        height: 1rem;
        width: 0.25rem;
        background-color: ${({ $stripeColor }) => $stripeColor};
    }
`;

const GroupTodoList = styled.div`
    display: flex;
    flex-direction: column;
`;
