import React, { useState } from "react";

const Nav: React.FC = () => {
  const [change, setChange] = useState<boolean>(false);
  const url = "https://beauty-app-pl.herokuapp.com/login";
  const mainurl = "https://beauty-app-pl.herokuapp.com/";

  const Tooltip = () => {
    if (change === true) {
      return (
        <div className="tooltip_contain">
          <a className="tooltip_nav" href={mainurl}>
            Strona głowna
          </a>
          <a className="tooltip_nav" href={url}>
            Logowanie
          </a>
          <a
            className="tooltip_nav"
            href="https://beauty-app-pl.herokuapp.com/termin"
          >
            Terminy
          </a>
        </div>
      );
    } else {
      return <></>;
    }
  };
  const handleClick = () => {
    if (change === false) {
      setChange(true);
    } else {
      setChange(false);
    }
  };
  return (
    <>
      <nav>
        <div className="contain">
          <div className="nav_text">
            <a href="https://beauty-app-pl.herokuapp.com/">Be beauty</a>
            <label form="check">
              <input type="checkbox" id="check" onChange={handleClick} />
              <span className="span"></span>
              <span className="span"></span>
              <span className="span"></span>
            </label>
          </div>
          <Tooltip />
        </div>
      </nav>
    </>
  );
};

export default Nav;
