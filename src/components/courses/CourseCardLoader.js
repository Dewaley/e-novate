import PlaceholderLoading from "react-placeholder-loading";
import { MdOutlinePlayLesson } from "react-icons/md";

const CourseCardLoader = () => {
  return (
    <div className="flex flex-col shadow-md rounded-md overflow-hidden w-full select-none overflow-hidden">
      <PlaceholderLoading shape="rect" width={1000} height={300} />
      <div className="flex flex-col px-6 justify-between pt-4 h-full">
        <header className="overflow-hidden h-full flex flex-col gap-y-1">
          <PlaceholderLoading shape="rect" width={200} height={20} />
          <p className="font-light text-sm h-[5rem] overflow-hidden flex flex-col gap-y-1">
            <PlaceholderLoading shape="rect" width={1000} height={10} />
            <PlaceholderLoading shape="rect" width={1000} height={10} />
            <PlaceholderLoading shape="rect" width={1000} height={10} />
            <PlaceholderLoading shape="rect" width={1000} height={10} />
            <PlaceholderLoading shape="rect" width={1000} height={10} />
            <PlaceholderLoading shape="rect" width={1000} height={10} />
          </p>
        </header>
        <footer className="flex justify-between items-center border-t-primary border-t-[1px] py-2 mt-4 mb-2">
          <div className="flex items-end gap-x-0.5">
            <MdOutlinePlayLesson className="text-secondary text-2xl" />
            <span className="font-light text-sm">
              <PlaceholderLoading shape="rect" width={100} height={10} />{" "}
            </span>
          </div>
          <span className="bg-secondary text-white font-light text-sm px-4 py-1 rounded-md">
            Details
          </span>
        </footer>
      </div>
    </div>
  );
};

export default CourseCardLoader;
