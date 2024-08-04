import { useState } from "react";

function sortFormInfo(inputInformation) {
    const initialValues = {};
    const validations = {};

    for (const inputName in inputInformation) {
        initialValues[inputName] = inputInformation[inputName];
        validations[inputName] = inputInformation[inputName];
    }

    return { initialValues, validations };
}

export default function useForm(inputInformation) {
    const { initialValues, validations } = sortFormInfo(inputInformation);

    const [inputValues, setInputValues] = useState(initialValues);
    const errors = {};

    function handleInputValueChange(key, newValue) {
        const validationMessage = validations[key](newValue);
        errors[key] = validationMessage;
        if (validationMessage.length > 0) return;
        setInputValues((oldValue) => ({ ...oldValue, [key]: newValue }));
    }

    async function handleSubmit() {
        console.log("제출");
        console.table(inputValues);
    }

    return { inputValues, errors, handleInputValueChange, handleSubmit };
}
