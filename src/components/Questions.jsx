import React, { useState } from "react";
import Div from "../layout/Container";

import Subscribe from "./Subscribe";

const Questions = () => {
  const [showState, setShowState] = useState("");

  const handler = () => {
    if (showState === "net") {
      setShowState("");
    } else {
      setShowState("net");
    }
  };

  const handlerCost = () => {
    if (showState === "cost") {
      setShowState("");
    } else {
      setShowState("cost");
    }
  };

  const handlerWatch = () => {
    if (showState === "watch") {
      setShowState("");
    } else {
      setShowState("watch");
    }
  };

  const handlerCancel = () => {
    if (showState === "cancel") {
      setShowState("");
    } else {
      setShowState("cancel");
    }
  };

  const handlerCan = () => {
    if (showState === "can") {
      setShowState("");
    } else {
      setShowState("can");
    }
  };

  const handlerKids = () => {
    if (showState === "kids") {
      setShowState("");
    } else {
      setShowState("kids");
    }
  };

  return (
    <Div className={"py-20"}>
      <Div.Container>
        <h2 className="text-white text-2xl sm:text-4xl md:text-6xl font-bold text-center mb-6 sm:mb-10">
          Frequently Asked Questions
        </h2>
        <div className="max-w-[900px] flex flex-col items-center justify-center mx-auto text-white">
          <div className="mb-2">
            <h3
              onClick={handler}
              className="bg-[#303030] mb-[1px] py-4 sm:py-8 px-6 sm:px-10 text-2xl sm:text-4xl flex items-center justify-between cursor-pointer max-w-[900px] h-[80px] transition-all duration-150"
            >
              What is Netflix?
              {showState === "net" ? (
                <span className="text-2xl sm:text-4xl transition-all duration-150">
                  x
                </span>
              ) : (
                <span className="text-2xl sm:text-4xl transition-all duration-150">
                  +
                </span>
              )}
            </h3>

            <div
              className={`bg-[#303030] px-6 sm:px-10 text-xl sm:text-3xl transition-all duration-150 ${
                showState === "net"
                  ? "py-4 sm:py-8"
                  : "h-0 overflow-hidden py-0"
              }`}
            >
              <p className="mb-4 sm:mb-10">
                Netflix is a streaming service that offers a wide variety of
                award-winning TV shows, movies, anime, documentaries, and more
                on thousands of internet-connected devices.
              </p>
              <p>
                You can watch as much as you want, whenever you want without a
                single commercial – all for one low monthly price. There's
                always something new to discover and new TV shows and movies are
                added every week!
              </p>
            </div>
          </div>
          <div className="mb-2">
            <h3
              onClick={handlerCost}
              className="bg-[#303030] mb-[1px]  py-4 sm:py-8 px-6 sm:px-10 text-2xl sm:text-4xl flex items-center justify-between cursor-pointer max-w-[900px] h-[80px] transition-all duration-150"
            >
              How much does Netflix cost?
              {showState === "cost" ? (
                <span className="text-2xl sm:text-4xl transition-all duration-150">
                  x
                </span>
              ) : (
                <span className="text-2xl sm:text-4xl transition-all duration-150">
                  +
                </span>
              )}
            </h3>

            <div
              className={`bg-[#303030] px-6 sm:px-10 text-xl sm:text-3xl transition-all duration-150 ${
                showState === "cost"
                  ? "py-4 sm:py-8"
                  : "h-0 overflow-hidden py-0"
              }`}
            >
              <p>
                Watch Netflix on your smartphone, tablet, Smart TV, laptop, or
                streaming device, all for one fixed monthly fee. Plans range
                from EGP120 to EGP200 a month. No extra costs, no contracts.
              </p>
            </div>
          </div>
          <div className="mb-2">
            <h3
              onClick={handlerWatch}
              className="bg-[#303030] mb-[1px]  py-4 sm:py-8 px-6 sm:px-10 text-2xl sm:text-4xl flex items-center justify-between cursor-pointer max-w-[900px] h-[80px] transition-all duration-150"
            >
              What is Netflix?
              {showState === "watch" ? (
                <span className="text-2xl sm:text-4xl transition-all duration-150">
                  x
                </span>
              ) : (
                <span className="text-2xl sm:text-4xl transition-all duration-150">
                  +
                </span>
              )}
            </h3>

            <div
              className={`bg-[#303030] px-6 sm:px-10 text-xl sm:text-3xl transition-all duration-150 ${
                showState === "watch"
                  ? "py-4 sm:py-8"
                  : "h-0 overflow-hidden py-0"
              }`}
            >
              <p className="mb-10">
                Watch anywhere, anytime. Sign in with your Netflix account to
                watch instantly on the web at netflix.com from your personal
                computer or on any internet-connected device that offers the
                Netflix app, including smart TVs, smartphones, tablets,
                streaming media players and game consoles.
              </p>
              <p>
                You can also download your favorite shows with the iOS, Android,
                or Windows 10 app. Use downloads to watch while you're on the go
                and without an internet connection. Take Netflix with you
                anywhere.
              </p>
            </div>
          </div>
          <div className="mb-2">
            <h3
              onClick={handlerCancel}
              className="bg-[#303030] mb-[1px]  py-4 sm:py-8 px-6 sm:px-10 text-2xl sm:text-4xl flex items-center justify-between cursor-pointer max-w-[900px] h-[80px] transition-all duration-150"
            >
              How do can I cancel?
              {showState === "cancel" ? (
                <span className="text-2xl sm:text-4xl transition-all duration-150">
                  x
                </span>
              ) : (
                <span className="text-2xl sm:text-4xl transition-all duration-150">
                  +
                </span>
              )}
            </h3>

            <div
              className={`bg-[#303030] px-6 sm:px-10 text-xl sm:text-3xl transition-all duration-150 ${
                showState === "cancel"
                  ? "py-4 sm:py-8"
                  : "h-0 overflow-hidden py-0"
              }`}
            >
              <p>
                Netflix is flexible. There are no pesky contracts and no
                commitments. You can easily cancel your account online in two
                clicks. There are no cancellation fees – start or stop your
                account anytime.
              </p>
            </div>
          </div>
          <div className="mb-2">
            <h3
              onClick={handlerCan}
              className="bg-[#303030] mb-[1px]  py-4 sm:py-8 px-6 sm:px-10 text-2xl sm:text-4xl flex items-center justify-between cursor-pointer max-w-[900px] h-[80px] transition-all duration-150"
            >
              What can I watch on Netflix?
              {showState === "can" ? (
                <span className="text-2xl sm:text-4xl transition-all duration-150">
                  x
                </span>
              ) : (
                <span className="text-2xl sm:text-4xl transition-all duration-150">
                  +
                </span>
              )}
            </h3>

            <div
              className={`bg-[#303030] px-6 sm:px-10 text-xl sm:text-3xl transition-all duration-150 ${
                showState === "can"
                  ? "py-4 sm:py-8"
                  : "h-0 overflow-hidden py-0"
              }`}
            >
              <p>
                Netflix has an extensive library of feature films,
                documentaries, TV shows, anime, award-winning Netflix originals,
                and more. Watch as much as you want, anytime you want.
              </p>
            </div>
          </div>
          <div className="mb-2">
            <h3
              onClick={handlerKids}
              className="bg-[#303030] mb-[1px]  py-4 sm:py-8 px-6 sm:px-10 text-2xl sm:text-4xl flex items-center justify-between cursor-pointer max-w-[900px] h-[80px] transition-all duration-150"
            >
              Is Netflix good for kids?
              {showState === "kids" ? (
                <span className="text-2xl sm:text-4xl transition-all duration-150">
                  x
                </span>
              ) : (
                <span className="text-2xl sm:text-4xl transition-all duration-150">
                  +
                </span>
              )}
            </h3>

            <div
              className={`bg-[#303030] px-6 sm:px-10 text-xl sm:text-3xl transition-all duration-150 ${
                showState === "kids"
                  ? "py-4 sm:py-8"
                  : "h-0 overflow-hidden py-0"
              }`}
            >
              <p className="mb-10">
                The Netflix Kids experience is included in your membership to
                give parents control while kids enjoy family-friendly TV shows
                and movies in their own space.
              </p>
              <p>
                Kids profiles come with PIN-protected parental controls that let
                you restrict the maturity rating of content kids can watch and
                block specific titles you don’t want kids to see.
              </p>
            </div>
          </div>
        </div>
        <div className="max-w-[750px] mx-auto mt-12">
          <p className="text-white mb-4 text-center text-xl">
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
          <Subscribe />
        </div>
      </Div.Container>
    </Div>
  );
};

export default Questions;
