import React, { useState } from 'react'

import './Proyectos.css'

import data from '../../data/data'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

import { COMERCIAL, RESIDENCIAL, URBANO } from "../../helpers";

function Proyectos() {
  const [proyectos, setProyectos] = useState(data);
  const [filtroSeleccionado, setFiltroSeleccionado] = useState('');
  const [proyectosFiltrados, setProyectosFiltrados] = useState('todos');

  const filtrar = (filtro) => {
    setFiltroSeleccionado(filtro);

    if (filtro) {
      if (filtro === COMERCIAL) {
        setProyectos(data.filter(proyecto => proyecto.tipo === filtro))
      } else if (proyectosFiltrados === 'todos') {
        setProyectos(data.filter(proyecto => proyecto.tipo === filtro))
      } else {
        setProyectos(data.filter(proyecto => proyecto.tipo === filtro && proyecto.finalizado === proyectosFiltrados))
      }
    } else {
      if (proyectosFiltrados === 'todos') {
        setProyectos(data)
      } else {
        setProyectos(data.filter(proyecto => proyecto.finalizado === proyectosFiltrados))
      }
    }
  }

  const filtrarFinalizados = (filtro) => {
    setProyectosFiltrados(filtro);
    if (filtro === 'todos' && filtroSeleccionado === '') {
      setProyectos(data)

    }
    if (filtroSeleccionado === '' && filtro === false) {
      setProyectos(data.filter(p => p.finalizado === filtro))

    }
    if (filtroSeleccionado === '' && filtro === true) {
      setProyectos(data.filter(p => p.finalizado === filtro))

    }
    if (filtroSeleccionado !== '') {
      if (filtro === true) {
        setProyectos(data.filter(p => p.tipo === filtroSeleccionado && p.finalizado === filtro))

      } else if (filtro === false) {
        setProyectos(data.filter(p => p.tipo === filtroSeleccionado && p.finalizado === filtro))

      } else {
        setProyectos(data.filter(p => p.tipo === filtroSeleccionado))

      }
    }
  }

  return (
    <section id='proyectos'>
      <h1 className="Titulo">Proyectos</h1>
      <div style={{ display: 'flex', justifyContent: 'start' }}>
        <h4
          className={`filtroProyectos ${filtroSeleccionado === '' ? 'seleccionado' : ''}`}
          onClick={() => filtrar('')}
          style={{ marginRight: 40 }}

        >
          Todos
        </h4>
        <h4
          className={`filtroProyectos ${filtroSeleccionado === RESIDENCIAL ? 'seleccionado' : ''}`}
          onClick={() => filtrar(RESIDENCIAL)}
          style={{ marginRight: 40 }}
        >
          Residenciales
        </h4>
        <h4
          className={`filtroProyectos ${filtroSeleccionado === COMERCIAL ? 'seleccionado' : ''}`}
          onClick={() => filtrar(COMERCIAL)}
          style={{ marginRight: 40 }}
        >
          Comerciales
        </h4>
        <h4
          className={`filtroProyectos ${filtroSeleccionado === URBANO ? 'seleccionado' : ''}`}
          onClick={() => filtrar(URBANO)}
        >
          Urbanos
        </h4>
      </div>
      <div className="col-12 row">
        {
          proyectos
            .map(proyecto => (
              <Link to={'/FranciscoSanchezArjona/proyecto/' + proyecto.id} className='col-4 imgCarrousel1' key={proyecto.id}>
                <div className="image-container">
                  <img src={proyecto.imagenPrincipal} alt={`${proyecto.name}`} className="col-12 image" />
                  <div className="image-overlay">
                    <p className="image-name">{proyecto.name}</p>
                  </div>
                </div>
              </Link>
            ))
        }
      </div>
      <div style={{ display: 'flex', justifyContent: 'end' }}
      >
        <h4
          className={`estados ${filtroSeleccionado === COMERCIAL ? 'filtroProyectosUrbano' : 'filtroProyectos'}
          ${proyectosFiltrados === 'todos' ? 'proyectosFiltrado' : ''}`}
          style={{ marginRight: 40 }}
          onClick={filtroSeleccionado !== COMERCIAL ? () => filtrarFinalizados('todos') : null}
        >
          Todos
        </h4>
        <h4
          className={`estados ${filtroSeleccionado === COMERCIAL ? 'filtroProyectosUrbano' : 'filtroProyectos'}
          ${!proyectosFiltrados ? 'proyectosFiltrado' : ''}`}
          style={{ marginRight: 40 }}
          onClick={filtroSeleccionado !== COMERCIAL ? () => filtrarFinalizados(false) : null}
        >
          Proyectos
        </h4>
        <h4
          className={`estados ${filtroSeleccionado === COMERCIAL ? 'filtroProyectosUrbano' : 'filtroProyectos'}
          ${proyectosFiltrados === true ? 'proyectosFiltrado' : ''}
          `}
          style={{ marginRight: 20 }}
          onClick={filtroSeleccionado !== COMERCIAL ? () => filtrarFinalizados(true) : null}
        >
          Terminados
        </h4>
      </div>
    </section>
  )
}

export default Proyectos