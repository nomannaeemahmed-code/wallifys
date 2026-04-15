import NoteContext from "./NoteContext";
import React, { useState } from "react";

const stateContext = (props) => {
    const [cartCount , setCartCount] = useState(0);
    const updateCartCount = () => {
        setCartCount(pres=>pres+1);
    }
    return(
        <NoteContext.Provider value={{cartCount , updateCartCount}}>
            {props.children}
        </NoteContext.Provider>
    )
} 
export default stateContext;