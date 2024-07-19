import { styled } from "styled-components";
import Image from "@ui/Image";
import { Check } from "@icons";

export default function Chekcbox({ id = "group1-checkbox", name = "group1 complete", label }) {
    return (
        <Container className="checkbox" htmlFor={id}>
            <Checkbox id={id} type="checkbox" name={name} />
            <Image
                containerStyle={CheckMarkContainerStyle}
                className="checkmark"
                svg={Check}
                fill="#ffffff"
                alt="checked"
            />
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
    top: "-2px",
    left: "2px",
};

const Checkbox = styled.input`
    -webkit-appearance: none;
    appearance: none;

    width: 16px;
    height: 16px;
    margin: 0;
    margin-right: 5px;
    border: none;
    border-radius: 4px;

    background-color: #d9d9d9;
    font: inherit;

    & + div {
        display: none;
    }

    &:checked {
        background-color: #e4617a;
        & + div {
            display: block;
        }
    }
`;
