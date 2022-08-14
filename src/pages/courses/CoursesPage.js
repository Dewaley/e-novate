import NewsLetter from "../../components/universal/NewsLetter";
// import { AiOutlineSearch } from "react-icons/ai";
import CourseCard from "../../components/courses/CourseCard";
import { useEffect, useState } from "react";
import { PuffLoader } from "react-spinners";

const CoursesPage = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setloading] = useState(true);
  const fetchCourses = async () => {
    const res = await fetch(
      process.env.REACT_APP_ENOVATE_API + `/course/view/`
    );
    const data = await res.json();
    setCourses(data);
  };
  useEffect(() => {
    fetchCourses();
    window.scrollTo({
      top: 0,
    });
    setTimeout(() => setloading(false), 5000);
  }, []);
  return (
    <>
      {loading ? (
        <div className="w-full h-screen bg-primary overflow-hidden flex items-center justify-center absolute top-0 z-[1000]">
          <PuffLoader color={"#FF206E"} />
        </div>
      ) : (
        <div className="animate__animated animate__fadeIn">
          <header className="text-center font-light my-6">
            <h4 className="text-secondary my-2">COURSES</h4>
            <h2 className="text-3xl my-2 mb-6">We Offer These Courses</h2>
          </header>
          {courses.results !== undefined && (
            <div className="flex flex-col items-center mb-12 gap-y-4">
              <div className="flex flex-col md:justify-between md:items-center md:flex-row gap-y-4 w-[90vw] mb-4">
                <p className="order-2 md:order-1">
                  Showing {courses.results.length} of {courses.results.length}{" "}
                  results
                </p>
                {/* <div className="flex justify-center items-center md:order-2 order-1">
                  <form
                    action=""
                    className="flex w-fit items-center text-lg gap-x-2 border-2 border-primary rounded-full p-2"
                  >
                    <AiOutlineSearch className="text-secondary" />
                    <input
                      type="text"
                      name=""
                      id=""
                      placeholder="Search for anything here"
                      className="bg-transparent border-none outline-none placeholder:text-primary w-[200px] sm:w-auto"
                    />
                  </form>
                </div> */}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 w-[90vw] gap-6 mb-6">
                {courses.results.map((course) => {
                  return (
                    <CourseCard
                      key={course.id}
                      title={course.course_name}
                      preamble={course.course_preamble}
                      lessons={course.no_of_lessons}
                      id={course.slug}
                      image={course.course_image}
                    />
                  );
                })}
              </div>
              <NewsLetter />
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default CoursesPage;
