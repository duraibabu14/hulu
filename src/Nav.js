import React from "react";
import "./Nav.css";
import requests from "./requests";

function Nav({ setselectedOption }) {
  return (
    <div className="nav">
      <h2 onClick={() => setselectedOption(requests.fetchTrending)}>
        Trending
      </h2>
      <h2 onClick={() => setselectedOption(requests.fetchTopRated)}>
        Top Rated
      </h2>
      <h2 onClick={() => setselectedOption(requests.fetchAction)}>Action</h2>
      <h2 onClick={() => setselectedOption(requests.fetchComedy)}>Comedy</h2>
      <h2 onClick={() => setselectedOption(requests.fetchHorrer)}>Horrer</h2>
      <h2 onClick={() => setselectedOption(requests.fetchRomance)}>Romance</h2>
      <h2 onClick={() => setselectedOption(requests.fetchMystery)}>Mystery</h2>
      <h2 onClick={() => setselectedOption(requests.fetchScience)}>Sci-fi</h2>
      <h2 onClick={() => setselectedOption(requests.fetchWestern)}>Western</h2>
      <h2 onClick={() => setselectedOption(requests.fetchAnimation)}>
        Animation
      </h2>
      <h2 onClick={() => setselectedOption(requests.fetchTV)}>TV</h2>
    </div>
  );
}

export default Nav;
