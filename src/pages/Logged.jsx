import React, { useState, useEffect } from "react";
import { links } from "../moviesURL";
import LoggedMain from "../components/LoggedMain";
import Slides from "../components/Slides";
import Br from "../components/Br";
import axios from "axios";

const Logged = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    const getMovie = async () => {
      try {
        const data = await axios.get(links.popular);
        setMovie(data.data.results);
      } catch (error) {
        console.log(error);
      }
    };
    getMovie();
  }, []);

  const randomMovie = movie[Math.floor(Math.random() * movie.length)];
  return (
    <>
      <LoggedMain randomMovie={randomMovie} />
      <Br />
      <Slides title="Upcoming" movieURL={links.upcoming} />
      <Slides title="Popular" movieURL={links.popular} />
      <Slides title="Top Rated" movieURL={links.top_rated} />
    </>
  );
};

export default Logged;
