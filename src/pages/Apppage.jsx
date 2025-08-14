import ProductApp from "../components/productApp";

function Apppage({products,cart}){
    return(
        <ProductApp products={products}  cart={cart}/>
    )
}

export default Apppage;