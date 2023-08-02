// import {Route,Routes,Router} from 'react-router-dom';

import About from './components/About';
import Home from './components/Home';
import Navbar from './components/Navbar';

function App() {
  return (
    // <ThemeProvider theme={theme}>
    <div className="App">
      <Navbar/>
      <Home />
      <About/>
    </div>
    // </ThemeProvider>
  );
}

export default App;
