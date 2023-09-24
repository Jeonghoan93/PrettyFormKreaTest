import React from "react";
import { Controller } from "react-hook-form";
import Button from "src/components/Button";
import FormContainer from "src/components/FormContainer";

interface Step2Props {
  control: any;
  errors: any;
  onSubmit: () => void;
  onBack: () => void;
}

const BodyContent: React.FC<{ control: any; errors: any }> = ({
  control,
  errors,
}) => {
  return (
    <form className="p-3 flex flex-col gap-3">
      <label>
        Phone
        <Controller
          render={({ field }) => (
            <input
              className="border-[1px] border-gray-300 ml-2"
              data-testid="phone"
              {...field}
            />
          )}
          control={control}
          name="phone"
        />
        {errors.phone && (
          <div className="text-red-500 font-light text-[10pt]">
            {errors.phone.message}
          </div>
        )}
      </label>

      <label>
        Email
        <Controller
          render={({ field }) => (
            <input
              className="border-[1px] border-gray-300 ml-2"
              data-testid="email"
              {...field}
            />
          )}
          control={control}
          name="email"
        />
        {errors.email && (
          <div className="text-red-500 font-light text-[10pt]">
            {errors.email.message}
          </div>
        )}
      </label>
    </form>
  );
};

const FooterContent: React.FC<{ onSubmit: () => void; onBack: () => void }> = ({
  onSubmit,
  onBack,
}) => {
  return (
    <div className="p-4 flex flex-row items-center justify-between gap-6">
      <Button idName="back" name={"Back"} onClick={onBack} />
      <Button idName="submit" name={"Next"} onClick={onSubmit} />
    </div>
  );
};

const Step2: React.FC<Step2Props> = ({ control, errors, onSubmit, onBack }) => {
  return (
    <FormContainer
      header={<div data-testid="title">Step 2</div>}
      body={<BodyContent control={control} errors={errors} />}
      footer={<FooterContent onSubmit={onSubmit} onBack={onBack} />}
    />
  );
};

export default Step2;
