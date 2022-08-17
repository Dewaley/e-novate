import NewsLetter from "../../components/universal/NewsLetter";
import CourseCard from "../../components/courses/CourseCard";
import { useEffect, useState } from "react";
import CourseCardLoader from "../../components/courses/CourseCardLoader";
import CoursesSearch from "../../components/courses/CoursesSearch";
import { useSearchParams } from "react-router-dom";
import Paginate from "../../components/courses/Paginate";

const CoursesPage = () => {
  const [filtered, setFiltered] = useState([]);
  const [pages, setPages] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState("");
  const [text, setText] = useState("");
  const [courses, setCourses] = useState([]);
  const filter = async (search, page) => {
    if (page === null) {
      setSearchParams({
        page: 1,
      });
    } else {
      if (searchParams.get("search") !== search) {
        setSearchParams({ search: search, page: page });
      }
      const res = await fetch(
        process.env.REACT_APP_ENOVATE_API + `/course/view/?search=${search}`
      );
      const data = await res.json();
      setFiltered(data);
      setText(search);
    }
  };
  const fetchCourses = async (page) => {
    if (page === null) {
      setSearchParams({
        page: 1,
      });
    } else {
      const res = await fetch(
        process.env.REACT_APP_ENOVATE_API + `/course/view/?page=${page}`
      );
      const data = await res.json();
      setCourses(data);
    }
  };
  useEffect(() => {
    if (typeof searchParams.get("search") === "string") {
      filter(searchParams.get("search"), searchParams.get("page"));
    } else {
      fetchCourses(searchParams.get("page"));
    }
    window.scrollTo({
      top: 0,
    });
  }, [searchParams]);
  return (
    <div className="animate__animated animate__fadeIn">
      <header className="text-center font-light my-6">
        <h4 className="text-secondary my-2">COURSES</h4>
        <h2 className="text-3xl my-2 mb-6">We Offer These Courses</h2>
      </header>
      <div className="flex flex-col items-center mb-12 gap-y-4">
        {courses.results !== undefined ? (
          <div>
            {searchParams.get("search") ? (
              <div>
                {filtered.results !== undefined ? (
                  <div>
                    {filtered.results.length > 0 ? (
                      <div className="flex flex-col items-center mb-12 gap-y-4 animate__animated animate__fadeIn">
                        <div className="flex flex-col md:justify-between md:items-center md:flex-row gap-y-4 w-[90vw] mb-4">
                          <p className="order-2 md:order-1">
                            Showing {filtered.results.length} of{" "}
                            {filtered.results.length} results
                          </p>
                          <CoursesSearch
                            setSearch={setSearch}
                            searchFn={() => filter(search)}
                          />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 w-[90vw] gap-6 mb-6">
                          {filtered.results.map((course) => {
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
                        <Paginate
                          count={filtered.count}
                          pages={pages}
                          setPages={setPages}
                          page={searchParams.get("page")}
                          setPage={(e) => setSearchParams({ page: e })}
                        />
                      </div>
                    ) : (
                      <h1 className="text-2xl text-primary">
                        Your search, "{text}" doesn't match any of our articles
                      </h1>
                    )}
                  </div>
                ) : (
                  <div className="flex flex-col items-center mb-12 gap-y-4">
                    <div className="flex flex-col md:justify-between md:items-center md:flex-row gap-y-4 w-[90vw] mb-4">
                      <p className="order-2 md:order-1">Showing results</p>
                      <CoursesSearch />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 w-[90vw] gap-6 mb-6">
                      <CourseCardLoader />
                      <CourseCardLoader />
                      <CourseCardLoader />
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex flex-col items-center mb-12 gap-y-4 animate__animated animate__fadeIn">
                <div className="flex flex-col md:justify-between md:items-center md:flex-row gap-y-4 w-[90vw] mb-4">
                  <p className="order-2 md:order-1">
                    Showing {courses.results.length} of {courses.results.length}{" "}
                    results
                  </p>
                  <CoursesSearch
                    setSearch={setSearch}
                    searchFn={() => filter(search)}
                  />
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
                <Paginate
                  count={courses.count}
                  pages={pages}
                  setPages={setPages}
                  page={searchParams.get("page")}
                  setPage={(e) => setSearchParams({ page: e })}
                />
              </div>
            )}
          </div>
        ) : (
          <div className="flex flex-col items-center mb-12 gap-y-4">
            <div className="flex flex-col md:justify-between md:items-center md:flex-row gap-y-4 w-[90vw] mb-4">
              <p className="order-2 md:order-1">Showing results</p>
              <CoursesSearch />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 w-[90vw] gap-6 mb-6">
              <CourseCardLoader />
              <CourseCardLoader />
              <CourseCardLoader />
              <CourseCardLoader />
              <CourseCardLoader />
              <CourseCardLoader />
            </div>
          </div>
        )}
        <NewsLetter />
      </div>
    </div>
  );
};

export default CoursesPage;
