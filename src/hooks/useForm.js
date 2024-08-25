import { useState } from 'react';

function sortFormInfo(inputInformation) {
  const defaultValues = {};
  const validations = {};
  const isRequired = {};

  for (const inputName in inputInformation) {
    defaultValues[inputName] = inputInformation[inputName].defaultValue;
    validations[inputName] = inputInformation[inputName].validation;
    isRequired[inputName] = inputInformation[inputName].isRequired;
  }
  return { defaultValues, validations, isRequired };
}

export default function useForm(inputInformation, submitFunction) {
  const { defaultValues, validations, isRequired } =
    sortFormInfo(inputInformation);

  const [inputValues, setInputValues] = useState(defaultValues);
  const [errors, setErrors] = useState({});

  function onInputValueChange(key, newValue) {
    const validationMessage = validations[key](newValue);
    setErrors((errors) => ({
      ...errors,
      [key]: validationMessage,
    }));

    setInputValues((oldValue) => ({ ...oldValue, [key]: newValue }));
  }

  async function onSubmit() {
    let fireSubmit = true;

    for (const inputKey in isRequired) {
      if (isRequired[inputKey] && !inputValues[inputKey]) {
        setErrors((errors) => ({
          ...errors,
          unfulfilledRequirement: '필수 항목을 모두 작성해주세요!',
        }));
        fireSubmit = false;
      }

      if (errors[inputKey]) fireSubmit = false;
    }

    if (fireSubmit) {
      console.log('submit successed');
      return submitFunction(inputValues);
    }

    console.log('submit failed due to remaining form error');
  }

  return { inputValues, errors, isRequired, onInputValueChange, onSubmit };
}
