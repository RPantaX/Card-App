
export const getProducts = async() => {
  const response = await fetch('http://localhost:8080/products'); //promesa
  const products = response.json(); //promesa
  return products;
}

export const calculateTotal = (items)=>{
    return items.reduce(
        (accumulator, item)=>accumulator+item.product.price *item.quantity
        ,0);
}