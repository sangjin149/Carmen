import { styled } from "styled-components";
import { ArrowDropDown } from "@icons";
import { useCallback, useState } from "react";
import { Icon, ClickAwayListener } from "@ui";

export default function DropDown({ itemList, onChange, placeholder = "placeholder", ...props }) {
    const [showMenu, setShowMenu] = useState(false);
    const [inputValue, setInputValue] = useState("");

    function handleClick() {
        setShowMenu((oldShowMenu) => !oldShowMenu);
    }

    function handleMenuItemClick(description, menuValue) {
        setShowMenu(false);
        setInputValue(description);
        onChange(menuValue);
    }

    const handleOutsideClick = useCallback(() => {
        setShowMenu(false);
    }, []);

    const generateMenuItemClassName = (itemDescription) => {
        let className = "";
        if (itemDescription === inputValue) className += "selected ";
        return className.trim();
    };

    return (
        <ClickAwayListener onClickAway={handleOutsideClick}>
            <Container>
                <CurrentValueShower onClick={handleClick} {...props}>
                    <CurrentValueSpace>{inputValue !== "" ? inputValue : placeholder}</CurrentValueSpace>
                    <Icon src={ArrowDropDown} />
                </CurrentValueShower>
                {showMenu && (
                    <DropDownMenu>
                        {itemList.map(({ key, value, description }) => (
                            <MenuItem
                                key={key}
                                onClick={() => handleMenuItemClick(description, value)}
                                className={generateMenuItemClassName(description)}
                            >
                                {description}
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

const HiddenInput = styled.input`
    width: 0;
    height: 0;
    padding: 0;
`;

const CurrentValueShower = styled.div`
    width: 4.5rem;
    padding: 0px;
    display: flex;
    font-size: 1rem;
    font-family: "NanumGothic";
    cursor: pointer;
`;

const CurrentValueSpace = styled.div`
    min-width: 4.5rem;
`;

const DropDownMenu = styled.ul`
    position: absolute;
    top: 1.375rem;
    left: 0px;
    z-index: 8;

    display: flex;
    flex-direction: column;

    width: 62.5%;
    min-width: 8rem;
    padding: 0.375rem 0px;
    margin: 0px;

    background-color: white;

    border-radius: 0.5rem;
    box-shadow: 2px 2px 20px 0px rgba(0, 0, 0, 0.175);
    -webkit-box-shadow: 2px 2px 20px 0px rgba(0, 0, 0, 0.175);
    -moz-box-shadow: 2px 2px 20px 0px rgba(0, 0, 0, 0.175);
`;

const MenuItem = styled.li`
    padding: 0.375rem 0.75rem;
    font-size: 0.9rem;
    cursor: pointer;
    &:hover {
        background-color: #f0f0f0;
    }

    &.selected {
        font-weight: bold;
    }
`;
