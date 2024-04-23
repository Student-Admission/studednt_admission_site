import './App.css';
import HorizontalStepper from './HorizontalStepper';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
function App() {
  return (
    <div className="App">
     <Container maxWidth="lg">
        <HorizontalStepper/>
      </Container>
     
    </div>
  );
}

export default App;
