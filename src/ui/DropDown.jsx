import { Button, Svg } from "@ui";
import { styled } from "styled-components";
import { ArrowDropDown } from "@icons";
import { useCallback, useState } from "react";
import ClickAwayListener from "./ClickAwayListener";

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

    function handleInputClick() {
        setShowMenu((oldShowMenu) => !oldShowMenu);
    }

    function handleMenuItemClick(menuValue) {
        setShowMenu(false);
        setInputValue(menuValue);
    }

    const handleOutsideClick = useCallback(() => {
        setShowMenu(false);
    }, []);

    return (
        <ClickAwayListener onClickAway={handleOutsideClick}>
            <Container onClick={handleInputClick}>
                <TextInput placeholder="입력 없음" value={inputValue} readOnly {...props} />
                <Button>
                    <Svg src={ArrowDropDown} containerStyle={DropDownIconStyle} />
                </Button>
                {showMenu && (
                    <DropDownMenu>
                        {DUMMY.map(({ key, value }) => (
                            <MenuItem
                                key={key}
                                onClick={() => handleMenuItemClick(value)}
                                className={`${inputValue === value ? "selected" : null}`}
                            >
                                {value}
                            </MenuItem>
                        ))}
                    </DropDownMenu>
                )}
            </Container>
        </ClickAwayListener>
    );
}

const Container = styled.div`
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
    &:hover {
        background-color: #f0f0f0;
    }

    &.selected {
        font-weight: bold;
    }
`;
