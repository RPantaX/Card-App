import { useEffect, useReducer, useState } from "react"
import { itemsReducer } from "../reducer/itemsReducer";
import { AddProductCard, DeleteProductCard, UpdateQuantityProductCard } from "../reducer/itemsActions";


const initialCardItems=JSON.parse(sessionStorage.getItem('card')) || [];

export const useItemsCart = () => {
    const [cardItems, dispatch] = useReducer(itemsReducer, initialCardItems)
    
    useEffect(() => {
        sessionStorage.setItem('card',JSON.stringify(cardItems));
      }, [cardItems])
    
    const handlerAddProductCard = (product) =>{

        const hasItem = cardItems.find((i)=> i.product.id === product.id);
        if(hasItem){
            dispatch(
                {
                    type: UpdateQuantityProductCard,
                    payload: product,
                }
            );
        } else{
            dispatch(
                {
                    type: AddProductCard,
                    payload: product,
                }
            );
        }
    }
    const handlerDeleteProduct =(id)=>{
        dispatch(
            {
                type: DeleteProductCard,
                payload: id,
            }
        );
    }
  return {
    cardItems,
    handlerAddProductCard,
    handlerDeleteProduct,
  }
}
