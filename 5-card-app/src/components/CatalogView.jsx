import { useEffect, useState } from "react";
import { getProducts } from "../services/ProductService";
import { ProductCardView } from "./ProductCardView";


export const CatalogView = ({handler}) => {
    const [productos, setProductos] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const findAll= async()=>{
        const prods = await getProducts()
        setProductos(prods);
        setIsLoading(false);
    }
    useEffect(
    () => {
        findAll();
    }, [])
  return (
    <>
        {
            isLoading && <div className="alert alert-info">Cargando...</div>
        }
        <div className="row">
                {productos.map(prod =>(
                    <div className="col-4 my-2" key={prod.id}>
                        <ProductCardView
                            handler={handler}  
                            id={prod.id} 
                            name={prod.name} 
                            description={prod.description} 
                            price={prod.price} 
                        />
                    </div>
                ))}
                
            </div>
    </>
  )
}
