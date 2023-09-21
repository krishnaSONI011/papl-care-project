import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Dashboard from './components/Dashboard';
import Point1 from './components/Point_1';
import Map from './components/Map';
function App() {
  return (
    <>
    <Router>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Dashboard/>}/>
      <Route path='/point-1' element={<Point1/>}/>
      <Route path='/map/:param1/:param2/:param3' element={<Map/>}/>
    </Routes>
    </Router>
    </>
  );
}

export default App;
