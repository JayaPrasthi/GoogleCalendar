import Image from "next/image"
import { Fragment, useEffect, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/24/outline'
import { Mina } from "next/font/google"
'use strict'



const TimeItems = [
    { Time: "1AM" },
    { Time: "2AM" },
    { Time: "3AM" },
    { Time: "4AM" },
    { Time: "5AM" },
    { Time: "6AM" },
    { Time: "7AM" },
    { Time: "8AM" },
    { Time: "9AM" },
    { Time: "10AM" },
    { Time: "11AM" },
    { Time: "12PM" },
    { Time: "1PM" },
    { Time: "2PM" },
    { Time: "3PM" },
    { Time: "4PM" },
    { Time: "5PM" },
    { Time: "6PM" },
    { Time: "7PM" },
    { Time: "8PM" },
    { Time: "9PM" },
    { Time: "10PM" },
    { Time: "11PM" },
    { Time: "12AM" },

]



export const GoogleCalender = () => {
    const [newDiv, setNewDiv] = useState()
    const [open, setOpen] = useState(false)
    const cancelButtonRef = useRef(null)
    const [TimeValue, setTimeValue] = useState([])
    const [Meridiem, setMeridiem] = useState("")
    const [Day, setDay] = useState("")
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const[weeks, setWeeks]  = useState([])
    const[currentWeekDay, setCurrentWeekDay] = useState([])
    const[Week, setWeek] = useState()
    const[firstDate, setFirstDate] = useState()
    const[lasteDate, setLasteDate] = useState()
    const[DayItems, setDayItems] = useState([])
    

    

    let WeekDayObject = {SUN:"1", MON:"2", TUE:"3", WED:"4", THUR :"5", FRI:"6", SAT:"7"}
    

    const handleSave = (e) => {
        fetch("http://127.0.0.1:8000/googleCalender/calender/", {     
            method: "POST",
            body: JSON.stringify({
                title_name: title,
                description: description,
                start_time: Math.min(...TimeValue),
                end_time: Math.max(...TimeValue),
         
                Week_Day: Day

            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        .then((res) => res.json())
         .then((response) => {
            console.log("Successfully posted")
         })
         .catch((err) => {
            console.log(err.message);
         })
    }

    let IndividualRowArr = []
    useEffect(()=>{
        fetch("http://127.0.0.1:8000/googleCalender/calender/")    //django  url -- app url -- views url to what area we are sending 
    .then((res) => res.json())
     .then((response) => {
         response.forEach(res=>{
           let WeekDay = Object.keys(WeekDayObject)
           let weekday_div_id = 0
           WeekDay.forEach(item=>{
            if(item === res.Week_Day){
                    weekday_div_id= WeekDayObject[item]
                    console.log("weekday_div_id",weekday_div_id)
                }
           })
           let startTimeStampElement = document.getElementById(`day-${weekday_div_id}-time-${res.start_time}`)
           let endTimeStampElement = document.getElementById(`day-${weekday_div_id}-time-${res.end_time}`)
        
           if(startTimeStampElement.id.includes(res.start_time) && endTimeStampElement.id.includes(res.end_time)){
            for(let i = res.start_time; i <= res.end_time; i++) {
                 let divCollection = document.getElementById(`day-${weekday_div_id}-time-${i}`)
                 divCollection.style.backgroundColor="green"
                
            }
                                                

           }


           

        })


     })
     .catch((err) => {
        console.log(err.message);
     })
        

    },[])

    


    useEffect(() => {


        let arr = [1, 2, 3, 4, 5, 6, 7]
        let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]

        const retrurn_data = () => {

            return (
                <>{
                    arr.map(item => (
                        <div className="border-[#DFE0E3]  border-l  w-[15%]" id={`day-${item}`}>
                            {
                                
                                arr2.map((item1, index) => (
                                    <div className=" w-[100%] h-[35px] border-b border-[#DFE0E3]" onClick={(event) => handleClick(event, item, item1)} id={`day-${item}-time-${item1}`}></div>
                                ))

                            }

                        </div>

                    ))
                }
                </>
            )


        }

        setNewDiv(retrurn_data)



    }, [])

    let arr1 = []
    let set
    let arr2
    let IdArray = []
    let splitedArr = []
    let pureNumArr = []
    const handleClick = (event, item, item1) => { 
      
        let IndividualRow = document.getElementById(`day-${item}`) 
        arr1.push(event.target)
        IndividualRow.addEventListener("mousemove", handleMouseMove)
        IndividualRow.addEventListener("mouseup", handleMouseup(item, IndividualRow))
       

    }

    const handleMouseMove = (event, item, item1) => {
        arr1.push(event.target)
        set = new Set(arr1)
        arr2 = Array.from(set)
    }

    const handleMouseup = (item) => {
       let IndividualRow = document.getElementById(`day-${item}`)
        if (arr1 !== undefined || arr1 !== null) {
            if (arr1[arr1.length - 1] !== arr1[0]) {
                var LastValueofArr1 = arr1[arr1.length - 1]
                let lastValueofArr1 = document.getElementById(LastValueofArr1.id)
                 lastValueofArr1.parentElement.removeEventListener("mousemove", handleMouseMove)
                 setOpen(true)
            }
            

            if (arr2) {

                arr2.forEach(item => {
                    item.style.backgroundColor = "green";

                    IdArray.push(item.id)
                })

                IdArray.forEach(strID => {
                    let strValues = strID.slice(-2)
                    splitedArr.push(strValues)


                })

                if (splitedArr.forEach(item => {
                    let pureNum = item.split('-').join('');
                    pureNumArr.push(pureNum)

                }))
                    





                setTimeValue(pureNumArr)

                pureNumArr.forEach(num => {
                    if (num >= 1 && num <= 11) {
                        setMeridiem("AM")
                    } else if (num >= 12 && num <= 23) {
                        setMeridiem("PM")
                    } else if (num == 24) {
                        setMeridiem("AM")
                    }
                })

            }

          

           

            if (IndividualRow) {
                if (IndividualRow.id) {
                    if (IndividualRow.id.includes("day-1")) {
                        setDay("SUN")
                    } else if (IndividualRow.id.includes("day-2")) {
                        setDay("MON")
                    } else if (IndividualRow.id.includes("day-3")) {
                        setDay("TUE")
                    } else if (IndividualRow.id.includes("day-4")) {
                        setDay("WED")
                    } else if (IndividualRow.id.includes("day-5")) {
                        setDay("THUR")
                    } else if (IndividualRow.id.includes("day-6")) {
                        setDay("FRI")
                    } else if (IndividualRow.id.includes("day-7")) {
                        setDay("SAT")
                    }
                }
            }

          
        }

        

    }
  
    
   
    
    useEffect(()=>{
        

        const currentDate =  new Date();
        let tempArr= []
        for(let i=0;i<=6;i++){
            let weekObj={}
            
            let DateoftheCurrentWeek = currentDate.getDate() - currentDate.getDay() + i // through this we are getting the date of the month for a week
            let CompeleteDateOfTheWeek =  new Date(currentDate.setDate(DateoftheCurrentWeek))
            let DayoftheCurrentWeek = CompeleteDateOfTheWeek.toString().slice(0,4)
            weekObj["Day"]=DayoftheCurrentWeek
            weekObj["Date"]=DateoftheCurrentWeek
            tempArr.push(weekObj)
        }
        
        setDayItems(tempArr)
        setFirstDate(tempArr[0])
        setLasteDate(tempArr[tempArr.length-1])


    },[])

    const handlePrevious = (event) =>{
        console.log("checking handlePrevious called ", event)
        let date = new Date
        
        let tempArr2 = []
        for(let i=1;i<=7;i++){
            let prevWeekObj={}
            let DateofthePrevWeek = firstDate.Date - i   
            let CompeleteDateOfTheWeek =  new Date(date.setDate(DateofthePrevWeek)) 
            let DayofthePrevWeek = CompeleteDateOfTheWeek.toString().slice(0,4)  
            prevWeekObj["Day"]=DayofthePrevWeek  
            prevWeekObj["Date"]=DateofthePrevWeek  
            tempArr2.push(prevWeekObj)  
        }

        setDayItems(tempArr2.reverse())
        setFirstDate(tempArr2[0])
        setLasteDate(tempArr2[tempArr2.length-1])
       
    }

    
    
    const handleNext = (event) =>{
        let date = new Date
        let tempArr3= []
        for(let i=1;i<=7;i++){
            let nextWeekObj = {}
            let DateOftheNextWeek = lasteDate.Date + i
            let CompeleteDateOfTheWeek =  new Date(date.setDate(DateOftheNextWeek))
            let DayoftheNextWeek = CompeleteDateOfTheWeek.toString().slice(0,4)
            nextWeekObj["Date"] = DateOftheNextWeek
            nextWeekObj["Day"] = DayoftheNextWeek 
            tempArr3.push(nextWeekObj)
            
            
        }
        
        setFirstDate(tempArr3[0])
        setLasteDate(tempArr3[tempArr3.length-1])
        setDayItems(tempArr3)
    }











    return (

        <div className="bg-white w-[full] h-[1000px]">
            <div className="flex flex-row w-[100%] h-[30px] gap-[10px] pt-[10px] ml-[100px]"> 
            <div onClick={(e)=>handlePrevious(e)} className="mt-[5px] "> 
            <Image
            src="/left-arrow.png"
            width={15}
            height={15}
            alt="previous"
            />
                
            </div>
            <div onClick={(e)=>handleNext(e)} className="mt-[5px]"> 
            <Image
            src="/next.png"
            width={15}
            height={15}
            alt="next"
            />
                
            </div>
            <div className="text-[#70757a] "> October </div>
            <div className="text-[#70757a] "> 2023 </div>
            
            </div>
            <div className="flex flex-rows w-[100%] container mx-auto">
                <div className=" w-[20%]  text-[#70757a] text-[10px] mt-[80px] text-right pr-[10px] pt-[17px] "> GMT+05:30 </div>
                <div className=" w-[80%]  flex flex-rows"> 
                        {
                            DayItems.map(item=>(
                                < >
                                <div className=" mt-[15px] w-[15%] text-center h-[90px]"> 
                              
                                <div className="text-[#70757a] text-[11px] font-[500]"> {item.Day} </div>
                                 <div className="text-[26px] text-[#70757a] rounded-[100%]">  {item.Date} </div>
                                 <div className=" border-l border-[#DFE0E3] height-[20px] pt-[90px] w-[100%]"></div>
                                 </div>
                                </>
                            ))
                        }
            </div>
            </div>
            <div className="flex flex-rows w-[100%] container mx-auto">
                <div className="w-[20%] text-right pt-[2px] pr-[20px]">
                    {
                        TimeItems.map(item => (
                            <div className="text-[#70757a] text-[10px] pt-[20px] ">{item.Time} </div>

                        ))
                    }
                </div>

                <div id="column" className={`w-[80%] flex flex-rows  border-t border-[#DFE0E3]`}>
                    {newDiv}
                </div>


            </div>
            <Transition.Root show={open} as={Fragment}>
                <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-0"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-0"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                    </Transition.Child>

                    <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                enterTo="opacity-100 translate-y-0 sm:scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            >
                                <Dialog.Panel className="relative transform  w-[448px] h-[500px] overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                                    <div className="absolute bg-[#f1f3f4] top-[0] left-[0] right-[0] w-[100%] h-[36px] flex flex-rows">
                                        <div className="">
                                            <Image
                                                src="/drag.png"
                                                width={30}
                                                height={30}
                                                alt="Drag Handle"
                                            />
                                        </div>
                                        <div className="ml-[450px] mt-[10px]">
                                            <Image
                                                src="/close.png"
                                                width={15}
                                                height={15}
                                                alt="Close"
                                            />
                                        </div>


                                    </div>
                                    <div className="pt-[30px] ">
                                        <label className=" ml-[50px]">
                                            <input type="text" placeholder="Add Title" onChange={(e) => setTitle(e.target.value)} className="border-b outline-0 text-[#3c4043] text-[22px]  placeholder-[22px]" />
                                        </label>
                                    </div>
                                    <div className=" mt-[50px] flex flex-rows">
                                        <div className="ml-[10px]">
                                            <Image
                                                src="/clock.png"
                                                width={15}
                                                height={15}
                                                alt="Clock"
                                            />

                                        </div>
                                        <div className="flex flex-rows gap-[15px]">
                                            <div className="ml-[20px]"> October </div>
                                            <div className=""> {Math.min(...TimeValue)}{Meridiem}-{Math.max(...TimeValue)}{Meridiem}</div>
                                            <div>{Day}</div>
                                        </div>


                                    </div>
                                    <div className="flex flex-rows mt-[15px] gap-[15px]">
                                        <div className=" ml-[10px]">
                                            <Image
                                                src="/sort.png"
                                                width={15}
                                                height={15}
                                                alt="Sort"
                                            />


                                        </div>

                                        <div>
                                            <input type="text" onChange={(e) => setDescription(e.target.value)} className="outline-none text-[#3c4043] text-[16px]  placeholder-[16px]" placeholder="Add description" />
                                        </div>

                                    </div>

                                    <div className=" mt-[240px] ml-[400px]">
                                        <button onClick={(e) => handleSave(e)} className=" w-[70px] h-[36px] border-[1px] rounded-[4px] bg-blue-500 text-[white]"> Save </button>
                                    </div>

                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>

        </div>

    )


}