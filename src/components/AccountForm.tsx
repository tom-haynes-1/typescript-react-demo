import React from "react";
import FormWrapper from "./FormWrapper";

// TODO: create into dynamic form components, not static JSX elements.

const AccountForm = () => {
    return (
        <>
            <FormWrapper title="Create Account">
                <label>Email</label>
                <input autoFocus required type="email" />
                <label>Password</label>
                <input required type="password" />
            </FormWrapper>
        </>
    );
};

export default AccountForm;