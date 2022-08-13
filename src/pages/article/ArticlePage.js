import BlogRightSide from "../../components/blog/BlogRightSide";
import { useState, useEffect } from "react";
import NewsLetter from "../../components/universal/NewsLetter";
import { useParams } from "react-router-dom";
import { AiOutlineCalendar, AiOutlineMessage } from "react-icons/ai";
import { FiUser } from "react-icons/fi";
import { months } from "../../config/monthsApi";
// import { BiRightArrowAlt, BiLeftArrowAlt } from 'react-icons/bi';
import AuthorCard from "../../components/article/AuthorCard";
import { Link } from "react-router-dom";
import { PuffLoader } from "react-spinners";

const ArticlePage = ({ page }) => {
  const { id } = useParams();
  const [article, setArticle] = useState();
  const [latestPosts, setLatestPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const fetchLatestPosts = async () => {
    const res = await fetch(
      process.env.REACT_APP_ENOVATE_API + `/blog/view/?page=1`
    );
    const dat = await res.json();
    const data = await dat.results;
    setLatestPosts(data);
  };
  const fetchArticle = async () => {
    const res = await fetch(
      process.env.REACT_APP_ENOVATE_API + `/blog/view/${id}`
    );
    const data = await res.json();
    setArticle(data);
  };
  useEffect(() => {
    fetchArticle();
    fetchLatestPosts();
    window.scrollTo({
      top: 0,
    });
    setTimeout(() => setLoading(false), 5000);
  }, []);
  return (
    <>
      {loading ? (
        <div className="w-full h-screen bg-primary overflow-hidden flex items-center justify-center absolute top-0 z-[1000]">
          <PuffLoader color={"#FF206E"} />
        </div>
      ) : (
        <div className="animate__animated animate__fadeIn">
          {article !== undefined && (
            <div className="flex flex-col items-center">
              <div className="flex flex-col bg-primary items-center justify-center w-full mt-12 mb-12 py-4 text-white">
                <h1 className="text-center text-3xl max-w-[80vw] sm:max-w-[45vw] md:max-w-[35vw]">
                  {article.title}
                </h1>
                <div className="flex items-center gap-x-1 uppercase">
                  <Link className="text-[#ffffff]/50 font-bold text-lg" to="/">
                    Home
                  </Link>
                  <span className="text-2xl">/</span>
                  <Link
                    className="text-[#ffffff]/50 font-bold text-lg"
                    to="/blog"
                  >
                    Blog
                  </Link>
                  <span className="text-2xl">/</span>
                  <span className="font-bold text-lg">Blog Post</span>
                </div>
              </div>
              <div className="text-primary flex flex-col  items-center md:items-start md:flex-row pt-12 md:mb-8 gap-x-8 overflow-hidden w-[90vw]">
                <div className="flex flex-col gap-y-8 md:w-2/3 mb-8 w-full">
                  <img src={article.post_picture} alt="" className="w-full" />
                  <div className="flex flex-wrap gap-y-2 gap-x-2 md:gap-x-4 text-secondary w-full border-b-[#263B5D]/20 border-b-[2px] pb-2 text-[#263238]/70">
                    <span className="flex items-center gap-x-0.5 sm:gap-x-2 text-sm sm:text-base">
                      <AiOutlineCalendar className="sm:text-lg text-base" />
                      {months[new Date(article.date_posted).getMonth()] +
                        " " +
                        new Date(article.date_posted).getDate() +
                        ", " +
                        new Date(article.date_posted).getFullYear()}
                    </span>
                    <span className="flex items-center gap-x-0.5 sm:gap-x-2 text-sm sm:text-base">
                      <FiUser className="text-xl" />
                      {article.author}
                    </span>
                    <div className="flex justify-between">
                      <span className="flex items-center gap-x-0.5 sm:gap-x-2 text-sm sm:text-base">
                        <AiOutlineMessage className="sm:text-lg text-base" />
                        Comments
                      </span>
                    </div>
                  </div>
                  <p>{article.article_body}</p>
                  <div className="flex flex-wrap gap-x-2 gap-y-2">
                    {article.category.map((cat) => (
                      <span className="p-2 border-[0.5px] border-primary rounded-md">
                        {cat}
                      </span>
                    ))}
                  </div>
                  <hr className="w-full border-b-[#263B5D]/20 border-b-[2px] mt-12" />
                  {/* <div className='w-full flex flex-col md:flex-row justify-center items-center md:divide-x-[2px] divide-y-[2px] md:divide-y-0 divide-[#263B5D]/20'>
                <div className='md:w-1/2 flex justify-center p-2'>
                  {prevArticle !== {} ? (
                    <div>
                      <h1
                        className='flex items-center gap-x-2 text-[#263238]/70 justify-center md:justify-start cursor-pointer'
                        onClick={() => {
                          setIndex(parseInt(prevArticle.id));
                          navigate(`/blog/${parseInt(prevArticle.id)}`);
                        }}
                      >
                        <BiLeftArrowAlt />
                        <span>PREVIOUS POST</span>
                      </h1>
                      <p className='font-light text-xl'>{prevArticle.title}</p>
                    </div>
                  ) : (
                    <div>
                      <h1 className='flex justify-center items-center gap-x-2 text-[#263238]/70 cursor-pointer'>
                        <BiLeftArrowAlt />
                        <span>PREVIOUS POST</span>
                      </h1>
                    </div>
                  )}
                </div>
                <div className='md:w-1/2 flex justify-center p-2'>
                  {nextArticle !== {} ? (
                    <div>
                      <h1
                        className='w-full flex items-center gap-x-2 text-[#263238]/70 justify-center md:justify-end cursor-pointer'
                        onClick={() => {
                          setIndex(parseInt(nextArticle.id));
                          navigate(`/blog/${parseInt(nextArticle.id)}`);
                        }}
                      >
                        <BiRightArrowAlt />
                        <span>NEXT POST</span>
                      </h1>
                      <p className='font-light text-xl'>{nextArticle.title}</p>
                    </div>
                  ) : (
                    <div>
                      <h1 className='w-full flex items-center gap-x-2 text-[#263238]/70 justify-center cursor-pointer'>
                        <BiRightArrowAlt />
                        <span>NEXT POST</span>
                      </h1>
                    </div>
                  )}
                </div>
              </div> 
              <hr className='w-full border-b-[#263B5D]/20 border-b-[2px] mb-12' />*/}
                  <AuthorCard
                    image={article.author_picture}
                    name={article.author}
                    bio={article.author_bio}
                    facebook={article.facebook_link}
                    instagram={article.instagram_link}
                    twitter={article.twitter_link}
                    linkedin={article.linkedin_link}
                  />
                  <form className="bg-[#c4c4c4]/20 p-2 flex flex-col items-center gap-y-4 p-8 rounded-md mb-12">
                    <div className="flex flex-col gap-y-0.5 w-full">
                      <label htmlFor="" className="font-bold">
                        Name
                      </label>
                      <input
                        type="text"
                        className="p-2 rounded outline-none focus:outline-primary sm:w-1/2"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="flex flex-col gap-y-0.5 w-full">
                      <label htmlFor="" className="font-bold">
                        Email
                      </label>
                      <input
                        type="text"
                        className="p-2 rounded outline-none focus:outline-primary sm:w-1/2"
                        placeholder="johndoe@gmail.com"
                      />
                    </div>
                    <div className="flex flex-col gap-y-0.5 w-full">
                      <label htmlFor="" className="font-bold">
                        Comment
                      </label>
                      <textarea
                        rows={8}
                        className="p-2 rounded outline-none focus:outline-primary resize-none"
                        placeholder="Leave a comment..."
                      ></textarea>
                    </div>
                    <button
                      className="bg-secondary px-8 py-2 text-white font-bold rounded mt-4"
                      type="submit"
                    >
                      Submit
                    </button>
                  </form>
                </div>
                <BlogRightSide latestPosts={latestPosts} />
              </div>
              <NewsLetter />
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default ArticlePage;
