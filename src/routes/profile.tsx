import { createFileRoute, Link } from '@tanstack/react-router'
import { client } from "~/utils/hono-client"
import { useEffect, useState } from "react"
import { createServerFn } from '@tanstack/react-start'
import { Mail } from 'lucide-react'

const getData = createServerFn()
  .handler(async() => {
    const res = await client.api.profile.me.$get()
    const data = await res.json()
    console.log(data)

    return data
  })

const getData2 = async() => {
    const res = await client.api.profile.me.$get()
    const data = await res.json()
    console.log(data.data)

    return data.data
  }

export const Route = createFileRoute('/profile')({
  component: RouteComponent,
  ssr: false
})

function RouteComponent() {
  const [ data, setData ] = useState({})

  useEffect(()=>{
    getData2().then(setData)
  },[])


  return (
    <div className='flex justify-center items-center h-[80vh]'>
      <div className='flex flex-col gap-4 bg-neutral-900 rounded-3xl p-4 w-fit'>
        <div className='flex gap-4 bg-neutral-800 p-4 rounded-3xl'>
          <img src='/image.png' className='w-[140px] rounded-3xl'/>
          <div className='flex flex-col justify-center'>
            <p className='font-bold text-white text-[1.4rem]'>Mentor rizz</p>
            <p className='text-gray-100'>{data?.email}</p>
          </div>
        </div>
        <div className='p-4 rounded-3xl bg-neutral-800'>
          <p className='text-[1.2rem] text-white'>About</p>
          <div className='text-gray-100'>
            <ul className='w-[300px]'>
              <li className="before:content-['🎉'] before:mr-2">tidak suka yg bloated, ie axios</li>
              <li className="flex items-start space-x-2">
                <span className="before:content-['🎉']"></span>
                <div>
                  preaching zen python : <b>Explicit is better than implicit</b>
                </div>
              </li>
              <li className="before:content-['🎉'] before:mr-2">new tab daily.dev</li>
              <li className="before:content-['🎉'] before:mr-2">tidak suka useContext</li>
              <li className="before:content-['🎉'] before:mr-2">selalu ready snack</li>
            </ul>
          </div>
        </div>
        <Link to="https://devscale.id" className='bg-lime-400 py-4 rounded-3xl flex flex-cols gap-2 justify-center'>
          <Mail />
          <p>Message</p>
        </Link>
      </div>
    </div>
  )
}
