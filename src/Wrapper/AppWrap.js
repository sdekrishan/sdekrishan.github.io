import React from "react";
import { SocialMedia } from "../Components";
const AppWrap = (Component, idName, classNames) =>
  function HOC() {
    return (
      <div id={idName} className={`app__container ${classNames}`}>
        <SocialMedia />
        <div className="app__wrapper app__flex">
          <Component />
        </div>
      </div>
    );
  };

export default AppWrap;
