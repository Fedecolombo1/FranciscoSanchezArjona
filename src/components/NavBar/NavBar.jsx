import "./NavBar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import "./navMenu.css"
import Logo from '../../images/Logo.png'

const NavBar = () => {

  const scrollTo = (navigateTo) => {
    setTimeout(() => {
      const section = document.getElementById(navigateTo);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }, 75);
  };

  return (
    <>
      <header className="desk">
        <Link className="logoFSA" to="/FranciscoSanchezArjona">
          <h1 className="">Logo</h1>
        </Link>
        <div className="linksContainers">
          <Link to={'/FranciscoSanchezArjona'} onClick={() => scrollTo('proyectos')} className="">
            <h1 className="links">
              Proyectos
            </h1>
          </Link>
          <Link to={'/FranciscoSanchezArjona'} onClick={() => scrollTo('nosotros')} className="">
            <h3 className="links">
              Estudio
            </h3>
          </Link>
          <Link to={'/FranciscoSanchezArjona'} onClick={() => scrollTo('contacto')} className="">
            <h3 className="links">
              Contacto
            </h3>
          </Link>
        </div>
      </header>

      <header className="col-12 align mobile">
        <nav className="col-12 align navbar">
          <nav role="navigation" className="col-2">
            <div id="menuToggle">
              <input type="checkbox" />

              <span></span>
              <span></span>
              <span></span>

              <ul className='row align' id="menu">
                <Link
                  to="/FranciscoSanchezArjona" className='col-11 row align' style={{ marginTop: "40px" }}
                >
                  <li className="col-10 linkNav">Home</li>
                </Link>
              </ul>
            </div>
          </nav>
          <Link to="/FranciscoSanchezArjona" className="col-8 row align">
            <img src={Logo} alt="" className='col-6' />
          </Link>
        </nav>
      </header>

    </>
  );
};

export default NavBar;
