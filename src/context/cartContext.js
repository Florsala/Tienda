import { createContext,  useEffect,  useState } from "react";


const cartContext = createContext();


const CartProvider = ({children}) =>{

    const [cart, setCart] = useState([])

useEffect(() => {
    console.log('products', cart);
    
}, [cart])


useEffect(() =>{
if (localStorage.getItem("Cart") !== null ){
    setCart(JSON.parse(localStorage.getItem("Cart")));
}}, []);


useEffect(() => {
  localStorage.setItem("Cart", JSON.stringify(cart));
}, [cart]);


let itemsList = [];


const addItem = (id,title, price,quantity) =>{

   
 itemsList = [
        ...cart,
        {
          id: id,
          price: price,
          title: title,
          quantity: quantity,
          
        
        },
    ];  

    setCart(itemsList);
          
   

}




const addTotal = () => {
let parTotal = 0;

cart.forEach((item) => (parTotal += item.price * item.quantity))

return  parTotal;
}




const removeItem = (items) => {

    const newList = cart.filter(
      i => i.id !== items.id
    )
setCart(newList);
addTotal();
}

const clearCart = () => {
setCart([]);

}


const isInCart = (itemId) => {
    return cart.some ( i => i === itemId)

}


const context = {
    cart: cart,
    total: cart.length,
    quantity: cart.quantity,
    addTotal: addTotal,
    addItem: addItem,
    removeItem: removeItem,
    clearCart:clearCart,
    isInCart: isInCart,
}




return (

<cartContext.Provider value={context}>
{children}
</cartContext.Provider>



)



}

export {CartProvider}

export default cartContext;