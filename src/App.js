import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
// import './App.css';
import Main from './Components/Main/main';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div>
          <Main></Main>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
