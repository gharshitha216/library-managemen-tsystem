
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import LandingPage from './components/landingpage';
import AdminLogin from './components/adminLogin';
import UserLogin from './components/userLogin';
import AdminPortal from './components/adimnPortal';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<LandingPage/>} />
      <Route path='/admin-login' element={<AdminLogin/>} />
      <Route path='/User-login' element={<UserLogin/>}/>
      <Route path='/admin/*' element={<AdminPortal/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
