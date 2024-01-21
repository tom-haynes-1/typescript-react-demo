export type FormUserData = {
  firstName: string;
  lastName: string;
  age: string;
};

export type FormAddressData = {
    houseNumber: string;
    street: string;
    area: string;
    city: string;
    postcode: string;
};

export type FormAccountData = {
    email: string;
    password: string;
};

export type FormInputs = {
    label: string;
    type: string;
    key: keyof FormUserData;
};

export type FormData = {
    firstName: string;
    lastName: string;
    age: string;
    houseNumber: string;
    street: string;
    area: string;
    city: string;
    postcode: string;
    email: string;
    password: string;
};

export const initialValues: FormData = {
    firstName: "",
    lastName: "",
    age: "",
    houseNumber: "",
    street: "",
    area: "",
    city: "",
    postcode: "",
    email: "",
    password: ""
};




