import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FormData, initialData } from "src/constants/Index";
import Step1 from "./Pages/Step1";
import Step2 from "./Pages/Step2";
import Step3 from "./Pages/Step3";
import Step4 from "./Pages/Step4";

interface FormProps {
  page: string;
}

const Form: React.FC<FormProps> = ({ page = "step1" }) => {
  const navigate = useNavigate();

  const [data, setData] = useState<FormData>(initialData);
  const [currentStep, setCurrentStep] = useState(() => {
    switch (page) {
      case "step1":
        return 1;
      case "step2":
        return 2;
      case "step3":
        return 3;
      case "step4":
        return 4;
      default:
        return 1;
    }
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setData((prevData) => ({
        ...prevData,
        [e.target.name]: e.target.value,
      }));
    },
    []
  );

  const validateStep = useCallback((): boolean => {
    let isValid = true;
    const tempErrors: Partial<FormData> = {};

    switch (currentStep) {
      case 1:
        if (!data.firstName) {
          isValid = false;
          tempErrors.firstName = "First name is a required field";
        } else if (/\d/.test(data.firstName)) {
          isValid = false;
          tempErrors.firstName = "First name should not contain numbers";
        }

        if (!data.lastName) {
          isValid = false;
          tempErrors.lastName = "Last name is a required field";
        } else if (/\d/.test(data.lastName)) {
          isValid = false;
          tempErrors.lastName = "Last name should not contain numbers";
        }

        if (!data.age) {
          isValid = false;
          tempErrors.age = "Age must be a number";
        } else if (parseInt(data.age) <= 0) {
          isValid = false;
          tempErrors.age = "Age should be positive";
        }

        break;
      case 2:
        if (!data.email) {
          isValid = false;
          tempErrors.email = "Email is a required field";
        } else if (!/\S+@\S+\.\S+/.test(data.email)) {
          isValid = false;
          tempErrors.email = "Email should have correct format";
        }

        if (!data.phone) {
          isValid = false;
          tempErrors.phone = "Phone number is a required field";
        }
        break;
      case 3:
        if (!data.seat) {
          isValid = false;
          tempErrors.seat = "Seat is a required field";
        }
        if (!data.food) {
          isValid = false;
          tempErrors.food = "Food is a required field";
        }
        if (!data.allergies) {
          isValid = false;
          tempErrors.allergies = "Allergies is a required field";
        }
        break;
      default:
        break;
    }

    setErrors(tempErrors);
    return isValid;
  }, [data, currentStep]);

  const handleNext = useCallback(() => {
    if (validateStep()) {
      if (currentStep === 4) {
        navigate("/cv");
      } else {
        setCurrentStep((prevStep) => prevStep + 1);
        setErrors({});
        navigate(`/step${currentStep + 1}`);
      }
    }
  }, [validateStep, currentStep, navigate]);

  const handleBack = useCallback(() => {
    if (currentStep > 1) {
      setCurrentStep((prevStep) => prevStep - 1);
      navigate(`/step${currentStep - 1}`);
    }
  }, [currentStep, navigate]);

  useEffect(() => {
    switch (page) {
      case "step1":
        setCurrentStep(1);
        break;
      case "step2":
        setCurrentStep(2);
        break;
      case "step3":
        setCurrentStep(3);
        break;
      case "step4":
        setCurrentStep(4);
        break;
      default:
        setCurrentStep(1);
        break;
    }
  }, [page]);

  return (
    <div>
      {currentStep === 1 && (
        <Step1
          data={data}
          errors={errors}
          onInputChange={handleInputChange}
          onNext={handleNext}
        />
      )}

      {currentStep === 2 && (
        <Step2
          data={data}
          errors={errors}
          onInputChange={handleInputChange}
          onNext={handleNext}
          onBack={handleBack}
        />
      )}

      {currentStep === 3 && (
        <Step3
          data={data}
          errors={errors}
          onInputChange={handleInputChange}
          onNext={handleNext}
          onBack={handleBack}
        />
      )}

      {currentStep === 4 && (
        <Step4 data={data} onBack={handleBack} onNext={handleNext} />
      )}
    </div>
  );
};

export default Form;
