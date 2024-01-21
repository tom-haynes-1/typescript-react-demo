import React from "react";
import FormWrapper from "./FormWrapper";
import { FormAddressData } from "../../types/FormTypes";

type Props = FormAddressData & {
    updateFields: (fields: Partial<FormAddressData>) => void;
};

const UserAddressForm = ({
    houseNumber,
    street,
    area,
    city,
    postcode,
    updateFields
}: Props) => {

    return (
        <>
        <FormWrapper title="User Address">
            <label>House Number</label>
            <input
            type="number"
            required
            autoFocus
            value={houseNumber}
            onChange={(e) => updateFields({ houseNumber: e.target.value })}
            />
            <label>Street</label>
            <input
            type="text"
            required
            value={street}
            onChange={(e) => updateFields({ street: e.target.value })}
            />
            <label>Area</label>
            <input
            type="text"
            required
            value={area}
            onChange={(e) => updateFields({ area: e.target.value })}
            />
            <label>City</label>
            <input
            type="text"
            required
            value={city}
            onChange={(e) => updateFields({ city: e.target.value })}
            />
            <label>Postcode</label>
            <input
            type="text"
            required
            value={postcode}
            onChange={(e) => updateFields({ postcode: e.target.value })}
            />
        </FormWrapper>
        </>
      );
};

export default UserAddressForm;