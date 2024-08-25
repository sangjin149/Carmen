import { styled } from 'styled-components';
import { ArrowDropDown } from '@icons';
import { useCallback, useState } from 'react';
import { Icon, ClickAwayListener } from '@ui';

export default function DropDown({
  itemList,
  onChange,
  placeholder = 'placeholder',
  ...props
}) {
  //TODO: item 별 disable, display 여부 지정
  //TODO:
  const [showMenu, setShowMenu] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);

  function handleClick() {
    setShowMenu((oldShowMenu) => !oldShowMenu);
  }

  function handleMenuItemClick(index) {
    setShowMenu(false);
    setSelectedIndex(index);
    onChange(itemList[index].value);
  }

  const handleOutsideClick = useCallback(() => {
    setShowMenu(false);
  }, []);

  return (
    <ClickAwayListener onClickAway={handleOutsideClick}>
      <Container>
        <CurrentValueShower onClick={handleClick} {...props}>
          <CurrentValueSpace>
            {selectedIndex > -1
              ? itemList[selectedIndex].description
              : placeholder}
          </CurrentValueSpace>
          <Icon src={ArrowDropDown} />
        </CurrentValueShower>
        {showMenu && (
          <DropDownMenu>
            {itemList.map(({ key, description }, index) => (
              <MenuItem
                key={key}
                onClick={() => handleMenuItemClick(index)}
                className={selectedIndex === index && 'selected'}
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

const CurrentValueShower = styled.div`
  width: 4.5rem;
  padding: 0px;
  display: flex;
  font-size: 1rem;
  font-family: 'NanumGothic';
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
