import './App.css';
import HorizontalStepper from './HorizontalStepper';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import {BrowserRouter , Routes , Route} from 'react-router-dom';
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
      <Route path = '/' element = {<HomePage/>} />
      <Route path = '/details' element = {<HorizontalStepper/>} />
      <Route path = '/login' element = {<Login/>} />
      <Route path = '/register' element = {<Register/>} />
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
