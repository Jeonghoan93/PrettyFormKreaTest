import React from "react";
import { Controller } from "react-hook-form";
import Button from "src/components/Button";
import FormContainer from "src/components/FormContainer";

interface Step3Props {
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
        Seat
        <Controller
          render={({ field }) => (
            <input
              className="border-[1px] border-gray-300 ml-2"
              data-testid="seat"
              {...field}
            />
          )}
          control={control}
          name="seat"
        />
        {errors.seat && (
          <div className="text-red-500 font-light text-[10pt]">
            {errors.seat.message}
          </div>
        )}
      </label>

      <label>
        Food
        <Controller
          render={({ field }) => (
            <input
              className="border-[1px] border-gray-300 ml-2"
              data-testid="food"
              {...field}
            />
          )}
          control={control}
          name="food"
        />
        {errors.food && (
          <div className="text-red-500 font-light text-[10pt]">
            {errors.food.message}
          </div>
        )}
      </label>

      <label>
        Allergies
        <Controller
          render={({ field }) => (
            <input
              className="border-[1px] border-gray-300 ml-2"
              data-testid="allergies"
              {...field}
            />
          )}
          control={control}
          name="allergies"
        />
        {errors.allergies && (
          <div className="text-red-500 font-light text-[10pt]">
            {errors.allergies.message}
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

const Step3: React.FC<Step3Props> = ({ control, errors, onSubmit, onBack }) => {
  return (
    <FormContainer
      header={<div data-testid="title">Step 3</div>}
      body={<BodyContent control={control} errors={errors} />}
      footer={<FooterContent onSubmit={onSubmit} onBack={onBack} />}
    />
  );
};

export default Step3;
