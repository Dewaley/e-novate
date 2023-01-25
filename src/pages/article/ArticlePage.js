import BlogRightSide from "../../components/blog/BlogRightSide";
import { useState, useEffect } from "react";
import NewsLetter from "../../components/universal/NewsLetter";
import { useParams } from "react-router-dom";
import { AiOutlineCalendar, AiOutlineMessage } from "react-icons/ai";
import { FiUser } from "react-icons/fi";
import { months } from "../../config/monthsApi";
import { useSearchParams } from "react-router-dom";
import Paginate from "../../components/courses/Paginate";
import BlogCard from "../../components/blog/BlogCard";
import CommentForm from "../../components/article/CommentForm";
// import { BiRightArrowAlt, BiLeftArrowAlt } from 'react-icons/bi';
import AuthorCard from "../../components/article/AuthorCard";
import { Link } from "react-router-dom";
import PlaceholderLoading from "react-placeholder-loading";

const ArticlePage = () => {
  const { id } = useParams();
  const [article, setArticle] = useState([]);
  const [latestPosts, setLatestPosts] = useState([]);
  const [blogList, setBlogList] = useState({});
  const [pages, setPages] = useState([]);
  const [page, setPage] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState("");
  const [text, setText] = useState("");
  const [comments, setComments] = useState();
  const [commentCount, setCommentCount] = useState(3);
  const viewLess = () => {
    if (commentCount - 3 < 3) {
      let control = commentCount - 3;
      setCommentCount((prev) => prev - control);
    } else {
      setCommentCount((prev) => prev - 3);
    }
  };
  const viewMore = () => {
    if (commentCount + 3 > comments.length) {
      let control = comments.length - commentCount;
      setCommentCount((prev) => prev + control);
    } else {
      setCommentCount((prev) => prev + 3);
    }
  };
  const fetchComments = async (articleData) => {
    const res = await fetch(
      `https://e-novate.onrender.com/api` + "/blog/comment"
    );
    const data = await res.json();
    const filteredData = data.filter(
      (comment) => comment.post === articleData.id
    );
    setComments(filteredData);
  };
  const fetchBlog = async (search) => {
    if (searchParams.get("search") !== search) {
      setSearchParams({ search: search, page: page });
    }
    const res = await fetch(
      `https://e-novate.onrender.com/api` + `/blog/view/?search=${search}`
    );
    const data = await res.json();
    setBlogList(data);
    setText(search);
  };
  const fetchLatestPosts = async () => {
    const res = await fetch(
      `https://e-novate.onrender.com/api` + `/blog/view/?page=1`
    );
    const dat = await res.json();
    const data = await dat.results;
    setLatestPosts(data);
  };
  const fetchArticle = async () => {
    const res = await fetch(
      `https://e-novate.onrender.com/api` + `/blog/view/${id}`
    );
    const data = await res.json();
    setArticle(data);
    fetchComments(data);
  };
  useEffect(() => {
    if (typeof searchParams.get("search") === "string") {
      fetchBlog(searchParams.get("search"));
    } else {
      fetchArticle();
    }
    window.scrollTo({
      top: 0,
    });
    fetchLatestPosts();
  }, [searchParams, id]);
  return (
    <>
      <div className="animate__animated animate__fadeIn">
        <div className="flex flex-col items-center">
          <div className="flex flex-col bg-primary items-center justify-center w-full mt-12 mb-12 py-4 text-white">
            {typeof searchParams.get("search") !== "string" ? (
              <h1 className="text-center text-3xl max-w-[80vw] sm:max-w-[45vw] md:max-w-[35vw]">
                {article.title || (
                  <div className="flex flex-col gap-y-2">
                    <PlaceholderLoading shape="rect" width={250} height={10} />
                    <PlaceholderLoading shape="rect" width={250} height={10} />
                  </div>
                )}
              </h1>
            ) : (
              <h1 className="text-center text-3xl max-w-[80vw] sm:max-w-[45vw] md:max-w-[35vw]">
                Search Results
              </h1>
            )}
            <div className="flex items-center gap-x-1 uppercase">
              <Link
                className="text-[#ffffff]/50 font-bold text-lg no-underline"
                to="/"
              >
                Home
              </Link>
              <span className="text-2xl">/</span>
              <Link
                className="text-[#ffffff]/50 font-bold text-lg no-underline"
                to="/blog"
              >
                Blog
              </Link>
              <span className="text-2xl">/</span>
              <span className="font-bold text-lg">Blog Post</span>
            </div>
          </div>
          <div className="text-primary flex flex-col  items-center md:items-start md:flex-row pt-12 md:mb-8 gap-x-8 overflow-hidden w-[90vw]">
            <div className="flex flex-col gap-y-8 md:w-2/3 mb-8 w-full overflow-hidden">
              {searchParams.get("search") ? (
                <div className="flex flex-col gap-y-8">
                  {blogList.results !== undefined && (
                    <div>
                      {blogList.results.length > 0 ? (
                        <div>
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
                      ) : (
                        <div>
                          <h1 className="text-2xl text-primary">
                            Your search, "{text}" doesn't match any of our
                            articles
                          </h1>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ) : (
                <div className="flex flex-col gap-y-8">
                  {article.post_picture ? (
                    <img src={article.post_picture} alt="" className="w-full" />
                  ) : (
                    <PlaceholderLoading
                      shape="rect"
                      width={1000}
                      height={300}
                    />
                  )}
                  <div className="flex flex-wrap gap-y-2 gap-x-2 md:gap-x-4 text-secondary w-full border-b-[#263B5D]/20 border-b-[2px] pb-2 text-[#263238]/70">
                    {article.date_posted ? (
                      <span className="flex items-center gap-x-0.5 sm:gap-x-2 text-sm sm:text-base">
                        <AiOutlineCalendar className="sm:text-lg text-base" />
                        {months[new Date(article.date_posted).getMonth()] +
                          " " +
                          new Date(article.date_posted).getDate() +
                          ", " +
                          new Date(article.date_posted).getFullYear()}
                      </span>
                    ) : (
                      <span className="flex items-center gap-x-0.5 sm:gap-x-2 text-sm sm:text-base">
                        <PlaceholderLoading
                          shape="rect"
                          width={100}
                          height={10}
                        />
                      </span>
                    )}
                    {article.author ? (
                      <span className="flex items-center gap-x-0.5 sm:gap-x-2 text-sm sm:text-base">
                        <FiUser className="text-xl" />
                        {article.author}
                      </span>
                    ) : (
                      <span className="flex items-center gap-x-0.5 sm:gap-x-2 text-sm sm:text-base">
                        <PlaceholderLoading
                          shape="rect"
                          width={100}
                          height={10}
                        />
                      </span>
                    )}
                    <div className="flex justify-between">
                      <span className="flex items-center gap-x-0.5 sm:gap-x-2 text-sm sm:text-base">
                        <AiOutlineMessage className="sm:text-lg text-base" />
                        Comments
                      </span>
                    </div>
                  </div>
                  {(
                    <div
                      className="main"
                      dangerouslySetInnerHTML={{ __html: article.article_body }}
                    />
                  ) || (
                    <div className="flex flex-col gap-y-2">
                      <PlaceholderLoading
                        shape="rect"
                        width={(document.documentElement.clientWidth * 2) / 3}
                        height={10}
                      />
                      <PlaceholderLoading
                        shape="rect"
                        width={(document.documentElement.clientWidth * 2) / 3}
                        height={10}
                      />
                      <PlaceholderLoading
                        shape="rect"
                        width={(document.documentElement.clientWidth * 2) / 3}
                        height={10}
                      />
                      <PlaceholderLoading
                        shape="rect"
                        width={(document.documentElement.clientWidth * 2) / 3}
                        height={10}
                      />
                      <PlaceholderLoading
                        shape="rect"
                        width={(document.documentElement.clientWidth * 2) / 3}
                        height={10}
                      />
                      <PlaceholderLoading
                        shape="rect"
                        width={(document.documentElement.clientWidth * 2) / 3}
                        height={10}
                      />
                      <PlaceholderLoading
                        shape="rect"
                        width={(document.documentElement.clientWidth * 2) / 3}
                        height={10}
                      />
                      <PlaceholderLoading
                        shape="rect"
                        width={(document.documentElement.clientWidth * 2) / 3}
                        height={10}
                      />
                      <PlaceholderLoading
                        shape="rect"
                        width={(document.documentElement.clientWidth * 2) / 3}
                        height={10}
                      />
                      <PlaceholderLoading
                        shape="rect"
                        width={(document.documentElement.clientWidth * 2) / 3}
                        height={10}
                      />
                    </div>
                  )}
                  {article.tags ? (
                    <div className="flex flex-wrap gap-x-2 gap-y-2">
                      {article.tags?.map((tag, index) => (
                        <span
                          key={index}
                          className="p-2 border-[0.5px] border-primary rounded-md"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  ) : (
                    <div className="flex gap-x-2">
                      <PlaceholderLoading shape="rect" width={40} height={20} />
                      <PlaceholderLoading shape="rect" width={40} height={20} />
                      <PlaceholderLoading shape="rect" width={40} height={20} />
                    </div>
                  )}
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
                    facebook={article.author_facebook}
                    instagram={article.author_instagram}
                    twitter={article.author_twitter}
                    linkedin={article.author_linkedin}
                  />
                  {comments?.length > 0 && (
                    <div>
                      <h1>Comments({comments?.length})</h1>
                      <div className="bg-[#c4c4c4]/20 p-2 flex flex-col gap-y-4 p-8 rounded-md mb-12">
                        {comments
                          .map((comment) => (
                            <div>
                              <div className="flex justify-between items-center">
                                <span className="text-xl capitalize">
                                  {comment.name}
                                </span>
                                <span className="text-secondary">
                                  {new Date(comment.comment_date).getDate() +
                                    " " +
                                    months[
                                      new Date(comment.comment_date).getMonth()
                                    ] +
                                    ", " +
                                    new Date(
                                      comment.comment_date
                                    ).getFullYear()}
                                </span>
                              </div>
                              <p>{comment.comment_text}</p>
                            </div>
                          ))
                          .slice(0, commentCount)}
                        <div className="flex justify-between items-center">
                          {comments.length > 3 &&
                            commentCount < comments.length && (
                              <span
                                className="text-secondary cursor-pointer"
                                onClick={() => {
                                  viewMore();
                                }}
                              >
                                View more
                              </span>
                            )}
                          {comments.length > 3 && commentCount > 3 && (
                            <span
                              className="text-secondary cursor-pointer text-right"
                              onClick={() => viewLess()}
                            >
                              View less
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  )}
                  {article?.id && <CommentForm post={article.id} />}
                </div>
              )}
            </div>
            <BlogRightSide
              latestPosts={latestPosts}
              setSearch={setSearch}
              searchFn={() => fetchBlog(search)}
            />
          </div>
          <NewsLetter />
        </div>
      </div>
    </>
  );
};

export default ArticlePage;
