import React from "react";
import "../scss/button.scss";

type Props = {
    children: React.ReactNode;
    className: string;
    buttonCopy?: string;
    buttonColor?: string;
    buttonType: "button" | "submit" | "reset";
    clickHandler: () => void;
};

const Button: React.FC<Props> = ({
    children,
    className,
    buttonCopy,
    buttonColor,
    buttonType,
    clickHandler,
}) => {
    return (
        <>
        <div className="button-container">
            <button
                className={ className }
                onClick={ clickHandler }
                color={ buttonColor }
                type={ buttonType }
            >
                { children || buttonCopy }
            </button>
        </div>
        </>
    );
};

export default Button;