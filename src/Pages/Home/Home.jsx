import React from 'react';
import Page from '../../components/Page/Page';
import "bootstrap/dist/css/bootstrap.min.css";
import './Home.css'

import Carrousel from '../../components/CarrouselHome/CarrouselHome';
import Proyectos from '../../components/Proyectos/Proyectos';
import Nosotros from '../../components/Nosotros/Nosotros';
import Contacto from '../../components/Contacto/Contacto';

function Home() {

  return (
    <Page>

      <Carrousel />
      
      <Proyectos />
      
      <Nosotros />
      
      <Contacto />
      
    </Page>
  )
}

export default Home;
