import { useNavigate } from "react-router-dom";

 function Navtopic ({cart}){
    const navigate = useNavigate();
    return(
        <nav className='nav'>
               <h1>SHOPPING APP</h1>
               <button onClick={()=>navigate("products/card")}>SHOW CART({cart.length})</button>
        </nav>
    )
 };

 export default Navtopic;