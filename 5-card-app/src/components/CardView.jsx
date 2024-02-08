import { useEffect, useState } from "react";
import { calculateTotal } from "../services/ProductService";
import { useNavigate } from "react-router-dom";

export const CardView = ({handlerDelete, items}) => {

    const [total, setTotal] = useState(0);
    const navigate= useNavigate();
    useEffect(() => {
      setTotal(calculateTotal(items));
    }, [items])
    
    const onDeleteProduct = (id)=>{
        handlerDelete(id);
    }
    const onCatalog=()=>{
        navigate("/catalog")
    }
  return (
    <>
    <h3>Carro de compras</h3>
                <table className="table table-hover table-striped">
                    <thead>
                        <tr>
                            <th>Producto</th>
                            <th>Precio</th>
                            <th>Cantidad</th>
                            <th>Total</th>
                            <th>Eliminar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map(i=>(
                            <tr key={i.product.id}>
                            <td>{i.product.name}</td>
                            <td>{i.product.price}</td>
                            <td>{i.quantity}</td>
                            <td>{i.quantity * i.product.price}</td>
                            <td><button 
                                    className="btn btn-danger"
                                    onClick={()=>onDeleteProduct(i.product.id)}>eliminar</button></td>
                        </tr>
                        ))}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan="3" className="text-end fw-bold">Total</td>
                            <td colSpan="2" className="text-start fw-bold">{total}</td>
                        </tr>

                    </tfoot>
                </table>
                <button
                    className="btn btn-success"
                    onClick={onCatalog}
                >
                Seguir comprando
                </button>
    </>
  )
}
