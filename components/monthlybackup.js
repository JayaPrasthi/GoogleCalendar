import { useEffect, useState } from "react"
import Image from "next/image"

const dayItems = [
    {
        humanFormat:"SUN",
        machineFormat:"0"
    },
    {
        humanFormat:"MON",
        machineFormat:"1"
    },
    {
        humanFormat:"TUE",
        machineFormat:"2"
    },
    {
        humanFormat:"WED",
        machineFormat:"3"
    },
    {
        humanFormat:"THU",
        machineFormat:"4"
    },
    {
        humanFormat:"FRI",
        machineFormat:"5"
    },
    {
        humanFormat:"SAT",
        machineFormat:"6"
    },
    
]

export const MonthlyCalender = () =>{
    const[grid, setGrid] = useState()
    const[month, setMonthDates] =  useState([])
    const[day, setDay] =  useState([])
    const[firstWeekDates, setFirstWeekDates] = useState([])
    const[firstDateInTheCalender, setFirstDateInTheCalender] = useState([])
    const[lastDateInTheCalender, setLastDateInTheCalender] = useState([])
    const[monthValue, setMonthValue] = useState([])
    // const[year, setYear] = useState([])
    const[title, setTitle] = useState([])
    // const[monthValueForNext, setMonthValueForNext] = useState([])


    useEffect(()=>{
        
        const returned_data = () =>{

        return(
            
        <div className="">
                {
                    month.map((item,index)=>(
                        <div  id={`day-${index}`} className=" w-[100%] h-[100px] border-[#DFE0E3] border-t flex flex-cols"> 
                        
                           {
                               item.map((item1,index1)=>(
                                <div onClick = {(e)=>handleClick(e)} className = "w-[400px]  text-center h-[100px] border-[#DFE0E3] border-b border-r border-[1px] relative">
                                <div> {item1.day}</div>
                                <div> {item1.date}</div>
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
    },[month, day, firstWeekDates])

    useEffect(()=>{
        let MonthArray = []
         let currentDate = new Date()
         console.log("the current Date", currentDate)
        var firstDateOftheCurrentMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);  // gets the value of the first day of the month 
        var lasteDateOftheCurrentMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0); 
        console.log("first day of the month:,", firstDateOftheCurrentMonth)
        console.log("last day of the month:", lasteDateOftheCurrentMonth)
        let firstWeekfirstDate=  firstDateOftheCurrentMonth.setDate(firstDateOftheCurrentMonth.getDate() - firstDateOftheCurrentMonth.getDay())// we manipulating the date to get the beginning of the week date 
        let firstWeekfirstDateValue = new Date(firstWeekfirstDate-1)
        let lastWeekfirstDate = lasteDateOftheCurrentMonth.setDate(lasteDateOftheCurrentMonth.getDate()-lasteDateOftheCurrentMonth.getDay())
        let lastWeekfirstDateValue= new Date(lastWeekfirstDate - 1)
        console.log("first date of the week of the current month==>", firstWeekfirstDateValue)
        console.log("last date of the week of the current month==>", lastWeekfirstDateValue)

        let currentMonthFirstWeekArray = []
        let currentMonthFirstWeekArrayCompleteDate =[]
        for (let i = 0; i <= 6; i++) {
            let currentMonthFirstWeekValues =  new Date(firstWeekfirstDateValue.setDate(firstWeekfirstDateValue.getDate()+1))
            currentMonthFirstWeekArrayCompleteDate.push(currentMonthFirstWeekValues)
            currentMonthFirstWeekArray.push(currentMonthFirstWeekValues.getDate())
        }

        let currentMonthLastWeekArray = []
        let currentMonthLastWeekArrayCompleteDate =[]
        for(let i=0;i<=6;i++){
            let currentMonthLastWeekValues = new Date(lastWeekfirstDateValue.setDate(lastWeekfirstDateValue.getDate()+1))
            currentMonthLastWeekArray.push(currentMonthLastWeekValues.getDate())
            currentMonthLastWeekArrayCompleteDate.push(currentMonthLastWeekValues)

        }

        console.log("the current month first week's array", currentMonthFirstWeekArray)
        console.log("the current month first week's last index Value",currentMonthFirstWeekArray[currentMonthFirstWeekArray.length-1] )
        console.log("the current month last week's first index Value",currentMonthLastWeekArray[0])

        let currentMonthFirstWeekLastIndexDate = currentMonthFirstWeekArray[currentMonthFirstWeekArray.length-1]
        let currentMonthLastWeekFirstIndexDate = currentMonthLastWeekArray[0]
        let currentMonthRestoftheWeekArray = []
        for(let i= (currentMonthFirstWeekLastIndexDate+1); i< currentMonthLastWeekFirstIndexDate; i++ ){
            console.log("the inbetween dates", i)
            currentMonthRestoftheWeekArray.push(i)

        }
        MonthArray.push(currentMonthFirstWeekArray,currentMonthRestoftheWeekArray,currentMonthLastWeekArray  )
        console.log("the current Month's date", MonthArray)
        let MonthArrayMerged  = MonthArray.flat();
        console.log("after merging the current month array", MonthArrayMerged)
        let splitedArray = []
        
        let chunkSize = 7;
        
        for (let i = 0; i < MonthArrayMerged.length; i += chunkSize) {
            splitedArray.push(MonthArrayMerged.slice(i, i + chunkSize));
        }

        let arrayOfObjects = []
        splitedArray.forEach((element, index) => {
            console.log("element", element, index)
            if(index==0){
                element.forEach((value,elementIndex)=>{
                    console.log("value of dates", value, dayItems[elementIndex].humanFormat)
                    const firstIndexObj = {}
                    firstIndexObj["date"] = value
                    firstIndexObj["day"] =  dayItems[elementIndex].humanFormat
                    arrayOfObjects.push(firstIndexObj)
                    console.log("object1",firstIndexObj)
                })
            }else {
                element.forEach((value, elementIndex)=>{
                    const allIndexObj = {}
                    allIndexObj["date"] = value
                    console.log("object2", allIndexObj)
                    arrayOfObjects.push(allIndexObj)
                })

            }

            console.log("the array of the objects",arrayOfObjects)

            
        });
        
        let finalSplitedArray = []
        let Size = 7;
        for (let i = 0; i < arrayOfObjects.length; i += Size) {
            finalSplitedArray.push(arrayOfObjects.slice(i, i + Size));
        }
        console.log("final Array",finalSplitedArray)
        setMonthDates(finalSplitedArray)
        setMonthValue(currentDate)

        let monthAndYear = []
        let month = currentDate.toLocaleString('en-us', { month: 'long' })

        let monthandYearObj = {"month":month, "year":currentDate.getFullYear()}
        monthAndYear.push(monthandYearObj)
        setTitle(monthAndYear)
        // setMonthValueForNext(currentDate.setMonth(currentDate.getMonth()+1))
  
    },[])


 const handlePrevious = (e) =>{
    let MonthValue = new Date(monthValue)
    let previousMonthValue  =  new Date(MonthValue.setMonth(MonthValue.getMonth()-1))
    console.log("the current date Value", previousMonthValue)
    let previousMonthFirstDate = new Date(previousMonthValue.getFullYear(), previousMonthValue.getMonth(), 1)
    console.log("previous month first date", previousMonthFirstDate)
    let previousMonthFirstWeekStartingDate =  new Date(previousMonthFirstDate.setDate(previousMonthFirstDate.getDate()-previousMonthFirstDate.getDay()))
    let previousMonthFirstWeekBeforeStartingDate = new Date(previousMonthFirstWeekStartingDate - 1)
    console.log("the previous Month Before First Date", previousMonthFirstWeekBeforeStartingDate)
    
   
    let previousMonthFirstWeekArray =[]
    let previousMonthFirstWeekCompleteDate=[]
    for(let i=0; i<=6;i++){
        let  previousMonthFirstWeekValues = new Date(previousMonthFirstWeekBeforeStartingDate.setDate(previousMonthFirstWeekBeforeStartingDate.getDate() + 1))
        console.log("the previous Month's first Weeks's Value",previousMonthFirstWeekBeforeStartingDate )
        previousMonthFirstWeekCompleteDate.push(previousMonthFirstWeekValues) 
        previousMonthFirstWeekArray.push(previousMonthFirstWeekValues.getDate())
        
    }
    
   console.log("the previous week complete date", previousMonthFirstWeekArray)


//     //ending of the month
    let previousMonthLastDate =  new Date(previousMonthValue.getFullYear(), previousMonthValue.getMonth()+1, 0)
    console.log("the previous month last date,", previousMonthLastDate )
    let previousMonthEndingWeekInitalDate = new Date(previousMonthLastDate.setDate(previousMonthLastDate.getDate()-previousMonthLastDate.getDay()))
    console.log("the previous Month starting of the end Week", previousMonthEndingWeekInitalDate)
    let previousMonthEndingWeekBeforeInitalDate = new Date(previousMonthEndingWeekInitalDate - 1)
    console.log("the value before the start of the ending week", previousMonthEndingWeekBeforeInitalDate)
    
    let previousMonthLastWeekArray =[]
    let previousMonthLastWeekCompleteDate=[]
    for(let i=0; i<=6;i++){
        let previousMonthLastWeekValue = new Date(previousMonthEndingWeekBeforeInitalDate.setDate(previousMonthEndingWeekBeforeInitalDate.getDate()+1)) 
        previousMonthLastWeekArray.push(previousMonthLastWeekValue.getDate())
        previousMonthLastWeekCompleteDate.push(previousMonthLastWeekValue)

    }

     console.log("the previous week complete date of the last week", previousMonthLastWeekArray)
    
    let firstWeekLastIndex= previousMonthFirstWeekArray[previousMonthFirstWeekArray.length - 1]

    let lastWeekFirstIndex=previousMonthLastWeekArray[0]
   
    let previousMonthRemaningWeekArray=[]
    for (let i=(firstWeekLastIndex+1); i<lastWeekFirstIndex; i++ ){
        console.log("i", i)
        previousMonthRemaningWeekArray.push(i)

    }

    let previousMonthCompleteMonthArray = [previousMonthFirstWeekArray,previousMonthRemaningWeekArray, previousMonthLastWeekArray ]
    let previousMonthCompleteMonthArrayMergered = previousMonthCompleteMonthArray.flat()
      console.log("previous Month dates",previousMonthCompleteMonthArrayMergered)

      let splitedArrayPreviousMonth = []
      let chunkSize = 7;
    

    for (let i = 0; i < previousMonthCompleteMonthArrayMergered.length; i += chunkSize) {
        splitedArrayPreviousMonth.push(previousMonthCompleteMonthArrayMergered.slice(i, i + chunkSize));
    }

    console.log("the splitedArray of the previous Method", splitedArrayPreviousMonth)

   
    let arrayOfObjects = []
    splitedArrayPreviousMonth.forEach((element, index) => {
        console.log("element", element, index)
        if(index==0){
            element.forEach((value,elementIndex)=>{
                console.log("value of dates", value, dayItems[elementIndex].humanFormat)
                const firstIndexObj = {}
                firstIndexObj["date"] = value
                firstIndexObj["day"] =  dayItems[elementIndex].humanFormat
                arrayOfObjects.push(firstIndexObj)
                console.log("object1",firstIndexObj)
            })
        }else {
            element.forEach((value, elementIndex)=>{
                const allIndexObj = {}
                allIndexObj["date"] = value
                console.log("object2", allIndexObj)
                arrayOfObjects.push(allIndexObj)
            })

        }

        console.log("the array of the objects",arrayOfObjects)

        
    });
    
    let finalSplitedArray = []
    let Size = 7;
    for (let i = 0; i < arrayOfObjects.length; i += Size) {
        finalSplitedArray.push(arrayOfObjects.slice(i, i + Size));
    }

    let monthAndYear = []
    let month = previousMonthValue.toLocaleString('en-us', { month: 'long' })

    let monthandYearObj = {"month":month, "year":previousMonthValue.getFullYear()}
    monthAndYear.push(monthandYearObj)
    setTitle(monthAndYear)
    // console.log("final Array",finalSplitedArray)
    setMonthDates(finalSplitedArray)
    setMonthValue(previousMonthValue)

}

const handleNext = (e) =>{
    let MonthValue = new Date(monthValue)
    // console.log("the next months Value", nextMonthValue)
    let nextMonthValue =  new Date(MonthValue.setMonth(MonthValue.getMonth()+1))
    // let monthToGetTheEndOftheMonthValue = new Date(MonthValue.setMonth(MonthValue.getMonth()+2))
    console.log(nextMonthValue)
    let nextMonthFirstDate = new Date(nextMonthValue.getFullYear(), nextMonthValue.getMonth(), 1)
    console.log("next month first date", nextMonthFirstDate)
    let nextMonthFirstWeekStartingDate =  new Date(nextMonthFirstDate.setDate(nextMonthFirstDate.getDate()-nextMonthFirstDate.getDay()))
    let nextMonthFirstWeekBeforeStartingDate = new Date(nextMonthFirstWeekStartingDate - 1)
    console.log("the next Month Before First Date", nextMonthFirstWeekBeforeStartingDate)
    
   
    let nextMonthFirstWeekArray =[]
    let nextMonthFirstWeekCompleteDate=[]
    for(let i=0; i<=6;i++){
        let  nextMonthFirstWeekValues = new Date(nextMonthFirstWeekBeforeStartingDate.setDate(nextMonthFirstWeekBeforeStartingDate.getDate() + 1))
        console.log("the next Month's first Weeks's Value",nextMonthFirstWeekBeforeStartingDate )
        nextMonthFirstWeekCompleteDate.push(nextMonthFirstWeekValues) 
        nextMonthFirstWeekArray.push(nextMonthFirstWeekValues.getDate())
        
    }
    
   console.log("the next first week complete date", nextMonthFirstWeekArray)


    // ending of the month
    let nextMonthLastDate =  new Date(nextMonthValue.getFullYear(), nextMonthValue.getMonth()+1, 0)
    let nextMonthEndingWeekInitalDate = new Date(nextMonthLastDate.setDate(nextMonthLastDate.getDate()-nextMonthLastDate.getDay()))
    console.log("the next Month starting of the end Week", nextMonthEndingWeekInitalDate)
    let nextMonthEndingWeekBeforeInitalDate = new Date(nextMonthEndingWeekInitalDate - 1)
    console.log("the value before the start of the ending week", nextMonthEndingWeekBeforeInitalDate)
    
    let nextMonthLastWeekArray =[]
    let nextMonthLastWeekCompleteDate=[]
    for(let i=0; i<=6;i++){
        let nextMonthLastWeekValue = new Date(nextMonthEndingWeekBeforeInitalDate.setDate(nextMonthEndingWeekBeforeInitalDate.getDate()+1)) 
        nextMonthLastWeekArray.push(nextMonthLastWeekValue.getDate())
        nextMonthLastWeekCompleteDate.push(nextMonthLastWeekValue)

    }

     console.log("the next week complete date of the last week", nextMonthLastWeekArray)
    
    let firstWeekLastIndex= nextMonthFirstWeekArray[nextMonthFirstWeekArray.length - 1]

    let lastWeekFirstIndex=nextMonthLastWeekArray[0]
   
    let nextMonthRemaningWeekArray=[]
    for (let i=(firstWeekLastIndex+1); i<lastWeekFirstIndex; i++ ){
        console.log("i", i)
        nextMonthRemaningWeekArray.push(i)

    }

    let nextMonthCompleteMonthArray = [nextMonthFirstWeekArray,nextMonthRemaningWeekArray, nextMonthLastWeekArray ]
    let nextMonthCompleteMonthArrayMergered = nextMonthCompleteMonthArray.flat()
      console.log("next Month dates",nextMonthCompleteMonthArrayMergered)

      let splitedArraynextMonth = []
      let chunkSize = 7;
    

    for (let i = 0; i < nextMonthCompleteMonthArrayMergered.length; i += chunkSize) {
        splitedArraynextMonth.push(nextMonthCompleteMonthArrayMergered.slice(i, i + chunkSize));
    }

    console.log("the splitedArray of the next Method", splitedArraynextMonth)

   
    let arrayOfObjects = []
    splitedArraynextMonth.forEach((element, index) => {
        console.log("element", element, index)
        if(index==0){
            element.forEach((value,elementIndex)=>{
                console.log("value of dates", value, dayItems[elementIndex].humanFormat)
                const firstIndexObj = {}
                firstIndexObj["date"] = value
                firstIndexObj["day"] =  dayItems[elementIndex].humanFormat
                arrayOfObjects.push(firstIndexObj)
                console.log("object1",firstIndexObj)
            })
        }else {
            element.forEach((value, elementIndex)=>{
                const allIndexObj = {}
                allIndexObj["date"] = value
                console.log("object2", allIndexObj)
                arrayOfObjects.push(allIndexObj)
            })

        }

        console.log("the array of the objects",arrayOfObjects)

        
    });
    
    let finalSplitedArray = []
    let Size = 7;
    for (let i = 0; i < arrayOfObjects.length; i += Size) {
        finalSplitedArray.push(arrayOfObjects.slice(i, i + Size));
    }
    console.log("final Array",finalSplitedArray)
    
    let monthAndYear = []
    let month = nextMonthValue.toLocaleString('en-us', { month: 'long' })
    let monthandYearObj = {"month":month, "year":nextMonthValue.getFullYear()}
    monthAndYear.push(monthandYearObj)
    setTitle(monthAndYear)
    setMonthDates(finalSplitedArray)
    setMonthValue(nextMonthValue)

    // console.log("final Array",finalSplitedArray)
    


}


const handleClick = (e) =>{
     console.log(e.target)
     let taskDiv = document.createElement("div")
     taskDiv.style.width="50%"
     taskDiv.style.height="18px"
     taskDiv.style.position="absolute"
     taskDiv.style.backgroundColor = "blue"
     
    

}


    return(
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
                            title.map(item=>(
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