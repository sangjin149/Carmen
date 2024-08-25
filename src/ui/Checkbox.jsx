import { styled } from 'styled-components';
import { Check } from '@icons';
import { Svg } from '@ui';

export default function Chekcbox({
  id = 'group1-checkbox',
  name = 'group1 complete',
  checked = null,
  checkedColor = '#ff0000',
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
      <Svg className="checkmark" src={Check} alt="checked" />
    </Container>
  );
}

const Container = styled.label`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

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

  & + .checkmark {
    visibility: hidden;
    position: absolute;
    fill: white;
    left: 1px;
  }

  &:checked {
    background-color: ${({ $checkedColor }) => $checkedColor};
    & + .checkmark {
      visibility: visible;
    }
  }
`;
