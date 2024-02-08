import { AddProductCard, DeleteProductCard, UpdateQuantityProductCard } from "./itemsActions";

export const itemsReducer = (state=[],action) => {
  switch (action.type) {
    case AddProductCard:
        return [
            ...state,
            {
                product: action.payload,
                quantity: 1,
            }
        ];
    case UpdateQuantityProductCard:
        return state.map((i)=>{
            if(i.product.id === action.payload.id){
                return{
                    ...i,
                    quantity: i.quantity +1,
                };//creamos un nuevo objeto, no modificamos el existente
            }
            return i;
        });
    case DeleteProductCard:
        return state.filter((i)=>i.product.id !== action.payload); //el filter de por si solo ya devuelve una nueva instancia
          
    default:
        return state;
  }
}
