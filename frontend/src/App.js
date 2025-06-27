import React from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Checkout from './Checkout';
import Login from './Login';

function App() {
  return (
    //BEM Naming convention for className.
    <Router>
      <div className="app">
      {/* <Header/> */}
      {/* Since we want to render header in all the pages do instead of writing it individually in all Route we can write it outside of rutes this means that it will be rendered in all the pages.. You can see it because I have commented out the header in both of the route but still it it working in both the pages */}
      {/* BUt now I want to not include header so I commented that out. */}
        <Routes>
          <Route path='/checkout' element={
            <>
              <Header/>
              <Checkout/>
            </>
          }/>
          <Route path="/login" element={
            <>
              <Login/>
            </>
          }/>
          
          <Route path="/" element={
            <>
              <Header />
              <Home/>
            </>
          }/>
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
