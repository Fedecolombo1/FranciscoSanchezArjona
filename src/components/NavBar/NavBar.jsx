import "./NavBar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import "./navMenu.css"

const NavBar = () => {

  const scrollTo = (navigateTo) => {
    setTimeout(() => {
      const section = document.getElementById(navigateTo);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <>
      <header className="row col-12 desk align" style={{position: 'fixed', backgroundColor: 'white', height: 75}}>
        <Link className="col-5 align linkHome" to="/">            
          <h1 className="nombre align">Logo</h1>
        </Link> 
        <div className="col-6 row linksContainers">     
          <Link to={'/'} onClick={() => scrollTo('proyectos')} className="col-3 links row align">
              <h3 className="col-8 links">
              Proyectos
              </h3>
          </Link>          
          <Link to={'/'} onClick={() => scrollTo('nosotros')} className="col-3 links row align">
              <h3 className="col-8 links">
              Nosotros
              </h3>
          </Link>    
          <Link to={'/'} onClick={() => scrollTo('contacto')} className="col-3 links row align">
              <h3 className="col-8 links">
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
                  to="/" className='col-11 row align' style={{marginTop: "40px"}}
                >                  
                  <li className="col-10 linkNav">Home</li>
                </Link>
              </ul>
            </div>
          </nav>
          <Link to="/" className="col-8 row align">
            <h1 className="nombre col-6 align">Logo</h1>
          </Link>        
        </nav>        
      </header>
      
    </>
  );
};

export default NavBar;
