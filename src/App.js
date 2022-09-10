import './App.scss';
import '../src/fonts/Montserrat-Bold.ttf'
import '../src/fonts/Montserrat-Light.ttf'
import '../src/fonts/Montserrat-Medium.ttf'
import '../src/fonts/Montserrat-Regular.ttf'
import '../src/fonts/Montserrat-SemiBold.ttf'

import { Product } from './pages/Product/Product';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { useState } from 'react';

import Drawer from 'react-modern-drawer'
import { AppDrawer } from './components/Drawer/Drawer';


function App() {

  let [cart, setCart] = useState([])

  const [isOpen, setIsOpen] = useState(false)

  const addToCart = (product)=>{

    setCart(prevState=>([...prevState,product]))

  }


  const removeFromCart = (index)=>{
    setCart([
      ...cart.slice(0, index),
      ...cart.slice(index + 1)
    ]);

  }

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState)
}


  return (
    <div className="App">
            <AppDrawer isOpen={isOpen} toggleDrawer={toggleDrawer} cart={cart} removeFromCart={removeFromCart}/>
      <Header cart={cart} toggleDrawer={toggleDrawer}/>
      <Product addToCart={addToCart}/>
      <Footer/>
    </div>
  );
}

export default App;
