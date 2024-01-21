import React from "react";
import FormWrapper from "./FormWrapper";
import { FormUserData, FormInputs } from "../types/FormTypes";

type Props = FormUserData & {
  updateFields: (fields: Partial<FormUserData>) => void;
};

const UserForm = ({ 
    firstName, 
    lastName, 
    age, 
    updateFields 
}: Props) => {

  const fields: FormInputs[] = [
    { label: "First Name", type: "text", key: "firstName" },
    { label: "Last Name", type: "text", key: "lastName" },
    { label: "Age", type: "number", key: "age" },
  ];

  return (
    <>
      <FormWrapper title="User Details">
        {
            fields.map((config) => (
            <React.Fragment>
                <label>{ config.label }</label>
                <input
                    type={ config.type }
                    required={ config.type !== "number" }
                    min={ config.type === "number" ? 1 : undefined }
                    autoFocus={ config.key === "firstName" }
                    value={ (config.key === "firstName" && firstName) || 
                            (config.key === "lastName" && lastName) ||
                            (config.key === "age" && age) || "" 
                        }
                    onChange={(e) => updateFields({ [config.key]: e.target.value })}
                />
            </React.Fragment>
        ))}
      </FormWrapper>
    </>
  );
};

export default UserForm;
