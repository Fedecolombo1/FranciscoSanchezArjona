import React from 'react'

import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

function Contacto() {
  return (
    <section id='contacto'>
        <h1 className="Titulo">Contacto</h1>
        <div className="col-12 row align" style={{justifyContent: 'space-between', paddingBottom: '90px'}}>
          <div className="col-6 row">
            <h3 className='col-12'>Informacion del contacto</h3>
            <p className="thin col-12">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci, repellat! Repellat autem aut suscipit repellendus consequuntur animi deleniti tempore cupiditate placeat natus amet veniam dolore, laudantium beatae. Quaerat, dolores eos.</p>
            <h3 className='col-12'>Direccion</h3>
            <p className="thin col-12">Av. Entre Ríos, C1080 CABA</p>
            <h3 className='col-12'>Telefono</h3>
            <p className="thin col-12">+54 1122223333</p>
            <h3 className='col-12'>Mail</h3>
            <p className="thin col-12">example@gmail.com</p>
            <div className="col-12 align">
              <a href="https://www.instagram.com" target="_blank" className='col-3 align'>
                <FontAwesomeIcon icon={faInstagram} className='iconos'/>
              </a> 
              <a href="https://www.twitter.com" target="_blank" className='col-3 align'>
                <FontAwesomeIcon icon={faTwitter} className='iconos'/>
              </a>                            
            </div>
          </div>  
          <div className="col-6">
            <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={[51.505, -0.09]}>
                <Popup>
                  Ubicacion del estudio <br /> Escala - 2023
                </Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>        
    </section>
  )
}

export default Contacto