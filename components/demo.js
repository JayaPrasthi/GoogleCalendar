import Image from "next/image"
import { Fragment, useEffect, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/24/outline'
import { Mina } from "next/font/google"
'use strict'

export const Demo = () =>{

const[demo, setDemo] =  useState([])

const getResponse = [
    {
        "id": 61,
        "title_name": "Monday",
        "description": "Weekday",
        "start_time": 9,
        "end_time": 10,
        "Week_Day": "MON",
        "date": "2023-11-06"
    },
    {
        "id": 62,
        "title_name": "Its Diwali!! 🤩🤩🤩",
        "description": "Have fun!",
        "start_time": 10,
        "end_time": 11,
        "Week_Day": "SUN",
        "date": "2023-11-12"
    },
    {
        "id": 63,
        "title_name": "November 25th",
        "description": "December is coming soon!",
        "start_time": 10,
        "end_time": 11,
        "Week_Day": "SAT",
        "date": "2023-11-25"
    },
    {
        "id": 64,
        "title_name": "Halloween!🎃🎃🎃",
        "description": "👻👻👻👻",
        "start_time": 11,
        "end_time": 12,
        "Week_Day": "TUE",
        "date": "2023-10-31"
    }
]

const postResponse = 
    {
        "id": 66,
        "title_name": "new",
        "description": "bjj",
        "start_time": 9,
        "end_time": 10,
        "Week_Day": "MON",
        "date": "2023-09-10"
    }


useEffect(()=>{
    setDemo(getResponse)

},[])

useEffect(()=>{
   

        console.log("demo value", demo)
    
},[demo])

const handleClick = (e) =>{
    console.log("demo inside the function", demo)
    // setDemo([...demo, postResponse])

}





    return (
        <>
            <div className="bg-white w-[full] h-[1000px]">
               <div> 
                <button onClick = {(e)=>handleClick(e)}className="w-[100px] h-[40px]  bg-black text-white">  Click me</button>
               </div>

                

            </div>

        </>
    )

    }