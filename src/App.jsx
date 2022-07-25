import React from 'react'
import { Routes,Route} from 'react-router-dom';
import './app.scss'
import Home from './Home/Home'
import Register from './Register/Register';
import Login from './Login/Login';
import Splash from './splash/Splash';

const App = () => {
  
  return (<Routes>
            <Route exact path="/" element={<Splash />} />
            <Route exact path="/Home" element={<Home />} />
            <Route exact path="/Register" element={<Register />} />
            <Route exact path="/Signin" element={<Login />} />
          </Routes>)
};

export default App;