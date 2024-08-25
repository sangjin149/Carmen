import { styled } from 'styled-components';

export default function GroupMenuItem({ groupName, groupColor }) {
  return <Item>{groupName ?? '이름 없음'}</Item>;
}

const Item = styled.li`
  height: 2rem;

  display: flex;
  align-items: center;

  font-size: 0.875rem;

  &::before {
    content: '';
    width: 1rem;
    height: 1rem;
    margin-right: 0.4rem;
    background-color: black;
    clip-path: circle(6px);
  }
`;
