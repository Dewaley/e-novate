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
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, []);
  return (
    <>
      <div className="text-white overflow-x-hidden flex flex-col justify-center items-center text-primary scroll-smooth gap-y-8 animate__animated animate__fadeIn">
        <section className="flex flex-col md:flex-row justify-center gap-x-8 items-center bg-primary gap-y-4 px-6 md:px-12 pt-4 pb-6 text-white">
          <div>
            <h1 className="text-4xl md:max-w-[75%] pb-6">
              Learn a fast selling IT skill today – Make waves in the digital
              world
            </h1>
            <p className="opacity-60 pb-4 lg:max-w-[75%] font-light">
              The digital space is fast evolving, ever growing and filled with
              opportunities offering financial freedom to youngsters. However,
              emerging into this vast and diverse world of technology can be
              quite overwhelming and sometimes complicated. This is why at
              E-Novate Labs, we have deliberately put together a comprehensive
              step by step guide to make your journey into the IT world soft,
              smooth and easy.{" "}
            </p>
            <Link
              to="/courses"
              className="flex items-center gap-x-2.5 bg-secondary p-2 rounded w-fit"
            >
              <span className="border-white border-2 rounded">
                <AiOutlineBars />
              </span>
              Enroll Now
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
              "Free access to course materials to aid your every learning process."
            }
          />
          <Offer
            icon={<TiUser />}
            heading={"Mentorship"}
            body={
              "Access to free mentorship from prominent people in the industry."
            }
          />
          <Offer
            icon={<TbCertificate />}
            heading={"Certification"}
            body={
              "Get certified after course completion."
            }
          />
        </div>
        <CoursesOverview />
        <Testimonials />
        <BlogOverview />
        <NewsLetter />
      </div>
    </>
  );
};

export default Home;
