import { createContext,  useState } from "react";


const cartContext = createContext();


const CartProvider = ({children}) =>{

    const [cart, setCart] = useState([])




const addItem = (id,title, price) =>{
    setCart ((prevCart) =>{
        return prevCart.concat(title, price)

    })

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