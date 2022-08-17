import NewsLetter from "../../components/universal/NewsLetter";
import BlogCard from "../../components/blog/BlogCard";
import {
  AiOutlineCalendar,
  AiOutlineMessage,
  AiOutlineArrowRight,
} from "react-icons/ai";
import { FiUser } from "react-icons/fi";
import { useState, useEffect } from "react";
import BlogRightSide from "../../components/blog/BlogRightSide";
import Paginate from "../../components/courses/Paginate";
import { useSearchParams } from "react-router-dom";
import PlaceholderLoading from "react-placeholder-loading";

const BlogPage = () => {
  const [blogList, setBlogList] = useState({});
  const [filtered, setFiltered] = useState([]);
  const [pages, setPages] = useState([]);
  const [latestPosts, setLatestPosts] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState("");
  const [text, setText] = useState("");
  const filter = async (search, page) => {
    if (page === undefined) {
      setSearchParams({ search: search, page: 1 });
    }  else {
      if (searchParams.get("search") !== search) {
        setSearchParams({ search: search, page: page });
      }
      const res = await fetch(
        process.env.REACT_APP_ENOVATE_API + `/blog/view/?search=${search}`
      );
      const data = await res.json();
      setFiltered(data);
      setText(search);
    }
  };
  const fetchLatestPosts = async () => {
    const res = await fetch(
      process.env.REACT_APP_ENOVATE_API + `/blog/view/?page=1`
    );
    const dat = await res.json();
    const data = await dat.results;
    setLatestPosts(data);
  };
  const fetchBlog = async (page) => {
    if (page === null) {
      setSearchParams({
        page: 1,
      });
    } else {
      const res = await fetch(
        process.env.REACT_APP_ENOVATE_API + `/blog/view/?page=${page}`
      );
      const data = await res.json();
      setBlogList(data);
    }
  };
  useEffect(()=> {
    fetchLatestPosts();
  },[])
  useEffect(() => {
    if (typeof searchParams.get("search") === "string") {
      filter(searchParams.get("search"), searchParams.get("page"));
    } else {
      fetchBlog(searchParams.get("page"));
    }
    window.scrollTo({
      top: 0,
    });
  }, [searchParams]);
  return (
    <>
      <div className="animate__animated animate__fadeIn w-full overflow-x-hidden flex items-center flex-col">
        {blogList.results !== undefined ? (
          <div className="flex flex-col">
            <div className="text-primary flex flex-col items-center md:items-start md:flex-row pt-12 px-8 gap-x-8 md:mb-8">
              <div className="flex flex-col gap-y-8 md:w-2/3 mb-8 w-full overflow-hidden">
                {searchParams.get("search") ? (
                  <div className="flex flex-col gap-y-8">
                    {filtered.results !== undefined && (
                      <div>
                        {filtered.results.length > 0 ? (
                          <div>
                            {filtered.results.map((article) => (
                              <BlogCard
                                image={article.post_picture}
                                title={article.title}
                                preamble={article.preamble}
                                date={article.date_posted}
                                id={article.slug}
                                key={article.slug}
                                author={article.author}
                              />
                            ))}
                            <Paginate
                              count={filtered.count}
                              pages={pages}
                              setPages={setPages}
                              page={searchParams.get("page")}
                              setPage={(e) => setSearchParams({ page: e })}
                            />
                          </div>
                        ) : (
                            <h1 className="text-2xl text-primary">
                              Your search, "{text}" doesn't match any of our
                              articles
                            </h1>
                        )}
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="flex flex-col gap-y-8">
                    {blogList.results.map((article) => (
                      <BlogCard
                        image={article.post_picture}
                        title={article.title}
                        preamble={article.preamble}
                        date={article.date_posted}
                        id={article.slug}
                        key={article.slug}
                        author={article.author}
                      />
                    ))}
                    <Paginate
                      count={blogList.count}
                      pages={pages}
                      setPages={setPages}
                      page={searchParams.get("page")}
                      setPage={(e) => setSearchParams({ page: e })}
                    />
                  </div>
                )}
              </div>
              <BlogRightSide
                latestPosts={latestPosts}
                setSearch={setSearch}
                searchFn={() => filter(search)}
              />
            </div>
          </div>
        ) : (
          <div className="flex items-center flex-col">
            <div className="text-primary flex flex-col items-center md:items-start md:flex-row pt-12 px-8 gap-x-8 md:mb-8 w-[90vw]">
              <div className="flex flex-col gap-y-8 md:w-2/3 mb-8 w-full overflow-hidden">
                <div className="flex flex-col gap-y-8 rounded-md shadow-md overflow-hidden">
                  <PlaceholderLoading shape="rect" width={1000} height={400} />
                  <div className="flex flex-wrap gap-y-2 gap-x-2 md:gap-x-4 text-secondary px-2">
                    <span className="flex items-center gap-x-0.5 sm:gap-x-2 text-sm sm:text-base">
                      <AiOutlineCalendar className="sm:text-lg text-base" />
                      <PlaceholderLoading
                        shape="rect"
                        width={100}
                        height={10}
                      />
                    </span>
                    <span className="flex items-center gap-x-0.5 sm:gap-x-2 text-sm sm:text-base">
                      <FiUser className="text-xl" />
                      <PlaceholderLoading
                        shape="rect"
                        width={100}
                        height={10}
                      />
                    </span>
                    <span className="flex items-center gap-x-0.5 sm:gap-x-2 text-sm sm:text-base">
                      <AiOutlineMessage className="sm:text-lg text-base" />
                      Comments
                    </span>
                  </div>
                  <span className="px-2">
                    <PlaceholderLoading shape="rect" width={300} height={10} />
                  </span>
                  <div className="flex flex-col gap-y-2 px-2">
                    <PlaceholderLoading shape="rect" width={1000} height={10} />
                    <PlaceholderLoading shape="rect" width={1000} height={10} />
                    <PlaceholderLoading shape="rect" width={1000} height={10} />
                    <PlaceholderLoading shape="rect" width={1000} height={10} />
                    <PlaceholderLoading shape="rect" width={1000} height={10} />
                  </div>
                  <span className="flex items-center bg-transparent text-secondary font-light p-2 gap-x-2 rounded mb-2 w-fit">
                    <span>READ ON</span>
                    <AiOutlineArrowRight />
                  </span>
                </div>
                <div className="flex flex-col gap-y-8 rounded-md shadow-md overflow-hidden">
                  <PlaceholderLoading
                    shape="rect"
                    width={1000}
                    height={document.documentElement.clientHeight * 0.8}
                  />
                  <div className="flex flex-wrap gap-y-2 gap-x-2 md:gap-x-4 text-secondary px-2">
                    <span className="flex items-center gap-x-0.5 sm:gap-x-2 text-sm sm:text-base">
                      <AiOutlineCalendar className="sm:text-lg text-base" />
                      <PlaceholderLoading
                        shape="rect"
                        width={100}
                        height={10}
                      />
                    </span>
                    <span className="flex items-center gap-x-0.5 sm:gap-x-2 text-sm sm:text-base">
                      <FiUser className="text-xl" />
                      <PlaceholderLoading
                        shape="rect"
                        width={100}
                        height={10}
                      />
                    </span>
                    <span className="flex items-center gap-x-0.5 sm:gap-x-2 text-sm sm:text-base">
                      <AiOutlineMessage className="sm:text-lg text-base" />
                      Comments
                    </span>
                  </div>
                  <span className="px-2">
                    <PlaceholderLoading shape="rect" width={300} height={10} />
                  </span>
                  <div className="flex flex-col gap-y-2 px-2">
                    <PlaceholderLoading shape="rect" width={1000} height={10} />
                    <PlaceholderLoading shape="rect" width={1000} height={10} />
                    <PlaceholderLoading shape="rect" width={1000} height={10} />
                    <PlaceholderLoading shape="rect" width={1000} height={10} />
                    <PlaceholderLoading shape="rect" width={1000} height={10} />
                  </div>
                  <span className="flex items-center bg-transparent text-secondary font-light p-2 gap-x-2 rounded mb-2 w-fit">
                    <span>READ ON</span>
                    <AiOutlineArrowRight />
                  </span>
                </div>
                <div className="flex flex-col gap-y-8 rounded-md shadow-md overflow-hidden">
                  <PlaceholderLoading
                    shape="rect"
                    width={1000}
                    height={document.documentElement.clientHeight * 0.8}
                  />
                  <div className="flex flex-wrap gap-y-2 gap-x-2 md:gap-x-4 text-secondary px-2">
                    <span className="flex items-center gap-x-0.5 sm:gap-x-2 text-sm sm:text-base">
                      <AiOutlineCalendar className="sm:text-lg text-base" />
                      <PlaceholderLoading
                        shape="rect"
                        width={100}
                        height={10}
                      />
                    </span>
                    <span className="flex items-center gap-x-0.5 sm:gap-x-2 text-sm sm:text-base">
                      <FiUser className="text-xl" />
                      <PlaceholderLoading
                        shape="rect"
                        width={100}
                        height={10}
                      />
                    </span>
                    <span className="flex items-center gap-x-0.5 sm:gap-x-2 text-sm sm:text-base">
                      <AiOutlineMessage className="sm:text-lg text-base" />
                      Comments
                    </span>
                  </div>
                  <span className="px-2">
                    <PlaceholderLoading shape="rect" width={300} height={10} />
                  </span>
                  <div className="flex flex-col gap-y-2 px-2">
                    <PlaceholderLoading shape="rect" width={1000} height={10} />
                    <PlaceholderLoading shape="rect" width={1000} height={10} />
                    <PlaceholderLoading shape="rect" width={1000} height={10} />
                    <PlaceholderLoading shape="rect" width={1000} height={10} />
                    <PlaceholderLoading shape="rect" width={1000} height={10} />
                  </div>
                  <span className="flex items-center bg-transparent text-secondary font-light p-2 gap-x-2 rounded mb-2 w-fit">
                    <span>READ ON</span>
                    <AiOutlineArrowRight />
                  </span>
                </div>
                <div className="flex flex-col gap-y-8 rounded-md shadow-md overflow-hidden">
                  <PlaceholderLoading
                    shape="rect"
                    width={1000}
                    height={document.documentElement.clientHeight * 0.8}
                  />
                  <div className="flex flex-wrap gap-y-2 gap-x-2 md:gap-x-4 text-secondary px-2">
                    <span className="flex items-center gap-x-0.5 sm:gap-x-2 text-sm sm:text-base">
                      <AiOutlineCalendar className="sm:text-lg text-base" />
                      <PlaceholderLoading
                        shape="rect"
                        width={100}
                        height={10}
                      />
                    </span>
                    <span className="flex items-center gap-x-0.5 sm:gap-x-2 text-sm sm:text-base">
                      <FiUser className="text-xl" />
                      <PlaceholderLoading
                        shape="rect"
                        width={100}
                        height={10}
                      />
                    </span>
                    <span className="flex items-center gap-x-0.5 sm:gap-x-2 text-sm sm:text-base">
                      <AiOutlineMessage className="sm:text-lg text-base" />
                      Comments
                    </span>
                  </div>
                  <span className="px-2">
                    <PlaceholderLoading shape="rect" width={300} height={10} />
                  </span>
                  <div className="flex flex-col gap-y-2 px-2">
                    <PlaceholderLoading shape="rect" width={1000} height={10} />
                    <PlaceholderLoading shape="rect" width={1000} height={10} />
                    <PlaceholderLoading shape="rect" width={1000} height={10} />
                    <PlaceholderLoading shape="rect" width={1000} height={10} />
                    <PlaceholderLoading shape="rect" width={1000} height={10} />
                  </div>
                  <span className="flex items-center bg-transparent text-secondary font-light p-2 gap-x-2 rounded mb-2 w-fit">
                    <span>READ ON</span>
                    <AiOutlineArrowRight />
                  </span>
                </div>
              </div>
              <BlogRightSide
                latestPosts={latestPosts}
                setSearch={setSearch}
                searchFn={() => filter(search)}
              />
            </div>
          </div>
        )}
        <NewsLetter />
      </div>
    </>
  );
};

export default BlogPage;
