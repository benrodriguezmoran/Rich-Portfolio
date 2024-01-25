import React, {useState} from 'react';
import '../App.css';
import Nav from '../components/Nav';


export default function Home() {

  return (
    <div className='highlight-box-container'>
      <div className="highlight-box">
        <h1>Home Page</h1>
        <p className='highlight-box-content'>
          'INSERT BASIC INFO HERE'
        </p>
      </div>
      <div className="highlight-box">
        <h2>About</h2>
        <p className='highlight-box-content'>
          'INSERT BASIC INFO HERE'
        </p>
      </div>
      <div className="highlight-box">
        <h2>Contact</h2>
        <p className='highlight-box-content'>
          'INSERT BASIC INFO HERE'
        </p>
      </div>
      <div className="highlight-box">
        <h2>Employment</h2>
        <p className='highlight-box-content'>
          'INSERT BASIC INFO HERE'
        </p>
      </div>
      <div className="highlight-box">
        <h2>Projects</h2>
        <p className='highlight-box-content'>
          'INSERT BASIC INFO HERE'
        </p>
      </div>
      )
    </div>
  );
}
