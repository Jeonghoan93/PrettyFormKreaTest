import { Step } from "src/types";
import * as Yup from "yup";

export const schemas: Record<Step, Yup.AnyObjectSchema> = {
  step1: Yup.object().shape({
    firstName: Yup.string()
      .required("First name is a required field")
      .matches(/^[A-Za-z]*$/, "First name should not contain numbers"),
    lastName: Yup.string()
      .required("Last name is a required field")
      .matches(/^[A-Za-z]*$/, "Last name should not contain numbers"),
    age: Yup.number()
      .required("Age is a required field")
      .positive("Age should be positive")
      .typeError("Age must be a number"),
  }),
  step2: Yup.object().shape({
    email: Yup.string()
      .required("Email is a required field")
      .email("Email should have correct format"),
    phone: Yup.string().required("Phone number is a required field"),
  }),
  step3: Yup.object().shape({
    seat: Yup.string().required("Seat is a required field"),
    food: Yup.string().required("Food is a required field"),
    allergies: Yup.string().required("Allergies is a required field"),
  }),
  step4: Yup.object(),
};
