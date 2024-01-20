import React from "react";
import FormWrapper from "./FormWrapper";

interface UserLabelNames {
    firstName: string;
    lastName: string;
    age: string;
};

type Props = {
  labelNames: UserLabelNames[];
  inputType: string;
  ageType?: string;
};

const UserForm = ({ 
    labelNames, 
    inputType,
    ageType
}: Props) => {
  
    const elementInputs = [
    { label: labelNames[0].firstName, type: inputType },
    { label: labelNames[0].lastName, type: inputType },
    { label: labelNames[0].age, type: ageType },
  ];

  return (
    <>
        <FormWrapper title="User Details">
        {
            elementInputs.map((config, index) => (
                <React.Fragment key={ index }>
                    <label>{ config.label }</label>
                    <input type={ config.type } autoFocus={ index === 0 } required />
                </React.Fragment>
            ))
        }
        </FormWrapper>
    </>
  );
};

export default UserForm;
