import axios from "axios";
import { useState } from "react";
import { MdError } from "react-icons/md";

const CommentForm = () => {
  const [error, setError] = useState({
    name: false,
    email: false,
    comment: false,
  });
  const [data, setData] = useState({
    name: "",
    email: "",
    comment: "",
  });
  const url = process.env.REACT_APP_ENOVATE_API + "/blog/comment/";
  const handleSubmit = (e) => {
    e.preventDefault();
    const newError = { ...error };
    if (data.name.trim() === "") {
      newError.name = true;
    }
    if (
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
        data.email.trim()
      ) === false
    ) {
      newError.email = true;
    }
    if (data.comment.trim() === "") {
      newError.comment = true;
    }
    setError(newError);
    if (
      data.name !== "" &&
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(data.email) &&
      data.comment !== ""
    ) {
      newError.name = false;
      newError.email = false;
      newError.comment = false;
      setError(newError);
      fetch(url, {
        method: "POST",
        body: JSON.stringify({
          name: data.name.trim(),
          comment_text: data.comment.trim(),
          comment_email: data.email.trim(),
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((res) => {
          res.json();
          const newData = { ...data };
          newData.name = "";
          newData.email = "";
          newData.comment = "";
          setData(newData);
        })
        .catch((error) => console.log(error));
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
            console.log(e.target.value);
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
          value={data.email}
          id="email"
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
          value={data.comment}
          id="comment"
          rows={8}
          className={`p-2 rounded outline-none focus:outline-primary resize-none ${
            error.comment === true && "outline-red-500 focus:outline-red-500"
          }`}
          placeholder="Leave a comment..."
        ></textarea>
      </div>
      <button
        className="bg-secondary px-8 py-2 text-white font-bold rounded mt-4"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
};

export default CommentForm;