import { AiOutlineArrowRight } from "react-icons/ai";
import { useState } from "react";

const FooterCustomForm = ({ status, message, onValidated }) => {
  let email;
  const [error, setError] = useState(false);
  const validateEmail = (mail) =>
    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail.trim());
  const submit = () => {
    if (validateEmail(email.value) === false) {
      setError(true);
    } else if (email && validateEmail(email.value)) {
      setError(false);
      onValidated({
        EMAIL: email.value,
      });
      email.value=""
    }
  };
  return (
    <div className="flex justify-center flex-col">
        {error === true ? (
        <div style={{ color: "red" }}>Please enter a valid email address</div>
      ) : (
        <div>
          {status === "sending" && (
            <div style={{ color: "white" }}>sending...</div>
          )}
          {status === "error" && (
            <div
              style={{ color: "red" }}
              dangerouslySetInnerHTML={{ __html: message }}
            />
          )}
          {status === "success" && (
            <div
              style={{ color: "white" }}
              dangerouslySetInnerHTML={{ __html: message }}
            />
          )}
        </div>
      )}
      <div className="border-2 border-white rounded-lg flex w-fit p-1">
        <input
            ref={(node) => (email = node)}
          type="text"
          name=""
          id=""
          placeholder="E-mail Address"
          className="border-none bg-transparent outline-none text-white mr-0.5 placeholder:text-white p-0.5 w-[160px] sm:w-auto"
        />
        <button
          type="submit"
          onClick={() => {
            submit();
          }}
          className="p-1 bg-secondary rounded text-white flex justify-center items-center"
        >
          <AiOutlineArrowRight />
        </button>
      </div>
    </div>
  );
};

export default FooterCustomForm;
