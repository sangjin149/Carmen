import { useState } from "react";

function sortFormInfo(inputInformation) {
    const defaultValues = {};
    const validations = {};

    for (const inputName in inputInformation) {
        defaultValues[inputName] = inputInformation[inputName].defaultValue;
        validations[inputName] = inputInformation[inputName].validation;
    }
    return { defaultValues, validations };
}

export default function useForm(inputInformation, submitFunction) {
    const { defaultValues, validations } = sortFormInfo(inputInformation);

    const [inputValues, setInputValues] = useState(defaultValues);
    const errors = {};

    function onInputValueChange(key, newValue) {
        const validationMessage = validations[key](newValue);
        errors[key] = validationMessage;
        setInputValues((oldValue) => ({ ...oldValue, [key]: newValue }));
    }

    async function onSubmit() {
        submitFunction(inputValues);
    }

    return { inputValues, errors, onInputValueChange, onSubmit };
}
