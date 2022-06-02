const Header = () => {
  const url = "https://beauty-app-pl.herokuapp.com/login";

  return (
    <header>
      <div className="position_header">
        <div className="header_img">
          <div className="contain">
            <div className="header_title_contain">
              <h1 className="header_title">Jedyny taki salon na podhalu!</h1>
              <a href={url} className="header_text">
                Sprawdz terminy już teraz!
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
