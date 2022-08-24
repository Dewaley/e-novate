import { MdOutlineNavigateNext, MdOutlineNavigateBefore } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import CourseCard from "../courses/CourseCard";
import { Navigation, Pagination } from "swiper";
import { useEffect, useRef, useState } from "react";
import PlaceholderLoading from "react-placeholder-loading";
import { MdOutlinePlayLesson } from "react-icons/md";

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
  };
  useEffect(() => {
    fetchCourses();
  }, []);

  return (
    <section className="flex flex-col justify-center items-center mb-12">
      <header className="text-center font-light">
        <h4 className="text-secondary font-light my-2">COURSES</h4>
        <p className="text-3xl my-2 mb-6">
          Become a <span className="font-semibold">PRO</span> with any of our
          outlined courses
        </p>
      </header>
      <div className="flex justify-center gap-x-4 w-[90vw] lg:min-w-[80vw] relative">
        {courses.results ? (
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
            {courses.results !== undefined &&
              courses.results.map((course) => {
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
        ) : (
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
            <SwiperSlide>
              <div className="flex flex-col shadow-md rounded-md overflow-hidden w-full select-none overflow-hidden">
                <PlaceholderLoading shape="rect" width={1000} height={300} />
                <div className="flex flex-col px-6 justify-between pt-4 h-full">
                  <header className="overflow-hidden h-full flex flex-col gap-y-1">
                    <PlaceholderLoading shape="rect" width={200} height={20} />
                    <p className="font-light text-sm h-[10rem] overflow-hidden flex flex-col gap-y-1">
                      <PlaceholderLoading
                        shape="rect"
                        width={1000}
                        height={10}
                      />
                      <PlaceholderLoading
                        shape="rect"
                        width={1000}
                        height={10}
                      />
                      <PlaceholderLoading
                        shape="rect"
                        width={1000}
                        height={10}
                      />
                      <PlaceholderLoading
                        shape="rect"
                        width={1000}
                        height={10}
                      />
                      <PlaceholderLoading
                        shape="rect"
                        width={1000}
                        height={10}
                      />
                      <PlaceholderLoading
                        shape="rect"
                        width={1000}
                        height={10}
                      />
                    </p>
                  </header>
                  <footer className="flex justify-between items-center border-t-primary border-t-[1px] py-2 mt-4 mb-2">
                    <div className="flex items-end gap-x-0.5">
                      <MdOutlinePlayLesson className="text-secondary text-2xl" />
                      <span className="font-light text-sm">
                        <PlaceholderLoading
                          shape="rect"
                          width={100}
                          height={10}
                        />{" "}
                      </span>
                    </div>
                    <span className="bg-secondary text-white font-light text-sm px-4 py-1 rounded-md">
                      Details
                    </span>
                  </footer>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col shadow-md rounded-md overflow-hidden w-full select-none overflow-hidden">
                <PlaceholderLoading shape="rect" width={1000} height={300} />
                <div className="flex flex-col px-6 justify-between pt-4 h-full">
                  <header className="overflow-hidden h-full flex flex-col gap-y-1">
                    <PlaceholderLoading shape="rect" width={200} height={20} />
                    <p className="font-light text-sm h-[10rem] overflow-hidden flex flex-col gap-y-1">
                      <PlaceholderLoading
                        shape="rect"
                        width={1000}
                        height={10}
                      />
                      <PlaceholderLoading
                        shape="rect"
                        width={1000}
                        height={10}
                      />
                      <PlaceholderLoading
                        shape="rect"
                        width={1000}
                        height={10}
                      />
                      <PlaceholderLoading
                        shape="rect"
                        width={1000}
                        height={10}
                      />
                    </p>
                  </header>
                  <footer className="flex justify-between items-center border-t-primary border-t-[1px] py-2 mt-4 mb-2">
                    <div className="flex items-end gap-x-0.5">
                      <MdOutlinePlayLesson className="text-secondary text-2xl" />
                      <span className="font-light text-sm">
                        <PlaceholderLoading
                          shape="rect"
                          width={100}
                          height={10}
                        />{" "}
                      </span>
                    </div>
                    <span className="bg-secondary text-white font-light text-sm px-4 py-1 rounded-md">
                      Details
                    </span>
                  </footer>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col shadow-md rounded-md overflow-hidden w-full select-none overflow-hidden">
                <PlaceholderLoading shape="rect" width={1000} height={300} />
                <div className="flex flex-col px-6 justify-between pt-4 h-full">
                  <header className="overflow-hidden h-full flex flex-col gap-y-1">
                    <PlaceholderLoading shape="rect" width={200} height={20} />
                    <p className="font-light text-sm h-[10rem] overflow-hidden flex flex-col gap-y-1">
                      <PlaceholderLoading
                        shape="rect"
                        width={1000}
                        height={10}
                      />
                      <PlaceholderLoading
                        shape="rect"
                        width={1000}
                        height={10}
                      />
                      <PlaceholderLoading
                        shape="rect"
                        width={1000}
                        height={10}
                      />
                      <PlaceholderLoading
                        shape="rect"
                        width={1000}
                        height={10}
                      />
                    </p>
                  </header>
                  <footer className="flex justify-between items-center border-t-primary border-t-[1px] py-2 mt-4 mb-2">
                    <div className="flex items-end gap-x-0.5">
                      <MdOutlinePlayLesson className="text-secondary text-2xl" />
                      <span className="font-light text-sm">
                        <PlaceholderLoading
                          shape="rect"
                          width={100}
                          height={10}
                        />{" "}
                      </span>
                    </div>
                    <span className="bg-secondary text-white font-light text-sm px-4 py-1 rounded-md">
                      Details
                    </span>
                  </footer>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col shadow-md rounded-md overflow-hidden w-full select-none overflow-hidden">
                <PlaceholderLoading shape="rect" width={1000} height={300} />
                <div className="flex flex-col px-6 justify-between pt-4 h-full">
                  <header className="overflow-hidden h-full flex flex-col gap-y-1">
                    <PlaceholderLoading shape="rect" width={200} height={20} />
                    <p className="font-light text-sm h-[10rem] overflow-hidden flex flex-col gap-y-1">
                      <PlaceholderLoading
                        shape="rect"
                        width={1000}
                        height={10}
                      />
                      <PlaceholderLoading
                        shape="rect"
                        width={1000}
                        height={10}
                      />
                      <PlaceholderLoading
                        shape="rect"
                        width={1000}
                        height={10}
                      />
                      <PlaceholderLoading
                        shape="rect"
                        width={1000}
                        height={10}
                      />
                    </p>
                  </header>
                  <footer className="flex justify-between items-center border-t-primary border-t-[1px] py-2 mt-4 mb-2">
                    <div className="flex items-end gap-x-0.5">
                      <MdOutlinePlayLesson className="text-secondary text-2xl" />
                      <span className="font-light text-sm">
                        <PlaceholderLoading
                          shape="rect"
                          width={100}
                          height={10}
                        />{" "}
                      </span>
                    </div>
                    <span className="bg-secondary text-white font-light text-sm px-4 py-1 rounded-md">
                      Details
                    </span>
                  </footer>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        )}
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
