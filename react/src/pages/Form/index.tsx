import { yupResolver } from "@hookform/resolvers/yup";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { FormData, initialData } from "src/constants/Index";
import * as Yup from "yup";
import Step1 from "./Pages/Step1";
import Step2 from "./Pages/Step2";
import Step3 from "./Pages/Step3";
import Step4 from "./Pages/Step4";

type Step = "step1" | "step2" | "step3" | "step4";

interface FormProps {
  page: Step;
}

const schemas: Record<Step, Yup.AnyObjectSchema> = {
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

const Form: React.FC<FormProps> = ({ page = "step1" }) => {
  const navigate = useNavigate();
  const schema = schemas[page];
  const [formData, setFormData] = useState<FormData>(initialData);

  const {
    control,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    defaultValues: initialData,
  });

  const handleNext = (data?: FormData) => {
    if (data) {
      setFormData((prevData) => ({
        ...prevData,
        ...data,
      }));
    }

    if (page === "step4") {
      navigate("/cv");
    } else {
      navigate(`/step${parseInt(page.slice(-1)) + 1}`);
    }
  };

  const handleBack = () => {
    if (page !== "step1") {
      navigate(`/step${parseInt(page.slice(-1)) - 1}`);
    }
  };

  useEffect(() => {
    for (const key in initialData) {
      if (Object.prototype.hasOwnProperty.call(initialData, key)) {
        setValue(key as keyof FormData, initialData[key as keyof FormData]);
      }
    }
  }, [setValue]);

  return (
    <div>
      {page === "step1" && (
        <Step1
          control={control}
          errors={errors}
          onSubmit={handleSubmit((data) => handleNext(data))}
        />
      )}

      {page === "step2" && (
        <Step2
          control={control}
          errors={errors}
          onSubmit={handleSubmit((data) => handleNext(data))}
          onBack={handleBack}
        />
      )}

      {page === "step3" && (
        <Step3
          control={control}
          errors={errors}
          onSubmit={handleSubmit((data) => handleNext(data))}
          onBack={handleBack}
        />
      )}

      {page === "step4" && (
        <Step4 data={formData} onBack={handleBack} onNext={handleNext} />
      )}
    </div>
  );
};

export default Form;
