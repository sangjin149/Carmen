import { styled } from "styled-components";

export default function TimeInput(params) {
    const displayedTime = "08시 12분";

    return <Input type="text" placeholder="00시 00분" />;
}

const Input = styled.input`
    padding-left: 0.75rem;
    font-size: 1rem;
    font-family: "NanumGothic";
`;
