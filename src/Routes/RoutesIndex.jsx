import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import AboutMe from '../pages/AboutMe';
import Experience from '../pages/Experience';
import Skills from '../pages/Skills';
import Giphy from '../pages/Giphy';



const RoutesIndex = () => {
    return (
        <Routes>
            <Route path='/Home' element={<Home/>} />
            <Route path='/AboutMe' element={<AboutMe />} />
            <Route path='/Experience' element={<Experience />} />
            <Route path='/Skills' element={<Skills />} />
            <Route path='/Giphy' element={<Giphy />} /> 
        </Routes>
    )
}

export default RoutesIndex;