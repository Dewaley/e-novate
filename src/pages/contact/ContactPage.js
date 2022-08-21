import NewsLetter from "../../components/universal/NewsLetter";
import { useState, useEffect } from "react";
import { MdError } from "react-icons/md";

const ContactPage = () => {
  const [result, setResult] = useState("");
  const [data, setData] = useState({
    full_name: "",
    email: "",
    message: "",
    subject: "",
    phone: "",
  });
  const [error, setError] = useState({
    full_name: false,
    email: false,
    message: false,
    subject: false,
  });
  const handleChange = (e) => {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
  };
  const onSubmit = async (event) => {
    event.preventDefault();
    const newError = { ...error };
    if (data.full_name.trim() === "") {
      newError.full_name = true;
    }
    if (
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
        data.email.trim()
      ) === false
    ) {
      newError.email = true;
    }
    if (data.message.trim() === "") {
      newError.message = true;
    }
    if (data.subject.trim() === "") {
      newError.subject = true;
    }
    setError(newError);
    if (
      data.full_name !== "" &&
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(data.email) &&
      data.message !== "" &&
      data.subject !== ""
    ) {
      setResult("Sending....");
      const formData = new FormData(event.target);
      formData.append("access_key", "ec373e0a-5a51-4217-ac19-49990a1f0f93");
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      }).then((res) => res.json());
      if (res.success) {
        console.log("Success", res);
        setResult(res.message);
      } else {
        console.log("Error", res);
        setResult(res.message);
      }
      const newData = { ...data };
      newData.full_name = "";
      newData.email = "";
      newData.message = "";
      newData.phone = "";
      newData.subject = "";
      setData(newData);
    }
  };
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    window.scrollTo({
      top: 0,
    });
    setTimeout(() => setLoading(false), 5000);
  }, []);
  return (
    <>
      <div className="flex flex-col items-center text-primary gap-y-8 mt-8 animate__animated animate__fadeIn">
        <div className="flex flex-col items-center w-[80vw]">
          <h1 className="font-light text-secondary">CONTACT US</h1>
          <h4 className="text-xl mb-2">Have any questions?</h4>
          <hr className="w-2/12 md:max-w-[100px] bg-secondary h-1" />
          <p className="text-center text-sm md:text-base md:max-w-[500px]">
            Let us know by reaching out to us on any of the platforms below.
          </p>
        </div>
        <div className="flex flex-col gap-y-8 md:flex-row md:items-center md:gap-x-2 w-[80vw] mb-8">
          <div className="flex flex-col gap-y-2 md:w-5/12">
            <div className="flex flex-col gap-y-2">
              <span className="mb-1 text-lg text-secondary">Email</span>
              <span>VillageSquareOnline@gmail.com</span>
              <hr />
            </div>
            <div className="flex flex-col gap-y-2">
              <span className="mb-1 text-lg text-secondary">Call Us at</span>
              <span>0803 353 0335</span>
              <hr />
            </div>
            <div className="flex flex-col gap-y-2">
              <span className="mb-1 text-lg text-secondary">Address</span>
              <span>Ivan 5, VCH Estate, Lekki, Lagos, Nigeria.</span>
              <hr />
            </div>
          </div>
          <form
            onSubmit={onSubmit}
            className="flex flex-col gap-y-2 border-[2px] border-[#C4C4C4]/25 rounded-md p-2 md:w-7/12"
          >
            <div className="flex flex-col md:flex-row md:justify-between gap-y-2 gap-x-2">
              <div className="flex flex-col gap-y-2">
                <label
                  htmlFor=""
                  className="text-secondary flex justify-between items-center"
                >
                  Name
                  <MdError
                    className={`text-red-500 ${
                      error.full_name === true ? "block" : "hidden"
                    }`}
                  />
                </label>
                <input
                  onChange={(e) => {
                    handleChange(e);
                    console.log(e.target.value);
                  }}
                  type="text"
                  name="full_name"
                  value={data.full_name}
                  id="full_name"
                  placeholder="Full name"
                  className="border-[2px] border-[#C4C4C4]/25 focus:border-[#263B5D]/80 rounded-md p-2 w-[75vw] md:w-[20vw] outline-none"
                />
              </div>
              <div className="flex flex-col gap-y-2">
                <label
                  htmlFor=""
                  className="text-secondary flex justify-between items-center"
                >
                  Email Address
                  <MdError
                    className={`text-red-500 ${
                      error.email === true ? "block" : "hidden"
                    }`}
                  />
                </label>
                <input
                  onChange={(e) => {
                    handleChange(e);
                    console.log(e.target.value);
                  }}
                  type="text"
                  name="email"
                  value={data.email}
                  id="email"
                  placeholder="Email address"
                  className="border-[2px] border-[#C4C4C4]/25 focus:border-[#263B5D]/80 rounded-md p-2 w-[75vw] md:w-[20vw] outline-none"
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row md:justify-between gap-y-2 gap-x-2">
              <div className="flex flex-col gap-y-2">
                <label htmlFor="" className="text-secondary">
                  Phone
                </label>
                <input
                  onChange={(e) => {
                    handleChange(e);
                    console.log(e.target.value);
                  }}
                  value={data.phone}
                  type="text"
                  name="phone_number"
                  id="phone"
                  placeholder="(416) 254- 3265"
                  className="border-[2px] border-[#C4C4C4]/25 focus:border-[#263B5D]/80 rounded-md p-2 w-[75vw] md:w-[20vw] outline-none"
                />
              </div>
              <div className="flex flex-col gap-y-2">
                <label
                  htmlFor=""
                  className="text-secondary flex justify-between items-center"
                >
                  Subject
                  <MdError
                    className={`text-red-500 ${
                      error.subject === true ? "block" : "hidden"
                    }`}
                  />
                </label>
                <input
                  onChange={(e) => {
                    handleChange(e);
                    console.log(e.target.value);
                  }}
                  value={data.subject}
                  type="text"
                  name="subject"
                  id="subject"
                  placeholder="EX. Support"
                  className="border-[2px] border-[#C4C4C4]/25 focus:border-[#263B5D]/80 rounded-md p-2 w-[75vw] md:w-[20vw] outline-none"
                />
              </div>
            </div>
            <div className="flex flex-col gap-y-2">
              <label className="text-secondary flex justify-between items-center">
                Message
                <MdError
                  className={`text-red-500 ${
                    error.message === true ? "block" : "hidden"
                  }`}
                />
              </label>
              <textarea
                onChange={(e) => {
                  handleChange(e);
                  console.log(e.target.value);
                }}
                id="message"
                value={data.message}
                name="message"
                rows={8}
                className="w-full border-[2px] border-[#C4C4C4]/25 focus:border-[#263B5D]/80 p-2 rounded-md outline-none resize-none"
              ></textarea>
            </div>
            <div className="flex justify-center items-center mt-2">
              <button
                type="submit"
                className="bg-secondary px-4 py-2 text-white rounded-md"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
        <NewsLetter />
      </div>
    </>
  );
};

export default ContactPage;
