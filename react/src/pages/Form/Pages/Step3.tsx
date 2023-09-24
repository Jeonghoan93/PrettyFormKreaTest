import React, { useCallback } from "react";
import Button from "src/components/Button";
import FormContainer from "src/components/FormContainer";
import { FormData } from "src/constants/Index";

interface Step1Props {
  data: FormData;
  errors: Partial<FormData>;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onNext: () => void;
  onBack: () => void;
}

interface BodyContentProps {
  data: FormData;
  errors: Partial<FormData>;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

interface FooterContentProps {
  onNext: () => void;
  onBack: () => void;
}

const BodyContent: React.FC<BodyContentProps> = ({
  data,
  errors,
  onInputChange,
}) => {
  return (
    <form className="p-3 flex flex-col gap-3 ">
      <label>
        Seat
        <input
          className="border-[1px] border-gray-300 ml-2"
          data-testid="seat"
          name="seat"
          value={data.seat}
          onChange={onInputChange}
        />
        {errors.seat && (
          <div className="text-red-500 font-light text-[10pt]">
            {errors.seat}
          </div>
        )}
      </label>

      <label>
        Food
        <input
          className="border-[1px] border-gray-300 ml-2"
          data-testid="food"
          name="food"
          value={data.food}
          onChange={onInputChange}
        />
        {errors.food && (
          <div className="text-red-500 font-light text-[10pt]">
            {errors.food}
          </div>
        )}
      </label>

      <label>
        Allergies
        <input
          className="border-[1px] border-gray-300 ml-2"
          data-testid="allergies"
          name="allergies"
          value={data.allergies}
          onChange={onInputChange}
        />
        {errors.allergies && (
          <div className="text-red-500 font-light text-[10pt]">
            {errors.allergies}
          </div>
        )}
      </label>
    </form>
  );
};

const FooterContent: React.FC<FooterContentProps> = ({ onNext, onBack }) => {
  return (
    <div className="p-4 flex flex-row items-center justify-between gap-6">
      <Button idName="back" name={"Back"} onClick={onBack} />
      <Button idName="submit" name={"Next"} onClick={onNext} />
    </div>
  );
};

const Step3BeforeMemorized: React.FC<Step1Props> = ({
  data,
  errors,
  onInputChange: onInputChangeProp,
  onNext: onNextProp,
  onBack: onBackProp,
}) => {
  const onInputChange = useCallback(onInputChangeProp, [onInputChangeProp]);
  const onNext = useCallback(onNextProp, [onNextProp]);
  const onBack = useCallback(onBackProp, [onBackProp]);

  return (
    <FormContainer
      header={<div data-testid="title">Step 3</div>}
      body={
        <BodyContent
          data={data}
          errors={errors}
          onInputChange={onInputChange}
        />
      }
      footer={<FooterContent onNext={onNext} onBack={onBack} />}
    />
  );
};

const Step3 = React.memo(Step3BeforeMemorized);
export default Step3;
