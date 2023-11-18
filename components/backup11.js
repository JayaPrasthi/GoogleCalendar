import { useEffect, useState } from "react"
import Image from "next/image"

const dayItems = [
    {
        humanFormat: "SUN",
        machineFormat: "0"
    },
    {
        humanFormat: "MON",
        machineFormat: "1"
    },
    {
        humanFormat: "TUE",
        machineFormat: "2"
    },
    {
        humanFormat: "WED",
        machineFormat: "3"
    },
    {
        humanFormat: "THU",
        machineFormat: "4"
    },
    {
        humanFormat: "FRI",
        machineFormat: "5"
    },
    {
        humanFormat: "SAT",
        machineFormat: "6"
    },

]

let clickObj = {}


export const MonthlyCalender = () => {
    const [grid, setGrid] = useState()
    const [month, setMonthDates] = useState([])
    const [day, setDay] = useState([])
    const [firstWeekDates, setFirstWeekDates] = useState([])
    const [firstDateInTheCalender, setFirstDateInTheCalender] = useState([])
    const [lastDateInTheCalender, setLastDateInTheCalender] = useState([])
    const [monthValue, setMonthValue] = useState([])
    // const[year, setYear] = useState([])
    const [title, setTitle] = useState([])
    const[random, setRandom] = useState([])
    // const[monthValueForNext, setMonthValueForNext] = useState([])


    useEffect(() => {

        const returned_data = () => {
            console.log("month", month)

            return (

                <div className="">
                    {
                        month.map((item, index) => (
                            <div id={`day-${index}`} className=" w-[100%] h-[100px] border-[#DFE0E3] border-t flex flex-cols">

                                {
                                    item.map((item1, index1) => (
                                        <div id={`day-${index}-date-${item1.CompleteDate}`} onClick={(e) => handleClick(e, index, item1.CompleteDate)} className="w-[400px]  text-center h-[100px] border-[#DFE0E3] border-b border-r border-[1px] relative">
                                            <div className="relative z-[10]">
                                                <div> {item1.day}</div>
                                                <div> {item1.date}</div>
                                            </div>
                                            {
                                                random.map((e,index3)=>(
                                                    <>
                                                    <div key={index3} className="absolute w-full h-full bg-red-300 top-0 left-0"> </div>
                                                    </>

                                                ))
                                            }

                                        </div>


                                    ))
                                }

                            </div>
                        ))

                    }

                </div>

            )
        }

        setGrid(returned_data)
    }, [month, day, firstWeekDates])

    useEffect(() => {
        let MonthArray = []
        let currentDate = new Date()
        console.log("the current Date", currentDate)
        var firstDateOftheCurrentMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);  // gets the value of the first day of the month 
        var lasteDateOftheCurrentMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
        console.log("first day of the month:,", firstDateOftheCurrentMonth)
        console.log("last day of the month:", lasteDateOftheCurrentMonth)
        let firstWeekfirstDate = firstDateOftheCurrentMonth.setDate(firstDateOftheCurrentMonth.getDate() - firstDateOftheCurrentMonth.getDay())// we manipulating the date to get the beginning of the week date 
        let firstWeekfirstDateValue = new Date(firstWeekfirstDate - 1)
        let lastWeekfirstDate = lasteDateOftheCurrentMonth.setDate(lasteDateOftheCurrentMonth.getDate() - lasteDateOftheCurrentMonth.getDay())
        let lastWeekfirstDateValue = new Date(lastWeekfirstDate - 1)
        console.log("first date of the week of the current month==>", firstWeekfirstDateValue)
        console.log("last date of the week of the current month==>", lastWeekfirstDateValue)

        let currentMonthFirstWeekArray = []
        let currentMonthFirstWeekArrayCompleteDate = []
        for (let i = 0; i <= 6; i++) {
            let currentMonthFirstWeekValues = new Date(firstWeekfirstDateValue.setDate(firstWeekfirstDateValue.getDate() + 1))
            currentMonthFirstWeekArrayCompleteDate.push(currentMonthFirstWeekValues)
            currentMonthFirstWeekArray.push(currentMonthFirstWeekValues.getDate())
        }

        let currentMonthLastWeekArray = []
        let currentMonthLastWeekArrayCompleteDate = []
        for (let i = 0; i <= 6; i++) {
            let currentMonthLastWeekValues = new Date(lastWeekfirstDateValue.setDate(lastWeekfirstDateValue.getDate() + 1))
            currentMonthLastWeekArray.push(currentMonthLastWeekValues.getDate())
            currentMonthLastWeekArrayCompleteDate.push(currentMonthLastWeekValues)

        }

        console.log("the current month first week's array", currentMonthFirstWeekArray)
        console.log("the current month first week's last index Value", currentMonthFirstWeekArray[currentMonthFirstWeekArray.length - 1])
        console.log("the current month last week's first index Value", currentMonthLastWeekArray[0])

        let currentMonthFirstWeekLastIndexDate = currentMonthFirstWeekArrayCompleteDate[currentMonthFirstWeekArrayCompleteDate.length - 1]
        let currentMonthLastWeekFirstIndexDate = currentMonthLastWeekArrayCompleteDate[0]



        let currentMonthRestoftheWeekArray = []
        let currentMonthRestoftheWeekArrayCompleteDate = []
        console.log("the value", currentMonthFirstWeekLastIndexDate.getDate() + 1)
        for (let i = (currentMonthFirstWeekLastIndexDate.getDate() + 1); i < currentMonthLastWeekFirstIndexDate.getDate(); i++) {
            console.log("the inbetween dates", i)
            let restOftheWeekValues = new Date(currentMonthFirstWeekLastIndexDate.setDate(currentMonthFirstWeekLastIndexDate.getDate() + 1))
            console.log("rest of the week", restOftheWeekValues)
            currentMonthRestoftheWeekArray.push(restOftheWeekValues.getDate())
            currentMonthRestoftheWeekArrayCompleteDate.push(restOftheWeekValues)

        }

        let MonthArrayCompleteDate = []
        let MonthArrayCompleteDateInString = []
        MonthArrayCompleteDate.push(currentMonthFirstWeekArrayCompleteDate, currentMonthRestoftheWeekArrayCompleteDate, currentMonthLastWeekArrayCompleteDate)
        console.log("complete date array:", MonthArrayCompleteDate)
        let MonthArrayCompleteDateMerged = MonthArrayCompleteDate.flat()
        MonthArrayCompleteDateMerged.forEach(date => {
            let dateInString = date.toLocaleDateString('en-US');
            MonthArrayCompleteDateInString.push(dateInString)


        })

        console.log("MonthArrayCompleteDateInString", MonthArrayCompleteDateInString)

        console.log("dates of the remaining week, ", currentMonthRestoftheWeekArrayCompleteDate)
        MonthArray.push(currentMonthFirstWeekArray, currentMonthRestoftheWeekArray, currentMonthLastWeekArray)
        console.log("the current Month's date", MonthArray)
        let MonthArrayMerged = MonthArray.flat();
        console.log("after merging the current month array", MonthArrayMerged)
        let splitedArray = []
        let splitedArrayOfCompleteDate = []
        let chunkSize = 7;

        let dateArrayOfObjects = []
        MonthArrayCompleteDateInString.forEach(CompleteDateItem => {
            console.log("CompleteDateItem", CompleteDateItem)
            let dateObj = {}
            dateObj["CompletedDate"] = CompleteDateItem
            dateArrayOfObjects.push(dateObj)

        })


        console.log("date Array of Objects:", dateArrayOfObjects)

        for (let i = 0; i < MonthArrayMerged.length; i += chunkSize) {
            splitedArray.push(MonthArrayMerged.slice(i, i + chunkSize));
        }


        for (let i = 0; i < dateArrayOfObjects.length; i += chunkSize) {
            splitedArrayOfCompleteDate.push(dateArrayOfObjects.slice(i, i + chunkSize));
        }

        console.log("the splited Array", splitedArrayOfCompleteDate)




        let arrayOfObjects = []
        splitedArray.forEach((element, index) => {
            console.log("element", element, index, splitedArrayOfCompleteDate[index])
            if (index == 0) {
                element.forEach((value, elementIndex) => {
                    console.log("value of dates", value, dayItems[elementIndex].humanFormat,)
                    const firstIndexObj = {}
                    firstIndexObj["date"] = value
                    firstIndexObj["day"] = dayItems[elementIndex].humanFormat
                    arrayOfObjects.push(firstIndexObj)
                    console.log("object1", firstIndexObj)
                })
            } else {
                element.forEach((value, elementIndex) => {
                    const allIndexObj = {}
                    allIndexObj["date"] = value
                    console.log("object2", allIndexObj)
                    arrayOfObjects.push(allIndexObj)
                })

            }




        });
        console.log("the array of the objects", arrayOfObjects, dateArrayOfObjects)

        const finalArrayOfObjects = arrayOfObjects.map((item, index) => ({ ...item, CompleteDate: dateArrayOfObjects[index].CompletedDate }))
        console.log("the new array", finalArrayOfObjects)




        let finalSplitedArray = []
        let Size = 7;
        for (let i = 0; i < finalArrayOfObjects.length; i += Size) {
            finalSplitedArray.push(finalArrayOfObjects.slice(i, i + Size));
        }
        console.log("final Array", finalSplitedArray)
        setMonthDates(finalSplitedArray)
        setMonthValue(currentDate)

        let monthAndYear = []
        let month = currentDate.toLocaleString('en-us', { month: 'long' })

        let monthandYearObj = { "month": month, "year": currentDate.getFullYear() }
        monthAndYear.push(monthandYearObj)
        setTitle(monthAndYear)
        // setMonthValueForNext(currentDate.setMonth(currentDate.getMonth()+1))

    }, [])


    const handlePrevious = (e) => {
        let MonthValue = new Date(monthValue)
        let previousMonthValue = new Date(MonthValue.setMonth(MonthValue.getMonth() - 1))
        console.log("the current date Value", previousMonthValue)
        let previousMonthFirstDate = new Date(previousMonthValue.getFullYear(), previousMonthValue.getMonth(), 1)
        console.log("previous month first date", previousMonthFirstDate)
        let previousMonthFirstWeekStartingDate = new Date(previousMonthFirstDate.setDate(previousMonthFirstDate.getDate() - previousMonthFirstDate.getDay()))
        let previousMonthFirstWeekBeforeStartingDate = new Date(previousMonthFirstWeekStartingDate - 1)
        console.log("the previous Month Before First Date", previousMonthFirstWeekBeforeStartingDate)


        let previousMonthFirstWeekArray = []
        let previousMonthFirstWeekCompleteDate = []
        for (let i = 0; i <= 6; i++) {
            let previousMonthFirstWeekValues = new Date(previousMonthFirstWeekBeforeStartingDate.setDate(previousMonthFirstWeekBeforeStartingDate.getDate() + 1))
            console.log("the previous Month's first Weeks's Value", previousMonthFirstWeekBeforeStartingDate)
            previousMonthFirstWeekCompleteDate.push(previousMonthFirstWeekValues)
            previousMonthFirstWeekArray.push(previousMonthFirstWeekValues.getDate())

        }

        console.log("the previous week complete date", previousMonthFirstWeekArray)


        //     //ending of the month
        let previousMonthLastDate = new Date(previousMonthValue.getFullYear(), previousMonthValue.getMonth() + 1, 0)
        console.log("the previous month last date,", previousMonthLastDate)
        let previousMonthEndingWeekInitalDate = new Date(previousMonthLastDate.setDate(previousMonthLastDate.getDate() - previousMonthLastDate.getDay()))
        console.log("the previous Month starting of the end Week", previousMonthEndingWeekInitalDate)
        let previousMonthEndingWeekBeforeInitalDate = new Date(previousMonthEndingWeekInitalDate - 1)
        console.log("the value before the start of the ending week", previousMonthEndingWeekBeforeInitalDate)

        let previousMonthLastWeekArray = []
        let previousMonthLastWeekCompleteDate = []
        for (let i = 0; i <= 6; i++) {
            let previousMonthLastWeekValue = new Date(previousMonthEndingWeekBeforeInitalDate.setDate(previousMonthEndingWeekBeforeInitalDate.getDate() + 1))
            previousMonthLastWeekArray.push(previousMonthLastWeekValue.getDate())
            previousMonthLastWeekCompleteDate.push(previousMonthLastWeekValue)

        }

        console.log("the previous week complete date of the last week", previousMonthLastWeekArray)

        let previousMonthFirstWeekLastIndexDate = previousMonthFirstWeekCompleteDate[previousMonthFirstWeekCompleteDate.length - 1]
        let previousMonthLastWeekFirstIndexDate = previousMonthLastWeekCompleteDate[0]
        let previousMonthRestoftheWeekArray = []
        let previousMonthRestoftheWeekArrayCompleteDate = []
        console.log("the value", previousMonthFirstWeekLastIndexDate.getDate() + 1)
        for (let i = (previousMonthFirstWeekLastIndexDate.getDate() + 1); i < previousMonthLastWeekFirstIndexDate.getDate(); i++) {
            console.log("the inbetween dates", i)
            let restOftheWeekValues = new Date(previousMonthFirstWeekLastIndexDate.setDate(previousMonthFirstWeekLastIndexDate.getDate() + 1))
            console.log("rest of the week", restOftheWeekValues)
            previousMonthRestoftheWeekArray.push(restOftheWeekValues.getDate())
            previousMonthRestoftheWeekArrayCompleteDate.push(restOftheWeekValues)

        }

        let MonthArrayCompleteDate = []
        let MonthArrayCompleteDateInString = []
        MonthArrayCompleteDate.push(previousMonthFirstWeekCompleteDate, previousMonthRestoftheWeekArrayCompleteDate, previousMonthLastWeekCompleteDate)
        console.log("complete date array:", MonthArrayCompleteDate)
        let MonthArrayCompleteDateMerged = MonthArrayCompleteDate.flat()
        MonthArrayCompleteDateMerged.forEach(date => {
            let dateInString = date.toLocaleDateString('en-US');
            MonthArrayCompleteDateInString.push(dateInString)


        })

        console.log("MonthArrayCompleteDateInString", MonthArrayCompleteDateInString)

        console.log("dates of the remaining week, ", previousMonthRestoftheWeekArrayCompleteDate)
        let previousMonthCompleteMonthArray = [previousMonthFirstWeekArray, previousMonthRestoftheWeekArray, previousMonthLastWeekArray]
        console.log("the previous Month's date", previousMonthCompleteMonthArray)
        let previousMonthArrayMerged = previousMonthCompleteMonthArray.flat();
        console.log("after merging the previous month array", previousMonthArrayMerged)
        let splitedArray = []
        let splitedArrayOfCompleteDate = []
        let chunkSize = 7;

        let dateArrayOfObjects = []
        MonthArrayCompleteDateInString.forEach(CompleteDateItem => {
            console.log("CompleteDateItem", CompleteDateItem)
            let dateObj = {}
            dateObj["CompletedDate"] = CompleteDateItem
            dateArrayOfObjects.push(dateObj)

        })


        console.log("date Array of Objects:", dateArrayOfObjects)

        for (let i = 0; i < previousMonthArrayMerged.length; i += chunkSize) {
            splitedArray.push(previousMonthArrayMerged.slice(i, i + chunkSize));
        }


        for (let i = 0; i < dateArrayOfObjects.length; i += chunkSize) {
            splitedArrayOfCompleteDate.push(dateArrayOfObjects.slice(i, i + chunkSize));
        }

        console.log("the splited Array", splitedArrayOfCompleteDate)
        let arrayOfObjects = []
        splitedArray.forEach((element, index) => {
            console.log("element", element, index, splitedArrayOfCompleteDate[index])
            if (index == 0) {
                element.forEach((value, elementIndex) => {
                    console.log("value of dates", value, dayItems[elementIndex].humanFormat,)
                    const firstIndexObj = {}
                    firstIndexObj["date"] = value
                    firstIndexObj["day"] = dayItems[elementIndex].humanFormat
                    arrayOfObjects.push(firstIndexObj)
                    console.log("object1", firstIndexObj)
                })
            } else {
                element.forEach((value, elementIndex) => {
                    const allIndexObj = {}
                    allIndexObj["date"] = value
                    console.log("object2", allIndexObj)
                    arrayOfObjects.push(allIndexObj)
                })

            }




        });
        console.log("the array of the objects", arrayOfObjects, dateArrayOfObjects)

        const finalArrayOfObjects = arrayOfObjects.map((item, index) => ({ ...item, CompleteDate: dateArrayOfObjects[index].CompletedDate }))
        console.log("the new array", finalArrayOfObjects)

        let finalSplitedArray = []
        let Size = 7;
        for (let i = 0; i < finalArrayOfObjects.length; i += Size) {
            finalSplitedArray.push(finalArrayOfObjects.slice(i, i + Size));
        }
        console.log("final Array", finalSplitedArray)
        setMonthDates(finalSplitedArray)
        setMonthValue(previousMonthValue)

        let monthAndYear = []
        let month = previousMonthValue.toLocaleString('en-us', { month: 'long' })

        let monthandYearObj = { "month": month, "year": previousMonthValue.getFullYear() }
        monthAndYear.push(monthandYearObj)
        setTitle(monthAndYear)
        // setMonthValueForNext(previousDate.setMonth(currentDate.getMonth()+1))


    }

    // useEffect(()=>{
    //     let nextButton = document.getElementById("next")
    //     let previousButton
    //     console.log("next", nextButton)
    //     if(nextButton){
    //         nextButton.addEventListener("mousedown",event=>{
    //             setGrid([])

    //         })
    //      }
    // },[])

    const handleNext = (e) => {
        let MonthValue = new Date(monthValue)
        // console.log("the next months Value", nextMonthValue)
        let nextMonthValue = new Date(MonthValue.setMonth(MonthValue.getMonth() + 1))
        // let monthToGetTheEndOftheMonthValue = new Date(MonthValue.setMonth(MonthValue.getMonth()+2))
        console.log(nextMonthValue)
        let nextMonthFirstDate = new Date(nextMonthValue.getFullYear(), nextMonthValue.getMonth(), 1)
        console.log("next month first date", nextMonthFirstDate)
        let nextMonthFirstWeekStartingDate = new Date(nextMonthFirstDate.setDate(nextMonthFirstDate.getDate() - nextMonthFirstDate.getDay()))
        let nextMonthFirstWeekBeforeStartingDate = new Date(nextMonthFirstWeekStartingDate - 1)
        console.log("the next Month Before First Date", nextMonthFirstWeekBeforeStartingDate)


        let nextMonthFirstWeekArray = []
        let nextMonthFirstWeekCompleteDate = []
        for (let i = 0; i <= 6; i++) {
            let nextMonthFirstWeekValues = new Date(nextMonthFirstWeekBeforeStartingDate.setDate(nextMonthFirstWeekBeforeStartingDate.getDate() + 1))
            console.log("the next Month's first Weeks's Value", nextMonthFirstWeekBeforeStartingDate)
            nextMonthFirstWeekCompleteDate.push(nextMonthFirstWeekValues)
            nextMonthFirstWeekArray.push(nextMonthFirstWeekValues.getDate())

        }

        console.log("the next first week complete date", nextMonthFirstWeekArray)


        // ending of the month
        let nextMonthLastDate = new Date(nextMonthValue.getFullYear(), nextMonthValue.getMonth() + 1, 0)
        let nextMonthEndingWeekInitalDate = new Date(nextMonthLastDate.setDate(nextMonthLastDate.getDate() - nextMonthLastDate.getDay()))
        console.log("the next Month starting of the end Week", nextMonthEndingWeekInitalDate)
        let nextMonthEndingWeekBeforeInitalDate = new Date(nextMonthEndingWeekInitalDate - 1)
        console.log("the value before the start of the ending week", nextMonthEndingWeekBeforeInitalDate)

        let nextMonthLastWeekArray = []
        let nextMonthLastWeekCompleteDate = []
        for (let i = 0; i <= 6; i++) {
            let nextMonthLastWeekValue = new Date(nextMonthEndingWeekBeforeInitalDate.setDate(nextMonthEndingWeekBeforeInitalDate.getDate() + 1))
            nextMonthLastWeekArray.push(nextMonthLastWeekValue.getDate())
            nextMonthLastWeekCompleteDate.push(nextMonthLastWeekValue)

        }

        console.log("the next week complete date of the last week", nextMonthLastWeekArray)

        let nextMonthFirstWeekLastIndexDate = nextMonthFirstWeekCompleteDate[nextMonthFirstWeekCompleteDate.length - 1]
        let nextMonthLastWeekFirstIndexDate = nextMonthLastWeekCompleteDate[0]
        let nextMonthRestoftheWeekArray = []
        let nextMonthRestoftheWeekArrayCompleteDate = []
        console.log("the value", nextMonthFirstWeekLastIndexDate.getDate() + 1)
        for (let i = (nextMonthFirstWeekLastIndexDate.getDate() + 1); i < nextMonthLastWeekFirstIndexDate.getDate(); i++) {
            console.log("the inbetween dates", i)
            let restOftheWeekValues = new Date(nextMonthFirstWeekLastIndexDate.setDate(nextMonthFirstWeekLastIndexDate.getDate() + 1))
            console.log("rest of the week", restOftheWeekValues)
            nextMonthRestoftheWeekArray.push(restOftheWeekValues.getDate())
            nextMonthRestoftheWeekArrayCompleteDate.push(restOftheWeekValues)

        }

        let MonthArrayCompleteDate = []
        let MonthArrayCompleteDateInString = []
        MonthArrayCompleteDate.push(nextMonthFirstWeekCompleteDate, nextMonthRestoftheWeekArrayCompleteDate, nextMonthLastWeekCompleteDate)
        console.log("complete date array:", MonthArrayCompleteDate)
        let MonthArrayCompleteDateMerged = MonthArrayCompleteDate.flat()
        MonthArrayCompleteDateMerged.forEach(date => {
            let dateInString = date.toLocaleDateString('en-US');
            MonthArrayCompleteDateInString.push(dateInString)


        })

        console.log("MonthArrayCompleteDateInString", MonthArrayCompleteDateInString)

        console.log("dates of the remaining week, ", nextMonthRestoftheWeekArrayCompleteDate)
        let nextMonthCompleteMonthArray = [nextMonthFirstWeekArray, nextMonthRestoftheWeekArray, nextMonthLastWeekArray]
        console.log("the next Month's date", nextMonthCompleteMonthArray)
        let nextMonthArrayMerged = nextMonthCompleteMonthArray.flat();
        console.log("after merging the next month array", nextMonthArrayMerged)
        let splitedArray = []
        let splitedArrayOfCompleteDate = []
        let chunkSize = 7;

        let dateArrayOfObjects = []
        MonthArrayCompleteDateInString.forEach(CompleteDateItem => {
            console.log("CompleteDateItem", CompleteDateItem)
            let dateObj = {}
            dateObj["CompletedDate"] = CompleteDateItem
            dateArrayOfObjects.push(dateObj)

        })


        console.log("date Array of Objects:", dateArrayOfObjects)

        for (let i = 0; i < nextMonthArrayMerged.length; i += chunkSize) {
            splitedArray.push(nextMonthArrayMerged.slice(i, i + chunkSize));
        }


        for (let i = 0; i < dateArrayOfObjects.length; i += chunkSize) {
            splitedArrayOfCompleteDate.push(dateArrayOfObjects.slice(i, i + chunkSize));
        }

        console.log("the splited Array", splitedArrayOfCompleteDate)
        let arrayOfObjects = []
        splitedArray.forEach((element, index) => {
            console.log("element", element, index, splitedArrayOfCompleteDate[index])
            if (index == 0) {
                element.forEach((value, elementIndex) => {
                    console.log("value of dates", value, dayItems[elementIndex].humanFormat,)
                    const firstIndexObj = {}
                    firstIndexObj["date"] = value
                    firstIndexObj["day"] = dayItems[elementIndex].humanFormat
                    arrayOfObjects.push(firstIndexObj)
                    console.log("object1", firstIndexObj)
                })
            } else {
                element.forEach((value, elementIndex) => {
                    const allIndexObj = {}
                    allIndexObj["date"] = value
                    console.log("object2", allIndexObj)
                    arrayOfObjects.push(allIndexObj)
                })

            }




        });
        console.log("the array of the objects", arrayOfObjects, dateArrayOfObjects)

        const finalArrayOfObjects = arrayOfObjects.map((item, index) => ({ ...item, CompleteDate: dateArrayOfObjects[index].CompletedDate }))
        console.log("the new array", finalArrayOfObjects)

        let finalSplitedArray = []
        let Size = 7;
        for (let i = 0; i < finalArrayOfObjects.length; i += Size) {
            finalSplitedArray.push(finalArrayOfObjects.slice(i, i + Size));
        }
        console.log("final Array", finalSplitedArray)
        setMonthDates(finalSplitedArray)
        setMonthValue(nextMonthValue)

        let monthAndYear = []
        let month = nextMonthValue.toLocaleString('en-us', { month: 'long' })

        let monthandYearObj = { "month": month, "year": nextMonthValue.getFullYear() }
        monthAndYear.push(monthandYearObj)
        setTitle(monthAndYear)
        // console.log("final Array",finalSplitedArray)



    }



    const handleClick = (e, day, date) => {
        let clickArray = []
        let cellGrid = document.getElementById(e.target.id)
        let div = document.getElementById(`day-${day}-date-${date}`)
        //  console.log(e.target)
        let taskDiv = document.createElement("div")
        taskDiv.style.width = "90%"
        taskDiv.style.height = "20px"
        taskDiv.style.borderRadius = "5px"
        taskDiv.style.position = "absolute"
        taskDiv.style.backgroundColor = "blue"
        taskDiv.id = `task-for-${e.target.id}`
        let taskDivDate = taskDiv.id.split("-")[5]
        console.log("event", e.target.id)
        if (e.target.id != "") {
            if (clickObj) {
                clickObj[e.target.id] = taskDiv.id
            }
        }

        const keys = Object.keys(clickObj)
        console.log("keys", keys)
        keys.forEach((key, index) => {
            console.log("key")
            clickArray.push({
                [key]: clickObj[key]
            })
        })

        console.log("the click Array", clickArray)
        setRandom(clickArray)
        //  clickArray.push(clickObj)


        //  console.log(cellGrid, div)
        //  cellGrid.append(taskDiv)
        //  console.log(cellGrid, cellGrid.childNodes, div, div.childNodes)
        //  if(cellGrid){

        //      console.log("cellGrid is based on click div", cellGrid.id, "the div appened to it id", taskDiv.id )
        //      let dateOftheEventTarget = cellGrid.id.split("-")[3]
        //      console.log("date of the appeneded task", taskDivDate)
        //     //  console.log("date of the event target",dateOftheEventTarget)
        //     let targetDiv
        //     if(dateOftheEventTarget==taskDivDate){
        //          targetDiv  =  document.getElementById(`day-${day}-date-${dateOftheEventTarget}`)
        //         targetDiv.append(taskDiv)
        //     }else if(targetDiv==null) {
        //         console.log("the target div", targetDiv)
        //     }else{
        //         console.log("didnt go into either condition")
        //     }

        //  }






    }

    useEffect(() => {
        console.log("grid", grid)
    }, [grid])


    return (
        <>
            <div className="w-[1100px]  mx-auto h-fill bg-white">
                <div className="flex flex-row w-[1100px] h-[100px]">
                    <div className="flex flex-row w-[100%] h-[80px]  pt-[10px] ">
                        <div className="mt-[5px] ml-[100px] ">
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
                        <div className="flex flex-row mt-[15px] ml-[10px] gap-[10px]">
                            {
                                title.map(item => (
                                    <>
                                        <div className="text-[18px] font-[400]" >{item.month} </div>
                                        <div className="text-[18px] font-[400]" >{item.year} </div>
                                    </>
                                ))
                            }
                        </div>
                    </div>

                </div>
                <div>

                </div>{grid}</div>
        </>

    )
}