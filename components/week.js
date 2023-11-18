import Image from "next/image"
import { Fragment, useEffect, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/24/outline'
import { Mina } from "next/font/google"
'use strict'

const dayMappingList = [
    {
        humanFormat: "SUN",
        machineFormat: 0


    },
    {
        humanFormat: "MON",
        machineFormat: 1


    },
    {
        humanFormat: "TUE",
        machineFormat: 2


    },
    {
        humanFormat: "WED",
        machineFormat: 3


    },
    {
        humanFormat: "THUR",
        machineFormat: 4


    },
    {
        humanFormat: "FRI",
        machineFormat: 5


    },
    {
        humanFormat: "SAT",
        machineFormat: 6


    }
]

export const Week = () => {
    const [week, setWeek] = useState([])
    const [firstValueOfWeek, setFirstValueOfWeek] = useState([])
    const [lastValueOfWeek, setLastValueOfWeek] = useState([])
    const[ArrayofWeek, setArrayofWeek]= useState([])

    var dateofTheWeekArray = []
    useEffect(() => {

        let date = new Date()
        let currentDay
        let tempArray = []




        // console.log(date)
        let startingOfTheWeekValue = (date.getDate() - date.getDay())
        //  console.log("starting",startingOfTheWeekValue)
        let startingOftheWeekDate = new Date(date.setDate(startingOfTheWeekValue))
        // console.log(startingOftheWeekDate)
        let endingOftheWeekDate = new Date(date.setDate(startingOfTheWeekValue + 6))
        // console.log("ending",endingOftheWeekDate    )


        // let week = new Date()
        // console.log(new Date(week.setDate(1-7)))


        for (let i = startingOftheWeekDate.getDate(); i <= endingOftheWeekDate.getDate(); i++) {
            let currentWeekDate = new Date(date.setDate(i))
            // console.log(currentWeekDate)
            dateofTheWeekArray.push(currentWeekDate)
            // console.log(dateofTheWeekArray)



            let weekObj = {}

            // currentDay = new Date(date.getFullYear(), date.getMonth(), currentWeekDate );
            // currentDay = new Date( currentWeekDate );
            // console.log("currentDay", currentDay)
            // currentMonth = currentDay.getMonth()
            // console.log("currentMonth", currentMonth,currentDay)
            dayMappingList.forEach(item => {
                if (item.machineFormat == currentWeekDate.getDay()) {
                    weekObj["Day"] = item.humanFormat

                }
            })
            //  weekObj["Day"]=currentDay.getDay()



            weekObj["Date"] = currentWeekDate.getDate()
            tempArray.push(weekObj)



        }














        // console.log("tempArray", tempArray)
        setArrayofWeek(dateofTheWeekArray)
        setWeek(tempArray)
        setFirstValueOfWeek(startingOftheWeekDate)
        // setFirstValueOfWeek(tempArray[0])
        // setLastValueOfWeek(tempArray[tempArray.length-1])

    }, [])

    const handlePrevious = () => {
        // console.log(ArrayofWeek)
         var today = new Date(ArrayofWeek[0]);
         today.setDate(today.getDate() + 7); // getting the begginig of the next week

         console.log(today)

         var list_of_dates = [newdate.toString()] // converting it to string
         for (let i = 1; i<=6; i++) {
            let newdate = new Date(today) // getting that date 
            var dd = new Date(newdate.setDate(newdate.getDate() + 1))
            list_of_dates.push(newdate.toString())
            // console.log(dd)

        }
        console.log(list_of_dates)

        setArrayofWeek(list_of_dates)


        // setFirstValueOfWeek(today)

    }

    useEffect(()=>{

        console.log("Array of the week", ArrayofWeek)
    },[ArrayofWeek])



    return (
        <>
            <div className="bg-white w-[full] h-[1000px]">
                <div className="flex flex-row w-[100%] h-[30px] gap-[10px] pt-[10px] ml-[100px]">
                    <div onClick={(e) => handlePrevious(dateofTheWeekArray)} className="mt-[5px] ">
                        <Image
                            src="/left-arrow.png"
                            width={15}
                            height={15}
                            alt="previous"
                        />

                    </div>
                    <div onClick={(e) => handleNext(e)} className="mt-[5px]">
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

            </div>

        </>
    )

}