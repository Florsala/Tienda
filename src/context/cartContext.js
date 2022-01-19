import { createContext,  useEffect,  useState } from "react";


const cartContext = createContext();


const CartProvider = ({children}) =>{

    const [cart, setCart] = useState([])

useEffect(() => {
    console.log('products', cart);
    
}, [cart])


const addItem = (id,title, price,quantity) =>{
    setCart([
        ...cart,
        {
          id: id,
          price: price,
          title: title,
          quantity: quantity
        }
      ]);

}


const removeItem = (items) => {

    const newList = cart.filter(
      i => i.id !== items.id
    )
setCart(newList);
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