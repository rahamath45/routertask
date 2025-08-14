import { useEffect, useState } from 'react';
import './App.css';
import { PRODUCT_ENDPOINT, REST_HOST_NAME } from './backend';
import { Route, Routes } from 'react-router-dom';
import Apppage from './pages/Apppage';
import ProductDetails from './pages/ProductDetails';
import Cardpage from './pages/Cardpage';



function App() {
  const [products,setProducts] = useState([]);
   const [cart,setCart]= useState([]);
  useEffect(()=>{
         fetch(`${REST_HOST_NAME}/${PRODUCT_ENDPOINT}`,{method:"GET"})
         .then((response)=>response.json())
       .then((data)=> setProducts(data))
       .catch((err)=> console.log(err));
    },[]);

  return (
    <>
      <Routes>
        <Route exact path='/' element={<Apppage products={products}  cart={cart} />}/>
         <Route path="/products/:id" 
         element={<ProductDetails cart={cart} setCart={setCart} />}/>

         <Route path="/products/card"
          element={<Cardpage cart={cart} setCart={setCart} />}/>
      </Routes>
    </>
  )
}

export default App;