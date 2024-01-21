import React from "react";
import FormWrapper from "./FormWrapper";
import { FormAccountData } from "../../types/FormTypes";

type Props = FormAccountData & {
  updateFields: (fields: Partial<FormAccountData>) => void;
};

const UserAccountForm = ({ email, password, updateFields }: Props) => {
  return (
    <>
      <FormWrapper title="Create Account">
        <label>Email</label>
        <input
          autoFocus
          required
          type="email"
          value={email}
          onChange={(e) => updateFields({ email: e.target.value })}
        />
        <label>Password</label>
        <input
          required
          type="password"
          value={password}
          onChange={(e) => updateFields({ password: e.target.value })}
        />
      </FormWrapper>
    </>
  );
};

export default UserAccountForm;
