import { useEffect, useState } from "react"

export const MouseTestEvent = () =>{
    const[data, setData] = useState()
    const[click, setClick] = useState()
    const[mousemove, setMouseMove] = useState()
    const[mouseup, setMouseUp] =  useState()

    const handleClick = (e) =>{
        console.log("click", e)
        setClick(e.target)
        

    }

    let MouseMoveArray = []
    const handleMouseMove = (e)=>{
        console.log("move", e)
        console.log("Click event in state varaiable", click )
        MouseMoveArray.push(e.target)
        setMouseMove(MouseMoveArray)
        

    }

    const handleMouseUp = (e)=>{
        console.log("up", e)
        console.log("mouseMove state variable inside handleMouseUp", mousemove)

    }

    useEffect(()=>{

        const mouseHandler = () =>{

            return(
                <>
                <div className="w-[100px] h-[30px] bg-[green] text-[white]" onClick={(e)=>handleClick(e)}> Click</div>
                <div  className=" mt-[20px] w-[100px] h-[400px] bg-[blue] text-[white]"onMouseMove={(e)=>handleMouseMove(e)}> Mousemove</div>
                <div  className="mt-[30px] w-[100px] h-[30px] bg-[red] text-[white]"onMouseUp={(e)=>handleMouseUp(e)}> Mouseup</div>
                </>
            )
        }


        setData(mouseHandler)
    },[click,mousemove])



    return(
        <>
        <div>{data}</div>
        
        </>
    )

}

