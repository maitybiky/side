import './App.css';
import { useSelector } from 'react-redux/es/exports';
import { useEffect } from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Nav from './Component/Nav';

import Home from './Page/Home';
import Cart from './Page/Cart';
import Indie from './Page/Indie';
import Footer from './Component/Footer';
import Invoice from './Component/Invoice';
import Login from './Component/Login';
import Signup from './Component/Signup';


// import Indie from './Pages/Indie';
function App() {
  const cartu = useSelector(state=>state.cart)
  useEffect(() => {
    if (cartu.length!==0) {
      document.title= `Redux Store(${cartu.length})`
    }else{
      document.title= `Redux Store`
    }
  }, [cartu])
  
  return (
    <div className='container-fluid'>
     <Router>
    
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/invoice' element={<Invoice/>}/>
        <Route path='/products/:id' element={<Indie/>}/>
       <Route path='/log-in' element={<Login/>}/>
       <Route path='/sign-up' element={<Signup/>}/>
      </Routes>
      <Footer/>
     </Router>
    </div>
  );
}

export default App;
