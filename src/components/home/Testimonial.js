import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";

const Testimonial = ({ body, name, job }) => {
  return (
    <div className="border-t-8 border-t-primary rounded-md flex flex-col justify-center gap-x-4 shadow-md py-8 px-4 md:basis-1/2 max-w-lg mb-4 h-96">
      <div className="flex justify-between my-4">
        <ImQuotesLeft />
        <ImQuotesRight />
      </div>
      <p className="px-6 mb-4">{body}</p>
      <div className="px-6 flex items-center gap-x-2">
        {/* <span className='flex h-12 w-12 bg-secondary rounded-full'></span> */}
        <div>
          <h2>{name}</h2>
          <p className="text-secondary">{job}</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
