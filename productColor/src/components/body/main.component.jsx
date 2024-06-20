
import HeaderComponent from "../header/header.component";
import initialProducts from "../productList";


const MainComponent=()=>{
    return (
        <div className="main">
        
           {initialProducts.map(product=>(<HeaderComponent key={product.productID} item={product}/>))
           }

        </div>
    )
}
export default MainComponent;