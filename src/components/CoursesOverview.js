import picture3 from '../images/home/pexels-burst-374074.png';
import tinyImage from '../images/home/lessons.svg';
import { MdOutlineNavigateNext, MdOutlineNavigateBefore } from 'react-icons/md';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper';
import { useRef } from 'react';

const CoursesOverview = () => {
  const swiperNavPrevRef = useRef(null);
  const swiperNavNextRef = useRef(null);
  return (
    <div className='flex flex-col justify-center mb-12'>
      <div className='text-center font-light'>
        <h4 className='text-secondary font-extralight my-2'>COURSES</h4>
        <p className='text-3xl my-2 mb-6'>We Offer These Courses</p>
      </div>
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
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <div className='flex flex-col shadow-md rounded-md'>
              <div className='basis-1/2'>
                <img src={picture3} alt='' className='w-full' />
              </div>
              <div className='basis-1/2 flex flex-col px-6 justify-between pt-4'>
                <div>
                  <h3 className='text-xl'>Front-End Development</h3>
                  <p className='font-light text-sm'>
                    Laboris exercitation nostrud ipsum ex culpa exercitation
                    quis ipsum est. Laboris exercitation nostrud ipsum .
                  </p>
                </div>
                <div className='flex justify-between items-center border-t-primary border-t-[1px] py-2 mt-4 mb-2'>
                  <div className='flex'>
                    <img src={tinyImage} alt='' className='pr-1 max-h-5' />
                    <span className='font-light text-sm'>22 lessons</span>
                  </div>
                  <button className='bg-secondary text-white font-light text-sm px-4 py-1 rounded-md'>
                    Details
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='flex flex-col shadow-md rounded-md'>
              <div className='basis-1/2'>
                <img src={picture3} alt='' className='w-full' />
              </div>
              <div className='basis-1/2 flex flex-col px-6 justify-between pt-4'>
                <div>
                  <h3 className='text-xl'>Front-End Development</h3>
                  <p className='font-light text-sm'>
                    Laboris exercitation nostrud ipsum ex culpa exercitation
                    quis ipsum est. Laboris exercitation nostrud ipsum .
                  </p>
                </div>
                <div className='flex justify-between items-center border-t-primary border-t-[1px] py-2 mt-4 mb-2'>
                  <div className='flex'>
                    <img src={tinyImage} alt='' className='pr-1 max-h-5' />
                    <span className='font-light text-sm'>22 lessons</span>
                  </div>
                  <button className='bg-secondary text-white font-light text-sm px-4 py-1 rounded-md'>
                    Details
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='flex flex-col shadow-md rounded-md'>
              <div className='basis-1/2'>
                <img src={picture3} alt='' className='w-full' />
              </div>
              <div className='basis-1/2 flex flex-col px-6 justify-between pt-4'>
                <div>
                  <h3 className='text-xl'>Front-End Development</h3>
                  <p className='font-light text-sm'>
                    Laboris exercitation nostrud ipsum ex culpa exercitation
                    quis ipsum est. Laboris exercitation nostrud ipsum .
                  </p>
                </div>
                <div className='flex justify-between items-center border-t-primary border-t-[1px] py-2 mt-4 mb-2'>
                  <div className='flex'>
                    <img src={tinyImage} alt='' className='pr-1 max-h-5' />
                    <span className='font-light text-sm'>22 lessons</span>
                  </div>
                  <button className='bg-secondary text-white font-light text-sm px-4 py-1 rounded-md'>
                    Details
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='flex flex-col shadow-md rounded-md'>
              <div className='basis-1/2'>
                <img src={picture3} alt='' className='w-full' />
              </div>
              <div className='basis-1/2 flex flex-col px-6 justify-between pt-4'>
                <div>
                  <h3 className='text-xl'>Front-End Development</h3>
                  <p className='font-light text-sm'>
                    Laboris exercitation nostrud ipsum ex culpa exercitation
                    quis ipsum est. Laboris exercitation nostrud ipsum .
                  </p>
                </div>
                <div className='flex justify-between items-center border-t-primary border-t-[1px] py-2 mt-4 mb-2'>
                  <div className='flex'>
                    <img src={tinyImage} alt='' className='pr-1 max-h-5' />
                    <span className='font-light text-sm'>22 lessons</span>
                  </div>
                  <button className='bg-secondary text-white font-light text-sm px-4 py-1 rounded-md'>
                    Details
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
          ...
        </Swiper>
        <button
          className='hidden absolute text-xl  sm:flex justify-center items-center w-12 h-12 shadow-md top-[50%] left-[-1.5rem] translate-y-[-50%] z-50  bg-white rounded-full'
          ref={swiperNavPrevRef}
        >
          <MdOutlineNavigateBefore />
        </button>
        <button
          className='hidden absolute text-xl  sm:flex justify-center items-center w-12 h-12 shadow-md top-[50%] right-[-1.5rem] translate-y-[-50%] z-50  bg-white rounded-full'
          ref={swiperNavNextRef}
        >
          <MdOutlineNavigateNext />
        </button>
      </div>
    </div>
  );
};

export default CoursesOverview;
