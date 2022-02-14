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



 
function addItem (item,id,title, price,quantity) {
   let itemsList = [...cart,
    {
      id: id,
      price: price,
      title: title,
      quantity: quantity,
              
    },
  ]

  
  if(itemsList.some(e => e.id === item.id)){
    itemsList.find(e => e.id === item.id).quantity += item.quantity
    setCart(itemsList)
    
  } else{
    setCart ([...cart, item])
  }
}




 
 



/* 
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
           
  
     

 } */

///PRUEBA

  /*   const isInCart = (itemId) => {

      const findItem = cart.findIndex(({elem}) => {
        return elem.id === cart.itemId.id;
      });

 console.log('funciono', findItem);
 }
  */






/* 
const addItem = (item,id,title, price,quantity) =>{

  const findId = cart.findIndex(
    (itemsList)=> itemsList.item.id === item.id
  );


  if (findId === -1){

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

  } else {
    console.log('encontrado');
  }

 

    setCart(itemsList);
          


}
 */


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





const context = {
    cart: cart,
    total: cart.length,
    quantity: cart.quantity,
    addTotal: addTotal,
    addItem: addItem,
    removeItem: removeItem,
    clearCart:clearCart,
   
}




return (

<cartContext.Provider value={context}>
{children}
</cartContext.Provider>



)



}

export {CartProvider}

export default cartContext;