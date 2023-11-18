import {Week} from "../components/test";
import { MouseTestEvent } from "@/components/mouseEvents";
import { MainComponent } from "@/components/main";
import { useState } from "react";

export default function Home() {
  const[transit, setTransit] = useState([])
    return (
     <>
     {/* {<Week/>} */}
     {/* <Calender/> */}
     {/* <GoogleCalender/> */}
     <Week/>
     {/* <MouseTestEvent/> */}
     </>
    )
  }