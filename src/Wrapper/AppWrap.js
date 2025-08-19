import { SocialMedia } from "../Components";

const AppWrap = (Component, idName) =>
  function HOC() {
    return (
      <div id={idName} className={`app__container`}>
        <SocialMedia />
        <div className="app__wrapper app__flex">
          <Component />
        </div>
      </div>
    );
  };

export default AppWrap;
