import { Svg } from "@ui";
import { styled } from "styled-components";
import { ArrowDropDown } from "@icons";
import { useState, useRef, useCallback } from "react";
import { useClickAway } from "@hooks";

const DUMMY = [
    { name: "item1", key: "item1", value: "1시간 전" },
    { name: "item2", key: "item2", value: "10분 전" },
    { name: "item3", key: "item3", value: "5분 전" },
    { name: "item4", key: "item4", value: "1일 전" },
    { name: "item5", key: "item5", value: "일주일 전" },
];

export default function DropDown({ ...props }) {
    const [showMenu, setShowMenu] = useState(false);
    const [inputValue, setInputValue] = useState("");
    const containerRef = useRef();

    function handleInputClick() {
        setShowMenu((oldShowMenu) => !oldShowMenu);
    }

    function handleMenuItemClick(menuValue) {
        setShowMenu(false);
        setInputValue(menuValue);
    }

    const handleClickAway = useCallback(() => console.log("clicked outside"), []);

    useClickAway(containerRef, handleClickAway);

    return (
        <Container ref={containerRef} onClick={handleInputClick}>
            <TextInput placeholder="입력 없음" value={inputValue} readOnly {...props} />
            <Svg src={ArrowDropDown} containerStyle={DropDownIconStyle} />
            {showMenu && (
                <DropDownMenu>
                    {DUMMY.map(({ key, value }) => (
                        <MenuItem key={key} onClick={() => handleMenuItemClick(value)}>
                            {value}
                        </MenuItem>
                    ))}
                </DropDownMenu>
            )}
        </Container>
    );
}

const Container = styled.label`
    position: relative;
    display: flex;
    align-items: center;
    cursor: pointer;
`;

const TextInput = styled.input`
    width: 4.5rem;
    padding: 0px;
    font-size: 1rem;
    font-family: "NanumGothic";
    cursor: pointer;
`;

const DropDownIconStyle = {
    width: "24px",
    height: "24px",
};

const DropDownMenu = styled.ul`
    position: absolute;
    top: 1.375rem;
    left: 0px;

    display: flex;
    flex-direction: column;

    width: 62.5%;
    min-width: 6rem;
    padding: 0.375rem 0px;
    margin: 0px;

    border-radius: 0.5rem;
    box-shadow: 2px 2px 20px 0px rgba(0, 0, 0, 0.175);
    -webkit-box-shadow: 2px 2px 20px 0px rgba(0, 0, 0, 0.175);
    -moz-box-shadow: 2px 2px 20px 0px rgba(0, 0, 0, 0.175);
`;

const MenuItem = styled.li`
    padding: 0.375rem 0.75rem;
    font-size: 0.75rem;
    cursor: pointer;
`;
