import { Svg } from "@ui";
import { styled } from "styled-components";

export default function Icon({ src, containerWidth, containerHeight, size, ...props }) {
    const width = size ?? containerWidth;
    const height = size ?? containerHeight;

    return (
        <Container width={width} height={height}>
            <Svg src={src} {...props} />
        </Container>
    );
}

const Container = styled.div`
    width: ${({ width }) => width};
    height: ${({ height }) => height};
    display: flex;
    justify-content: center;
    align-items: center;
`;
