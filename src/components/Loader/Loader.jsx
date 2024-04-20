import React from "react";
import css from "./Loader.module.css";

const Loader = () => {
    return(
        <div >
        <span className={css.loader}></span>
        </div>
    );
};

export default Loader;