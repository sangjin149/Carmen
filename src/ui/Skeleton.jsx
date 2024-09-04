import { styled } from 'styled-components';

export default function Skeleton({ ...props }) {
  return <Container {...props}></Container>;
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: #f2f2f2;
  position: relative;
  overflow: hidden;

  @keyframes skeleton-gradient {
    0% {
      background-color: rgba(165, 165, 165, 0.15);
    }
    50% {
      background-color: rgba(165, 165, 165, 0.5);
    }
    100% {
      background-color: rgba(165, 165, 165, 0.15);
    }
  }

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    animation: skeleton-gradient 1.4s infinite ease-in-out;
  }
`;
