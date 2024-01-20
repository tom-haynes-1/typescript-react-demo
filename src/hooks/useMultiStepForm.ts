import { ReactElement, useState } from "react";

export const useMultiStepForm = (formSteps: ReactElement[]) => {
    // code to go here:
    // pass a parameter of Components for each part of the Form
    // use state to track the current step index to go forwards and backwards between the form components
    // create functions that go forward / back between components

    const [currentStepIndex, setCurrentStepIndex] = useState(0);

    const goForwardAStep = () => {
        setCurrentStepIndex(index => {
            if (index >= formSteps.length - 1) {
                return index;
            }
                return index + 1;
        });
    };

    const goBackAStep = () => {
        setCurrentStepIndex(index => {
            if (index <= 0) {
                return index;
            }
                return index - 1 ;
        });
    };

    const goToSpecificStep = (index: number) => {
        setCurrentStepIndex(index);
    };

    return {
        currentStepIndex,
        formStep: formSteps[currentStepIndex],
        formSteps,
        isFirstStep: currentStepIndex === 0,
        isLastStep: currentStepIndex === formSteps.length - 1,
        goForwardAStep,
        goBackAStep,
        goToSpecificStep,
    };
};

export default useMultiStepForm;