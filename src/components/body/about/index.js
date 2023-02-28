import React from 'react'
import SocialContact from '../../common/social-contact'
import './about.css'

function About() {
  return (
    <div className='about'>
      <div className='about-top'>
        <div className='about-info'>
          <h1 className='about-center'>Hola, soy <span className='about-name'>Luisa Morales.</span></h1>
          <h2 className='about-role'>Desarolladora Full Stack Junior.</h2>
          <p className='about-description'>Egresada de Técnico laboral en Programación de Sofware en Universidad Pontificia Bolivariana y estudiante de Tecnología en Análisis y Desarrollo de Software en Servicio Nacional de Aprendizaje (SENA).</p>
        </div>
      </div>
      <SocialContact/>
    </div>
  )
}

export default About