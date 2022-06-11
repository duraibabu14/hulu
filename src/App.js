import React, { useState } from "react";
import "./App.css";
import Header from "./Header";
import Nav from "./Nav";
import requests from "./requests";
import Results from "./Results";

function App() {
  const [selectedOption, setselectedOption] = useState(requests.fetchTrending);

  return (
    <div className="app">
      <Header />
      <Nav setselectedOption={setselectedOption} />
      <Results selectedOption={selectedOption} />
    </div>
  );
}

export default App;
