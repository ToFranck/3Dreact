import './App.css';
import {
  //BrowserRouter
  // as Router,
  Route,
  Routes,
} from "react-router-dom";

import Home from './pages/Home/index';
import Artists from './pages/Artists/index';
import Albums from './pages/Albums/index';
import Navbar from './components/navbar/Navbar';


function App() {
  return (
    
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/artists" element={<Artists />} />
        <Route path="/albums" element={<Albums />} />

        <Route path="*" element={<p>There's nothing here: 404!</p>} />
      </Routes>
    </div>
  );
}

export default App;


