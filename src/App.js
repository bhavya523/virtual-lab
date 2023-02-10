import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home.js';
import About from './components/About.js';
import Subject from './components/Subject.js';
import Navbar from './components/Navbar.js';
import Chemintro from './components/Subjects/Chemistry/Chemintro.js';
import AiIntro from './components/Subjects/Ai/AiIntro.js';
import AiObj from './components/Subjects/Ai/AiObj.js';
import AiTa from './components/Subjects/Ai/AiTa.js';
import AiNavbar from './components/Subjects/Ai/AiNavbar';
import ChemNavbar from './components/Subjects/Chemistry/ChemNavbar.js';
import DaaNavbar from './components/Subjects/Daa/DaaNavbar.js';
import DsNavbar from './components/Subjects/Ds/DsNavbar.js';
import PsNavbar from './components/Subjects/Ps/PsNavbar.js';
import PsIntro from './components/Subjects/Ps/PsIntro.js';
import PsObj from './components/Subjects/Ps/PsObj.js';
import PsLoe from './components/Subjects/Ps/PsLoe.js';
import PsTa from './components/Subjects/Ps/PsTa.js';
import PsCa from './components/Subjects/Ps/PsCa.js';
import PsFb from './components/Subjects/Ps/PsFb.js';
import PyNavbar from './components/Subjects/Python/PyNavbar.js';
import PyIntro from './components/Subjects/Python/PyIntro.js';
import PyObj from './components/Subjects/Python/PyObj.js';
import PyCa from './components/Subjects/Python/PyCa.js';
import PyLoe from './components/Subjects/Python/PyLoe.js';
import PyFb from './components/Subjects/Python/PyFb.js';
import PyTa from './components/Subjects/Python/PyTa.js';


function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/sub" element={<Subject />} />
      <Route path="/sub/chem/intro" element={<Chemintro />} />
      <Route path="/sub/ai/intro" element={<AiIntro />} />
      <Route path="/sub/ai/obj" element={<AiObj />} />
      <Route path="/sub/ai/ta" element={<AiTa />} />
      <Route path="/sub/ai" element={<AiNavbar />} />
      <Route path="/sub/chem" element={<ChemNavbar />} />
      <Route path="/sub/daa" element={<DaaNavbar />} />
      <Route path="/sub/ds" element={<DsNavbar />} />
      <Route path="/sub/ps" element={<PsNavbar />} />
      <Route path="/sub/ps/intro" element={<PsIntro />} />
      <Route path="/sub/ps/obj" element={<PsObj />} />
      <Route path="/sub/ps/loe" element={<PsLoe />} />
      \<Route path="/sub/ps/Ta" element={<PsTa />} />
      <Route path="/sub/ps/Ca" element={<PsCa />} />
      <Route path="/sub/ps/fb" element={<PsFb />} />
      <Route path="/sub/py" element={<PyNavbar />} />
      <Route path="/sub/py/intro" element={<PyIntro />} />
      <Route path="/sub/py/obj" element={<PyObj />} />
      <Route path="/sub/py/ca" element={<PyCa />} />
      <Route path="/sub/py/loe" element={<PyLoe />} />
      <Route path="/sub/py/fb" element={<PyFb />} />
      <Route path="/sub/py/ta" element={<PyTa />} />
    </Routes>
    </>
  );
}

export default App;
