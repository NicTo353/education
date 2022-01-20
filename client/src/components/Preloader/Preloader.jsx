import React from "react";
import loadingImg from "../../img/loading.gif";

const Preloader = () => {
  return (
    <div style={{ maxWidth: "300px", margin: "0 auto", height: '70vh', display: "flex", alignItems: "center"}}>
      <img style={{ width: "100%" }} src={loadingImg} alt="preloader" />
    </div>
  );
};

export default Preloader;
