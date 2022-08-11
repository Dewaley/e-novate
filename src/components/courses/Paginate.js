import { useEffect } from "react";

const Paginate = ({ count, pages, setPages, page, setPage }) => {
  useEffect(() => {
    const pseudoPages = [];
    for (let i = 1; i <= Math.ceil(count / 6); i++) {
      pseudoPages.push(i);
    }
    setPages(pseudoPages);
  }, [count]);
  return (
    <div className="flex gap-x-2 mt-4">
      {pages.length > 1 && pages.map((item) => (
        <span
          className={`cursor-pointer w-8 h-8  flex justify-center items-center ${
            page === item
              ? "bg-secondary text-white"
              : "border-[1px] border-primary text-primary"
          }`}
          onClick={() => setPage(item)}
        >
          {item}
        </span>
      ))}
    </div>
  );
};

export default Paginate;
