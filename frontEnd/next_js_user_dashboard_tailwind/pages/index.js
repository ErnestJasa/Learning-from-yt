import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '../components/Header'
import TopCards from '@/components/TopCards'
import BarChart from '@/components/BarChart'
import RecentOrders from '@/components/RecentOrders'
const inter = Inter({ subsets: ['latin'] })

// https://youtu.be/KpGZjrrS3pY?list=PLuyywttDftVX8xTNErbwKUp2VYarnDm2B&t=3444 tutorial


export default function Home() {
  return (
    <main className='bg-gray-100 min-h-screen'>
      <Header />
      <TopCards/>
      <div className='p-4 grid md:grid-cols-3 grid-cols-1 gap-4'>
        <BarChart/>
        <RecentOrders/>
      </div>
    </main>
  )
}
