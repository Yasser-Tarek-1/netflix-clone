import React, { useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

import { useSelector } from "react-redux";
import { db } from "../firebase";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { toast } from "react-hot-toast";

const SlideMovie = ({ item }) => {
  const { user } = useSelector((state) => state.user);
  const [like, setLike] = useState(false);
  // const [saved, setSaved] = useState(false);

  const movieId = doc(db, "users", `${user}`);

  const saveMovie = async () => {
    setLike((prev) => !prev);
    // setSaved(true);
    await updateDoc(movieId, {
      movieLoved: arrayUnion({
        id: item.id,
        title: item.title,
        img: item.poster_path,
      }),
    });
    toast.success("Saved");
  };
  return (
    <div
      key={item.id}
      className="relative group cursor-pointer w-[120px] sm:w-[150px] lg:w-[200px]  flex items-center justify-center"
    >
      <div className="absolute top-0 left-[-1px] bg-gradient-to-r from-black  w-full h-full opacity-0 group-hover:opacity-[100%] transition-all duration-150">
        <h3 className="flex text-white text-xl font-semibold justify-center items-center h-full px-2">
          <span className="absolute top-1 left-1" onClick={saveMovie}>
            {like ? (
              <AiFillHeart color="#e50914" size={20} />
            ) : (
              <AiOutlineHeart color="#e50914" size={20} />
            )}
          </span>
          {item.title}
        </h3>
      </div>
      <img
        src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
        alt={item.title}
      />
    </div>
  );
};

export default SlideMovie;
