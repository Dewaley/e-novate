import NewsLetter from '../../components/universal/NewsLetter';
import { AiOutlineSearch } from 'react-icons/ai';
import CourseCard from '../../components/courses/CourseCard';
import { useEffect, useState } from 'react';
import {CourseList} from '../../config/courseApi'

const CoursesPage = () => {
  const [courses, setCourses] = useState(null);
  const fetchCourses = async () => {
    const res = await fetch(CourseList);
    console.log(res);
    const data = await res.json();
    console.log(data);
    setCourses(data);
  };
  useEffect(() => {
    fetchCourses();
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);
  return (
    <div className='flex flex-col items-center mb-12 gap-y-4'>
      <div className='text-center font-light mt-6'>
        <h4 className='text-secondary my-2'>COURSES</h4>
        <p className='text-3xl my-2 mb-6'>We Offer These Courses</p>
      </div>
      <div className='flex flex-col md:justify-between md:items-center md:flex-row gap-y-4 w-[90vw] mb-4'>
        <p className='order-2 md:order-1'>Showing 4 of 4 results</p>
        <div className='flex justify-center items-center md:order-2 order-1'>
          <form
            action=''
            className='flex w-fit items-center text-lg gap-x-2 border-2 border-primary rounded-full p-2'
          >
            <AiOutlineSearch className='text-secondary' />
            <input
              type='text'
              name=''
              id=''
              placeholder='Search for anything here'
              className='bg-transparent border-none outline-none placeholder:text-primary w-[200px] sm:w-auto'
            />
          </form>
        </div>
      </div>
      {courses && (
        <div className='grid grid-cols-1 md:grid-cols-3 w-[90vw] gap-6 mb-6'>
          {courses.map((course) => {
            return (
              <CourseCard
                key={course.id}
                title={course.course_name}
                preamble={course.course_preamble}
                lessons={course.no_of_lessons}
                id={course.id}
              />
            );
          })}
        </div>
      )}
      <NewsLetter />
    </div>
  );
};

export default CoursesPage;
