import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AllocatedBranch from './component/Allotted_branch';
import HorizontalStepper from './HorizontalStepper';
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import Fotter from './pages/Navbar/Fotter.jsx';
import Navbar from './pages/Navbar/Navbar.jsx';
import Register from './pages/Register';


import About from './pages/About/About';
import Blog from './pages/Blog/Blog';
import Contact from './pages/Contact/Contact';
import Courses from './pages/Courses/Courses';
import Home from './pages/Home/Home';


function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/details" element={<HorizontalStepper />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/allocated_branch" element={<AllocatedBranch />} />
                    <Route path='/' element={<Home />} />
                    <Route path='/courses' element={<Courses />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/blog' element={<Blog />} />
                    <Route path='/contact' element={<Contact />} />
                  
                </Routes>
                <Fotter />
            </BrowserRouter>
        </div>
    );
}

export default App;
