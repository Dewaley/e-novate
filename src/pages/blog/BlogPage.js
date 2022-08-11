import NewsLetter from "../../components/universal/NewsLetter";
import BlogCard from "../../components/blog/BlogCard";
import { useState, useEffect } from "react";
import BlogRightSide from "../../components/blog/BlogRightSide";
import Paginate from "../../components/courses/Paginate";
import { useSearchParams } from "react-router-dom";

const BlogPage = () => {
  const [blogList, setBlogList] = useState([]);
  const [pages, setPages] = useState([]);
  const [page, setPage] = useState(1);
  const [latestPosts,setLatestPosts] = useState([])
  const [searchParams,setSearchParams] = useSearchParams()
  const fetchBlog = async () => {
    const res = await fetch(process.env.REACT_APP_ENOVATE_API + `/blog/view/?page=${page}`);
    const data = await res.json();
    setBlogList(data);
    if(page === 1) {
      setLatestPosts(data.results)
    }
    setSearchParams({ page: page})
  };
  useEffect(() => {
    fetchBlog();
    window.scrollTo({
      top: 0,
    });
  }, [page]);
  return (
    <div>
      {blogList.results !== undefined && (
        <div className="flex flex-col items-center">
          <div className="text-primary flex flex-col items-center md:items-start md:flex-row pt-12 px-8 gap-x-8 md:mb-8 w-screen overflow-x-hidden">
            <div className="flex flex-col gap-y-8 md:w-2/3 mb-8 w-[90vw]">
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
                page={page}
                setPage={setPage}
              />
            </div>
            <BlogRightSide latestPosts={latestPosts} />
          </div>
          <NewsLetter />
        </div>
      )}
    </div>
  );
};

export default BlogPage;
