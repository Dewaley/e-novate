import TopBlogCard from "../home/TopBlogCard";
import { useState, useEffect } from "react";

const BlogOverview = () => {
  const [blogList, setBlogList] = useState([]);
  const fetchBlog = async () => {
    const res = await fetch(process.env.REACT_APP_ENOVATE_API + `/blog/view/?page=1`);
    const data = await res.json();
    setBlogList(data.results);
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
      {blogList !== [] && (
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
      )}
    </section>
  );
};

export default BlogOverview;
