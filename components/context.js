import { createContext, useState } from "react";

export const Array_data = createContext(null)

 export function Context({children}){
    const[mouseMoveArray, setMouseMoveArray] = useState();

    return (
        <Array_data.Provider value={{mouseMoveArray, setMouseMoveArray}}>
            {children}
        </Array_data.Provider>
    )

    
}

