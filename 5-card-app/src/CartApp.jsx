import { Navigate, Route, Routes } from "react-router-dom";
import { CardView } from "./components/CardView"
import { CatalogView } from "./components/CatalogView"
import { useItemsCart } from "./hooks/useItemsCart";
import { Navbar } from "./components/Navbar";
import { CartRoutes } from "./routes/cartRoutes";
//const initialCardItems = [
    //{
    //    product:{},
    //    quantity: 0,
    //    total: 0
    //}
//]
//const initialCardItems=JSON.parse(sessionStorage.getItem('card')) || [];
export const CartApp = () => {
/*
    const [cardItems, setCardItems] = useState(initialCardItems);

    const handlerAddProductCard = (product) =>{

        const hasItem = cardItems.find((i)=> i.product.id === product.id);
        if(hasItem){
           // setCardItems([
           //     ...cardItems.filter((i)=>i.product.id !== product.id),
           //     {
           //         product,
           //         quantity: hasItem.quantity+1,
           //     }
           // ]);
            setCardItems(
                cardItems.map((i)=>{
                    if(i.product.id === product.id){
                        i.quantity = i.quantity +1;
                    }
                    return i;
                })
            );
        } else{
            setCardItems([
                ...cardItems,
                {
                    product,
                    quantity: 1,
                    total:product.price*1
                }
            ]);
        }
    }
    const handlerDeleteProduct =(id)=>{
        setCardItems([...cardItems.filter((i)=>i.product.id !== id)])
    }
*/
    const {cardItems, handlerAddProductCard, handlerDeleteProduct}=useItemsCart();
return (
    <>
        <Navbar />
        <div className="container my-4">
            <h3>Cart App</h3>
            <CartRoutes cardItems={cardItems} handlerAddProductCard={handlerAddProductCard} handlerDeleteProduct={handlerDeleteProduct}/>
        </div>
    </>
  )
}
