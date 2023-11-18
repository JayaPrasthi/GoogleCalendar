import Image from "next/image"
import { Fragment, useEffect, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/24/outline'
import { Mina } from "next/font/google"
'use strict'

// const dayMappingList = [
//     {
//         humanFormat : "SUN",
//         machineFormat: 0


//     },
//     {
//         humanFormat : "MON",
//         machineFormat: 1


//     },
//     {
//         humanFormat : "TUE",
//         machineFormat: 2


//     },
//     {
//         humanFormat : "WED",
//         machineFormat: 3


//     },
//     {
//         humanFormat : "THUR",
//         machineFormat: 4


//     },
//     {
//         humanFormat : "FRI",
//         machineFormat: 5


//     },
//     {
//         humanFormat : "SAT",
//         machineFormat: 6


//     }
// ]

const timeMappingList = [
    {
        humanFormat: "1AM",
        machineFormat: 1
    },
    {
        humanFormat: "2AM",
        machineFormat: 2
    },
    {
        humanFormat: "3AM",
        machineFormat: 3
    },
    {
        humanFormat: "4AM",
        machineFormat: 4
    },
    {
        humanFormat: "5AM",
        machineFormat: 5
    },
    {
        humanFormat: "6AM",
        machineFormat: 6
    },
    {
        humanFormat: "7AM",
        machineFormat: 7
    },
    {
        humanFormat: "8AM",
        machineFormat: 8
    },
    {
        humanFormat: "9AM",
        machineFormat: 9
    },
    {
        humanFormat: "10AM",
        machineFormat: 10
    },
    {
        humanFormat: "11AM",
        machineFormat: 11
    },
    {
        humanFormat: "12PM",
        machineFormat: 12
    },
    {
        humanFormat: "1PM",
        machineFormat: 13
    },
    {
        humanFormat: "2PM",
        machineFormat: 14
    },
    {
        humanFormat: "3PM",
        machineFormat: 15
    },
    {
        humanFormat: "4PM",
        machineFormat: 16
    },
    {
        humanFormat: "5PM",
        machineFormat: 17
    },
    {
        humanFormat: "6PM",
        machineFormat: 18
    },
    {
        humanFormat: "7PM",
        machineFormat: 19
    },
    {
        humanFormat: "8PM",
        machineFormat: 20
    },
    {
        humanFormat: "9PM",
        machineFormat: 21
    },
    {
        humanFormat: "10PM",
        machineFormat: 22
    },
    {
        humanFormat: "11PM",
        machineFormat: 23
    },
    {
        humanFormat: "12AM",
        machineFormat: 24
    }
]




export const Calender = () => {
    const [open, setOpen] = useState(false)
    const cancelButtonRef = useRef(null)
    const [intialTime, setIntialTime] = useState()
    const [finalTime, setFinalTime] = useState()
    const [intialTimeMF, setIntialTimeMF] = useState()
    const [finalTimeMF, setFinalTimeMF] = useState()
    const [prevNoofDayCounter, setPrevNoofDayCounter] = useState()
    const [nextNoofDayCounter, setNextNoofDayCounter] = useState()
    const [day, setDay] = useState()
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [week, setWeek] = useState([])
    const [firstValueOfWeek, setFirstValueOfWeek] = useState([])
    const [lastValueOfWeek, setLastValueOfWeek] = useState([])
    const [month, setMonth] = useState()
    const [monthTitle, setMonthTitle] = useState()
    const [grid, setGrid] = useState()
    // const[monthValueforId, setMonthValueforId] = useState()
    const [dayItems, setDayItems] = useState([])
    const [initalClickArray, setInitalClickArray] = useState([])
    const [date, setDate] = useState([])
    const [mouseMoveArray, setMouseMoveArray] = useState([])
    var mouseEventArray = []
    var mouseMoveEventArray = []
    var tempArray = []
    var idArray = []
    var idOfStartingCell = []
    var ArrayfromSet = []
    var splitedArr = []
    var pureNumArr = []
    var dateArr = []
    var dayValue
    var startValueofDiv
    var endValueofDiv
    var RandomeArray=[]


    useEffect(() => {
        if (dayItems.length) {

            const returned_data = () => {


                return (
                    <>
                        {
                            dayItems.map(item => (
                                <div className="border-[#DFE0E3]  border-l  w-[15%]" id={`day-${item.machineFormat}`}>
                                    {

                                        timeMappingList.map((item1) => (
                                            <div className=" w-[100%] h-[35px] border-b border-[#DFE0E3]" onClick={(event) => handleClick(event, item.machineFormat, item1.machineFormat, item.date)} id={`day-${item.machineFormat}-time-${item1.machineFormat}-date-${item.date}`}></div>
                                        ))

                                    }

                                </div>

                            ))
                        }
                    </>
                )


            }

            setGrid(returned_data)
        }



    }, [dayItems])

  useEffect(() => {

        let date = new Date()
        let tempArray = []
        let dateofTheWeekArray = []
        let day_items_array = []

        let startingOfTheWeekValue = (date.getDate() - date.getDay())
        let startingOftheWeekDate = new Date(date.setDate(startingOfTheWeekValue))
        let endingOftheWeekDate = new Date(date.setDate(startingOfTheWeekValue + 6))

        for (let i = startingOftheWeekDate.getDate(); i <= endingOftheWeekDate.getDate(); i++) {
            let currentWeekDate = new Date(date.setDate(i))
            setMonth(currentWeekDate.getMonth())
            dateofTheWeekArray.push(currentWeekDate)
            let weekObj = {}
            // console.log(currentWeekDate.toLocaleDateString('en-us', { weekday:"long"}).slice(0,3).toUpperCase())
            let dayOftheCurrentWeek = currentWeekDate.toLocaleDateString('en-us', { weekday: "long" }).slice(0, 3).toUpperCase()
            let datesOftheCurrentWeek = currentWeekDate.toLocaleDateString()
            // console.log(dayOftheCurrentWeek, datesOftheCurrentWeek)
            weekObj["Day"] = dayOftheCurrentWeek
            weekObj["Date"] = currentWeekDate.getDate()
            tempArray.push(weekObj)
            let day_items_object = {}
            day_items_object["machineFormat"] = currentWeekDate.getDay()
            day_items_object["humanFormat"] = dayOftheCurrentWeek
            day_items_object["date"] = datesOftheCurrentWeek
            day_items_array.push(day_items_object)


        }

        console.log("day items array", day_items_array)
        setDayItems(day_items_array)


        console.log("date of the week pushed in to the array ", dateofTheWeekArray)
        console.log("contents of date items Arr", day_items_array)

        const today = new Date()
        let numeberOfDaysCompleted = today.getDay()
        let remainingDayInaWeek = 6 - today.getDay()
        console.log("remaningDayinAWeek", remainingDayInaWeek)

        let firstValueoftheDateoftheWeekArray = dateofTheWeekArray[0]
        let finalValueoftheDateoftheWeekArray = dateofTheWeekArray[dateofTheWeekArray.length - 1]
        let firstmonthinArrValueInStr = firstValueoftheDateoftheWeekArray.toLocaleDateString('en-us', { month: "long" })
        let lastmonthinArrValueInStr = finalValueoftheDateoftheWeekArray.toLocaleDateString('en-us', { month: "long" })
        let firstYearinArrValue = firstValueoftheDateoftheWeekArray.getFullYear()
        let finalYearinArrValue = finalValueoftheDateoftheWeekArray.getFullYear()

        if (firstmonthinArrValueInStr == lastmonthinArrValueInStr && firstYearinArrValue == finalYearinArrValue) {
            setMonth([firstmonthinArrValueInStr + " " + finalYearinArrValue])
        }


        setWeek(tempArray)
        setFirstValueOfWeek(startingOftheWeekDate.toString())
        setPrevNoofDayCounter(numeberOfDaysCompleted + 8)
        setNextNoofDayCounter(remainingDayInaWeek)

    }, [])




    const handlePrevious = () => {

        let currentDate = new Date()
        currentDate.setDate(currentDate.getDate() - prevNoofDayCounter)

        console.log("handlePrevious - currentDate : ", currentDate)
        setPrevNoofDayCounter(prevNoofDayCounter + 7)
        setNextNoofDayCounter(nextNoofDayCounter - 7)

        let dateofTheWeekArray = []
        let day_items_array = []


        for (let i = 1; i <= 7; i++) {
            let weekObj = {}
            let previousWeekDates = new Date(currentDate.setDate(currentDate.getDate() + 1))
            dateofTheWeekArray.push(previousWeekDates)
            let dayOfthePreviousWeek = previousWeekDates.toLocaleDateString('en-us', { weekday: "long" }).slice(0, 3).toUpperCase()
            let datesOfthePreviousWeek = previousWeekDates.toLocaleDateString()
            // console.log(dayOftheCurrentWeek, datesOftheCurrentWeek)
            weekObj["Day"] = dayOfthePreviousWeek
            weekObj["Date"] = previousWeekDates.getDate()
            tempArray.push(weekObj)
            let day_items_object = {}
            day_items_object["machineFormat"] = previousWeekDates.getDay()
            day_items_object["humanFormat"] = dayOfthePreviousWeek
            day_items_object["date"] = datesOfthePreviousWeek
            day_items_array.push(day_items_object)

          


        }


        const newDate = new Date()
        let firstValueoftheDateoftheWeekArray = dateofTheWeekArray[0]
        let finalValueoftheDateoftheWeekArray = dateofTheWeekArray[dateofTheWeekArray.length - 1]
        // console.log("month", firstValueoftheDateoftheWeekArray.toLocaleDateString('en-us', { month:"long"}))
        let firstmonthinArrValueInStr = firstValueoftheDateoftheWeekArray.toLocaleDateString('en-us', { month: "long" })
        let lastmonthinArrValueInStr = finalValueoftheDateoftheWeekArray.toLocaleDateString('en-us', { month: "long" })
        let firstYearinArrValue = firstValueoftheDateoftheWeekArray.getFullYear()
        let finalYearinArrValue = finalValueoftheDateoftheWeekArray.getFullYear()

        if (firstmonthinArrValueInStr === lastmonthinArrValueInStr && firstYearinArrValue === finalYearinArrValue) {
            setMonth([firstmonthinArrValueInStr + " " + finalYearinArrValue])
        }

        if (firstmonthinArrValueInStr !== lastmonthinArrValueInStr && firstYearinArrValue === finalYearinArrValue) {
            setMonth([firstmonthinArrValueInStr.slice(0, 3) + " - " + lastmonthinArrValueInStr.slice(0, 3) + " " + finalYearinArrValue])
        }

        if (firstmonthinArrValueInStr !== lastmonthinArrValueInStr && firstYearinArrValue !== finalYearinArrValue) {
            setMonth([firstmonthinArrValueInStr.slice(0, 3) + " " + firstYearinArrValue + " - " + lastmonthinArrValueInStr.slice(0, 3) + " " + finalYearinArrValue])
        }




        setWeek(tempArray)
        setDayItems(day_items_array)





    }


    const handleNext = () => {
        let currentDate = new Date()
        currentDate.setDate(currentDate.getDate() + nextNoofDayCounter)
        let month = setMonth(currentDate.getMonth())
        setNextNoofDayCounter(nextNoofDayCounter + 7)
        setPrevNoofDayCounter(prevNoofDayCounter - 7)
        let dateofTheWeekArray = []
        let day_items_array = []
        // console.log(nextNoofDayCounter)
        for (let i = 1; i <= 7; i++) {
            let weekObj = {}
            let day_items_object = {}
            let nextWeekDates = new Date(currentDate.setDate(currentDate.getDate() + 1))
            dateofTheWeekArray.push(nextWeekDates)
            let dayoftheNextWeek = nextWeekDates.toLocaleDateString('en-us', { weekday: "long", month: "long", day: "numeric" }).slice(0, 3).toUpperCase()
            let dateoftheNextWeek = nextWeekDates.toLocaleDateString()
            weekObj["Day"] = dayoftheNextWeek
            weekObj["Date"] = nextWeekDates.getDate()
            tempArray.push(weekObj)
            day_items_object["machineFormat"] = nextWeekDates.getDay()
            day_items_object["humanFormat"] = dayoftheNextWeek
            day_items_object["date"] = dateoftheNextWeek
            day_items_array.push(day_items_object)


        }

        let firstValueoftheDateoftheWeekArray = dateofTheWeekArray[0]
        let finalValueoftheDateoftheWeekArray = dateofTheWeekArray[dateofTheWeekArray.length - 1]
        // console.log("month", firstValueoftheDateoftheWeekArray.toLocaleDateString('en-us', { month:"long"}))
        let firstmonthinArrValueInStr = firstValueoftheDateoftheWeekArray.toLocaleDateString('en-us', { month: "long" })
        let lastmonthinArrValueInStr = finalValueoftheDateoftheWeekArray.toLocaleDateString('en-us', { month: "long" })
        let firstYearinArrValue = firstValueoftheDateoftheWeekArray.getFullYear()
        let finalYearinArrValue = finalValueoftheDateoftheWeekArray.getFullYear()

        if (firstmonthinArrValueInStr === lastmonthinArrValueInStr && firstYearinArrValue === finalYearinArrValue) {
            setMonth([firstmonthinArrValueInStr + " " + finalYearinArrValue])
        }

        if (firstmonthinArrValueInStr !== lastmonthinArrValueInStr && firstYearinArrValue === finalYearinArrValue) {
            setMonth([firstmonthinArrValueInStr.slice(0, 3) + " - " + lastmonthinArrValueInStr.slice(0, 3) + " " + finalYearinArrValue])
        }

        if (firstmonthinArrValueInStr !== lastmonthinArrValueInStr && firstYearinArrValue !== finalYearinArrValue) {
            setMonth([firstmonthinArrValueInStr.slice(0, 3) + " " + firstYearinArrValue + " - " + lastmonthinArrValueInStr.slice(0, 3) + " " + finalYearinArrValue])
        }

        setWeek(tempArray)
        setDayItems(day_items_array)

    }


    useEffect(() => {
        let previousButton = document.getElementById("previous")
        if (previousButton) {
            previousButton.addEventListener("mousedown", event => {
                setGrid([])

            })

            previousButton.addEventListener("mouseup", event => {
                return (

                    <>
                        {
                            dayItems.map(item => (
                                <div className="border-[#DFE0E3]  border-l  w-[15%]" id={`day-${item.machineFormat}`}>
                                    {

                                        timeMappingList.map((item1) => (
                                            <div className=" w-[100%] h-[35px] border-b border-[#DFE0E3]" onClick={(event) => handleClick(event, item.machineFormat, item1.machineFormat, item.date)} id={`day-${item.machineFormat}-time-${item1.machineFormat}-date-${item.date}`}></div>
                                        ))

                                    }

                                </div>

                            ))
                        }
                    </>

                )
            })
        }

    }, [dayItems])


    useEffect(() => {
        let nextButton = document.getElementById("next")
        if (nextButton) {
            nextButton.addEventListener("mousedown", event => {
                setGrid([])
            })
            nextButton.addEventListener("mouseup", event => {
                return (

                    <>
                        {
                            dayItems.map(item => (
                                <div className="border-[#DFE0E3]  border-l  w-[15%]" id={`day-${item.machineFormat}`}>
                                    {

                                        timeMappingList.map((item1) => (
                                            <div className=" w-[100%] h-[35px] border-b border-[#DFE0E3]" onClick={(event) => handleClick(event, item.machineFormat, item1.machineFormat, item.date)} id={`day-${item.machineFormat}-time-${item1.machineFormat}-date-${item.date}`}></div>
                                        ))

                                    }

                                </div>

                            ))
                        }
                    </>

                )

            })
        }
    }, [dayItems])









    const handleSave = (e) => {
        fetch("http://127.0.0.1:8000/googleCalender/calender/", {
            method: "POST",
            body: JSON.stringify({
                title_name: title,
                description: description,
                start_time: intialTimeMF,
                end_time: finalTimeMF,
                Week_Day: day,
                date: date,

            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((res) => res.json())
            .then((response) => {
                console.log("Successfully posted", response)
            })
            .catch((err) => {
                console.log(err.message);
            })
    }


    useEffect(() => {
        let dayValue
        console.log('----dayitems--- ', dayItems)
        fetch("http://127.0.0.1:8000/googleCalender/calender/")
            .then((res) => res.json())
            .then((response) => {
                console.log("API response ::", response)

                if (dayItems.length !== 0) {
                    response.forEach(res => {

                        console.log("response within for loop::", res)
                        dayItems.forEach(obj => {
                            
                            if (obj.humanFormat == res.Week_Day) {
                                dayValue = obj.machineFormat

                            }



                        })

                       
                       let startTimeStampElement = document.getElementById(`day-${dayValue}-time-${res.start_time}-date-${res.date}`)
                        let endTimeStampElement = document.getElementById(`day-${dayValue}-time-${res.end_time}-date-${res.date}`)
                        console.log(startTimeStampElement, endTimeStampElement)

    
                        if (startTimeStampElement && endTimeStampElement) {
                            for (let i = res.start_time; i <= res.end_time; i++) {
                                let divCollection = document.getElementById(`day-${dayValue}-time-${i}-date-${res.date}`)
                                divCollection.style.backgroundColor = "blue"
                                divCollection.style.border = "0px"
                              }
                            startTimeStampElement.innerHTML = res.title_name + "   " + res.start_time + - + res.end_time + "      " + res.date + " " + res.description
                            startTimeStampElement.style.fontSize = "12px"

                        }
                    })
                }




            })
            .catch((err) => {
                console.log(err.message);
            })


    }, [dayItems])




    const handleClick = (event, machineFormatForDay, machineFormatForTime, date) => {
        // console.log("clickevt", event)
        let IndividualColumn = document.getElementById(`day-${machineFormatForDay}`)
        let IndividualCell = document.getElementById(`day-${machineFormatForDay}-time-${machineFormatForTime}-date-${date}`)
        mouseEventArray.push(event.target) // need to replace the starting array 
         if (IndividualColumn) {
            IndividualColumn.addEventListener("mousemove", handleMouseMove)
            IndividualColumn.addEventListener("mouseup", handleMouseUp)

        }

       }






    const handleMouseMove = (event) => {

        console.log("mouseEventArray", mouseEventArray)
        console.log("mose move event", event)

        idOfStartingCell = mouseEventArray[0].id
        console.log("id of the Starting grid", idOfStartingCell, idOfStartingCell[4])
       if (idOfStartingCell[4] == event.target.id[4]) {
            mouseMoveEventArray.push(event.target)
        }
        let mouseEventSet = new Set(mouseMoveEventArray)
        console.log("mouseEventSet", mouseEventSet)
        ArrayfromSet = Array.from(mouseEventSet)
    }

const handleClosePopup = (e, data) => {
        console.log("evt", e)
        setOpen(false)
        if (ArrayfromSet) {

            console.log("array from set inside the handleClosePopup function ", data)
        }

    }

    useEffect(()=>{
        
        console.log("mouseMoveArray", mouseMoveArray)
        
    },[mouseMoveArray])
    
    
    
    const handleTest = (e) =>{
   
        RandomeArray= [1,22,3,4]
       setMouseMoveArray(RandomeArray)
   
   
    }

    const handleMouseUp = (event) => {

        console.log("the array to be manipulated on mouseup: ", mouseMoveArray)

       console.log("Array from the set inside the  function handlemouseup", ArrayfromSet)

       if (ArrayfromSet != undefined) {
          let lastElementOfTheArray = ArrayfromSet[ArrayfromSet.length - 1]
           console.log("last Element of the array", lastElementOfTheArray)
           let lastDiv = document.getElementById(lastElementOfTheArray.id)
           console.log("the exact last div", lastDiv)
           lastDiv.parentElement.removeEventListener("mousemove", handleMouseMove)

           ArrayfromSet.forEach(div => {
               div.style.backgroundColor = "green"


           })




           let firstElementOfmouseEventArray = ArrayfromSet[0]
           let lastElementOfmouseEventArray = ArrayfromSet[ArrayfromSet.length - 1]
           tempArray.push(firstElementOfmouseEventArray, lastElementOfmouseEventArray)

    

           tempArray.forEach(element => {
                idArray.push(element.id)
            })

           
           idArray.forEach(strID => {
               let strValues = strID.slice(10, 13)
               // console.log("strValues", strValues)
               splitedArr.push(strValues)


           })

           splitedArr.forEach(item => {
               let splitedValue = item.split('-').join("")
               pureNumArr.push(splitedValue)

            
           })
            
           if (timeMappingList !== null || timeMappingList !== undefined) {
               timeMappingList.forEach(obj => {
                   // console.log("object of time", obj)
                   if (obj.machineFormat == pureNumArr[0]) {
                       setIntialTime(obj.humanFormat)
                       setIntialTimeMF(obj.machineFormat)
                   }
                   if (obj.machineFormat == pureNumArr[pureNumArr.length - 1]) {
                       setFinalTime(obj.humanFormat)
                       setFinalTimeMF(obj.machineFormat)
                   }

               })

           }



           let dayoftheWeekNum = idArray[0][4]


           console.log(dayoftheWeekNum)
           if (dayItems !== null || dayItems !== undefined) {
               dayItems.forEach(obj => {
                   if (obj.machineFormat == dayoftheWeekNum) {
                       setDay(obj.humanFormat)
                   }
               })
           }

           idArray.forEach(id => {
               let dateValue = id.split("-")
               console.log("dateValue", dateValue)
               dateArr.push(dateValue[dateValue.length - 1])
           })
           setDate(dateArr[0])
           setOpen(true)
       }
      
   }





    return (
        <>
            <div className="bg-white w-[full] h-[1000px]">
                <div className="flex flex-row w-[100%] h-[30px] gap-[10px] pt-[10px] ml-[100px]">
                    <div id="previous" onClick={(e) => handlePrevious(e)} className="mt-[5px] ">
                        <Image
                            src="/left-arrow.png"
                            width={15}
                            height={15}
                            alt="previous"
                        />

                    </div>
                    <div id="next" onClick={(e) => handleNext(e)} className="mt-[5px]">
                        <Image
                            src="/next.png"
                            width={15}
                            height={15}
                            alt="next"
                        />

                    </div>
                    <div className="text-[#70757a] "> {month} </div>
                    <div className="text-[#70757a] ">  </div>

                </div>
                <div className="flex flex-rows w-[100%] container mx-auto">
                    <div className=" w-[20%]  text-[#70757a] text-[10px] mt-[80px] text-right pr-[10px] pt-[17px] "> GMT+05:30 </div>
                    <div className=" w-[80%]  flex flex-rows">
                        {
                            week.map(item => (
                                <div className=" mt-[15px] w-[15%] text-center h-[90px]">
                                    <div className="text-[#70757a] text-[11px] font-[500]"> {item.Day}  </div>
                                    <div className="text-[26px] text-[#70757a] rounded-[100%]"> {item.Date} </div>
                                    <div className=" border-l border-[#DFE0E3] height-[20px] pt-[90px] w-[100%]"></div>
                                </div>

                            ))
                        }
                    </div>
                </div>
                <div className="flex flex-rows w-[100%] container mx-auto">
                    <div className="w-[20%] text-right pt-[2px] pr-[20px]">
                        {
                            timeMappingList.map(item => (
                                <div className="text-[#70757a] text-[10px] pt-[20px] ">{item.humanFormat} </div>

                            ))

                        }
                    </div>

                    <div id="column" className={`w-[80%] flex flex-rows  border-t border-[#DFE0E3]`}>
                        {grid}
                    </div>


                </div>

                    <div className="w-[70px] h-[35px] bg-black">
                        <button className="text-white" onClick={(e)=>handleTest(e)}> Test</button>
                    </div>

            </div>
            <Transition.Root show={open} as={Fragment}>
                <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={(e) => { handleClosePopup(e, mouseMoveArray) }}>
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
                                            onClick={(e) => { handleClose(e) }}
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
                                        <div className=""> {intialTime}-{finalTime}</div>
                                        <div>{day}</div>
                                        <div> {date}</div>
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
        </Transition.Root >
    </>

)

}