import { Svg } from "@ui";
import { styled } from "styled-components";
import { ArrowDropDown } from "@icons";

const DUMMY = [
    { name: "item1", key: "item1", value: "1시간 전" },
    { name: "item2", key: "item2", value: "10분 전" },
    { name: "item3", key: "item3", value: "5분 전" },
    { name: "item4", key: "item4", value: "1일 전" },
    { name: "item5", key: "item5", value: "일주일 전" },
];

export default function DropDown(props) {
    return (
        <Container>
            <TextInput placeholder="입력 없음" />
            <Svg src={ArrowDropDown} containerStyle={DropDownIconStyle} />
            <DropDownMenu>
                {DUMMY.map(({ key, value }) => (
                    <MenuItem key={key}>{value}</MenuItem>
                ))}
            </DropDownMenu>
        </Container>
    );
}

const Container = styled.label`
    position: relative;
    display: flex;
    align-items: center;
`;

const TextInput = styled.input`
    padding: 0px;
    font-size: 1rem;
    font-family: "NanumGothic";
    cursor: pointer;
`;

const DropDownIconStyle = {
    width: "16px",
    height: "16px",
};

const DropDownMenu = styled.ul`
    position: absolute;
    top: 1.375rem;
    left: 0px;

    display: flex;
    flex-direction: column;
    gap: 0.125rem;

    width: 62.5%;
    min-width: 6rem;
    padding: 0.5rem 0px;
    margin: 0px;

    border-radius: 0.5rem;
    box-shadow: 2px 2px 20px 0px rgba(0, 0, 0, 0.175);
    -webkit-box-shadow: 2px 2px 20px 0px rgba(0, 0, 0, 0.175);
    -moz-box-shadow: 2px 2px 20px 0px rgba(0, 0, 0, 0.175);
`;

const MenuItem = styled.li`
    padding: 0.25rem 0.75rem;
    font-size: 0.75rem;
`;
