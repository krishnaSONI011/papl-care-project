import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Dashboard from './components/Dashboard';
import Point_1 from './components/Point_1';
function App() {
  return (
    <>
    <Router>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Dashboard/>}/>
      <Route path='/point-1' element={<Point_1/>}/>
    </Routes>
    </Router>
    </>
  );
}

export default App;
