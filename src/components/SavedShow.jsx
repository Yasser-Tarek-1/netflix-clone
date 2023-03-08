import React, { useEffect, useState } from "react";

import { HiTrash } from "react-icons/hi";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import { db } from "../firebase";
import { updateDoc, doc } from "firebase/firestore";
import { onSnapshot } from "firebase/firestore";
import { useSelector } from "react-redux";

import "swiper/css";
import "swiper/css/navigation";
import { toast } from "react-hot-toast";

const SavedShow = () => {
  const { user } = useSelector((state) => state.user);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    onSnapshot(doc(db, "users", `${user}`), (doc) => {
      setMovies(doc.data()?.movieLoved);
    });
  }, [user]);

  const movieRef = doc(db, "users", `${user}`);
  const deleteShow = async (Id) => {
    try {
      const result = movies.filter((item) => {
        return item.id !== Id;
      });
      await updateDoc(movieRef, {
        movieLoved: result,
      });
      toast.success("Removed");
    } catch (err) {
      toast.error(err);
    }
  };

  return (
    <>
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
        {movies?.map((item) => {
          return (
            <SwiperSlide key={item.id}>
              <div className="relative group cursor-pointer w-[120px] sm:w-[150px] lg:w-[200px]  flex items-center justify-center">
                <div className="absolute top-0 left-[-1px] bg-gradient-to-r from-black  w-full h-full opacity-0 group-hover:opacity-[100%] transition-all duration-150">
                  <h3 className="flex text-white text-xl font-semibold justify-center items-center h-full px-2">
                    {item.title}
                  </h3>
                  <span
                    className="absolute top-1 right-1"
                    onClick={() => deleteShow(item.id)}
                  >
                    <HiTrash color="#e50914" size={22} />
                  </span>
                </div>
                <img
                  src={`https://image.tmdb.org/t/p/w500${item.img}`}
                  alt={item.title}
                />
              </div>{" "}
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default SavedShow;
