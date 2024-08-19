import { Svg } from "@ui";
import { styled } from "styled-components";

export default function Icon({ src, iconWidth, iconHeight, ...props }) {
    return (
        <Container {...props}>
            <Svg src={src} width={iconWidth} height={iconHeight} />
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
`;
