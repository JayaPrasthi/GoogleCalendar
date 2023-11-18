import Image from "next/image"
import { Fragment, useEffect, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/24/outline'
import { Mina } from "next/font/google"
'use strict'

const dayMappingList = [
    {
        humanFormat : "SUN",
        machineFormat: 0


    },
    {
        humanFormat : "MON",
        machineFormat: 1


    },
    {
        humanFormat : "TUE",
        machineFormat: 2


    },
    {
        humanFormat : "WED",
        machineFormat: 3


    },
    {
        humanFormat : "THUR",
        machineFormat: 4


    },
    {
        humanFormat : "FRI",
        machineFormat: 5


    },
    {
        humanFormat : "SAT",
        machineFormat: 6


    }
]

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
        machineFormat:11
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
        machineFormat:23
    },
    {
        humanFormat: "12AM",
        machineFormat: 24
    }
]

const monthValues = [
    {humanFormant: "JAN",
     machineFormat:0
    },
    {
     humanFormat:"FEB",
     machineFormat:1
    },
    {
    humanFormat:"MAR",
    machineFormat:2
    },
    {
    humanFormat:"APR",
    machineFormat:3
    },
    {
    humanFormat:"MAY",
    machineFormat:4
    },
    {
    humanFormat:"JUNE",
    machineFormat:5
    },
    {
    humanFormat:"JULY",
    machineFormat:6
    },
    {
     humanFormat:"AUG",
     machineFormat:7
    },
    {
    humanFormat:"SEP",
    machineFormat:8
    },
    {
    humanFormat:"OCT",
    machineFormat:9
    },
    {
    humanFormat:"NOV",
    machineFormat:10
    },
    {
     humanFormat:"DEC",
     machineFormat:11
    },

]



export const Calender = () => {
    const [open, setOpen] = useState(false)
    const cancelButtonRef = useRef(null)
    const[intialTime, setIntialTime] = useState()
    const[finalTime, setFinalTime] = useState()
    const[intialTimeMF, setIntialTimeMF] = useState()
    const[finalTimeMF, setFinalTimeMF] = useState()
    const[prevNoofDayCounter, setPrevNoofDayCounter] = useState()
    const[nextNoofDayCounter, setNextNoofDayCounter] = useState()
    const[day, setDay]= useState()
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const[week, setWeek] = useState([])
    const[firstValueOfWeek, setFirstValueOfWeek] =  useState([])
    const[lastValueOfWeek, setLastValueOfWeek] = useState([])
    const [month, setMonth] = useState()
    const[grid, setGrid] = useState()
    const[monthValueforId, setMonthValueforId] = useState()


    useEffect(() => {
      const returned_data = () => {

            return (
                <>
                {
                     dayMappingList.map(item => (
                        <div className="border-[#DFE0E3]  border-l  w-[15%]" id={`day-${item.machineFormat}`}>
                            {
                                
                                timeMappingList.map((item1) => (
                                    <div className=" w-[100%] h-[35px] border-b border-[#DFE0E3]"  onClick={(event)=>handleClick(event,item.machineFormat, item1.machineFormat )} id={`day-${item.machineFormat}-time-${item1.machineFormat}`}></div>
                                ))

                            }

                        </div>

                    ))
                }
                </>
            )


        }

        setGrid(returned_data)



    }, [])

    useEffect(()=>{

        let date = new Date()
        let currentDay
        let tempArray = []
        let dateofTheWeekArray = []
        let monthArray = []
        
       
        
        
        // console.log(date)
        let startingOfTheWeekValue = (date.getDate() - date.getDay())
        //  console.log("starting",startingOfTheWeekValue)
        let startingOftheWeekDate = new Date(date.setDate(startingOfTheWeekValue))
        // console.log(startingOftheWeekDate)
        let endingOftheWeekDate = new Date(date.setDate(startingOfTheWeekValue + 6))
        // console.log("ending",endingOftheWeekDate    )
    

        // let week = new Date()
        // console.log(new Date(week.setDate(1-7)))

    
        for(let i=startingOftheWeekDate.getDate(); i<=endingOftheWeekDate.getDate(); i++){
            let currentWeekDate = new Date(date.setDate(i))
            setMonth(currentWeekDate.getMonth())
            // dateofTheWeekArray.push(currentWeekDate)
            let monthObj={}
             monthObj["month"]= currentWeekDate.getMonth()
            //  console.log("month Object", monthObj)
             monthArray.push(monthObj)



            // console.log(currentWeekDate)
            // console.log(dateofTheWeekArray)
            
            


             let weekObj = {}

            // currentDay = new Date(date.getFullYear(), date.getMonth(), currentWeekDate );
            // currentDay = new Date( currentWeekDate );
            // console.log("currentDay", currentDay)
            // currentMonth = currentDay.getMonth()
            // console.log("currentMonth", currentMonth,currentDay)
            dayMappingList.forEach(item=>{
               if(item.machineFormat == currentWeekDate.getDay()){
                  weekObj["Day"] = item.humanFormat

               }
            })
            //  weekObj["Day"]=currentDay.getDay()

            
            
            
            weekObj["Date"]= currentWeekDate.getDate()
            
            tempArray.push(weekObj)
            
            
            
        }
        
        console.log("date of the week pushed in to the array ",dateofTheWeekArray )
        const newDate = new Date()
        // let firstValueoftheDateoftheWeekArray = dateofTheWeekArray[0]
        // let finalValueoftheDateoftheWeekArray = dateofTheWeekArray[dateofTheWeekArray.length-1]
        
        
        // if(finalValueoftheDateoftheWeekArray.getMonth()==firstValueoftheDateoftheWeekArray.getMonth()&&
        // finalValueoftheDateoftheWeekArray.getFullYear()== firstValueoftheDateoftheWeekArray.getFullYear()){
        //     setMonth([finalValueoftheDateoftheWeekArray.getMonth(),"  ", finalValueoftheDateoftheWeekArray.getFullYear()])
        // }else if(finalValueoftheDateoftheWeekArray.getMonth()!== firstValueoftheDateoftheWeekArray.getMonth()&&
        // finalValueoftheDateoftheWeekArray.getFullYear()== firstValueoftheDateoftheWeekArray.getFullYear()){
        //     setMonth([firstValueoftheDateoftheWeekArray.getMonth()-finalValueoftheDateoftheWeekArray.getMonth(), firstValueoftheDateoftheWeekArray.getFullYear()])
        // }else if(finalValueoftheDateoftheWeekArray.getMonth()!== firstValueoftheDateoftheWeekArray.getMonth() &&
        // finalValueoftheDateoftheWeekArray.getFullYear()!== firstValueoftheDateoftheWeekArray.getFullYear()){
        //     setMonth([firstValueoftheDateoftheWeekArray.getMonth(), " " , firstValueoftheDateoftheWeekArray.getFullYear(), "-", finalValueoftheDateoftheWeekArray.getMonth(), "-",finalValueoftheDateoftheWeekArray.getFullYear() ])
        // }
        
        const today = new Date()
        let numeberOfDaysCompleted = today.getDay()
        let remainingDayInaWeek = 6-today.getDay()
        console.log("remaningDayinAWeek", remainingDayInaWeek)
    
        // console.log("calculated previous week first,",numeberOfDaysCompleted)
    
        // console.log("tempArray", tempArray)
        setWeek(tempArray)
        setFirstValueOfWeek(startingOftheWeekDate.toString())
        setPrevNoofDayCounter(numeberOfDaysCompleted+8)
        setNextNoofDayCounter(remainingDayInaWeek)

        // setArrayofWeek(dateofTheWeekArray)
        // setFirstValueOfWeek(tempArray[0])
        // setLastValueOfWeek(tempArray[tempArray.length-1])
    
},[])

// const handlePrevious = () =>{
//     let date = new Date()
    
//     // console.log(date)
//     let tempArray = []
//     let prevMonth
//     let firstDateOftheMonth
//     let prevDay

//     for(let i=7; i>=1;i--){
//         let weekObj={}
//         console.log("firstValueofWeek", firstValueOfWeek.Date)
//         let prevWeekDate = firstValueOfWeek.Date - i
//         console.log("previous week dates",prevWeekDate)
//         // let previousMonth = date.getMonth()-1
// //         var firstOfMonth = new Date(date.getFullYear(), date.getMonth(), 1);
// //         var lastOfMonth = new Date(date.getFullYear(), date.getMonth()+1, 0);
// //         console.log("first", firstOfMonth, "last", lastOfMonth)
// //         var used = firstOfMonth.getDay() + lastOfMonth.getDate();
// //         console.log(firstOfMonth.getDay() + lastOfMonth.getDate())
// // ''
// //         console.log(Math.ceil( used / 7))
//         // setMonth(previousMonth)
//         // if(prevWeekDate==-1){
//         //     console.log("month",date.getMonth()-1)
//         //     prevDay= new Date(date.getFullYear(), month, prevWeekDate );
//         //     console.log("pr",prevDay)
//         //     // date.setMonth(date.getMonth()-1)
//         // }
//         prevDay= new Date(date.getFullYear(), date.getMonth(), prevWeekDate );
//         // console.log(date.getWeek())

        
//         // firstDateOftheMonth =  new Date(date.getFullYear(), date.getMonth(), 0 );

        
       
//         // console.log("first Date of the Month ", firstDateOftheMonth)
//         //  console.log("prevDay", prevDay.getMonth(), prevDay)

        
//         //  prevMonth = prevDay.getMonth() 
//         // if(prevDay.getDate() ===  firstDateOftheMonth.getDate()){
//         //       setMonth(prevDay.getMonth())
//         // }
        
//         dayMappingList.forEach(item=>{
//                if(item.machineFormat == prevDay.getDay()){
//                   weekObj["Day"] = item.humanFormat
//                 //   console.log("tempArray 1", tempArray, tempArray.length )
                  
//                }
//         })

//         weekObj["Date"] = prevDay.getDate()
//         tempArray.push(weekObj)
//         // console.log("tempArray inside the loop", tempArray)
        
        
//     }
    
//     // console.log("tempArray outside the loop", tempArray)
//     setWeek(tempArray)
//     setFirstValueOfWeek(tempArray[0])
//     setLastValueOfWeek(tempArray[tempArray.length-1])
//     // setMonth(prevMonth)
    
    
// }

useEffect(()=>{
    console.log(month)

},[month])

const handlePrevious = () =>{
      let currentDate = new Date()
      currentDate.setDate(currentDate.getDate() - prevNoofDayCounter) 
      
      console.log("handlePrevious - currentDate : ",currentDate)
      setPrevNoofDayCounter(prevNoofDayCounter+7)
      setNextNoofDayCounter(nextNoofDayCounter-7)
      
    //   let tempArray = []
       let dateofTheWeekArray = []
    //  console.log("handlePrevious - current week first date : ",firstValueOfWeek )
    //  let currentWeekFirstDate = new Date(Date.parse(firstValueOfWeek))
    //  console.log("handlePrevious - current week first date : ",currentWeekFirstDate)
    //  let startingOfTheWeekDate = new Date(date.setDate(currentWeekFirstDate.getDate()-prevNoofDayCounter))
    //  console.log( "handlePrevious - calculated starting date of previous week : ",startingOfTheWeekDate)
    //   let endingOftheWeekDate = new Date(date.setDate(startingOfTheWeekDate.getDate()+6))
    //  console.log(" handlePrevious - calculated ending date of previous week  : ",endingOftheWeekDate)
    // var list_of_dates = []
  
     for(let i=0; i<=6;i++){
        let weekObj={}
        // console.log("current Date",currentDate.getDate())
         let previousWeekDates = new Date(currentDate.setDate(currentDate.getDate() + 1))
          dateofTheWeekArray.push(previousWeekDates)
         
        console.log(previousWeekDates)
        dayMappingList.forEach(item=>{
            if(item.machineFormat == previousWeekDates.getDay()){
                weekObj["Day"] = item.humanFormat
                //   console.log("tempArray 1", tempArray, tempArray.length )
                
            }
        })
        
        weekObj["Date"] = previousWeekDates.getDate()
        tempArray.push(weekObj)
         
        // let constantDate = new Date(startingOfTheWeekDate)
        // let prevWeekDate = new Date(constantDate.setDate(constantDate.getDate()+i))
        // list_of_dates.push(prevWeekDate)
        // console.log(date.getMonth())
        // console.log(prevWeekDate.getMonth())
        //console.log(" handlePrevious - prev",prevWeekDate.toString())
        // list_of_dates.push(new Date(previousWeekDates.toString()))
        // console.log("end:",prevNoofDayCounter)
        
    }

        const newDate = new Date()
        let firstValueoftheDateoftheWeekArray = dateofTheWeekArray[0]
        let finalValueoftheDateoftheWeekArray = dateofTheWeekArray[dateofTheWeekArray.length-1]
        
        
        if((finalValueoftheDateoftheWeekArray.getMonth()==firstValueoftheDateoftheWeekArray.getMonth()) &&
        (finalValueoftheDateoftheWeekArray.getFullYear()== firstValueoftheDateoftheWeekArray.getFullYear())){
            console.log("1st condition")
            setMonth([finalValueoftheDateoftheWeekArray.getMonth(),"  ", finalValueoftheDateoftheWeekArray.getFullYear()])
        }
        
         if((finalValueoftheDateoftheWeekArray.getMonth()!== firstValueoftheDateoftheWeekArray.getMonth()) &&
        (finalValueoftheDateoftheWeekArray.getFullYear()!== firstValueoftheDateoftheWeekArray.getFullYear())){
            console.log("2nd condition")
            setMonth([firstValueoftheDateoftheWeekArray.getMonth(), " " , firstValueoftheDateoftheWeekArray.getFullYear(), "-", finalValueoftheDateoftheWeekArray.getMonth(), "-",finalValueoftheDateoftheWeekArray.getFullYear() ])
        }
        else if((finalValueoftheDateoftheWeekArray.getMonth()!== firstValueoftheDateoftheWeekArray.getMonth())&&
        (finalValueoftheDateoftheWeekArray.getFullYear()=== firstValueoftheDateoftheWeekArray.getFullYear())){
            console.log("3rd condition")
            setMonth([firstValueoftheDateoftheWeekArray.getMonth(), " - " ,finalValueoftheDateoftheWeekArray.getMonth()," ", firstValueoftheDateoftheWeekArray.getFullYear()])
        }
        
    
    //    console.log(list_of_dates)
    //  console.log(list_of_dates)
    //  let tt = new Date(startingOfTheWeekDate)
    //  console.log(tt)
    //  let ff = new Date(tt.setDate(tt.getDate() + 1))
    //  console.log(ff)

    //  for(let i=1; i<=7;i++){

    //     let ff  = new Date(tt.setDate(tt.getDate()+i))
    //     console.log(ff)
    //  }

        
        //   console.log("starting", startingOfTheWeekDate.getDate()-i)
        //  console.log("constant", constant.getDate(), constant.getMonth())
        // console.log("date", date)
     

    // //   for(let i=startingOfTheWeekDate.getDate();i<=endingOftheWeekDate.getDate();i++){
    //      let weekObj={}
    // //     console.log(i.getMonth())
          
    // //     //   let prevWeekDate=new Date(date.setDate(i), date.setMonth())
    // //     //     console.log(prevWeekDate)
    //     //   dayMappingList.forEach(item=>{
    //     //     if(item.machineFormat == prevWeekDate.getDay()){
    //     //         weekObj["Day"] = item.humanFormat
    //     //     //   console.log("tempArray 1", tempArray, tempArray.length )
                
    //     //     }
    //     //    })
           
    //     //    weekObj["Date"]= prevWeekDate.getDate()
    //     //    tempArray.push(weekObj)
          
     

    setWeek(tempArray)
    //setFirstValueOfWeek(startingOfTheWeekDate.toString())
    
   
    
}

// const handleNext = () =>{
//     let date = new Date()
//     let tempArray = []
//     let nextMonth
//     for(let i=1;i<=7;i++){
//         let weekObj={}
//         let nextWeekDate = lastValueOfWeek.Date + i
//         console.log("nextWeekDate",nextWeekDate) 
//         let nextWeekDay = new Date(date.getFullYear(), date.getMonth(), nextWeekDate );
//         // nextMonth = nextWeekDay.getMonth()
//         console.log("nextMonth", nextMonth)
//         dayMappingList.forEach(item=>{
//                 if(item.machineFormat == nextWeekDay.getDay()){
//                    weekObj["Day"] = item.humanFormat
//                  //   console.log("tempArray 1", tempArray, tempArray.length )
                   
//                 }
//          })
 
//          weekObj["Date"] = nextWeekDay.getDate()
//          tempArray.push(weekObj)

//     }

//     setWeek(tempArray)
//     setFirstValueOfWeek(tempArray[0])
//     setLastValueOfWeek(tempArray[tempArray.length-1])
//     // setMonth(nextMonth)
     

// }

const handleNext = () =>{
    let currentDate = new Date()
    currentDate.setDate(currentDate.getDate()+nextNoofDayCounter)
    let month = setMonth(currentDate.getMonth())
    setNextNoofDayCounter(nextNoofDayCounter+7)
    setPrevNoofDayCounter(prevNoofDayCounter-7)
    // console.log(nextNoofDayCounter)
    for(let i=1;i<=7;i++){
        let weekObj={}
        let nextWeekDates = new Date(currentDate.setDate(currentDate.getDate()+1))
        // console.log(nextWeekDates)
        dayMappingList.forEach(item=>{
            if(item.machineFormat == nextWeekDates.getDay()){
                weekObj["Day"] = item.humanFormat
                //   console.log("tempArray 1", tempArray, tempArray.length )
                
            }
        })
        
        weekObj["Date"] = nextWeekDates.getDate()
        tempArray.push(weekObj)
    }

    setWeek(tempArray)
    
}


   


    var mouseEventArray = []
    var tempArray = []
    var idArray=[]
    let splitedArr = []
    let pureNumArr = []
    let dayValue 
    let startValueofDiv
    let endValueofDiv

    const handleSave = (e) => {
        fetch("http://127.0.0.1:8000/googleCalender/calender/", {     
            method: "POST",
            body: JSON.stringify({
                title_name: title,
                description: description,
                start_time: intialTimeMF,
                end_time: finalTimeMF ,
                Week_Day: day,

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


    useEffect(()=>{
        fetch("http://127.0.0.1:8000/googleCalender/calender/")    
    .then((res) => res.json())
     .then((response) => {
         response.forEach(res=>{
             console.log(res)
            dayMappingList.forEach(obj=>{
                if(obj.humanFormat == res.Week_Day){
                    dayValue = obj.machineFormat
                    
                }

            })

            console.log("dayValue", dayValue)

            timeMappingList.forEach(obj=>{
                if(obj.machineFormat==  res.start_time){
                    startValueofDiv = obj.machineFormat

                }

                if(obj.machineFormat==  res.end_time){
                    endValueofDiv = obj.machineFormat

                }
            })

          let startTimeStampElement = document.getElementById(`day-${dayValue}-time-${res.start_time}`)
          let endTimeStampElement = document.getElementById(`day-${dayValue}-time-${res.end_time}`)

          if(startTimeStampElement.id.includes(res.start_time) && endTimeStampElement.id.includes(res.end_time)){
            for(let i = res.start_time; i <= res.end_time; i++) {
                 let divCollection = document.getElementById(`day-${dayValue}-time-${i}`)
                console.log("div", divCollection)
                divCollection.style.backgroundColor="blue"

                
                
                
            }

            startTimeStampElement.innerHTML = res.title_name  + "   " + res.start_time + - + res.end_time  + "      " + res.description
            
            
        }
         
            
            
        })


     })
     .catch((err) => {
        console.log(err.message);
     })
        

    },[])


    
   
    const handleClick = (event, machineFormatForDay, machineFormatForTime) =>{
            
            let IndividualColumn = document.getElementById(`day-${machineFormatForDay}`)
            mouseEventArray.push(event.target)
            if(IndividualColumn){
                IndividualColumn.addEventListener("mousemove", handleMouseMove)
                IndividualColumn.addEventListener("mouseup", handleMouseUp)

            }

            // console.log("mouseEventArrayOnClick", mouseEventArray)


    }

    const handleMouseMove = (event) =>{
        
        mouseEventArray.push(event.target)
        // console.log("mouseEventArrayonMove", mouseEventArray)
        let mouseEventSet = new Set(mouseEventArray)
        mouseEventArray=[]
        mouseEventArray=Array.from(mouseEventSet)
        // console.log("mouseEventArray", mouseEventArray)

        
    }

    const handleMouseUp = () =>{
        
        
        let lastElementOfTheArray = mouseEventArray[mouseEventArray.length-1]
        let lastDiv = document.getElementById(lastElementOfTheArray.id)
        lastDiv.parentElement.removeEventListener("mousemove", handleMouseMove)
        mouseEventArray.forEach(div=>{
            div.style.backgroundColor = "green"
            // idArray.push(div.id)
            
        })
        
        
        let firstElementOfmouseEventArray = mouseEventArray[0]
        let lastElementOfmouseEventArray = mouseEventArray[mouseEventArray.length-1]
        tempArray.push(firstElementOfmouseEventArray, lastElementOfmouseEventArray)
        
        tempArray.forEach(element=>{
            
            idArray.push(element.id)
            
        })
        
        idArray.forEach(strID => {
            let strValues = strID.slice(-2)
            splitedArr.push(strValues)
            
            
        })


        
        if (splitedArr.forEach(item => {
            let pureNum = item.split('-').join('');
            // console.log(pureNum)
            pureNumArr.push(pureNum)
            pureNumArr.sort((a,b)=>(Number(a)- Number(b)))
            
            
            
            
            
        }))
        
        
        console.log("timeMappingList",timeMappingList)
        console.log("time",timeMappingList)
        if(timeMappingList!== null || timeMappingList!== undefined){
            timeMappingList.forEach(obj=>{
              if(obj.machineFormat== pureNumArr[0]){
                 setIntialTime(obj.humanFormat)
                 setIntialTimeMF(obj.machineFormat)
              }else if(obj.machineFormat==pureNumArr[pureNumArr.length-1]){
                setFinalTime(obj.humanFormat)
                setFinalTimeMF(obj.machineFormat)
              }
                
            })

        }

         let dayoftheWeekNum = idArray[0][4]
         if(dayMappingList!==null || dayMappingList!== undefined){
            dayMappingList.forEach(obj=>{
                if(obj.machineFormat==dayoftheWeekNum){
                    setDay(obj.humanFormat)
                }
            })
         }
        



               

        




          
          setOpen(true)



         

         
         


           


    }

    





    
    return(
        <>
        <div className="bg-white w-[full] h-[1000px]">
            <div className="flex flex-row w-[100%] h-[30px] gap-[10px] pt-[10px] ml-[100px]"> 
            <div   onClick={(e)=>handlePrevious(e)}  className="mt-[5px] "> 
            <Image
            src="/left-arrow.png"
            width={15}
            height={15}
            alt="previous"
            />
                
            </div>
            <div onClick={(e)=>handleNext(e)}  className="mt-[5px]"> 
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
                    week.map(item=>(
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
                       timeMappingList.map(item=>(
                           <div className="text-[#70757a] text-[10px] pt-[20px] ">{item.humanFormat} </div>

                       ))
                        
                    }
                </div>

                <div id="column" className={`w-[80%] flex flex-rows  border-t border-[#DFE0E3]`}>
                    {
                        grid
                        // dayMappingList.map(item => (
                        //     <div className="border-[#DFE0E3]  border-l  w-[15%]" id={`day-${item.machineFormat}`}>
                        //         {
                                    
                        //             timeMappingList.map((item1) => (
                        //                 <div className=" w-[100%] h-[35px] border-b border-[#DFE0E3]"  onClick={(event)=>handleClick(event,item.machineFormat, item1.machineFormat )} id={`day-${item.machineFormat}-time-${item1.machineFormat}`}></div>
                        //             ))
    
                        //         }
    
                        //     </div>
    
                        // ))

                    }
                    
                </div>


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
                                            <div className=""> {intialTime}-{finalTime}</div>
                                            <div>{day}</div>
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
                                        <button onClick={(e) => handleSave(e)}  className=" w-[70px] h-[36px] border-[1px] rounded-[4px] bg-blue-500 text-[white]"> Save </button>
                                    </div>

                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>
        </>

    )

}