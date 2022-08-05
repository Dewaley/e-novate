import NewsLetter from "../../components/universal/NewsLetter";

const ContactPage = () => {
  return (
    <div className="flex flex-col items-center text-primary gap-y-8 mt-8">
      <div className="flex flex-col items-center w-[80vw]">
        <h1 className="font-light text-secondary">CONTACT US</h1>
        <h4 className="text-xl mb-2">Have any question?</h4>
        <hr className="w-2/12 md:max-w-[100px] bg-secondary h-1" />
        <p className="text-center text-sm md:text-base md:max-w-[500px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. sit amet
          consectetur adipisicing elit.
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
        <form className="flex flex-col gap-y-2 border-[2px] border-[#C4C4C4]/25 rounded-md p-2 md:w-7/12">
          <div className="flex flex-col md:flex-row md:justify-between gap-y-2 gap-x-2">
            <div className="flex flex-col gap-y-2">
              <label htmlFor="" className="text-secondary">
                Name
              </label>
              <input
                type="text"
                name=""
                id=""
                placeholder="Full name"
                className="border-[2px] border-[#C4C4C4]/25 focus:border-[#263B5D]/80 rounded-md p-2 w-[75vw] md:w-[20vw] outline-none"
              />
            </div>
            <div className="flex flex-col gap-y-2">
              <label htmlFor="" className="text-secondary">
                Email Address
              </label>
              <input
                type="text"
                name=""
                id=""
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
                type="text"
                name=""
                id=""
                placeholder="(416) 254- 3265"
                className="border-[2px] border-[#C4C4C4]/25 focus:border-[#263B5D]/80 rounded-md p-2 w-[75vw] md:w-[20vw] outline-none"
              />
            </div>
            <div className="flex flex-col gap-y-2">
              <label htmlFor="" className="text-secondary">
                Subject
              </label>
              <input
                type="text"
                name=""
                id=""
                placeholder="EX. Support"
                className="border-[2px] border-[#C4C4C4]/25 focus:border-[#263B5D]/80 rounded-md p-2 w-[75vw] md:w-[20vw] outline-none"
              />
            </div>
          </div>
          <div className="flex flex-col gap-y-2">
            <span className="text-secondary">Message</span>
            <textarea
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
  );
};

export default ContactPage;
