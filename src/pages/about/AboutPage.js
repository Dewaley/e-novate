import picture1 from "../../images/aboutPage/Mask-group.png";
import NewsLetter from "../../components/universal/NewsLetter";
import Features from "../../components/home/Features";
import Offer from "../../components/home/Offer";
import { MdOutlineTouchApp } from "react-icons/md";
import { BsHeadset } from "react-icons/bs";
import { IoIosLock } from "react-icons/io";
import { TbBellRinging } from "react-icons/tb";
// import { FaChalkboardTeacher } from "react-icons/fa";
// import { AiOutlineBook } from "react-icons/ai";
import { useEffect } from "react";

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, []);
  return (
    <>
      <div className="text-primary overflow-x-hidden flex flex-col justify-center items-center text-primary scroll-smooth gap-y-8 animate__animated animate__fadeIn">
        <article className="flex flex-col md:flex-row justify-center gap-x-8 items-center gap-y-4 w-[90vw] pt-4 pb-6">
          <img
            src={picture1}
            alt=""
            className="md:max-w-sm lg:w-1/2 lg:max-w-none"
          />
          <main>
            <h1 className="text-4xl pb-2">About Us</h1>
            <p className="opacity-60 pb-4 font-medium">
              &nbsp;&nbsp;&nbsp;We are a platform birthed and designed to
              harness the exceptional potentials of Nigeria’s youthful
              population. Having noticed the underlying and unexplored skills,
              potentials, brilliance, tenacity and intelligence of this dynamic
              populace, the sole objective of the E- Novate labs is to build and
              nurture a sustainable system that would empower and equip these
              youths with IT specific skills &#123;particularly in the software
              development niche&#125; that would help them dive easily into the
              ever expanding and revolving world of information and digital
              technology. <br />
              &nbsp;&nbsp;&nbsp;Our Vision is to reduce unemployment and
              idleness, foster self-discovery, skill exploration, mastery and
              expertise, while fashioning Nigeria as one of the world leading
              solutions for IT innovations. <br />
              &nbsp;&nbsp;&nbsp;Our services includes but are not limited to:
              software development trainings including front-end and back-end,
              mentorship to participants, and facilitation of healthy
              competitions aimed at innovative discoveries and solutions.
            </p>
          </main>
        </article>
        {/* <section className="flex flex-col md:flex-row md:w-[90vw] bg-primary text-secondary md:justify-between py-14 px-16 rounded-xl gap-y-12 text-center">
          <div className="flex flex-col items-center">
            <span className="text-3xl">
              <FaChalkboardTeacher />
            </span>
            <span className="text-4xl pb-2 px-2 mb-1 border-b-2 border-secondary">
              15
            </span>
            <span className="text-xl font-light">Tutors</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl">
              <AiOutlineBook />
            </span>
            <span className="text-4xl pb-2 px-2 mb-1 border-b-2 border-secondary">
              4
            </span>
            <span className="text-xl font-light">Courses</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl">
              <BsHeart />
            </span>
            <span className="text-4xl pb-2 px-2 mb-1 border-b-2 border-secondary">
              45
            </span>
            <span className="text-xl font-light">Students</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl">
              <AiOutlineBook />
            </span>
            <span className="text-4xl pb-2 px-2 mb-1 border-b-2 border-secondary">
              109
            </span>
            <span className="text-xl font-light">Classes</span>
          </div>
        </section> */}
        <Features />
        <div className="flex flex-col justify-center items-center mb-8">
          <header className="text-center font-light">
            <h4 className="text-secondary my-2">COURSES</h4>
            <p className="text-3xl my-2 max-w-[80vw] md:max-w-[70vw] lg:max-w-[50vw] mb-6">
              Trainings are designed and incorporated with flexibility to
              provide you with the greatest possible experience.
            </p>
          </header>
          <div className="grid grid-cols-1 md:grid-cols-2 w-[90vw] gap-16">
            <Offer
              icon={<MdOutlineTouchApp />}
              heading={"Easy Access"}
              body={
                "Each coursework is flexible and can be easily accessed anywhere and anytime."
              }
            />
            <Offer
              icon={<BsHeadset />}
              heading={"Mentorship"}
              body={
                "Access to free mentorship from prominent people in the industry."
              }
            />
            <Offer
              icon={<IoIosLock />}
              heading={"Certifications"}
              body={"Get certified after course completion."}
            />
            <Offer
              icon={<TbBellRinging />}
              heading={"Reminders and notifications"}
              body={
                "This keeps you on board and helps you track your progress. It enables easy course completion."
              }
            />
          </div>
        </div>
        <NewsLetter />
      </div>
    </>
  );
};

export default AboutPage;
