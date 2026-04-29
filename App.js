import Navbar from './Components/Navbar';
import Home from './Sections/Home';
import About from './Sections/About';
import Testimonal from './Sections/Testimonal';
import Project from './Sections/Project';
import Contact from './Sections/Contact';
import './App.css';
import CustomCursor from './Components/CustomCursor';
import { Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <>
      <CustomCursor />
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/About' element={<About/>} />
        <Route path='/Project' element={<Project/>}/>
        <Route path='/Contact' element={<Contact/>} />
      </Routes>
    </>
  )
}
