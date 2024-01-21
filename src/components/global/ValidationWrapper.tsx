import React, { useEffect, useState } from "react";

type ValidationProps = {
    validationFailed: boolean;
    children: React.ReactNode;
};

const ValidationWrapper = ({
    validationFailed,
    children,
}: ValidationProps) => {

    const [validationErrorClass, setValidationErrorClass] = useState("");

    useEffect(() => {
      if (validationFailed) {
        setValidationErrorClass("validation-failed-shake");
        window.setTimeout(() => {
          setValidationErrorClass("");
        }, 800);
      }
    }, [validationFailed]);

    return (
        <div className={ validationFailed ? `${validationErrorClass}`.trim() : "" }>
            { children }
        </div>
    );
};

export default ValidationWrapper;