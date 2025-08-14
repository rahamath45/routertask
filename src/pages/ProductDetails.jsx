import { useEffect, useState } from "react";
import { PRODUCT_ENDPOINT, REST_HOST_NAME } from "../backend";
import { useNavigate, useParams } from "react-router-dom";

 const  ProductDetails = ({cart,setCart})=>{
   const {id} = useParams();
  const [data,setData] = useState({})
  const navigate = useNavigate();
 useEffect(()=>{
      fetch(`${REST_HOST_NAME}/${PRODUCT_ENDPOINT}/${id}`,{method:"GET"})
       .then((response)=>response.json())
       .then((data)=> setData(data))
       .catch((err)=> console.log(err));
 },[id]);

 const addToCart = (data)=> {
       if (cart.find(item => item.id === data.id)){
        alert('Item already added to the cart');
                 return;
       }
       setCart([...cart,{...data,qty:1}])
    };
    return(
        <div className="insidepage">
         <div className='innercard' key={data.id}>
             <div> <img src={data.image} alt={data.title}/></div>
             <div className="right">  
                 <h2>{data.title}</h2>
                <p>${data.price}</p>
                <button onClick={()=> addToCart(data)}>ADD TO CARD</button>
                <button className="class"  onClick={()=>navigate(`/`)}>CLOSE</button>
            </div>
              </div>
        </div>
    )
 }

 export default ProductDetails;