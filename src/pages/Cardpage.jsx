import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Cardpage({cart,setCart}){

     const [isModalOpen, setIsModalOpen] = useState(true);
     const navigate = useNavigate();

   const removeFromCart = (id) =>{
       setCart(cart.filter(item => item.id !== id));
    };
    
    const clearCart = () => {
       setCart([]);
    };

    const increaseqty = (id) =>{
        setCart((prevCart)=>prevCart.map((item)=>item.id=== id?{...item,qty:item.qty+1}:item))
    }

     const decreaseqty = (id) =>{
        setCart((prevCart)=>prevCart.map((item)=>item.id === id && item.qty>1 ?{...item,qty:item.qty-1}:item))
    }
   const total = cart.reduce((sum,item)=> sum + item.price * item.qty,0);
   
   const discount = total*0.1;
   const finalprice = total-discount;
    return(
        < div className="cartpage">
          {isModalOpen && (
           <div className='modal'>
            <h2>Your Cart</h2>
            {cart.length === 0 && <p>Cart is empty</p>}
            {cart.map(item => (
               <div className='cart-item' key={item.id}>
                  <img src={item.image} alt={item.title}/>
                  <div>
                    <h3>{item.title}</h3>
                    <p>Price: ${item.price.toFixed(2)} * {item.qty}</p>
                    <p>Total:${(item.price*item.qty).toFixed(2)}</p>
                      </div>
                    <button onClick={()=>decreaseqty(item.id)} >-</button><span>{item.qty}</span><button onClick={()=>increaseqty(item.id)}>+</button>
                    <button onClick={()=>removeFromCart(item.id)}>Remove</button>            
               </div>
            ))}
            {cart.length>0 && (
                <div className="cart-summary">
                    <h3>Subtotal:${total.toFixed(2)}</h3>
                    <h4>Discount(10%): -${discount.toFixed(2)}</h4>
                     <h3>Final Price:${finalprice.toFixed(2)}</h3>
                </div>
            )}
            <div className='cart-footer'>
               <p>Total: ${total.toFixed(2)}</p>
              <button onClick={clearCart}>Clear</button>
               <button onClick={()=>alert('Checkout not implemented')}>Checkout</button>
               <button onClick={()=> setIsModalOpen(false)} onClickCapture={()=>navigate(`/`)}>Close</button>
            </div>
           </div>
            )}
        </div>
    )
}

export default Cardpage;