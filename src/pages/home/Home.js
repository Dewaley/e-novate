import { AiOutlineBars } from "react-icons/ai";
import { HiOutlineDocumentDuplicate } from "react-icons/hi";
import { TiUser } from "react-icons/ti";
import { TbCertificate } from "react-icons/tb";
import picture1 from "../../images/home/picture.png";
import Features from "../../components/home/Features";
import Offer from "../../components/home/Offer";
import CoursesOverview from "../../components/home/CoursesOverview";
import Testimonials from "../../components/home/Testimonials";
import BlogOverview from "../../components/home/BlogOverview";
import NewsLetter from "../../components/universal/NewsLetter";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { PuffLoader } from "react-spinners";

const Home = () => {
  const [loading, setloading] = useState(true);
  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
    setTimeout(() => setloading(false), 5000);
  }, []);
  return (
    <>
      {loading === true ? (
        <div className="w-full h-screen bg-primary overflow-hidden flex items-center justify-center absolute top-0 z-[1000]">
          <PuffLoader color={"#FF206E"} />
        </div>
      ) : (
        <div className="text-white overflow-x-hidden flex flex-col justify-center items-center text-primary scroll-smooth gap-y-8 animate__animated animate__fadeIn">
          <section className="flex flex-col md:flex-row justify-center gap-x-8 items-center bg-primary gap-y-4 px-6 md:px-12 pt-4 pb-6 text-white">
            <div>
              <h1 className="text-4xl md:max-w-[75%] pb-6">
                Convenient easy way of learning new skills
              </h1>
              <p className="opacity-60 pb-4 lg:max-w-[75%] font-light">
                Consectetur proident occaecat enim magna amet ipsum ex enim
                incididunt culpa consectetur non cupidatat. Veniam laboris duis
                laboris mollit nisi sit ea amet ex. Velit fugiat commodo nisi
                sunt veniam amet irure ex velit duis nulla tempor velit et.{" "}
              </p>
              <Link
                to="/courses"
                className="flex items-center gap-x-2.5 bg-secondary p-2 rounded w-fit"
              >
                <span className="border-white border-2 rounded">
                  <AiOutlineBars />
                </span>
                Courses
              </Link>
            </div>
            <img
              src={picture1}
              alt=""
              className="md:max-w-sm lg:w-1/2 lg:max-w-none"
            />
          </section>
          <Features />
          <div className="flex flex-col md:flex-row justify-center  max-w-[90vw] lg:max-w-[80vw] gap-x-8 gap-y-8 my-8">
            <Offer
              icon={<HiOutlineDocumentDuplicate />}
              heading={"Courses Materials"}
              body={
                "Laboris exercitation nostrud ipsum ex culpa exercitation quis ipsum est."
              }
            />
            <Offer
              icon={<TiUser />}
              heading={"Mentorship"}
              body={
                "Laboris exercitation nostrud ipsum ex culpa exercitation quis ipsum est."
              }
            />
            <Offer
              icon={<TbCertificate />}
              heading={"Certification"}
              body={
                "Laboris exercitation nostrud ipsum ex culpa exercitation quis ipsum est."
              }
            />
          </div>
          <CoursesOverview />
          <Testimonials />
          <BlogOverview />
          <NewsLetter />
        </div>
      )}
    </>
  );
};

export default Home;
