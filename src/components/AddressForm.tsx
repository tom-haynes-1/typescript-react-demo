import React from "react";
import FormWrapper from "./FormWrapper";

interface AddressLabelNames {
    houseNumber: string;
    street: string;
    area: string;
    city: string;
    postcode: string;
};

type Props = {
    labelNames: AddressLabelNames[];
    inputType: string;
};

const AddressForm = ({
    labelNames,
    inputType,
}: Props) => {

    const elementInputs = [
        { label: labelNames[0].houseNumber, type: inputType },
        { label: labelNames[0].street, type: inputType },
        { label: labelNames[0].area, type: inputType },
        { label: labelNames[0].city, type: inputType },
        { label: labelNames[0].postcode, type: inputType },
    ];

    return (
        <>
            <FormWrapper title="User Address">
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

export default AddressForm;