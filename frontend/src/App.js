
import './App.css'
import NavBar from './component/NavBar'
import Home from './component/Home'
import Cart from './component/Cart'
import About from './component/About'
import Menu from './component/Menu'
import ProductScreen from './component/ProductScreen'
import { BrowserRouter, Route, Routes } from 'react-router-dom'


function App() {

  return (
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/menu" element={<Menu/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/Product/:id" element={<ProductScreen/>}/>
    </Routes>
    </BrowserRouter>
  ) 
}

export default App;
