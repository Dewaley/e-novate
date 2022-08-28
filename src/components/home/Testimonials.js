import { MdOutlineNavigateNext, MdOutlineNavigateBefore } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { useRef } from "react";
import Testimonial from "./Testimonial";
import "swiper/css";
import "swiper/css/navigation";
import { testimonials } from "../../config/testimonials";

const Testimonials = () => {
  const swiperNavPrevRef = useRef(null);
  const swiperNavNextRef = useRef(null);
  return (
    <section className="flex flex-col md:flex-row items-center justify-center gap-y-8 w-[90vw] md:w-[80vw] gap-x-8 mb-8">
      <header className="text-center md:basis-1/2 md:text-left md:max-w-sm">
        <h2 className="text-secondary my-4">TESTIMONIALS</h2>
        <p className="text-lg">Here what people have to say regarding us.</p>
      </header>
      <div className="md:basis-1/2 max-w-lg w-full">
        <Swiper
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
          }}
          modules={[Navigation]}
          navigation={{
            prevEl: swiperNavPrevRef.current,
            nextEl: swiperNavNextRef.current,
          }}
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide>
              <Testimonial
                name={testimonial.name}
                body={testimonial.body}
                job={testimonial.job}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="flex flex-row justify-center">
          <span className="flex gap-x-2 text-secondary text-4xl">
            <button ref={swiperNavPrevRef}>
              <MdOutlineNavigateBefore />
            </button>
            <button ref={swiperNavNextRef}>
              <MdOutlineNavigateNext />
            </button>
          </span>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
