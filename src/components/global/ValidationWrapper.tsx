import React, { useEffect, useState } from "react";
import "../../scss/validation-wrapper.scss";

type ValidationProps = {
    validationFailed: boolean;
    children: React.ReactNode;
};

const ValidationWrapper = ({
    validationFailed,
    children,
}: ValidationProps) => {

    const [validationErrorAnimation, setValidationErrorAnimation] = useState(false);

    useEffect(() => {
      if (validationFailed) {
        setValidationErrorAnimation(true);
        const timeOut = setTimeout(() => {
          setValidationErrorAnimation(false);
        }, 800);

        return () => clearTimeout(timeOut);
      }
    }, [validationFailed]);

    const wrapperClasses = `validation-wrapper ${validationErrorAnimation && validationFailed ? `${'validation-failed-shake'}` : ''}`.trim();
    return (
        <div className={ wrapperClasses }>
            { children }
        </div>
    );
};

export default ValidationWrapper;