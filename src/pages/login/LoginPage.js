import { FaFacebookF, FaGoogle, FaLinkedinIn } from "react-icons/fa";
import SignUpPic from "../../images/loginPage/signUp.png";
import SignInPic from "../../images/loginPage/signIn.png";
import { useState, useEffect } from "react";
import { PuffLoader } from "react-spinners";

const LoginPage = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    window.scrollTo({
      top: 0,
    });
    setTimeout(() => setLoading(false), 2000);
  }, []);
  const [hasAccount, setHasAccount] = useState(true);
  const img = hasAccount ? SignInPic : SignUpPic;
  return (
    <>
      {loading ? (
        <div className="w-full h-screen bg-primary overflow-hidden flex items-center justify-center absolute top-0 z-[1000]">
          <PuffLoader color={"#FF206E"} />
        </div>
      ) : (
        <div className="flex flex-col items-center text-primary">
          <div className="w-[90vw] block md:hidden mt-6">
            <p className="text-right">
              {hasAccount
                ? "Don’t have an account? "
                : "Already have an account?"}
              &nbsp;
              {hasAccount ? (
                <span
                  className="text-secondary cursor-pointer"
                  onClick={() => setHasAccount(false)}
                >
                  Sign Up
                </span>
              ) : (
                <span
                  className="text-secondary cursor-pointer"
                  onClick={() => setHasAccount(true)}
                >
                  Sign In
                </span>
              )}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 w-[90vw] border-[1px] border-[#666666]/20 rounded-md overflow-hidden shadow-md mt-6 mb-12 md:my-12">
            <div
              className="flex flex-col md:col-span-1 h-[50vh] md:h-auto bg-center bg-cover"
              style={{
                backgroundImage: `url(${img})`,
              }}
            ></div>
            <div className="flex flex-col gap-y-8 mb-8 md:col-span-1 py-8 items-center w-full">
              <div className="w-full pr-4 hidden md:block">
                <p className="text-right">
                  {hasAccount
                    ? "Don’t have an account? "
                    : "Already have an account?"}
                  &nbsp;
                  {hasAccount ? (
                    <span
                      className="text-secondary cursor-pointer"
                      onClick={() => setHasAccount(false)}
                    >
                      Sign Up
                    </span>
                  ) : (
                    <span
                      className="text-secondary cursor-pointer"
                      onClick={() => setHasAccount(true)}
                    >
                      Sign In
                    </span>
                  )}
                </p>
              </div>
              <div className="flex flex-col gap-y-4 items-center md:items-start w-full">
                <h1 className="font-bold text-xl pl-4">
                  {hasAccount ? "Sign In" : "Sign up"} to{" "}
                  <span className="text-secondary">E-</span>novate
                </h1>
                <div className="flex flex-col md:flex-row gap-x-2 flex-wrap items-center md:w-fit w-[80vw] gap-y-2 md:pl-4">
                  <button className="bg-secondary gap-x-8 rounded flex items-center justify-center text-white w-full sm:w-60 md:w-auto px-2 h-10">
                    <FaGoogle />
                    <span>
                      {hasAccount ? "Sign In" : "Sign up"} with Google
                    </span>
                  </button>
                  <button className="bg-[#C4C4C4]/40 gap-x-8 rounded flex items-center justify-center text-[#636363] w-full sm:w-60 md:w-auto px-2 h-10 md:w-10">
                    <FaLinkedinIn />
                    <span className="md:hidden">
                      {hasAccount ? "Sign In" : "Sign up"} with LinkedIn
                    </span>
                  </button>
                  <button className="bg-[#C4C4C4]/40 gap-x-8 rounded flex items-center justify-center text-[#636363] w-full sm:w-60 md:w-auto px-2 h-10 md:w-10">
                    <FaFacebookF />
                    <span className="md:hidden">
                      {hasAccount ? "Sign In" : "Sign up"} with Facebook
                    </span>
                  </button>
                </div>
                <div className="flex items-center justify-center gap-x-1 w-full px-2">
                  <hr className="w-full" />
                  <span>Or</span>
                  <hr className="w-full" />
                </div>
                <form action="" className="flex flex-col gap-y-2 px-4">
                  {!hasAccount && (
                    <div className="flex flex-col md:flex-row gap-y-2 gap-x-2">
                      <span className="flex flex-col">
                        <label htmlFor="" className="font-medium">
                          First Name
                        </label>
                        <input
                          type="text"
                          name=""
                          id=""
                          placeholder="John"
                          className="bg-[#C4C4C4]/25 rounded p-2 w-[75vw] md:w-[20vw] outline-none focus:outline-primary"
                        />
                      </span>
                      <span className="flex flex-col">
                        <label htmlFor="" className="font-medium">
                          Last Name
                        </label>
                        <input
                          type="text"
                          name=""
                          id=""
                          placeholder="Doe"
                          className="bg-[#C4C4C4]/25 rounded p-2 w-[75vw] md:w-[20vw] outline-none focus:outline-primary"
                        />
                      </span>
                    </div>
                  )}
                  <span className="flex flex-col">
                    <label htmlFor="" className="font-medium">
                      Email
                    </label>
                    <input
                      type="text"
                      name=""
                      id=""
                      placeholder="johndoe@gmail.com"
                      className="bg-[#C4C4C4]/25 rounded p-2 w-[75vw] md:w-auto outline-none focus:outline-primary"
                    />
                  </span>
                  <span className="flex flex-col">
                    <label htmlFor="" className="font-medium">
                      Password
                    </label>
                    <input
                      type="password"
                      name=""
                      id=""
                      placeholder="8+ characters"
                      className="bg-[#C4C4C4]/25 rounded p-2 w-[75vw] md:w-auto outline-none focus:outline-primary"
                    />
                  </span>
                  <span className="flex items-start gap-x-2 my-2">
                    <div>
                      <input type="checkbox" name="" id="" />
                    </div>
                    <span>
                      Subscribe to our emails and notifications and offers from
                      us.
                    </span>
                  </span>
                  {hasAccount ? (
                    <button
                      type="submit"
                      className="w-fit bg-secondary py-2 px-4 rounded text-white"
                    >
                      Sign In
                    </button>
                  ) : (
                    <button
                      type="submit"
                      className="w-fit bg-secondary py-2 px-4 rounded text-white"
                    >
                      Sign Up
                    </button>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default LoginPage;
