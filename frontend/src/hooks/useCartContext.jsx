import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export const useCartContext = () => {

  const context = useContext(CartContext);

  if (!context) {
    throw Error('useCartContext must be used inside an CartContextProvider');
  }

  return context;
}

// const{user,dispatch}=useAuthContext();s