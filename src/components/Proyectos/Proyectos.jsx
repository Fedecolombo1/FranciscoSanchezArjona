import React from 'react'

import './Proyectos.css'

import data from '../../data/data'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

function Proyectos() {
  return (
    <section id='proyectos'>
        <h1 className="Titulo">Proyectos</h1>
        <h2 className="subTitulo">En obra</h2>
        <div className="col-12 row">
          {
            data
            .filter(proyecto => proyecto.estado === "abierto")
            .map(proyecto => (
              <Link to={'/proyecto/' + proyecto.id} className='col-4 imgCarrousel1' key={proyecto.id}>
                <div className="image-container">
                  <img src={proyecto.imagenPrincipal} alt="" className="col-12" />
                  <div className="image-overlay">
                    <p className="image-name">{proyecto.name}</p>
                  </div>
                </div>
              </Link>
            ))
          }
        </div>
        <h2 className="subTitulo">Finalizados</h2>
        <div className="col-12 row">
        {
            data
            .filter(proyecto => proyecto.estado === "cerrado")
            .map(proyecto => (
              <Link to={'/proyecto/' + proyecto.id} className='col-4 imgCarrousel1' key={proyecto.id}>
                <div className="image-container">
                  <img src={proyecto.imagenPrincipal} alt="" className="col-12" />
                  {console.log(proyecto.imagenPrincipal)}
                  <div className="image-overlay">
                    <p className="image-name">{proyecto.name}</p>
                  </div>
                </div>
              </Link>
            ))
          }     
        </div>
    </section>
  )
}

export default Proyectos