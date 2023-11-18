import { useState } from "react"

export const PropsComponent = ({state, setState}) =>{
    // const[demo, setDemo] = useState()
    return(
        <>
        State var = {state}
        <button onClick={(e)=>setState("Prasthi")} className="bg-black text-white">  This is Component Buton </button>
        </>
    )
}