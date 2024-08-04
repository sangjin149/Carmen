import { useState } from "react";

function sortFormInfo(inputInformation) {
    const initialValues = {};
    const validations = {};

    for (const inputName in inputInformation) {
        initialValues[inputName] = inputInformation[inputName].initialValue;
        validations[inputName] = inputInformation[inputName].validation;
    }

    return { initialValues, validations };
}

export default function useForm(inputInformation, submitFunction) {
    const { initialValues, validations } = sortFormInfo(inputInformation);

    const [inputValues, setInputValues] = useState(initialValues);
    const errors = {};

    function onInputValueChange(key, newValue) {
        const validationMessage = validations[key](newValue);
        errors[key] = validationMessage;
        if (validationMessage.length > 0) return;
        setInputValues((oldValue) => ({ ...oldValue, [key]: newValue }));
    }

    async function onSubmit() {
        submitFunction(inputValues);
    }

    return { inputValues, errors, onInputValueChange, onSubmit };
}
