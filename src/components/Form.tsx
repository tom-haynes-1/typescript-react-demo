import React, { FormEvent, useState } from "react";
import useMultiStepForm from "../hooks/useMultiStepForm";
import Button from "./Button";
import UserForm from "./UserForm";
import AddressForm from "./AddressForm";
import AccountForm from "./AccountForm";
import { FormData, initialValues } from "../types/FormTypes";
import "../scss/form.scss";

const Form = () => {

  const [formData, setFormData] = useState<FormData>(initialValues);

  const updateFormDataFields = (fields: Partial<FormData>) => {
    setFormData(prev => {
        return { ...prev, ...fields }
    })
  };

  const {
    formStep,
    formSteps,
    currentStepIndex,
    isFirstStep,
    isLastStep,
    goForwardAStep,
    goBackAStep,
  } = useMultiStepForm([
    <UserForm 
        {...formData}
        updateFields={updateFormDataFields}    
    />,
    <AddressForm 
        {...formData}
        updateFields={ updateFormDataFields }
    />,
    <AccountForm 
        {...formData}
        updateFields={ updateFormDataFields }
    />
  ]);

  const onSubmitHandler = (event: FormEvent) => {
    event.preventDefault();
    if (!isLastStep) {
        goForwardAStep();
    } else {
        alert("form complete, well done!");
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={ onSubmitHandler }>
        <div className="form-container__counter">
          {currentStepIndex + 1} / {formSteps.length}
        </div>
        {formStep}
        <div className="button-container">
          {!isFirstStep && (
            <Button
              className="button"
              buttonType="button"
              clickHandler={goBackAStep}
            >
              Back
            </Button>
          )}
          <Button
            className="button"
            buttonType="submit"
          >
            {isLastStep ? "Submit" : "Next"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Form;
