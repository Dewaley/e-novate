import { MdOutlineNavigateNext, MdOutlineNavigateBefore } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import CourseCard from "../courses/CourseCard";
import { Navigation, Pagination } from "swiper";
import { useEffect, useRef, useState } from "react";

const CoursesOverview = () => {
  const [courses, setCourses] = useState([]);
  const swiperNavPrevRef = useRef(null);
  const swiperNavNextRef = useRef(null);
  const fetchCourses = async () => {
    const res = await fetch(
      process.env.REACT_APP_ENOVATE_API + `/course/view/?page=1`
    );
    const data = await res.json();
    setCourses(data);
    console.log(data)
  };
  useEffect(() => {
    fetchCourses();
  }, []);

  return (
    <section className="flex flex-col justify-center items-center mb-12">
      <header className="text-center font-light">
        <h4 className="text-secondary font-extralight my-2">COURSES</h4>
        <p className="text-3xl my-2 mb-6">We Offer These Courses</p>
      </header>
      <div className="flex justify-center gap-x-4 w-[90vw] lg:min-w-[80vw] relative">
        <Swiper
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
          modules={[Navigation, Pagination]}
          navigation={{
            prevEl: swiperNavPrevRef.current,
            nextEl: swiperNavNextRef.current,
          }}
          pagination={{ clickable: true }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = swiperNavPrevRef.current;
            swiper.params.navigation.nextEl = swiperNavNextRef.current;
          }}
        >
          {courses.results !== undefined && courses.results.map((course) => {
              return (
                <SwiperSlide key={course.id}>
                  <CourseCard
                    title={course.course_name}
                    preamble={course.course_preamble}
                    lessons={course.no_of_lessons}
                    id={course.slug}
                    image={course.course_image}
                  />
                </SwiperSlide>
              );
            })}
        </Swiper>
        <button
          className="hidden absolute text-xl  sm:flex justify-center items-center w-12 h-12 shadow-md top-[50%] left-[-1.5rem] translate-y-[-50%] z-40  bg-white rounded-full"
          ref={swiperNavPrevRef}
        >
          <MdOutlineNavigateBefore />
        </button>
        <button
          className="hidden absolute text-xl  sm:flex justify-center items-center w-12 h-12 shadow-md top-[50%] right-[-1.5rem] translate-y-[-50%] z-40  bg-white rounded-full"
          ref={swiperNavNextRef}
        >
          <MdOutlineNavigateNext />
        </button>
      </div>
    </section>
  );
};

export default CoursesOverview;
