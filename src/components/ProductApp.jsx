 import Allproductcart from "./Allproductcart";
import Navtopic from "./Navtopic";

 function ProductApp({products,cart}){
    return(
        <div className='app'>
           <Navtopic  cart={cart}/>
           <Allproductcart products={products} />
           </div>
   

      
    )
 }
 export default ProductApp;