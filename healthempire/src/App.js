
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import'bootstrap/dist/js/bootstrap.bundle.min.js'
import Login from './Component/Login.js';
import{BrowserRouter,Routes,Route}from"react-router-dom"
import Home from './Component/Home.js';
import Nav from'./Component/Nav.js';
import Footer from'./Component/Footer.js';
import Home1 from'./Component/Home1.js';



function App() {
  return (
    <BrowserRouter>
    <div>
      <Routes>
        <Route path='/login'element={<Login/>}/>
        <Route path='/home'element={<Home/>}/>
        <Route path='/footer'element={<Footer/>}/>
        <Route path='/nav'element={<Nav/>}/>
        <Route path='/home1'element={<Home1/>}/>
       
      </Routes>
      </div>
      </BrowserRouter>
  );
}

export default App;
