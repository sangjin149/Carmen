import { styled } from "styled-components";
import Svg from "@ui/Svg";
import { Check } from "@icons";

export default function Chekcbox({
  id = "group1-checkbox",
  name = "group1 complete",
  checked = null,
  checkedColor = "#ff0000",
  ...props
}) {
  return (
    <Container className="checkbox" htmlFor={id}>
      <Checkbox
        id={id}
        type="checkbox"
        value={true}
        name={name}
        checked={checked}
        $checkedColor={checkedColor}
        {...props}
      />
      <Svg src={Check} containerStyle={CheckMarkContainerStyle} alt="checked" />
    </Container>
  );
}

const Container = styled.label`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const CheckMarkContainerStyle = {
  position: "absolute",
  top: "3px",
  left: "2px",
};

const Checkbox = styled.input`
  -webkit-appearance: none;
  appearance: none;

  width: 1rem;
  height: 1rem;
  margin: 0;
  margin-right: 0.25rem;
  border: none;
  border-radius: 0.25rem;

  background-color: #d9d9d9;
  font: inherit;

  & + div {
    display: none;
  }

  &:checked {
    background-color: ${({ $checkedColor }) => $checkedColor};
    & + div {
      display: block;
      color: white;
    }
  }
`;
