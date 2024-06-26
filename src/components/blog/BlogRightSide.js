import { AiOutlineSearch } from "react-icons/ai";
import LatestPosts from "./LatestPosts";

const BlogRightSide = ({ latestPosts, setSearch, search, searchFn }) => {
  return (
    <div className="md:w-1/3 flex flex-col gap-y-12 mb-8 w-full">
      <div className="flex justify-center items-center border-[1px] border-[#263B5D]/50 py-10 px-4">
        <form
          action=""
          onSubmit={(e) => {
            e.preventDefault();
            searchFn();
          }}
          className="flex h-full border-[1px] border-[#263B5D]/50 rounded overflow-hidden"
        >
          <input
            type="text"
            name=""
            id=""
            className="p-2 h-10 outline-none placeholder:text-primary w-[60vw] sm:w-auto md:w-[20vw]"
            placeholder="Search"
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
          <button
            type="submit"
            className="h-10 w-10 bg-primary flex justify-center items-center p-2 text-secondary rounded"
          >
            <AiOutlineSearch />
          </button>
        </form>
      </div>
      <div className="flex justify-center p-8 gap-y-4 shadow-md border-t-2 border-primary rounded-md flex-col">
        <div className="flex flex-col gap-y-2">
          <h1 className="text-lg text-secondary">Latest Posts</h1>
          <hr className="w-2/12 bg-primary h-1" />
        </div>
        {latestPosts && (
          <div className="flex flex-col gap-y-2">
            {latestPosts.map((article) => (
              <LatestPosts
                image={article.post_picture}
                title={article.title}
                date={article.date_posted}
                id={article.slug}
                key={article.slug}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogRightSide;
