import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import {
  FaFacebookF,
  // FaWhatsapp,
  // FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import { BsTelephone } from "react-icons/bs";
import { Link } from "react-router-dom";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import FooterCustomForm from "./FooterCustomForm"

const Footer = () => {
  const url =
    "https://gmail.us12.list-manage.com/subscribe/post?u=f5f562864969fd7842b22ecc9&amp;id=3253eb51e1&amp;f_id=0012b1e0f0";
  return (
    <div className="bg-primary flex justify-center items-center w-full">
      <div className="text-white flex flex-col md:flex-row justify-center gap-x-4 py-4 w-[90vw] font-light">
        <div className="md:w-1/3 flex flex-col justify-between gap-y-4">
          <div className="flex flex-col gap-y-2 md:mb-4">
            <h5 className="tetx-lg font-normal">About Us</h5>
            <p className="text-sm">
              We are a platform birthed and designed to harness the exceptional
              potentials of Nigeria’s youthful population. <br />
              Our Vision is to reduce unemployment and idleness, foster
              self-discovery, skill exploration, mastery and expertise, while
              fashioning Nigeria as one of the world leading solutions for IT
              innovations.
            </p>
            <div className="flex gap-x-2">
              <a href="https://www.facebook.com/enovateng/" target="_blank" rel="noreferrer" className="flex justify-center items-center w-6 h-6 rounded-full text-primary bg-white text-sm">
                <FaFacebookF />
              </a>
              <a href="https://www.instagram.com/enovate_ng/" target="_blank" rel="noreferrer" className="flex justify-center items-center w-6 h-6 rounded-full text-primary bg-white text-sm">
                <FaInstagram />
              </a>
            </div>
          </div>
          <span className="hidden md:block text-xs">
            &#169;2022. E-novate Labs. All Rights Reserved
          </span>
          <hr className="w-[60vw] h-2 md:hidden" />
        </div>
        <div className="md:w-1/3 flex flex-col md:items-center gap-y-4">
          <ul className="flex flex-col gap-y-2">
            <h1 className="text-lg font-normal">Corporate</h1>
            <Link to="/about" className="no-underline">About us</Link>
            <Link to="/contact" className="no-underline">Contact us</Link>
            <Link to="/" className="no-underline">Projects</Link>
            <Link to="/" className="no-underline">Terms and Conditions</Link>
            <Link to="/" className="no-underline">Privacy policy</Link>
          </ul>
          <hr className="w-[60vw] h-2 md:hidden" />
        </div>
        <div className="md:1/3 flex flex-col justify-between gap-y-4">
          <div className="flex flex-col md:mb-4 gap-y-2">
            <h2 className="text-lg font-normal">Contact Us</h2>
            <address className="flex flex-col gap-y-2">
                <a href="tel:08033530335" className="flex items-center gap-x-2 no-underline">
                  <span>
                    <BsTelephone className="text-secondary" />
                  </span>
                  <p>0803 353 0335</p>
                </a>
                <a
                  href="mailto:ng.enovate@gmail.com"
                  className="flex items-center gap-x-2 no-underline"
                >
                  <span>
                    <MdOutlineMailOutline className="text-secondary" />
                  </span>
                  <p className="break-all">ng.enovate@gmail.com</p>
                </a>
              <p className="flex items-center gap-x-2">
                <span>
                  <IoLocationOutline className="text-secondary" />
                </span>
                <span>Ivan 5, VCH Estate, Lekki, Lagos, Nigeria.</span>
              </p>
            </address>
          </div>
          <hr className="w-[60vw] h-2 md:hidden" />
          <div>
            <h1 className="mb-2 text-base">Subscribe to our Newsletter</h1>
            <MailchimpSubscribe
        url={url}
        render={({ subscribe, status, message }) => (
          <FooterCustomForm
            status={status}
            message={message}
            onValidated={(formData) => {
              subscribe(formData);
            }}
          />
        )}
      />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
