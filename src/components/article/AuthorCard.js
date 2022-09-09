import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import PlaceholderLoading from "react-placeholder-loading";
const AuthorCard = ({
  image,
  name,
  bio,
  facebook,
  instagram,
  linkedin,
  twitter,
}) => {
  return (
    <div className="bg-[#c4c4c4]/20 p-2 flex gap-x-4 p-8 rounded-md mb-4">
      <div>
        {image ? (
          <span
            style={{
              backgroundImage: `url(${image})`,
            }}
            className="flex w-12 h-12 rounded-full bg-center bg-cover"
          ></span>
        ) : (
          <PlaceholderLoading shape="circle" width={50} height={50} />
        )}
      </div>
      <div className="flex flex-col gap-y-2 overflow-hidden">
        <h1 className="text-3xl">
          {name || <PlaceholderLoading shape="rect" width={100} height={10} />}
        </h1>
        <p>
          {bio || (
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
            </div>
          )}
        </p>
        {facebook ? (
          <div className="flex items-center gap-x-2">
            <a
              href={`${facebook}`}
              target="_blank"
              rel="noreferrer"
              className="flex justify-center items-center w-7 h-7 rounded-full text-white bg-primary text-xl"
            >
              <FaFacebookF />
            </a>
            <a
              href={`${instagram}`}
              target="_blank"
              rel="noreferrer"
              className="flex justify-center items-center w-7 h-7 rounded-full text-white bg-primary text-xl"
            >
              <FaInstagram />
            </a>
            <a
              href={`${linkedin}`}
              target="_blank"
              rel="noreferrer"
              className="flex justify-center items-center w-7 h-7 rounded-full text-white bg-primary text-xl"
            >
              <FaLinkedinIn />
            </a>
            <a
              href={`${twitter}`}
              target="_blank"
              rel="noreferrer"
              className="flex justify-center items-center w-7 h-7 rounded-full text-white bg-primary text-xl"
            >
              <FaTwitter />
            </a>
          </div>
        ) : (
          <div className="flex items-center gap-x-2">
            <PlaceholderLoading shape="circle" width={30} height={30} />
            <PlaceholderLoading shape="circle" width={30} height={30} />
            <PlaceholderLoading shape="circle" width={30} height={30} />
            <PlaceholderLoading shape="circle" width={30} height={30} />
          </div>
        )}
      </div>
    </div>
  );
};

export default AuthorCard;
