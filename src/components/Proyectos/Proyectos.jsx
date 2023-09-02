import React, { useState } from 'react'

import './Proyectos.css'

import data from '../../data/data'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

function Proyectos() {
  const [proyectos, setProyectos] = useState(data);
  const [filtroSeleccionado, setFiltroSeleccionado] = useState('');
  
  let filtrar = (filtro) => {
    setFiltroSeleccionado(filtro);
    if(filtro){
      setProyectos(data.filter(proyecto => proyecto.tipo === filtro))
    }else{
      setProyectos(data)
    }  
  }

  return (
    <section id='proyectos'>
        <h1 className="Titulo">Proyectos</h1>
        <div className="col-12 row" style={{justifyContent:'space-between'}}>
          <h3
            className={`filtroProyectos col-2 ${filtroSeleccionado === '' ? 'seleccionado' : ''}`}
            onClick={() => filtrar('')}
          >
            Mostrar todos
          </h3>
          <h3
            className={`filtroProyectos col-2 ${filtroSeleccionado === 'residencial' ? 'seleccionado' : ''}`}
            onClick={() => filtrar('residencial')}
          >
            Residenciales
          </h3>
          <h3
            className={`filtroProyectos col-2 ${filtroSeleccionado === 'comercial' ? 'seleccionado' : ''}`}
            onClick={() => filtrar('comercial')}
          >
            Comerciales
          </h3>
          <h3
            className={`filtroProyectos col-2 ${filtroSeleccionado === 'urbano' ? 'seleccionado' : ''}`}
            onClick={() => filtrar('urbano')}
          >
            Urbanos
          </h3>
        </div>
        <div className="col-12 row">
          {
            proyectos
            .map(proyecto => (
              <Link to={'/FranciscoSanchezArjona/proyecto/' + proyecto.id} className='col-4 imgCarrousel1' key={proyecto.id}>
                <div className="image-container">
                  <img src={proyecto.imagenPrincipal} alt="" className="col-12 image" />
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