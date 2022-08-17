import { AiOutlineSearch } from "react-icons/ai";

const CoursesSearch = ({ searchFn, setSearch }) => {
  return (
    <div className="flex justify-center items-center md:order-2 order-1">
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
          searchFn();
        }}
        className="flex w-fit items-center text-lg gap-x-2 border-2 border-primary rounded-full p-2"
      >
        <AiOutlineSearch className="text-secondary" />
        <input
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          type="text"
          name=""
          id=""
          placeholder="Search for anything here"
          className="bg-transparent border-none outline-none placeholder:text-primary w-[200px] sm:w-auto"
        />
      </form>
    </div>
  );
};

export default CoursesSearch;
