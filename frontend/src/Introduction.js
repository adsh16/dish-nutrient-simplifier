import React from 'react';
import { Link } from 'react-router-dom';

const Introduction = () => {
  return (
    <div className="bg-gray-100 flex items-center justify-center background" style={{ height: '100vh' }}>
      <div className='loading-ring'></div>
      <div className="text-center">
        <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl" style={{ fontSize: "100px", color: "#012b00" }}>
          DishIT
        </h1>
        <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4" style={{ paddingTop: "10px" }}>
          A tool to analyze and display the nutritional info of your recipe
        </p>
        <div className="mt-8 flex justify-center space-x-3">
          <Link
            to="/dishit"
            className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white"
          >
            <button className="get-started-btn flex items-center gap-3">
              Get Started
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="arrow-icon"
                width="24"
                height="24"
              >
                <path d="M10.29 16.29a1 1 0 001.41 0l4-4a1 1 0 000-1.41l-4-4a1 1 0 10-1.41 1.41L13.17 12l-2.88 2.88a1 1 0 000 1.41z" />
              </svg>
            </button>
          </Link>
        </div>
        <div className="mt-8 flex justify-center space-x-3">
          <Link
            to="/contact-us"
            className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 arrow-icon"
          >
            Contact Us
          </Link>
          <Link
            to="/faqs"
            className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 arrow-icon"
          >
            FAQs
          </Link>
          <Link
            to="/dontknow"
            className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 arrow-icon"
          >
            Don't Know?
          </Link>
          <Link
            to="/dataset"
            className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 arrow-icon"
          >
            Dataset
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Introduction;  