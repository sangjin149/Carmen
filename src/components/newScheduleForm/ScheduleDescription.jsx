import { styled } from "styled-components";
import { useRef, useState } from "react";

export default function ScheduleDescription({ ...props }) {
    const ref = useRef();
    const [inputHeight, setInputHeight] = useState(0);

    const style = props.style ?? {};
    const typoStyle = {
        width: style.width,
        fontFamily: style.fontFamily,
        fontSize: style.fontSize,
        lineHieght: style.lineHieght,
    };

    function handleChange(e) {
        const realTextarea = e.target;
        const newValue = realTextarea.value;
        ref.current.value = newValue;
        setInputHeight(ref.current.scrollHeight);
    }

    return (
        <Container>
            <RealTextarea style={{ height: inputHeight }} onChange={handleChange} {...props} />
            <HiddenTextarea style={typoStyle} ref={ref} readOnly />
        </Container>
    );
}

const Container = styled.div`
    position: relative;
`;

const RealTextarea = styled.textarea`
    width: 100%;
    resize: none;
    font-family: "NanumGothic";
    overflow: hidden;
    font-size: 14px;
    line-height: 22px;
    border: none;
`;

const HiddenTextarea = styled.textarea`
    position: absolute;
    top: 0px;
    left: 0px;
    visibility: hidden;
    width: 100%;
    resize: none;
    font-family: "NanumGothic";
    overflow: hidden;
    font-size: 14px;
    line-height: 22px;
`;
