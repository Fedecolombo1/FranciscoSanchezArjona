import React from 'react'
import './Detalle.css'
import Page from '../../components/Page/Page'
import Slider from 'react-slick';

import data from '../../data/data'

import { useParams } from 'react-router-dom/cjs/react-router-dom.min';

function Detalle() {

  const { id } = useParams();

  const proyecto = data.find(item => item.id === Number(id));

  if (!proyecto) {
    return <Page> 
              <h2 style={{margin: '10% 10%', textAlign: 'center'}}>No se encontró el proyecto</h2>
            </Page>
  }

  var settings = {
    dots: true,
    infinite: true,
    arrows: false,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <Page>   
      <div className="col-12 align row detalleContainer">
        <div className="col-5 row">
              <h3 className='col-12'>Informacion del proyecto</h3>
              <p className="thin col-12">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci, repellat! Repellat autem aut suscipit repellendus consequuntur animi deleniti tempore cupiditate placeat natus amet veniam dolore, laudantium beatae. Quaerat, dolores eos.</p>
              <h3 className='col-12'>Nombre del proyecto</h3>
              <p className="thin col-12">{proyecto.name}</p>
              <h3 className='col-12'>Ubicacion</h3>
              <p className="thin col-12">+54 1122223333</p>
              <h3 className='col-12'>Construccion</h3>
              <p className="thin col-12">example@gmail.com</p>
            </div>  
        <div className="col-7">
          <Slider {...settings} className='col-12 sliderDetalle'>
            {
              proyecto.imagenes.map(img => {
                return <img src={img} alt={img} className='imgCarrouselDetalle' />
              })
            }            
          </Slider>
        </div>
      </div>      
    </Page>
  )
}

export default Detalle