import React from "react";

const CustomForm = ({ status, message, onValidated }) => {
  let email;
  const validateEmail = (mail) =>
    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail.trim());
  const submit = () => {
    if (email && validateEmail(email.value)) {
      onValidated({
        EMAIL: email.value,
      });
      alert("sent");
    } else {
      alert("no");
    }
  };
  return (
    <div className="flex justify-center flex-col">
      {status === "sending" && <div style={{ color: "blue" }}>sending...</div>}
      {status === "error" && (
        <div
          style={{ color: "red" }}
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      {status === "success" && (
        <div
          style={{ color: "green" }}
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      <div className="bg-white py-2 px-2 md:m-0 w-fit rounded-full">
        <input
          ref={(node) => (email = node)}
          type="text"
          placeholder="E-mail Address"
          className="border-none w-[50vw] sm:w-auto outline-none text-primary mr-0.5 placeholder:text-primary pl-2"
        />
        <button
          onClick={() => {
            submit();
          }}
          type="submit"
          className="bg-secondary text-white p-3 rounded-full"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default CustomForm;
