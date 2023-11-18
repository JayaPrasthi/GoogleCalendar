import Image from 'next/image'
import { Inter } from 'next/font/google'
import { GoogleCalender } from '@/components/googleCalendertask'
import { Calender } from '@/components/Calender'
import { Path } from '@/components/routing'
import { Week } from '@/components/week'


const inter = Inter({ subsets: ['latin'] })

export default function Routing() {
  return (
   <>
   
   <Path/>

   </>
  )
}
