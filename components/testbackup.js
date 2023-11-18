import { Fragment, useState, useEffect, useRef, useContext } from "react"
import Image from "next/image"
import { useRouter } from "next/router"
//  import { Fragment, useEffect, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/24/outline'
import { Mina } from "next/font/google"
// import {Array_data} from  '@/components/Calender'
import { Array_data } from "./context"



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

let mouseDownArr = []
let arr = []
let splicedArr = []
let joinedArr = []
let numericArray = []
let mouseDownArrDay
let mouseDownArrDate
var postResponseArray = []
var dateArr = []



export const Test = () => {

    const [sample, setSample] = useState("")
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
    const[monthTitle, setMonthTitle] = useState([])
    const [firstValueOfWeek, setFirstValueOfWeek] = useState([])
    const [lastValueOfWeek, setLastValueOfWeek] = useState([])
    const [month, setMonth] = useState()
    const [grid, setGrid] = useState()
    const [dayItems, setDayItems] = useState([])
    const [date, setDate] = useState([])
    const [demo, setDemo] = useState("")
    const [click, setClick] = useState([])
    const [postResponse, setPostResponse] = useState([])
    var tempArray = []
    

    const handleMouseUpText = (e) => {
        console.log("checking if the state is updated on handleMouseUp", sample)
    }

    useEffect(() => {
        let date = new Date()
        let tempArray = []
        let dateofTheWeekArray = []
        let day_items_array = []

        let startingOfTheWeekValue = (date.getDate() - date.getDay())
        let startingOftheWeekDate = new Date(date.setDate(startingOfTheWeekValue - 1))
        let endingOftheWeekDate = new Date(date.setDate(startingOfTheWeekValue + 6))
        console.log("ending of the week", endingOftheWeekDate)
        console.log(startingOftheWeekDate.getDate())
        console.log(endingOftheWeekDate.getDate())

        for (let i = 0; i <= 6; i++) {
            let currentWeekDate = new Date(startingOftheWeekDate.setDate(startingOftheWeekDate.getDate() + 1))
            console.log("current Week", currentWeekDate)
            setMonth(currentWeekDate.getMonth())
            dateofTheWeekArray.push(currentWeekDate)
            let weekObj = {}
            let dayOftheCurrentWeek = currentWeekDate.toLocaleDateString('en-us', { weekday: "long" }).slice(0, 3).toUpperCase()
            let datesOftheCurrentWeek = currentWeekDate.toLocaleDateString()
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
        if (firstmonthinArrValueInStr !== lastmonthinArrValueInStr && firstYearinArrValue === finalYearinArrValue) {
            setMonth([firstmonthinArrValueInStr.slice(0, 3) + " - " + lastmonthinArrValueInStr.slice(0, 3) + " " + finalYearinArrValue])
        }

        if (firstmonthinArrValueInStr !== lastmonthinArrValueInStr && firstYearinArrValue !== finalYearinArrValue) {
            setMonth([firstmonthinArrValueInStr.slice(0, 3) + " " + firstYearinArrValue + " - " + lastmonthinArrValueInStr.slice(0, 3) + " " + finalYearinArrValue])
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
        if (dayItems.length) {

            const returned_data = () => {


                return (
                    <>
                        {
                            dayItems.map(item => (
                                <div className="border-[#DFE0E3]  border-l  w-[15%]" id={`day-${item.machineFormat}`}>
                                    {

                                        timeMappingList.map((item1) => (
                                            <div className=" w-[100%] h-[35px] border-b border-[#DFE0E3]" onMouseDown={(event) => handleMouseDown(event, item.machineFormat, item1.machineFormat, item.date)} id={`day-${item.machineFormat}-time-${item1.machineFormat}-date-${item.date}`}></div>
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



    }, [dayItems, click])

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
        let res;
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
                // res = response
                // postResponseArray.push(response)
                setPostResponse(response)

            })
            .catch((err) => {
                console.log(err.message);
            })

        // handleGet(res)
        setOpen(false)


    }


    useEffect(() => {

        if(postResponse){
            console.log("the data from backend",postResponse)
             handleGet(postResponse, dayItems)
        }



    }, [postResponse, dayItems])

    let dayValue
    const handleGet = (postResponse, dayItems) => {
        console.log(" the data response from backend at line 484",postResponse, dayItems )
        fetch("http://127.0.0.1:8000/googleCalender/calender/")
            .then((res) => res.json())
            .then((response) => {
                console.log("API response ::", response)
                // let currentFinalResponse = response[response.length - 1]
                // console.log("the current final response",currentFinalResponse)
                dayItems.forEach(obj => {
                    if (obj.humanFormat == postResponse.Week_Day) {
                        dayValue = obj.machineFormat

                    }
                })

                console.log("dayValue", dayValue)
                // console.log("the response that has been posted in the backend==>", postResponseArray)


                let startTimeStampElement = document.getElementById(`day-${dayValue}-time-${postResponse.start_time}-date-${postResponse.date}`)
                let endTimeStampElement = document.getElementById(`day-${dayValue}-time-${postResponse.end_time}-date-${postResponse.date}`)
                console.log(startTimeStampElement, endTimeStampElement)



                if (startTimeStampElement && endTimeStampElement) {

                    for (let i = postResponse.start_time; i <= postResponse.end_time; i++) {

                        let divCollection = document.getElementById(`day-${dayValue}-time-${i}-date-${postResponse.date}`)
                        console.log("divCollection", divCollection)
                        divCollection.style.backgroundColor = "blue"
                        divCollection.style.border = "0px"
                    }

                    startTimeStampElement.innerHTML = postResponse.title_name + "   " + postResponse.start_time + - + postResponse.end_time + "      " + postResponse.date + " " + postResponse.description
                    startTimeStampElement.style.fontSize = "12px"
                }
            })
            .catch((err) => {
                console.log(err.message);
            })

            mouseDownArr = []
            arr = []
            splicedArr = []
            joinedArr = []
            numericArray = []
            dateArr=[]

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

                        console.log("dayValue", dayValue)

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











    // let arr =[]
    // let splicedArr=[]
    // let joinedArr =[]

    const handleMouseDown = (event, machineFormatForDay, machineFormatForTime, date) => {
        mouseDownArr.push(event.target)
        mouseDownArrDay = mouseDownArr[0].id[4]
        console.log("the day of the id", mouseDownArrDay)
        // mouseDownArrDate = mouseDownArr[0].id.slice(-10).split("-").join("")
        let mouseDownArrDateStringArray = mouseDownArr[0].id.split("-")
        console.log("date is?", mouseDownArrDateStringArray)
        mouseDownArrDate = mouseDownArrDateStringArray[mouseDownArrDateStringArray.length-1]
        console.log("the date to get the id", mouseDownArrDate)
        console.log("intial", mouseDownArr,mouseDownArrDay,  mouseDownArrDate  )
        if (mouseDownArr[0].id[4] == event.target.id[4]) {
            arr.push(event.target.id)
        }

        if (arr.length == 2) {
            arr.forEach(item => {
                console.log("item", item)
                let splicedValue = item.slice(10, 13)
                splicedArr.push(splicedValue)
            })

            splicedArr.forEach(item => {
                console.log("splicedArritem", splicedArr)
                let joinedValue = item.split("-").join("")
                joinedArr.push(joinedValue)
            })

            console.log("joined Array value", joinedArr)

            joinedArr.forEach(stringValue => {
                let numericArrayValue = Number(stringValue)
                console.log(numericArrayValue)
                numericArray.push(numericArrayValue)

            })

            let i = 0, j
            while (i < numericArray.length) {
                j = i + 1;
                while (j < numericArray.length) {

                    if (numericArray[j] < numericArray[i]) {
                        let temp = numericArray[i];
                        numericArray[i] = numericArray[j];
                        numericArray[j] = temp;
                    }
                    j++;
                }
                i++;
            }

            for (let i = numericArray[0]; i <= numericArray[1]; i++) {
                console.log("i", i)
                let divToChangeColor = document.getElementById(`day-${mouseDownArrDay}-time-${i}-date-${mouseDownArrDate}`)
                if (divToChangeColor) {

                    divToChangeColor.style.backgroundColor = "blue"
                }


            }





            if (timeMappingList !== null || timeMappingList !== undefined) {
                timeMappingList.forEach(obj => {
                    console.log("object of time", obj)
                    if (obj.machineFormat == numericArray[0]) {
                        setIntialTime(obj.humanFormat)
                        setIntialTimeMF(obj.machineFormat)
                    }
                    if (obj.machineFormat == numericArray[numericArray.length - 1]) {
                        setFinalTime(obj.humanFormat)
                        setFinalTimeMF(obj.machineFormat)
                    }

                })

            }

            let dayoftheWeekNum = arr[0][4]



            if (dayItems !== null || dayItems !== undefined) {
                dayItems.forEach(obj => {
                    if (obj.machineFormat == dayoftheWeekNum) {
                        setDay(obj.humanFormat)
                    }
                })
            }

            console.log("the arr", arr)
            let dateValue 
            arr.forEach(item => {
                dateValue = item.split("-")
                console.log("dateValue", dateValue)
                dateArr.push(dateValue[dateValue.length - 1])
            })

            // console.log("date",dateArr)
            let date = dateArr[dateArr.length - 1]
            let parseDate = Date.parse(date)
            console.log(parseDate)
            let currentSelectedDate = new Date(parseDate).toLocaleDateString('en-us', { month: "long" })
            // console.log(currentSelectedDate)
            setMonthTitle(currentSelectedDate)


            //  
             
                // if(dateArr[dateArr.length - 1]){
                //     // console.log(dateArr[dateArr.length - 1] )
                //     let date = dateArr[dateArr.length - 1] 
                //     console.log(Number(date), typeof(date))
                //  let currentSelectedFullDate = currentSelectedDate.setDate(Number(date))
                //  console.log(currentSelectedFullDate)
                    
                // }
             
            // let currentSelectedFullDate = currentSelectedDate.setDate(dateArr[dateArr.length-1])
            // console.log(currentSelectedFullDate)
            // console.log("the selected contents month",currentSelectedFullDate.getMonth)



            setDate(dateArr[dateArr.length-1])
            setOpen(true)


        }

    }

    // useEffect(()=>{
    //     if(date.length>0){
    //         console.log("current date is:", date)
            

    //     }

    // },[date])



    const handleClose = (e) => {
        setOpen(false)
        if (numericArray) {
            for (let i = numericArray[0]; i <= numericArray[1]; i++) {
                let divToChangeColor = document.getElementById(`day-${mouseDownArrDay}-time-${i}-date-${mouseDownArrDate}`)
                console.log(divToChangeColor)
                if(divToChangeColor){

                    divToChangeColor.style.backgroundColor = ""
                }
            }
            mouseDownArr = []
            arr = []
            splicedArr = []
            numericArray=[]
            joinedArr = []
            dateArr=[]
        }
    }

    const handleClosePopup = (e) => {
        setOpen(false)
        if (numericArray) {
            for (let i = numericArray[0]; i <= numericArray[1]; i++) {
                // console.log("i", i)
                let divToChangeColor = document.getElementById(`day-${mouseDownArrDay}-time-${i}-date-${mouseDownArrDate}`)
                console.log(divToChangeColor)
                if(divToChangeColor){

                    divToChangeColor.style.backgroundColor = ""
                }
            }

            mouseDownArr = []
            arr = []
            splicedArr = []
            joinedArr = []
            numericArray = []
            dateArr=[]
        }
    }


    // const handleButton = (e) => {
    //     console.log("this is sample value", sample)
    // }

    return (
        <>
            <div className="w-[1100px]  mx-auto h-full bg-white">
                {/* <div onMouseUp={(e) => handleMouseUpText(e)} className="w-[20%] h-[35px] text-black">
                    Checking if the State is updated
                </div> */}
                {/* <div className="w-[100px] ">
                    <button className="w-[70px] text-white bg-red-300" onClick={(e) => handleButton(e)}> Update </button>
                </div>
                <div> {sample} </div> */}
                <div className="flex flex-row w-[100%] h-[80px]  pt-[10px] ">
                    <div  className="mt-[5px] ml-[100px] ">
                    <Image
                            src="/Episyche.png"
                            width={200}
                            height={200}
                            alt="Episyche Logo"
                        />

                    </div>
                    <div id="previous" onClick={(e) => handlePrevious(e)} className="mt-[20px] ml-[30px]  ">
                        <Image
                            src="/left-arrow.png"
                            width={17}
                            height={17}
                            alt="previous"
                        />

                    </div>
                    <div id="next" onClick={(e) => handleNext(e)} className="mt-[20px] ml-[30px] ">
                        <Image
                            src="/next.png"
                            width={17}
                            height={17}
                            alt="next"
                        />

                    </div>
                    <div className="text-[black]   mt-[15px] text-[20px] font-[400] ml-[30px] "> {month} </div>
                    <div className="text-[#70757a] ">  </div>
                    <div className="text-slate-600 mt-[5px] ml-[300px] text-[30px] font-[700]"> Calender</div>
                </div>
                <div className="w-[100%] h-[1px] bg-slate-300"> </div>
                <div className="flex flex-rows w-[100%] container ">
                    <div className=" w-[10%]  text-[#70757a] text-[10px] mt-[80px] text-right  pt-[17px] "> GMT+05:30 </div>
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
                <div className="flex flex-rows w-[100%] container ">
                    <div className="w-[10%] text-right pt-[2px] ">
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

                {/* <div className="w-[70px] h-[35px] bg-black">
                    <button className="text-white" onClick={(e) => handleTest(e)}> Test</button>
                </div> */}


                <Transition.Root show={open} as={Fragment}>
                    <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={(e) => handleClosePopup(e)}>
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

                                                <div className="ml-[20px]"> {monthTitle} </div>
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


            </div>
        </>

    )
}