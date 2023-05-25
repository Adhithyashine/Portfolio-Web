import React from 'react'
import { Instagram, LinkedIn } from '@material-ui/icons';
import { Email } from '@material-ui/icons';
import '../styles/Home.css';

function Home() {
  return (
    <div className='home'>
      <div className='about'>
        <h2> Hi, My Name is Adhithya Shine</h2>
        <div className='prompt'><p>A software developer with a  passion for developing and Learning new tech. </p>
          <LinkedIn />
          <Email />
          <Instagram />

        </div>
      </div>
      <div className='skills'>
        <h1>skills</h1>
        <ol className='list'>
          <li className='item'>    
            <h2> Front-End</h2>
            <span>HTML,  CSS, JavaScript, ReactJS</span>
          </li>
          <li className='item'>
            <h2> Back-End</h2>
            <span>NodeJS, ExpressJS, MongoDB, DigitalOcean</span>
          </li>
          <li className='item'>
            <h2> Languages</h2>
            <span>JavaScript, Java, TypeScript</span>
          </li>
        </ol>
      </div>

    </div>
  )
}

export default Home