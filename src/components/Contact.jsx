import React from 'react';
import { Phone, Mail, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <div className="bg-white">
      <div className="flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 p-6">
          <img
            src="contact.jpg"
            alt="Red jewelry box"
            className="w-full h-auto object-cover"
          />
        </div>

        <div className="w-full md:w-1/2 p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">CONTACT US</h2>
          <p className="text-gray-700 mb-6">
            If you need any support, our team of experts is available to help
            answer all your questions: from assistance with your orders to style
            advice and gift ideas. Feel free to contact us, we are here for you.
          </p>

          <div className="mb-8">
            <label className="block text-gray-900 font-semibold mb-2">
              SELECT YOUR COUNTRY
            </label>
            <div className="relative">
              <select
                className="w-full p-2 border border-gray-300 rounded appearance-none"
                defaultValue="India"
              >
                <option value="India">India</option>
                <option value="United States">United States</option>
                <option value="United Kingdom">United Kingdom</option>
                <option value="Canada">Canada</option>
                <option value="Australia">Australia</option>
                <option value="Germany">Germany</option>
                <option value="France">France</option>
                <option value="Japan">Japan</option>
                <option value="Brazil">Brazil</option>
                <option value="South Africa">South Africa</option>
                <option value="Italy">Italy</option>
              </select>

              <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <div className="flex items-center mb-2">
                <Phone className="w-6 h-6 text-gray-600 mr-2" />
                <h3 className="text-lg font-semibold text-gray-900">CALL US</h3>
              </div>
              <p className="text-gray-600">
                <a href="tel:+91 9998415040"> Tel: +91 9998415040</a>
              </p>
            </div>

            <div>
              <div className="flex items-center mb-2">
                <Mail className="w-6 h-6 text-gray-600 mr-2" />
                <h3 className="text-lg font-semibold text-gray-900">
                  E-MAIL US
                </h3>
              </div>
              <p className="text-gray-600">
                <a href="mailto:parthsavaliya1111@gmail.com">parthsavaliya1111@gmail.com</a>
              </p>
            </div>

            <div>
              <div className="flex items-center mb-2">
                <HelpCircle className="w-6 h-6 text-gray-600 mr-2" />
                <h3 className="text-lg font-semibold text-gray-900">
                  FAQ
                </h3>
              </div>
              <p className="text-gray-600">
             <Link to="FAQ" >Explor FAQ</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;