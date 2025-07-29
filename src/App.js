import React from 'react';
import JobForm from './components/JobForm';
import './App.css';

function App() {
  return (
    <>
   <header className="app-header d-flex justify-content-between align-items-center p-3">
  <div className="d-flex align-items-center">
    <img
      src="/logo.png"
      alt="Logo"
      className="logo"
      style={{ width: '40px', height: '40px' }}
    />
  </div>
  <h1 className="header-title m-0 text-center flex-grow-1">
    Mini Job Application Portal
  </h1>
  <img
    src="/team.png"
    alt="Header Graphic"
    className="header-img"
    style={{ width: '60px', height: '60px' }}
  />
</header>




      <div className="container mt-4 mb-5">
        <JobForm />
      </div>
    </>
  );
}

export default App;
