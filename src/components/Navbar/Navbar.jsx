import "./Navbar.scss";

export const Navbar = () => {
  return (
    <header className="header">
      <div className="header__container">
        {/* <h1 className="logo">LOGO</h1> */}
        <img src={"./public/vite.svg"} alt="Logo" />

        <nav className="navbar">
          <a href="#" className="navbar__link">Enlace 1</a>
          <a href="#" className="navbar__link">Enlace 2</a>
          <a href="#" className="navbar__link">Enlace 3</a>
        </nav>
      </div>
    </header>
  );
};
