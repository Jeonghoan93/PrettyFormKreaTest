import React from "react";
import { Controller } from "react-hook-form";
import Button from "src/components/Button";
import FormContainer from "src/components/FormContainer";

interface Step1Props {
  control: any;
  errors: any;
  onSubmit: () => void;
}

const BodyContent: React.FC<{ control: any; errors: any }> = ({
  control,
  errors,
}) => {
  return (
    <form className="p-3 flex flex-col gap-3">
      <label>
        First Name
        <Controller
          render={({ field }) => (
            <input
              className="border-[1px] border-gray-300 ml-2"
              data-testid="firstName"
              {...field}
            />
          )}
          control={control}
          name="firstName"
        />
        {errors.firstName && (
          <div className="text-red-500 font-light text-[10pt]">
            {errors.firstName.message}
          </div>
        )}
      </label>

      <label>
        Last Name
        <Controller
          render={({ field }) => (
            <input
              className="border-[1px] border-gray-300 ml-2"
              data-testid="lastName"
              {...field}
            />
          )}
          control={control}
          name="lastName"
        />
        {errors.lastName && (
          <div className="text-red-500 font-light text-[10pt]">
            {errors.lastName.message}
          </div>
        )}
      </label>

      <label>
        Age
        <Controller
          render={({ field }) => (
            <input
              className="border-[1px] border-gray-300 ml-2"
              data-testid="age"
              {...field}
            />
          )}
          control={control}
          name="age"
        />
        {errors.age && (
          <div className="text-red-500 font-light text-[10pt]">
            {errors.age.message}
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

const Step1: React.FC<Step1Props> = ({ control, errors, onSubmit }) => {
  return (
    <FormContainer
      header={<div data-testid="title">Step 1</div>}
      body={<BodyContent control={control} errors={errors} />}
      footer={<FooterContent onNext={onSubmit} />}
    />
  );
};

export default Step1;
