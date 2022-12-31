import React from 'react';
import Home from "./pages/Home";
import './scss/app.scss'
import Header from "./components/Header";


function App() {
  return (
      <div className="wrapper">
          <Header/>
          <Home/>
      </div>
  );
}

export default App;
