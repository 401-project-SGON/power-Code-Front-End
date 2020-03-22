import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMediumM, faGithub  } from '@fortawesome/fontawesome-free-brands'

export default () => (
  <footer>

    <a 
      href='https://github.com/401-project-SGON/power-Code-Front-End' 
      title='power - code - academy '
      className={'small-button github'}
    >
      <FontAwesomeIcon icon={faGithub} size='3x' color='#fff' />
    </a>

    <h1>Power Code Academy -*-*-*-*- Sohad</h1>
  </footer>
)