import React from "react";
import useMultiStepForm from "../hooks/useMultiStepForm";
import Button from "./Button";
import UserForm from "./UserForm";
import AddressForm from "./AddressForm";
import AccountForm from "./AccountForm";
import "../scss/form.scss";

const Form = () => {
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
        labelNames={[{firstName: "First Name", lastName: "Last Name", age: "Age"}]} 
        inputType="text"
        ageType="number"
    />,
    <AddressForm 
        labelNames={[{houseNumber: "House Number", street: "Street", area: "Area", city: "City", postcode: "Postcode"}]}
        inputType="text"
    />,
    <AccountForm />
  ]);

  return (
    <div className="form-container">
      <form>
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
            buttonType="button"
            clickHandler={goForwardAStep}
          >
            {isLastStep ? "Submit" : "Next"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Form;
