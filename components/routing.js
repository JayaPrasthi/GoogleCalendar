import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export const Path = () =>{
    const[select, setSelect] = useState()
    const router = useRouter();

    

    // useEffect(()=>{
    //     if(select!= null){
    //         console.log("select", select)
    //         router.push(`/${select}`);
    //     }

    // },[select])

   

   
    

    return(
        <>
        <select value={select} onChange={(e)=> setSelect(e.target.value)} >
            <option value="Week"> Week </option>
            <option value ="Month"> Month </option>
        </select>
        </>
    )

}