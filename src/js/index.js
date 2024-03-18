import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.scss'
import Menu from './Menu'
import { Button } from 'react-bootstrap';
import GenerateProjects from './GenerateProjects';
import Filters from './Filters';

const root = ReactDOM.createRoot(document.getElementById('root'));


const App = () => {
  const [path, setPath] = useState('http://localhost:3000/db');

  const updatePath = (newPath) => {
      setPath(newPath);
  };

  return (
      <>
          <Navbar />
          <Menu />
          <Filters updatePath={updatePath} />
          <GenerateProjects path={path} />
      </>
  );
};

root.render(<App />);