import TopBlogCard from "../home/TopBlogCard";
import { useState, useEffect } from "react";
import {
  AiOutlineCalendar,
  AiOutlineMessage,
  AiOutlineArrowRight,
} from "react-icons/ai";
import PlaceholderLoading from "react-placeholder-loading";

const BlogOverview = () => {
  const [blogList, setBlogList] = useState([]);
  const fetchBlog = async () => {
    const res = await fetch(
      process.env.REACT_APP_ENOVATE_API + `/blog/view/?page=1`
    );
    const data = await res.json();
    setBlogList(data.results.slice(0,3));
  };
  useEffect(() => {
    fetchBlog();
  }, []);
  return (
    <section className="flex flex-col justify-center mb-12">
      <div className="text-center font-light">
        <h4 className="text-secondary my-2 font-extralight">BLOG</h4>
        <p className="text-3xl my-2 mb-6">Latest Blog Posts</p>
      </div>
      {blogList.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 w-[90vw] lg:min-w-[80vw] relative gap-y-4">
          {blogList.map((article) => (
            <TopBlogCard
              image={article.post_picture}
              title={article.title}
              preamble={article.preamble}
              date={article.date_posted}
              id={article.slug}
              key={article.slug}
            />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 w-[90vw] lg:min-w-[80vw] relative gap-y-4">
          <div className="flex flex-col shadow-md rounded-md overflow-hidden">
            <PlaceholderLoading shape="rect" width={1000} height={300} />
            <div className="flex flex-col justify-between mt-1">
              <div className="flex flex-col justify-between mx-6 h-full">
                <div className="flex flex-col gap-y-1">
                  <PlaceholderLoading shape="rect" width={200} height={20} />
                  <p className="mb-4 h-[6.5rem] overflow-hidden flex flex-col gap-y-1">
                    <PlaceholderLoading shape="rect" width={1000} height={10} />
                    <PlaceholderLoading shape="rect" width={1000} height={10} />
                    <PlaceholderLoading shape="rect" width={1000} height={10} />
                    <PlaceholderLoading shape="rect" width={1000} height={10} />
                    <PlaceholderLoading shape="rect" width={1000} height={10} />
                    <PlaceholderLoading shape="rect" width={1000} height={10} />
                  </p>
                </div>
                <div className="flex justify-between">
                  <span className="flex items-center gap-x-0.5 sm:gap-x-2 text-sm sm:text-base">
                    <AiOutlineMessage className="sm:text-lg text-base" />
                    Comments
                  </span>
                  <span className="flex items-center gap-x-0.5 sm:gap-x-2 text-sm sm:text-base">
                    <AiOutlineCalendar className="sm:text-lg text-base" />
                    <PlaceholderLoading
                      shape="rect"
                      width={100}
                      height={10}
                    />{" "}
                  </span>
                </div>
              </div>
              <div className="border-t-primary border-t-[1px] py-2 mt-1 mb-2 mx-6">
                <span className="flex items-center bg-secondary text-white font-light text-sm px-4 py-2 gap-x-2 rounded w-fit">
                  <span>Read on</span>
                  <AiOutlineArrowRight />
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col shadow-md rounded-md overflow-hidden">
            <PlaceholderLoading shape="rect" width={1000} height={300} />
            <div className="flex flex-col justify-between mt-1">
              <div className="flex flex-col justify-between mx-6 h-full">
                <div className="flex flex-col gap-y-1">
                  <PlaceholderLoading shape="rect" width={200} height={20} />
                  <p className="mb-4 h-[6.5rem] overflow-hidden flex flex-col gap-y-1">
                    <PlaceholderLoading shape="rect" width={1000} height={10} />
                    <PlaceholderLoading shape="rect" width={1000} height={10} />
                    <PlaceholderLoading shape="rect" width={1000} height={10} />
                    <PlaceholderLoading shape="rect" width={1000} height={10} />
                    <PlaceholderLoading shape="rect" width={1000} height={10} />
                    <PlaceholderLoading shape="rect" width={1000} height={10} />
                  </p>
                </div>
                <div className="flex justify-between">
                  <span className="flex items-center gap-x-0.5 sm:gap-x-2 text-sm sm:text-base">
                    <AiOutlineMessage className="sm:text-lg text-base" />
                    Comments
                  </span>
                  <span className="flex items-center gap-x-0.5 sm:gap-x-2 text-sm sm:text-base">
                    <AiOutlineCalendar className="sm:text-lg text-base" />
                    <PlaceholderLoading
                      shape="rect"
                      width={100}
                      height={10}
                    />{" "}
                  </span>
                </div>
              </div>
              <div className="border-t-primary border-t-[1px] py-2 mt-1 mb-2 mx-6">
                <span className="flex items-center bg-secondary text-white font-light text-sm px-4 py-2 gap-x-2 rounded w-fit">
                  <span>Read on</span>
                  <AiOutlineArrowRight />
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col shadow-md rounded-md overflow-hidden">
            <PlaceholderLoading shape="rect" width={1000} height={300} />
            <div className="flex flex-col justify-between mt-1">
              <div className="flex flex-col justify-between mx-6 h-full">
                <div className="flex flex-col gap-y-1">
                  <PlaceholderLoading shape="rect" width={200} height={20} />
                  <p className="mb-4 h-[6.5rem] overflow-hidden flex flex-col gap-y-1">
                    <PlaceholderLoading shape="rect" width={1000} height={10} />
                    <PlaceholderLoading shape="rect" width={1000} height={10} />
                    <PlaceholderLoading shape="rect" width={1000} height={10} />
                    <PlaceholderLoading shape="rect" width={1000} height={10} />
                    <PlaceholderLoading shape="rect" width={1000} height={10} />
                    <PlaceholderLoading shape="rect" width={1000} height={10} />
                  </p>
                </div>
                <div className="flex justify-between">
                  <span className="flex items-center gap-x-0.5 sm:gap-x-2 text-sm sm:text-base">
                    <AiOutlineMessage className="sm:text-lg text-base" />
                    Comments
                  </span>
                  <span className="flex items-center gap-x-0.5 sm:gap-x-2 text-sm sm:text-base">
                    <AiOutlineCalendar className="sm:text-lg text-base" />
                    <PlaceholderLoading
                      shape="rect"
                      width={100}
                      height={10}
                    />{" "}
                  </span>
                </div>
              </div>
              <div className="border-t-primary border-t-[1px] py-2 mt-1 mb-2 mx-6">
                <span className="flex items-center bg-secondary text-white font-light text-sm px-4 py-2 gap-x-2 rounded w-fit">
                  <span>Read on</span>
                  <AiOutlineArrowRight />
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default BlogOverview;
