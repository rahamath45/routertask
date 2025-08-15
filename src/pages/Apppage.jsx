import ProductApp from "../components/ProductApp";



function Apppage({products,cart}){
    return(
       <ProductApp products={products}  cart={cart}/>
    )
}

export default Apppage;