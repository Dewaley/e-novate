import { MdOutlineNavigateNext, MdOutlineNavigateBefore } from "react-icons/md";
import { useState } from "react";
import Testimonial from "./Testimonial";
import "swiper/css";
import "swiper/css/navigation";
import { testimonials } from "../../config/testimonials";

const Testimonials = () => {
  const [count, setCount] = useState(0);
  return (
    <section className="flex flex-col md:flex-row items-center justify-center gap-y-8 w-[90vw] md:w-[80vw] gap-x-8 mb-8">
      <header className="text-center md:basis-1/2 md:text-left md:max-w-sm">
        <h2 className="text-secondary my-4">TESTIMONIALS</h2>
        <p className="text-lg">Here what people have to say regarding us.</p>
      </header>
      <div className="md:basis-1/2 max-w-lg w-full">
        <Testimonial
          name={testimonials[count].name}
          body={testimonials[count].body}
          job={testimonials[count].job}
        />
        <div className="flex flex gap-x-2 text-secondary text-4xl justify-center">
          <button
            onClick={() => {
              if (count > 0) {
                console.log(testimonials[count].name)
                setCount((prev) => prev - 1);
              }
            }}
          >
            <MdOutlineNavigateBefore />
          </button>
          <button
            onClick={() => {
              if (count < testimonials.length) {
                setCount((prev) => prev + 1);
              }
            }}
          >
            <MdOutlineNavigateNext />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
