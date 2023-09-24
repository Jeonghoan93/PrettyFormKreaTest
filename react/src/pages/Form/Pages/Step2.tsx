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
        Phone
        <input
          className="border-[1px] border-gray-300 ml-2"
          data-testid="phone"
          name="phone"
          value={data.phone}
          onChange={onInputChange}
        />
        {errors.phone && (
          <div className="text-red-500 font-light text-[10pt]">
            {errors.phone}
          </div>
        )}
      </label>

      <label>
        Email
        <input
          className="border-[1px] border-gray-300 ml-2"
          data-testid="email"
          name="email"
          value={data.email}
          onChange={onInputChange}
        />
        {errors.email && (
          <div className="text-red-500 font-light text-[10pt]">
            {errors.email}
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

const Step2BeforeMemorized: React.FC<Step1Props> = ({
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
      header={<div data-testid="title">Step 2</div>}
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

const Step2 = React.memo(Step2BeforeMemorized);
export default Step2;
