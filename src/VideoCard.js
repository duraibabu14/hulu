import React, { forwardRef, useState } from "react";
import TextTruncate from "react-text-truncate";
import "./VideoCard.css";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import YouTube from "react-youtube";

const baseURL = "https://image.tmdb.org/t/p/original";

const VideoCard = forwardRef(({ movie }, ref) => {
  const [trailerUrl, settrailerUrl] = useState("");
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  //   const handleClick = (movie) => {
  //     if (trailerUrl) {
  //       settrailerUrl("");
  //     } else {
  //       movieTrailer(movie?.name || "").then((url) => {});
  //     }
  //   };
  return (
    <div ref={ref} className="videocard">
      <img
        // onClick={() => handleClick(movie)}
        src={`${baseURL}${movie.backdrop_path || movie.poster_path}`}
      />
      <TextTruncate
        line={1}
        element="p"
        truncateText="..."
        text={movie.overview}
      />
      <h2>{movie.title || movie.original_name}</h2>
      <p className="videocard__stats">
        {movie.media_type && `${movie.media_type} *`}
        {movie.release_date || movie.first_air_date} *
        <ThumbUpIcon /> {movie.vote_count}
      </p>
      {/* <YouTube videoId="X6JgwL1PjL8" opts={opts} /> */}
    </div>
  );
});

export default VideoCard;
