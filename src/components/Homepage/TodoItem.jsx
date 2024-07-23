import { styled } from "styled-components";

import Checkbox from "@ui/Checkbox";

const DummyTodo = {
  title: "더미 할일 제목",
  done: false,
  description: `훈장등의 영전은 이를 받은 자에게만 효력이 있고, 어떠한 특권도 이에
        따르지 아니한다. 국군은 국가의 안전보장과 국토방위의 신성한 의무를
        수행함을 사명으로 하며, 그 정치적 중립성은 준수된다...`,
  color: "#3acf37",
};

export default function TodoItem({ todoData }) {
  let { title, done, description, color } = todoData ?? DummyTodo;

  function handleClickTodoDone() {
    done = !done;
  }

  return (
    <Container>
      <TitleContainer>
        <Checkbox
          id="group1"
          name="group1-checked"
          onClick={handleClickTodoDone}
          checkedColor={color}
        />
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
