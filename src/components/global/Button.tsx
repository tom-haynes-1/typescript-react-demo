import React from "react";
import ValidationWrapper from "./ValidationWrapper";
import "../../scss/button.scss";

type Props = {
    children: React.ReactNode;
    className: string;
    buttonCopy?: string;
    buttonColor?: string;
    buttonType: "button" | "submit" | "reset";
    formValidtionFailed?: boolean;
    clickHandler?: () => void;
};

const Button: React.FC<Props> = ({
    children,
    className = "button",
    buttonCopy,
    buttonColor,
    buttonType,
    formValidtionFailed = true,
    clickHandler,
}) => {

    return (
        <>
            <div className="button-container">
                <ValidationWrapper validationFailed={ formValidtionFailed }>
                    <button
                        className={ className }
                        onClick={ clickHandler }
                        color={ buttonColor }
                        type={ buttonType }
                    >
                        { children || buttonCopy }
                    </button>
                </ValidationWrapper>
            </div>
        </>
    );
};

export default Button;