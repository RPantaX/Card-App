import { Navigate, Route, Routes } from "react-router-dom"
import { CatalogView } from "../components/CatalogView"
import { CardView } from "../components/CardView";

export const CartRoutes = ({cardItems, handlerAddProductCard, handlerDeleteProduct}) => {
  return (
    <>
        <Routes>
                <Route 
                    path="catalog"
                    element={<CatalogView handler={ handlerAddProductCard}/>}
                />
                <Route 
                    path="cart"
                    element={(
                        cardItems?.length<=0 ?
                        <div className="alert alert-warning">No hay productos en el carrito de compras</div>
                        :
                    (
                    <div className="my-4 w-50">
                        <CardView handlerDelete={handlerDeleteProduct} items={cardItems}/>
                    </div>
                    )
                )}/>
                <Route path="/" element={<Navigate to={"/catalog"} />} />
        </Routes>
    </>
  )
}
