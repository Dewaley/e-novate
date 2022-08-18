import { MdOutlinePlayLesson } from "react-icons/md";
import { TbCertificate } from "react-icons/tb";
import { FiUsers, FiUser } from "react-icons/fi";
import { BiTimeFive } from "react-icons/bi";
import { BsBarChartLine, BsCheckLg } from "react-icons/bs";
import {
  FaFacebookF,
  FaWhatsapp,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import NewsLetter from "../../components/universal/NewsLetter";
import { useParams } from "react-router-dom";
import { SingleCourse } from "../../config/courseApi";
import { useEffect, useState } from "react";
import { skillLevel } from "../../config/skillLevel";
import InstructorCard from "../../components/courses/InstructorCard";
import { InstructorList } from "../../config/courseApi";
import PlaceholderLoading from "react-placeholder-loading";

const CourseDetails = () => {
  const [course, setCourse] = useState({});
  const [instructors, setInstructors] = useState([]);
  const [instructorInfo, setInstructorInfo] = useState([]);
  const [loading, setloading] = useState(true);
  const [subMenu, setSubMenu] = useState("Description");
  const { id } = useParams();
  const fetchCourse = async () => {
    const res = await fetch(SingleCourse(id));
    const data = await res.json();
    setCourse(data);
    setInstructors(data.course_instructors);
  };
  const getInstructorById = async (instructor) => {
    const res = await fetch(InstructorList(instructor));
    const data = await res.json();
    return data;
  };
  const fetchData = async (ids) => {
    const idRequests = await Promise.all(
      ids.map((eachId) => getInstructorById(eachId))
    );
    setInstructorInfo(idRequests);
  };
  useEffect(() => {
    fetchCourse();
  }, []);
  useEffect(() => {
    fetchData(instructors);
    console.log(instructorInfo);
  }, [instructors]);
  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
    setTimeout(() => setloading(false), 5000);
  }, []);
  return (
    <>
      <div className="animate__animated animate__fadeIn flex flex-col items-center">
        {instructorInfo.length > 0 ? (
          <div className="text-primary flex flex-col  items-center md:items-start md:flex-row pt-12 md:mb-8 gap-x-8 overflow-hidden w-[90vw]">
            <div className="flex flex-col gap-y-8 md:w-2/3 mb-8 w-[90vw]">
              <h1 className="text-4xl">{course.course_name}</h1>
              <p>{course.course_preamble}</p>
              <hr />
              <img src={course.course_image} alt="" />
              <ul className="flex justify-between items-center border-[1px] border-[#666666]/[0.6] sm:px-4 px-1 rounded-lg text-sm sm:text-base">
                <li
                  className={`py-4 ${
                    subMenu === "Description" && `border-b-2 border-secondary`
                  }`}
                  onClick={() => setSubMenu("Description")}
                >
                  Description
                </li>
                <li
                  className={`py-4 ${
                    subMenu === "Instructor(s)" && `border-b-2 border-secondary`
                  }`}
                  onClick={() => {
                    setSubMenu("Instructor(s)");
                  }}
                >
                  Instructor(s)
                </li>
                {course.course_feedback && course.course_feedback.length > 0 && (
                  <li
                    className={`py-4 ${
                      subMenu === "Feedback" && `border-b-2 border-secondary`
                    }`}
                    onClick={() => {
                      setSubMenu("Feedback");
                    }}
                  >
                    Feedback
                  </li>
                )}
              </ul>
              {subMenu === "Description" && <p>{course.course_overview}</p>}
              {subMenu === "Instructor(s)" && (
                <div className="px-4">
                  <div className="px-2 mb-4 flex flex-col">
                    <h1 className="text-xl">Instructor(s)</h1>
                    <hr className="h-1 bg-secondary w-1/3" />
                  </div>
                  {instructorInfo.map((instructor) => (
                    <InstructorCard
                      image={instructor.picture}
                      firstName={instructor.first_name}
                      lastName={instructor.last_name}
                      email={instructor.email}
                      bio={instructor.bio}
                      facebook={instructor.facebook_link}
                      instagram={instructor.instagram_link}
                      twitter={instructor.twitter_link}
                      linkedin={instructor.linkedin_link}
                    />
                  ))}
                </div>
              )}
              <div className="p-4 bg-[#666666]/[.05] rounded-lg">
                <div className="flex flex-col gap-y-2">
                  <h1 className="text-lg">What you will learn</h1>
                  <hr className="w-2/12 bg-primary h-1" />
                </div>
                <div className="flex flex-col md:flex-row justify-between">
                  <ul className="md:w-1/2">
                    <li className="flex items-center gap-x-2 my-2">
                      <p className="w-6 h-6">
                        <BsCheckLg className="text-secondary text-xl" />
                      </p>
                      <p>Programming Principles, and Techniques</p>
                    </li>
                    <li className="flex items-center gap-x-2 my-2">
                      <p className="w-6 h-6">
                        <BsCheckLg className="text-secondary text-xl" />
                      </p>
                      <p>Web hosting.</p>
                    </li>
                  </ul>
                  <ul className="md:w-1/2">
                    <li className="flex items-center gap-x-2 my-2">
                      <p className="w-6 h-6">
                        <BsCheckLg className="text-secondary text-xl" />
                      </p>
                      <p>GIt and Version Control.</p>
                    </li>
                    <li className="flex items-center gap-x-2 my-2">
                      <p className="w-6 h-6">
                        <BsCheckLg className="text-secondary text-xl" />
                      </p>
                      <p>HTML, CSS and Javascript</p>
                    </li>
                    <li className="flex items-center gap-x-2 my-2">
                      <p className="w-6 h-6">
                        <BsCheckLg className="text-secondary text-xl" />
                      </p>
                      <p>Working With React</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="md:w-1/3 flex flex-col gap-y-12 mb-8 w-[90vw]">
              <div className="flex justify-center items-center p-8 gap-x-2 shadow-md border-t-2 border-primary rounded-md">
                <FiUsers className="text-xl text-secondary" />
                <span>Students Enrolled: </span>
                <span className="text-secondary">
                  {course.students_enrolled}
                </span>
              </div>
              <div className="flex flex-col items-center p-8 border-t-2 border-primary rounded-md shadow-md gap-y-2">
                <div className="flex gap-x-2 items-end">
                  <span className="text-lg">Price:</span>
                  <span className="text-4xl md:text-xl lg:text-4xl">
                    {course.course_price_currency}
                    {course.course_price}
                  </span>
                </div>
                <button className="bg-secondary text-white w-1/2 p-1 rounded-md">
                  Pay
                </button>
              </div>
              <div className="p-8 border-t-2 border-primary rounded-md shadow-md flex flex-col gap-y-2">
                <div className="flex flex-col gap-y-2">
                  <h1 className="text-lg">This Course Includes:</h1>
                  <hr className="w-2/12 bg-primary h-1" />
                </div>
                <ul className="flex flex-col gap-y-2">
                  <li className="flex justify-between items-center">
                    <div className="flex gap-x-2 items-center">
                      <span>
                        <BsBarChartLine className="text-secondary text-xl" />
                      </span>
                      <span>Skill Level</span>
                    </div>
                    <span>{skillLevel[course.skill_level]}</span>
                  </li>
                  {instructorInfo.map((instructor) => (
                    <li className="flex justify-between items-center">
                      <div className="flex gap-x-2 items-center">
                        <span>
                          <FiUser className="text-secondary text-xl" />
                        </span>
                        <span>Tutor</span>
                      </div>
                      <span>
                        {instructor.first_name + " " + instructor.last_name}
                      </span>
                    </li>
                  ))}
                  <li className="flex justify-between items-center">
                    <div className="flex gap-x-2 items-center">
                      <span>
                        <BiTimeFive className="text-secondary text-xl" />
                      </span>
                      <span>Duration</span>
                    </div>
                    <span>{course.course_duration}</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <div className="flex gap-x-2 items-center">
                      <span>
                        <MdOutlinePlayLesson className="text-secondary text-xl" />
                      </span>
                      <span>Lessons</span>
                    </div>
                    <span>{course.no_of_lessons}</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <div className="flex gap-x-2 items-center">
                      <span>
                        <TbCertificate className="text-secondary text-xl" />
                      </span>
                      <span>Certificate</span>
                    </div>
                    <span>{course.has_certification ? "Yes" : "No"}</span>
                  </li>
                </ul>
              </div>
              <div className="p-8 border-t-2 border-primary rounded-md shadow-md flex justify-between items-center">
                <span>Share</span>
                <span className="flex justify-center items-center w-7 h-7 rounded-full text-white bg-secondary text-lg">
                  <FaFacebookF />
                </span>
                <span className="flex justify-center items-center w-7 h-7 rounded-full text-white bg-secondary text-lg">
                  <FaInstagram />
                </span>
                <span className="flex justify-center items-center w-7 h-7 rounded-full text-white bg-secondary text-lg">
                  <FaLinkedinIn />
                </span>
                <span className="flex justify-center items-center w-7 h-7 rounded-full text-white bg-secondary text-lg">
                  <FaWhatsapp />
                </span>
              </div>
              <div className="p-8 border-t-2 border-primary rounded-md shadow-md">
                <div className="flex flex-col gap-y-2">
                  <h1 className="text-lg">Requirements</h1>
                  <hr className="w-2/12 bg-primary h-1" />
                </div>
                <ul>
                  <li className="flex items-center gap-x-2 my-2">
                    <p className="w-6 h-6">
                      <BsCheckLg className="text-secondary text-xl" />
                    </p>
                    <span>No previous knowledge of Front-End required.</span>
                  </li>
                  <li className="flex items-center gap-x-2 my-2">
                    <p className="w-6 h-6">
                      <BsCheckLg className="text-secondary text-xl" />
                    </p>
                    <span>
                      A working device e.g. Laptop, phone or tablet e.t.c
                    </span>
                  </li>
                  <li className="flex items-center gap-x-2 my-2">
                    <p className="w-6 h-6">
                      <BsCheckLg className="text-secondary text-xl" />
                    </p>
                    <span>Internet Access</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-primary flex flex-col  items-center md:items-start md:flex-row pt-12 md:mb-8 gap-x-8 overflow-hidden w-[90vw]">
            <div className="flex flex-col gap-y-8 md:w-2/3 mb-8 w-[90vw] overflow-hidden">
              <PlaceholderLoading shape="rect" width={1000} height={50} />
              <div className="flex flex-col gap-y-2 px-2">
                <PlaceholderLoading shape="rect" width={1000} height={10} />
                <PlaceholderLoading shape="rect" width={1000} height={10} />
                <PlaceholderLoading shape="rect" width={1000} height={10} />
                <PlaceholderLoading shape="rect" width={1000} height={10} />
                <PlaceholderLoading shape="rect" width={1000} height={10} />
                <PlaceholderLoading shape="rect" width={1000} height={10} />
                <PlaceholderLoading shape="rect" width={1000} height={10} />
              </div>
              <hr />
              <PlaceholderLoading shape="rect" width={1000} height={400} />
              <ul className="flex justify-between items-center border-[1px] border-[#666666]/[0.6] sm:px-4 px-1 rounded-lg text-sm sm:text-base">
                <li className="py-4">Description</li>
                <li className="py-4">Instructor(s)</li>
                <li className="py-4">Feedback</li>
              </ul>
              <div className="flex flex-col gap-y-2 px-2">
                <PlaceholderLoading shape="rect" width={1000} height={10} />
                <PlaceholderLoading shape="rect" width={1000} height={10} />
                <PlaceholderLoading shape="rect" width={1000} height={10} />
                <PlaceholderLoading shape="rect" width={1000} height={10} />
                <PlaceholderLoading shape="rect" width={1000} height={10} />
              </div>
            </div>
            <div className="md:w-1/3 flex flex-col gap-y-12 mb-8 w-[90vw]">
              <div className="flex justify-center items-center p-8 gap-x-2 shadow-md border-t-2 border-primary rounded-md">
                <FiUsers className="text-xl text-secondary" />
                <span>Students Enrolled: </span>
                <PlaceholderLoading shape="rect" width={100} height={20} />
              </div>
              <div className="flex flex-col items-center p-8 border-t-2 border-primary rounded-md shadow-md gap-y-2">
                <div className="flex gap-x-2 items-end">
                  <span className="text-lg">Price:</span>
                </div>
                <button className="bg-secondary text-white w-1/2 p-1 rounded-md">
                  Pay
                </button>
              </div>
              <div className="p-8 border-t-2 border-primary rounded-md shadow-md flex flex-col gap-y-2">
                <div className="flex flex-col gap-y-2">
                  <h1 className="text-lg">This Course Includes:</h1>
                  <hr className="w-2/12 bg-primary h-1" />
                </div>
                <ul className="flex flex-col gap-y-2">
                  <li className="flex justify-between items-center">
                    <div className="flex gap-x-2 items-center">
                      <span>
                        <BsBarChartLine className="text-secondary text-xl" />
                      </span>
                      <span>Skill Level</span>
                    </div>
                    <PlaceholderLoading shape="rect" width={50} height={20} />
                  </li>
                  {instructorInfo.map((instructor) => (
                    <li className="flex justify-between items-center">
                      <div className="flex gap-x-2 items-center">
                        <span>
                          <FiUser className="text-secondary text-xl" />
                        </span>
                        <span>Tutor</span>
                      </div>
                      <PlaceholderLoading shape="rect" width={50} height={20} />
                    </li>
                  ))}
                  <li className="flex justify-between items-center">
                    <div className="flex gap-x-2 items-center">
                      <span>
                        <BiTimeFive className="text-secondary text-xl" />
                      </span>
                      <span>Duration</span>
                    </div>
                    <PlaceholderLoading shape="rect" width={50} height={20} />
                  </li>
                  <li className="flex justify-between items-center">
                    <div className="flex gap-x-2 items-center">
                      <span>
                        <MdOutlinePlayLesson className="text-secondary text-xl" />
                      </span>
                      <span>Lessons</span>
                    </div>
                    <PlaceholderLoading shape="rect" width={50} height={20} />
                  </li>
                  <li className="flex justify-between items-center">
                    <div className="flex gap-x-2 items-center">
                      <span>
                        <TbCertificate className="text-secondary text-xl" />
                      </span>
                      <span>Certificate</span>
                    </div>
                    <PlaceholderLoading shape="rect" width={50} height={20} />
                  </li>
                </ul>
              </div>
              <div className="p-8 border-t-2 border-primary rounded-md shadow-md flex justify-between items-center">
                <span>Share</span>
                <span className="flex justify-center items-center w-7 h-7 rounded-full text-white bg-secondary text-lg">
                  <FaFacebookF />
                </span>
                <span className="flex justify-center items-center w-7 h-7 rounded-full text-white bg-secondary text-lg">
                  <FaInstagram />
                </span>
                <span className="flex justify-center items-center w-7 h-7 rounded-full text-white bg-secondary text-lg">
                  <FaLinkedinIn />
                </span>
                <span className="flex justify-center items-center w-7 h-7 rounded-full text-white bg-secondary text-lg">
                  <FaWhatsapp />
                </span>
              </div>
              <div className="p-8 border-t-2 border-primary rounded-md shadow-md">
                <div className="flex flex-col gap-y-2">
                  <h1 className="text-lg">Requirements</h1>
                  <hr className="w-2/12 bg-primary h-1" />
                </div>
                <ul>
                  <li className="flex items-center gap-x-2 my-2">
                    <p className="w-6 h-6">
                      <BsCheckLg className="text-secondary text-xl" />
                    </p>
                    <span>No previous knowledge of Front-End required.</span>
                  </li>
                  <li className="flex items-center gap-x-2 my-2">
                    <p className="w-6 h-6">
                      <BsCheckLg className="text-secondary text-xl" />
                    </p>
                    <span>
                      A working device e.g. Laptop, phone or tablet e.t.c
                    </span>
                  </li>
                  <li className="flex items-center gap-x-2 my-2">
                    <p className="w-6 h-6">
                      <BsCheckLg className="text-secondary text-xl" />
                    </p>
                    <span>Internet Access</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}
        <NewsLetter />
      </div>
    </>
  );
};

export default CourseDetails;
