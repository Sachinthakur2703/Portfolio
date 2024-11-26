import React from 'react';
import NavCompenent from './components/NavCompenent';
import { Routes,Route } from 'react-router-dom';
import Home from "../src/pages/Home"
import Skill from "../src/pages/Skill"
import About from "../src/pages/About"
import FooterComponent from './components/FooterComponent';
import Certificate from './pages/Certificate';

const App = () => {
  return (
    <>
      <NavCompenent/>
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/Skill' element={<Skill/>}/>
  <Route path='/About' element={<About/>}/>
  <Route path='/certificate' element={<Certificate/>}/>
</Routes>
<FooterComponent/>
</>
  )
}

export default App
