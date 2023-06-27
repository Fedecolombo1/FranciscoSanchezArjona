import React from 'react'

import { MapContainer, Marker, TileLayer } from 'react-leaflet';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Contacto() {
  return (
    <section id='contacto'>
        <h1 className="Titulo">Contacto</h1>
        <div className="col-12 row align" style={{justifyContent: 'space-between', paddingBottom: '90px'}}>
          <div className="col-6 row">
            <h3 className='col-12'>Direccion</h3>
            <p className="thin col-12">Av. del Puerto 615, Bahia Grande Nordelta, Provincia de Buenos Aires</p>
            <h3 className='col-12'>Telefono</h3>
            <p className="thin col-12">+54 9 11 4927-6688</p>
            <h3 className='col-12'>Mail</h3>
            <a href='mailto:estudio@franciscosanchezarjona.com'>
              <p className="thin col-12">estudio@franciscosanchezarjona.com</p>
            </a>
            <div className="col-12">
              <a href="https://www.instagram.com/fsa.arquitectura/"  rel="noreferrer" target="_blank">
                <FontAwesomeIcon icon={faInstagram} className='iconos'/>
              </a> 
              <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" style={{marginLeft: 20}}>
                <FontAwesomeIcon icon={faLinkedin} className='iconos'/>
              </a>                            
            </div>
          </div>  
          <div className="col-6">
          <MapContainer center={[-34.39408789518988, -58.64463852818493]} zoom={15} scrollWheelZoom={false}>
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={[-34.39408789518988, -58.64463852818493]}/>
            </MapContainer>
          </div>
        </div>        
    </section>
  )
}

export default Contacto