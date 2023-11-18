import Image from 'next/image'
import { useState } from 'react'
import { PropsComponent } from '@/components/props'


// const inter = Inter({ subsets: ['latin'] })

export default function Props() {
    const [test, settest] = useState("yuvan")
    return (
        <>
            {/* {<Week/>} */}
            {/* <Calender/> */}
            {/* <GoogleCalender/> */}
            <PropsComponent state={test} setState={settest} /> <br/>
            <button  onClick={(e)=>settest("KD")}className="bg-black text-white">  This is Page Buton </button>
            <p> This page is {test}</p>
        </>
    )
}