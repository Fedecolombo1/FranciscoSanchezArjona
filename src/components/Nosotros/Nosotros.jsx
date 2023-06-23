import React from 'react'

import img1 from '../../images/img1.jpg';
import img2 from '../../images/img2.jpg';

function Nosotros() {
  return (
    <section id='nosotros'>
        <h1 className="Titulo">Nosotros</h1>
        <div className="col-12 row align">
          <p className="col-6 thin">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi nobis et minus, quae voluptates sapiente voluptas quia adipisci dolor dignissimos, aspernatur nulla eum. Maxime placeat ab quae velit id magnam?</p>
          <img src={img2} alt="" className='col-6' />          
        </div>
        <h2 className="subTitulo">Tecnologia</h2>
        <div className="col-12 row align">
          <img src={img1} alt="" className='col-6' />
          <p className="col-6 thin">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi nobis et minus, quae voluptates sapiente voluptas quia adipisci dolor dignissimos, aspernatur nulla eum. Maxime placeat ab quae velit id magnam?</p>
        </div>
    </section>
  )
}

export default Nosotros