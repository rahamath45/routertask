import { useNavigate } from "react-router-dom";

 function Allproductcart({products}){
    const navigate = useNavigate();
    return(
        <div className="products"  >
              {products.map((data,index)=>(
              <div className='card' key={data.id} onClick={()=>navigate(`/products/${data.id}`)}>
                <img src={data.image} alt={data.title}/>
                <h2>{data.title}</h2>
                <p>${data.price.toFixed(2)}</p>
              </div>
              ))}
        </div>

    )
 };

 export default Allproductcart;