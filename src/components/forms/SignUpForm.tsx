import React, { FormEvent, useEffect, useState } from "react";
import useMultiStepForm from "../../hooks/useMultiStepForm";
import Button from "../global/Button";
import UserDetailsForm from "./UserDetailsForm";
import UserAddressForm from "./UserAddressForm";
import UserAccountForm from "./UserAccountForm";
import LoadingSpinner from "../global/LoadingSpinner";
import ValidationWrapper from "../global/ValidationWrapper";
import { FormData, initialValues } from "../../types/FormTypes";
import "../../scss/sign-up-form.scss";


const Form = () => {

  const [formData, setFormData] = useState<FormData>(initialValues);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [formValidationFailed, setFormValidationFailed] = useState<boolean>(false);

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

  const validateInputs = () => {
    // Implement your validation logic here
    // For example, check if all required fields in formData are filled in
    const requiredFieldsFilled = Object.values(formData).some(value => value !== '');
    console.log("requiredFieldsFailed:", requiredFieldsFilled)

    return !requiredFieldsFilled;
  };

  const simulateAsyncFunction = () => {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        console.log("async function complete");
        resolve();
      }, 2000)
    });
  };

  const onSubmitHandler = async (event: FormEvent) => {
    event.preventDefault();
    setIsLoading(true);

    try {

      await simulateAsyncFunction();

      if (!isLastStep && validateInputs()) {
        setFormValidationFailed(true);
      }

      if (!isLastStep) {
        goForwardAStep();
      } else {
          alert("form complete, well done!");
      }
    } catch (error) {
      console.error("something went wrong:", error);
    } finally {
      setIsLoading(false);
    }
  };
 
  useEffect(() => {
    if (validateInputs()) {
      setFormValidationFailed(true);
    } else {
      setFormValidationFailed(false);
    }

    console.log("form validation falied:", formValidationFailed)
    
  }, [formValidationFailed]);

  return (
    <div className="form-container">
      <form onSubmit={ onSubmitHandler }>
        <div className="form-container__counter">
          {currentStepIndex + 1} / {formSteps.length}
        </div>
        {isLoading && <LoadingSpinner />}
        {
          !isLoading && formStep
        }
          {!isFirstStep && (
            <ValidationWrapper validationFailed={ formValidationFailed }>
                <Button
                  className="button"
                  buttonType="button"
                  clickHandler={ goBackAStep }
                >
                  Back
              </Button>
            </ValidationWrapper>
            
          )}
          <ValidationWrapper validationFailed={ formValidationFailed }>
            <Button
              className="button"
              buttonType="submit"
              clickHandler={ () => {console.log("button clicked:", formValidationFailed)}}
            >
              {isLastStep ? "Submit" : "Next"}
            </Button>
          </ValidationWrapper>
      </form>
    </div>
  );
};

export default Form;
