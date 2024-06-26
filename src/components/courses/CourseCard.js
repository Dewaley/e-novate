import { MdOutlinePlayLesson } from "react-icons/md";
import { Link } from "react-router-dom";

const CourseCard = ({ title, preamble, lessons, id, image }) => {
  const shortenedTitle = title.slice(0, 25) + "...";
  return (
    <div className="flex flex-col shadow-md rounded-md overflow-hidden w-full select-none">
      <img src={image} alt="" className="w-full" />
      <div className="flex flex-col px-6 justify-between pt-4 h-full">
        <header className="overflow-hidden h-full">
          <h3 className="text-xl h-[3.5rem] overflow-hidden">
            <Link to={`/courses/${id}`} className="no-underline">
              {title.length > 25 ? shortenedTitle : title}
            </Link>
          </h3>
          <div
            className="h-[10rem] text-sm"
            dangerouslySetInnerHTML={{
              __html: preamble
            }}
          />
        </header>
        <footer className="flex justify-between items-center border-t-primary border-t-[1px] py-2 mt-4 mb-2">
          <div className="flex items-end gap-x-0.5">
            <MdOutlinePlayLesson className="text-secondary text-2xl" />
            <span className="font-light text-sm">{lessons + ""} lessons</span>
          </div>
          <Link
            to={`/courses/${id}`}
            className="bg-secondary text-white font-light text-sm px-4 py-1 rounded-md no-underline"
          >
            Details
          </Link>
        </footer>
      </div>
    </div>
  );
};

export default CourseCard;
