import React from "react";
import "../../scss/form-wrapper.scss";

type Props = {
    title: string;
    children: React.ReactNode;
};

const FormWrapper = ({
    title,
    children,
}: Props) => {
    return (
        <>
            <h2 className="form-wrapper__title">{ title }</h2>
            <div className="form-wrapper__elements">{ children }</div>
        </>
    );
};

export default FormWrapper;