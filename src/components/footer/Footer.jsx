import Button from "../button/Button";
import NewsLetter from "../newsletter/NewsLetter";
import InputEmail from "./InputEmail";

const Footer = () => {
  return (
    <div className="bg-slate-900 text-white mt-[200px]">
      <div className="max-w-screen-2xl mx-auto px-5">
        <NewsLetter></NewsLetter>

        <div className="mb-5 -mt-[130px]">
          <img className="mx-auto" src="/assets/logo-footer.png" alt="" />
        </div>

        <div className="py-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <div>
            <h1 className="text-xl font-bold mb-2">About Us</h1>
            <p className="md:w-[70%] lg:w-[50%]">
              We are a passionate team dedicated to providing the best services
              to our customers.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-2">Quick Links</h2>
            <ul className="list-disc pl-8 text-gray-400 flex flex-col gap-2">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Service</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-2">Subscribe</h2>
            <p className="md:w-[70%] lg:w-[50%] mb-3">
              Subscribe to our newsletter for the latest updates.
            </p>
            <div className="max-w-[400px]">
              <InputEmail></InputEmail>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center border-t border-gray-600 py-5">
        <p>@2024 Your Company All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
