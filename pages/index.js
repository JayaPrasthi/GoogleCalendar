import Image from 'next/image'
import { Inter } from 'next/font/google'
import { GoogleCalender } from '@/components/googleCalendertask'
import { Calender } from '@/components/Calender'
import { Week } from '@/components/week'
import { MainComponent } from '@/components/main'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   <>
   {/* {<Week/>} */}
   {/* <Calender/> */}
   {/* <GoogleCalender/> */}
   <MainComponent />
   </>
  )
}
