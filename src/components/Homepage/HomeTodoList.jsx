import { styled } from "styled-components";
import Todo from "@components/Homepage/TodoItem";

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
          <Todo />
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
