import picture1 from "../../images/aboutPage/Mask-group.png";
import NewsLetter from "../../components/universal/NewsLetter";
import Features from "../../components/home/Features";
import Offer from "../../components/home/Offer";
import { MdOutlineTouchApp } from "react-icons/md";
import { BsHeadset, BsHeart } from "react-icons/bs";
import { IoIosLock } from "react-icons/io";
import { TbBellRinging } from "react-icons/tb";
import { FaChalkboardTeacher } from "react-icons/fa";
import { AiOutlineBook } from "react-icons/ai";
import { useEffect, useState } from "react";
import { PuffLoader } from "react-spinners";

const AboutPage = () => {
  const [loading, setloading] = useState(true);
  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
    setTimeout(() => setloading(false), 2000);
  }, []);
  return (
    <>
      {loading ? (
        <div className="w-full h-screen bg-primary overflow-hidden flex items-center justify-center absolute top-0 z-[1000]">
          <PuffLoader color={"#FF206E"} />
        </div>
      ) : (
        <div className="text-primary overflow-x-hidden flex flex-col justify-center items-center text-primary scroll-smooth gap-y-8">
          <article className="flex flex-col md:flex-row justify-center gap-x-8 items-center gap-y-4 w-[90vw] pt-4 pb-6">
            <img
              src={picture1}
              alt=""
              className="md:max-w-sm lg:w-1/2 lg:max-w-none"
            />
            <main>
              <h1 className="text-4xl pb-2">Our Vision</h1>
              <p className="opacity-60 pb-4 font-light">
                &nbsp;&nbsp;&nbsp;Consectetur proident occaecat enim magna amet
                ipsum ex enim incididunt culpa consectetur non cupidatat. Veniam
                laboris duis laboris mollit nisi sit ea amet ex. Velit fugiat
                commodo nisi sunt veniam amet irure ex velit duis nulla tempor
                velit et. <br />
                &nbsp;&nbsp;&nbsp;Labore ad consectetur officia magna voluptate
                veniam. Qui aliqua culpa occaecat elit commodo in veniam
                excepteur pariatur. Dolor excepteur ad velit minim eiusmod
                ullamco duis ut dolore.
              </p>
            </main>
          </article>
          <section className="flex flex-col md:flex-row md:w-[90vw] bg-primary text-secondary md:justify-between py-14 px-16 rounded-xl gap-y-12 text-center">
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
          </section>
          <Features />
          <div className="flex flex-col justify-center items-center mb-8">
            <header className="text-center font-light">
              <h4 className="text-secondary my-2">COURSES</h4>
              <p className="text-3xl my-2 max-w-[80vw] md:max-w-[70vw] lg:max-w-[50vw] mb-6">
                Trainings are designed to provide you with the greatest possible
                experience.
              </p>
            </header>
            <div className="grid grid-cols-1 md:grid-cols-2 w-[90vw] gap-16">
              <Offer
                icon={<MdOutlineTouchApp />}
                heading={"Anywhere anytime access"}
                body={
                  "Laboris exercitation nostrud ipsum ex culpa exercitation quis ipsum est. Laboris exercitation nostrud ipsum "
                }
              />
              <Offer
                icon={<BsHeadset />}
                heading={"On-site and remote support"}
                body={
                  "Laboris exercitation nostrud ipsum ex culpa exercitation quis ipsum est. Laboris exercitation nostrud ipsum "
                }
              />
              <Offer
                icon={<IoIosLock />}
                heading={"Restrict content sharing"}
                body={
                  "Laboris exercitation nostrud ipsum ex culpa exercitation quis ipsum est. Laboris exercitation nostrud ipsum "
                }
              />
              <Offer
                icon={<TbBellRinging />}
                heading={"On-time notifications"}
                body={
                  "Laboris exercitation nostrud ipsum ex culpa exercitation quis ipsum est. Laboris exercitation nostrud ipsum "
                }
              />
            </div>
          </div>
          <NewsLetter />
        </div>
      )}
    </>
  );
};

export default AboutPage;
