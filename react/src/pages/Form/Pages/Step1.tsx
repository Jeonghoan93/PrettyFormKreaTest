import React, { useCallback } from "react";
import Button from "src/components/Button";
import FormContainer from "src/components/FormContainer";
import { FormData } from "src/constants/Index";

interface Step1Props {
  data: FormData;
  errors: Partial<FormData>;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onNext: () => void;
}

const BodyContent: React.FC<{
  data: FormData;
  errors: Partial<FormData>;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}> = ({ data, errors, onInputChange }) => {
  return (
    <form className="p-3 flex flex-col gap-3 ">
      <label>
        First Name
        <input
          className="border-[1px] border-gray-300 ml-2"
          data-testid="firstName"
          name="firstName"
          value={data.firstName}
          onChange={onInputChange}
        />
        {errors.firstName && (
          <div className="text-red-500 font-light text-[10pt]">
            {errors.firstName}
          </div>
        )}
      </label>

      <label>
        Last Name
        <input
          className="border-[1px] border-gray-300 ml-2"
          data-testid="lastName"
          name="lastName"
          value={data.lastName}
          onChange={onInputChange}
        />
        {errors.lastName && (
          <div className="text-red-500 font-light text-[10pt]">
            {errors.lastName}
          </div>
        )}
      </label>

      <label>
        Age
        <input
          className="border-[1px] border-gray-300 ml-2"
          data-testid="age"
          name="age"
          value={data.age}
          onChange={onInputChange}
        />
        {errors.age && (
          <div className="text-red-500 font-light text-[10pt]">
            {errors.age}
          </div>
        )}
      </label>
    </form>
  );
};

const FooterContent: React.FC<{ onNext: () => void }> = ({ onNext }) => {
  return (
    <div className="p-4 flex flex-row items-center justify-between gap-6">
      <Button idName="submit" name={"Next"} onClick={onNext} />
    </div>
  );
};

const Step1BeforeMemorized: React.FC<Step1Props> = ({
  data,
  errors,
  onInputChange: onInputChangeProp,
  onNext: onNextProp,
}) => {
  const onInputChange = useCallback(onInputChangeProp, [onInputChangeProp]);
  const onNext = useCallback(onNextProp, [onNextProp]);

  return (
    <FormContainer
      header={<div data-testid="title">Step 1</div>}
      body={
        <BodyContent
          data={data}
          errors={errors}
          onInputChange={onInputChange}
        />
      }
      footer={<FooterContent onNext={onNext} />}
    />
  );
};

const Step1 = React.memo(Step1BeforeMemorized);
export default Step1;
