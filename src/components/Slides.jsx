import React, { useState, useEffect } from "react";
import axios from "axios";

import SlideMovie from "./SlideMovie";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import Div from "../layout/Container";

const Slides = ({ title, movieURL }) => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    const getMovie = async () => {
      try {
        const data = await axios.get(movieURL);
        setMovie(data.data.results);
      } catch (error) {
        console.log(error);
      }
    };
    getMovie();
  }, [movieURL]);

  return (
    <Div className={"py-6"}>
      <Div.Container>
        <h3 className="text-white font-bold text-2xl mt-4">{title}</h3>
        <div className="flex mt-8 overflow-hidden">
          <Swiper
            navigation={true}
            modules={[Navigation]}
            className="mySwiper"
            slidesPerView={2}
            breakpoints={{
              // when window width is >= 640px
              640: {
                slidesPerView: 3,
              },
              // when window width is >= 768px
              768: {
                slidesPerView: 4,
              },
              // when window width is >= 1280
              1280: {
                slidesPerView: 6,
              },
            }}
          >
            {movie?.map((item) => {
              return (
                <SwiperSlide key={item.id}>
                  <SlideMovie item={item} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </Div.Container>
    </Div>
  );
};

export default Slides;
