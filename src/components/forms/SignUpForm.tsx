import React, { FormEvent, useState } from "react";
import useMultiStepForm from "../../hooks/useMultiStepForm";
import Button from "../global/Button";
import UserDetailsForm from "./UserDetailsForm";
import UserAddressForm from "./UserAddressForm";
import UserAccountForm from "./UserAccountForm";
import { FormData, initialValues } from "../../types/FormTypes";
import "../../scss/sign-up-form.scss";

const Form = () => {

  const [formData, setFormData] = useState<FormData>(initialValues);

  const updateFormDataFields = (fields: Partial<FormData>) => {
    setFormData(prev => {
        return { ...prev, ...fields };
    });
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
    <UserDetailsForm {...formData} updateFields={updateFormDataFields} />,
    <UserAddressForm {...formData} updateFields={updateFormDataFields} />,
    <UserAccountForm {...formData} updateFields={updateFormDataFields} />,
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
              buttonType="button"
              clickHandler={goBackAStep}
            >
              Back
            </Button>
          )}
          <Button
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
