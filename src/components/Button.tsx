import React from "react";

type Props = {
    children: React.ReactNode;
    className: string;
    buttonCopy?: string;
    buttonColor?: string;
    clickHandler: () => void;
};

const Button: React.FC<Props> = ({
    children,
    className,
    buttonCopy,
    buttonColor,
    clickHandler,
}) => {
    return (
        <>
        <div>
            <button
                className={ className }
                onClick={ clickHandler }
                color={ buttonColor }
            >
                { children || buttonCopy }
            </button>
        </div>
        </>
    );
};

export default Button;