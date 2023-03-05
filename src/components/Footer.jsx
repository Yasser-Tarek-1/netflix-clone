import React from "react";
import Div from "../layout/Container";
import Br from "./Br";

const Footer = () => {
  return (
    <>
      <Br />
      <Div>
        <Div.Container className={"py-10 text-[#737373] max-w-[850px]"}>
          <h3>
            <a href="/" className="hover:underline">
              Questions? Contact us.
            </a>
          </h3>
          <div className="grid grid-cols-2  sm:grid-cols-3 md:grid-cols-4 mt-5 items-center">
            <div className="flex flex-col justify-center">
              <a href="/" className="mb-4 text-sm hover:underline">
                FAQ
              </a>
              <a href="/" className="mb-4 text-sm hover:underline">
                Investor Relations
              </a>
              <a href="/" className="mb-4 text-sm hover:underline">
                Privacy
              </a>
              <a href="/" className="text-sm hover:underline mb-4">
                Speed Test
              </a>
            </div>
            <div className="flex flex-col justify-center">
              <a href="/" className="mb-4 text-sm hover:underline">
                Help Center
              </a>
              <a href="/" className="mb-4 text-sm hover:underline">
                Jobs
              </a>
              <a href="/" className="mb-4 text-sm hover:underline">
                Cookie Preferences
              </a>
              <a href="/" className="mb-4 text-sm hover:underline">
                Legal Notices
              </a>
            </div>
            <div className="flex flex-col justify-center">
              <a href="/account" className="mb-4 text-sm hover:underline">
                Account
              </a>
              <a href="/" className="mb-4 text-sm hover:underline">
                Ways to Watch
              </a>
              <a href="/" className="mb-4 text-sm hover:underline">
                Corporate Information
              </a>
              <a href="/" className="mb-4 text-sm hover:underline">
                Only on Netflix
              </a>
            </div>
            <div className="flex flex-col justify-center">
              <a href="/" className="mb-4 text-sm hover:underline">
                Media Center
              </a>
              <a href="/" className="mb-4 text-sm hover:underline">
                Terms of Use
              </a>
              <a href="/" className="mb-4 text-sm hover:underline">
                Contact Us
              </a>
            </div>
          </div>
          <p className="text-sm my-4">Netflix Egypt</p>
        </Div.Container>
      </Div>
    </>
  );
};

export default Footer;
