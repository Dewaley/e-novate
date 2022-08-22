import { useState, useRef } from "react";
import { MdError } from "react-icons/md";
import ReCAPTCHA from "react-google-recaptcha";

const CommentForm = ({ post }) => {
  const captchaRef = useRef(null);
  const [error, setError] = useState({
    name: false,
    email: false,
  });
  let token = "";
  const [data, setData] = useState({
    name: "",
    comment_email: "",
    comment_text: "",
    recaptcha: token,
    post: post,
  });
  const url = process.env.REACT_APP_ENOVATE_API + "/blog/comment/";
  const handleSubmit = (e) => {
    e.preventDefault();
    token = captchaRef.current.getValue();
    captchaRef.current.reset();
    const newError = { ...error };
    if (data.name.trim() === "") {
      newError.name = true;
    }
    if (
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
        data.comment_email.trim()
      ) === false
    ) {
      newError.email = true;
    }
    if (data.comment_text.trim() === "") {
      newError.comment = true;
    }
    setError(newError);
    if (
      data.name !== "" &&
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
        data.comment_email
      ) &&
      data.comment_text !== "" &&
      data.recaptcha !== ""
    ) {
      newError.name = false;
      newError.email = false;
      newError.comment = false;
      setError(newError);
      fetch(url, {
        method: "POST",
        body: JSON.stringify({
          name: data.name.trim(),
          comment_text: data.comment_text.trim(),
          comment_email: data.comment_email.trim(),
          recaptcha: data.recaptcha,
          post: data.post,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((res) => {
          const newData = { ...data };
          newData.name = "";
          newData.comment_email = "";
          newData.comment_text = "";
          setData(newData);
        })
    }
  };
  const handleChange = (e) => {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
  };
  return (
    <form
      onSubmit={(e) => {
        handleSubmit(e);
      }}
      className="bg-[#c4c4c4]/20 p-2 flex flex-col items-center gap-y-4 p-8 rounded-md mb-12"
    >
      <div className="flex flex-col gap-y-0.5 w-full">
        <label htmlFor="" className="font-bold flex justify-between sm:w-1/2">
          Name
          <MdError
            className={`text-red-500 ${
              error.name === true ? "block" : "hidden"
            }`}
          />
        </label>
        <input
          onChange={(e) => {
            handleChange(e);
          }}
          value={data.name}
          id="name"
          type="text"
          className={`p-2 rounded outline-none focus:outline-primary sm:w-1/2 ${
            error.name === true && "outline-red-500 focus:outline-red-500"
          }`}
          placeholder="John Doe"
        />
      </div>
      <div className="flex flex-col gap-y-0.5 w-full">
        <label htmlFor="" className="font-bold flex justify-between sm:w-1/2">
          Email
          <MdError
            className={`text-red-500 ${
              error.email === true ? "block" : "hidden"
            }`}
          />
        </label>
        <input
          onChange={(e) => handleChange(e)}
          value={data.comment_email}
          id="comment_email"
          type="text"
          className={`p-2 rounded outline-none focus:outline-primary sm:w-1/2 ${
            error.email === true && "outline-red-500 focus:outline-red-500"
          }`}
          placeholder="johndoe@gmail.com"
        />
      </div>
      <div className="flex flex-col gap-y-0.5 w-full">
        <label htmlFor="" className="font-bold flex justify-between">
          Comment
          <MdError
            className={`text-red-500 ${
              error.comment === true ? "block" : "hidden"
            }`}
          />
        </label>
        <textarea
          onChange={(e) => handleChange(e)}
          value={data.comment_text}
          id="comment_text"
          rows={8}
          className={`p-2 rounded outline-none focus:outline-primary resize-none ${
            error.comment === true && "outline-red-500 focus:outline-red-500"
          }`}
          placeholder="Leave a comment..."
        ></textarea>
        <div className="mt-2">
          <ReCAPTCHA
            sitekey="6LdY1nUhAAAAAB1vECNVoZCd5DOR2idnO298_Qi8"
            ref={captchaRef}
            onChange={() => {
              const newData = { ...data };
              newData.recaptcha = captchaRef.current.getValue();
              setData(newData);
            }}
          />
        </div>
      </div>
      <button
        className="bg-secondary px-8 py-2 text-white font-bold rounded mt-4 cursor-pointer"
        type="submit"
        onClick={(e) => handleSubmit(e)}
      >
        Submit
      </button>
    </form>
  );
};

export default CommentForm;
