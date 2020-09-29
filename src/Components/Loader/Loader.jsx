import React from "react";
import "./loader.css";
import CircularProgress from "@material-ui/core/CircularProgress";

const Loader = () => (
  <>
    <div className="load">
      <CircularProgress />
    </div>
    <div className="text">loading</div>
  </>
);

export default Loader;
