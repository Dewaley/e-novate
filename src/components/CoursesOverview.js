import { MdOutlineNavigateNext, MdOutlineNavigateBefore } from 'react-icons/md';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import CourseCard from '../components/CourseCard';
import { Navigation, Pagination } from 'swiper';
import { useEffect, useRef, useState } from 'react';

const CoursesOverview = () => {
  const [courses, setCourses] = useState(null);
  const swiperNavPrevRef = useRef(null);
  const swiperNavNextRef = useRef(null);
  const fetchCourses = async () => {
    const res = await fetch(`https://e-novate.herokuapp.com/api/course/view/`);
    console.log(res);
    const data = await res.json();
    console.log(data);
    setCourses(data);
  };
  useEffect(() => {
    fetchCourses();
  }, []);

  return (
    <div className='flex flex-col justify-center mb-12'>
      <div className='text-center font-light'>
        <h4 className='text-secondary font-extralight my-2'>COURSES</h4>
        <p className='text-3xl my-2 mb-6'>We Offer These Courses</p>
      </div>
      {courses && (
        <div className='flex justify-center gap-x-4 w-[90vw] lg:min-w-[80vw] relative'>
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
            {courses.map((course) => {
              return (
                <SwiperSlide
                key={course.id}
                >
                  <CourseCard
                    title={course.course_name}
                    preamble={course.course_preamble}
                    lessons={course.no_of_lessons}
                    id={course.id}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
          <button
            className='hidden absolute text-xl  sm:flex justify-center items-center w-12 h-12 shadow-md top-[50%] left-[-1.5rem] translate-y-[-50%] z-40  bg-white rounded-full'
            ref={swiperNavPrevRef}
          >
            <MdOutlineNavigateBefore />
          </button>
          <button
            className='hidden absolute text-xl  sm:flex justify-center items-center w-12 h-12 shadow-md top-[50%] right-[-1.5rem] translate-y-[-50%] z-40  bg-white rounded-full'
            ref={swiperNavNextRef}
          >
            <MdOutlineNavigateNext />
          </button>
        </div>
      )}
    </div>
  );
};

export default CoursesOverview;
