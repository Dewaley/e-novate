import MailchimpSubscribe from "react-mailchimp-subscribe";
import CustomForm from "../newsletter/CustomForm";

const NewsLetter = () => {
  const url =
    "https://gmail.us12.list-manage.com/subscribe?u=f5f562864969fd7842b22ecc9&id=3253eb51e1";
  return (
    <div className="bg-primary w-[90vw] rounded-lg flex items-center justify-center text-white flex-col md:flex-row gap-y-4 md:gap-y-0 md:gap-x-8 md:justify-center md:items-center mb-16 py-4 md:py-6 md:px-3 lg:w-[70vw]">
      <div className="text-center md:text-left gap-y-2 md:w-1/2">
        <h2 className="text-secondary">NEWSLETTER</h2>
        <p className="text-xl">
          Subscribe to our newsletter for latest information, updates and juicy
          benefits
        </p>
      </div>
      <MailchimpSubscribe
        url={url}
        render={({ subscribe, status, message }) => (
          <CustomForm
            status={status}
            message={message}
            onValidated={(formData) => subscribe(formData)}
          />
        )}
      />
    </div>
  );
};

export default NewsLetter;
