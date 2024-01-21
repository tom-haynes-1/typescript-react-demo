import React from "react";
import FormWrapper from "./FormWrapper";

type UserData = {
    firstName: string;
    lastName: string;
    age: string;
};

type Props = UserData & {
  updateFields: (fields: Partial<UserData>) => void;
};

const UserForm = ({
    firstName,
    lastName,
    age,
    updateFields,
}: Props) => {

  return (
    <>
      <FormWrapper title="User Details">
        <label>First Name</label>
        <input
          type="text"
          required
          autoFocus
          value={firstName}
          onChange={(e) => updateFields({ firstName: e.target.value })}
        />
        <label>Last Name</label>
        <input
          type="text"
          required
          value={lastName}
          onChange={(e) => updateFields({ lastName: e.target.value })}
        />
        <label>Age</label>
        <input
          type="number"
          required
          min={1}
          value={age}
          onChange={(e) => updateFields({ age: e.target.value })}
        />
      </FormWrapper>
    </>
  );
};

export default UserForm;