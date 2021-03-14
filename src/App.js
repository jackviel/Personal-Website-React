import React from 'react';
import './App.css';
import GithubImage from './img/github.png';
import LinkedInImage from './img/linkedin.png';

function App() {
  return (
    <div>
        <link rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto+Mono"></link>
        <div className="background"></div>
        <div className="content">
          <div className="text">
              <h1>Jackviel</h1>
              <h2>Sophomore Computer Science Student at UCF</h2>
          </div>
          <div className="links">
          <li><a href='https://github.com/jackviel' target="_blank" rel="noopener noreferrer"><img className="github" src={GithubImage}/></a></li>
          <li><a href='https://www.linkedin.com/in/jackviel-silvagnoli-62365a95/' target="_blank" rel="noopener noreferrer"><img className="linkedin" src={LinkedInImage}/></a></li>
          </div>
        </div>
    </div>
  );
}

export default App;