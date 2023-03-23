import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Search from "./pages/Search";

const App = () => {
  return (
    <Fragment>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </Fragment>
  );
};

export default App;
