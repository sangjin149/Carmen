import { styled } from "styled-components";
import Svg from "@ui/Svg";
import { Check } from "@icons";

export default function Chekcbox({ id = "group1-checkbox", name = "group1 complete", label }) {
    return (
        <Container className="checkbox" htmlFor={id}>
            <Checkbox id={id} type="checkbox" name={name} />
            <Svg src={Check} containerStyle={CheckMarkContainerStyle} alt="checked" />
            {label}
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
    top: "7px",
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
        background-color: #e4617a;
        & + div {
            display: block;
            color: white;
        }
    }
`;
