import React from "react";
import FormWrapper from "./FormWrapper";
import { FormUserData, FormInputs } from "../../types/FormTypes";

type Props = FormUserData & {
  updateFields: (fields: Partial<FormUserData>) => void;
};

const UserDetailsForm = ({ 
    firstName, 
    lastName, 
    age,
    updateFields
}: Props) => {

  const userDetails: FormInputs[] = [
    { label: "First Name", type: "text", key: "firstName" },
    { label: "Last Name", type: "text", key: "lastName" },
    { label: "Age", type: "number", key: "age" },
  ];

  const requiredFields = typeof 'string' || 'number';

  return (
    <>
      <FormWrapper title="User Details">
        {
            userDetails.map((detail, key) => (
            <React.Fragment key={ key }>
                <label>{ detail.label }</label>
                <input
                    type={ detail.type }
                    required={ detail.type !== requiredFields }
                    min={ detail.type === "number" ? 1 : undefined }
                    autoFocus={ detail.key === "firstName" }
                    value={ (detail.key === "firstName" && firstName) || 
                            (detail.key === "lastName" && lastName) ||
                            (detail.key === "age" && age) || ""
                        }
                    onChange={(e) => updateFields({ [detail.key]: e.target.value })}
                />
            </React.Fragment>
        ))}
      </FormWrapper>
    </>
  );
};

export default UserDetailsForm;
