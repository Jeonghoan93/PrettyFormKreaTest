import React, { useCallback } from "react";
import Button from "src/components/Button";
import FormContainer from "src/components/FormContainer";
import { FormData } from "src/constants/Index";

interface Step4Props {
  data: FormData;
  onBack: () => void;
  onNext: () => void;
}

interface BodyContentProps {
  data: FormData;
}

const BodyContent: React.FC<BodyContentProps> = ({ data }) => (
  <div>
    <div data-testid="firstName">{data.firstName}</div>
    <div data-testid="lastName">{data.lastName}</div>
    <div data-testid="age">{data.age}</div>
    <div data-testid="phone">{data.phone}</div>
    <div data-testid="email">{data.email}</div>
    <div data-testid="seat">{data.seat}</div>
    <div data-testid="food">{data.food}</div>
    <div data-testid="allergies">{data.allergies}</div>
  </div>
);

interface FooterContentProps {
  onBack: () => void;
  onNext: () => void;
}

const FooterContent: React.FC<FooterContentProps> = ({ onBack, onNext }) => (
  <div className="p-4 flex flex-row items-center justify-between gap-6">
    <Button idName="back" name={"Back"} onClick={onBack} />
    <Button name={"Show CV"} onClick={onNext} />
  </div>
);

const Step4BeforeMemorized: React.FC<Step4Props> = ({
  data,
  onBack: onBackProp,
  onNext: onNextProp,
}) => {
  const onBack = useCallback(onBackProp, [onBackProp]);
  const onNext = useCallback(onNextProp, [onNextProp]);

  return (
    <FormContainer
      header={<div data-testid="title">Result</div>}
      body={<BodyContent data={data} />}
      footer={<FooterContent onBack={onBack} onNext={onNext} />}
    />
  );
};

const Step4 = React.memo(Step4BeforeMemorized);
export default Step4;
