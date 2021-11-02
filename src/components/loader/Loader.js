import React from "react";
import Loader from "react-loader-spinner";
import styles from "./Loader.module.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const AppLoader = () => {
  return (
    <div className={styles.Loader}>
      <Loader
        style={styles}
        type="ThreeDots"
        color="#FC842D"
        height={100}
        width={100}
        timeout={3000} //3 secs
      />
      {/* <Loader
        type="BallTriangle"
        color="#00BFFF"
        height={90}
        width={90}
        timeout={3000} //3 secs
      /> */}
    </div>
  );
};

export default AppLoader;
