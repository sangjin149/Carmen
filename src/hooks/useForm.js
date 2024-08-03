import { useState } from "react";

export default function useForm(initialValue, validation) {
    const [inputValues, setInputValues] = useState(initialValue);
    const errors = {};

    function handleInputValueChange(key, newValue) {
        const validationMessage = validation[key](newValue);
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
