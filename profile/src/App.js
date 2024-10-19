import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Navigation from './Navigation';
import Skills from './Skills';


const App = () => {
return (
<BrowserRouter>
<div>
<Navigation />
<Routes>
<Route exact path="/" element={<Home/>} />
<Route path="/about" element={<About/>} />
<Route path="/contact" element={<Contact/>} />
<Route path="/skills" element={<Skills/>} />
</Routes>
</div>
</BrowserRouter>
);
}
export default App;