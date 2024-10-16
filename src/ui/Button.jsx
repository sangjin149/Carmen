import { styled } from 'styled-components';

export default function Button({ children, ...props }) {
  return <ButtonComponent {...props}>{children}</ButtonComponent>;
}

const ButtonComponent = styled.button`
  border: none;
  padding: 0px;
  background-color: transparent;
  cursor: pointer;
`;
