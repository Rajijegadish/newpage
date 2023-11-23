import Navbar from './component/Navbar';
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Home from './component/Home';
import Login from './component/Login';
import Signup from './component/Signup';

function App() {
  return (
    <Router>
    
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <Routes>
        <Route path='/Login' element={<Login />} />
      </Routes>
      <Routes>
        <Route path='/Signup' element={<Signup />} />
      </Routes>
    </Router>
      
    
  );
}

export default App;
