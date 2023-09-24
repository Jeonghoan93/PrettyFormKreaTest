import React from "react";

interface FormContainerProps {
  header: React.ReactNode;
  body: React.ReactNode;
  footer: React.ReactNode;
}

const FormContainer: React.FC<FormContainerProps> = ({
  header,
  body,
  footer,
}) => {
  return (
    <section className="p-3" style={{ maxWidth: "400px" }}>
      <div className="border-[1px] rounded-md flex flex-col gap-3">
        <div className="p-4">{header}</div>

        <hr />

        <div className="p-4 flex flex-col gap-2">{body}</div>

        <hr />

        {footer}
      </div>
    </section>
  );
};

export default FormContainer;
