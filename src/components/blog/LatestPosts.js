import { Link } from "react-router-dom";
import { months } from "../../config/monthsApi";

const LatestPosts = ({ image, title, date, id }) => {
  const formattedDate = new Date(date);
  const shortenedTitle = title.slice(0, 40) + "...";
  return (
    <div className="flex items-center gap-x-2">
      <div>
        <div
          className="h-12 w-12 rounded-full bg-center bg-cover"
          style={{
            backgroundImage: `url(${image})`,
          }}
        ></div>
      </div>
      <div>
        <h4 className="font-extralight text-sm">
          {months[formattedDate.getMonth()] +
            " " +
            formattedDate.getDate() +
            ", " +
            formattedDate.getFullYear()}
        </h4>
        <h1 className="font-light text-lg">
          <Link to={`/blog/article/${id}`} className="w-fit no-underline">
            {(title.length > 40 ? shortenedTitle : title)}
          </Link>
        </h1>
      </div>
    </div>
  );
};

export default LatestPosts;
