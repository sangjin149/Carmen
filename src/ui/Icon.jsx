import { Svg } from "@ui";
import { styled } from "styled-components";

export default function Icon({ src, iconWidth, iconHeight, size, ...props }) {
    const width = size ?? iconWidth;
    const height = size ?? iconHeight;

    return (
        <Container {...props}>
            <Svg src={src} width={width} height={height} />
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;
