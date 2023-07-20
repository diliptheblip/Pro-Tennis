"use client"
import React, { useState, useEffect } from 'react'
import Link from 'next/link'

import { useRouter } from 'next/navigation'

const Sidebar = () => {
  const [open, setOpen] = useState(true)

  

  const router: any = useRouter();

 

  return (

    <aside className={`${!open ? 'w-20' : 'w-64'} duration-200 p-5 pt-5 bg-[#000000] bg-opacity-20 rounded xs:hidden md:flex fixed top-[4.4rem] left-0 h-[90vh]`}>
      <div>
        {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" onClick={() => setOpen(!open)} className={`absolute cursor-pointer -right-2 top-6 ${!open && 'rotate-180'}`} style={{ "fill": "rgba(126, 134, 187, 1)", "transform": ";msFilter:" }}><path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm5 11h-5v4l-5-5 5-5v4h5v2z"></path></svg> */}
        <Link href="/dashboard"><div className='flex items-center gap-x-4 cursor-pointer'>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{ "fill": "rgba(255, 255, 255, 1)", "transform": ";msFilter:;" }}><path d="M4 13h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1zm-1 7a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v4zm10 0a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v7zm1-10h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1z"></path></svg>
          <p className={`text-[rgba(126, 134, 187, 1)] origin-left font-medium duration-300 ${!open && 'hidden'}`}>Dashboard</p>
        </div></Link>

        <ul className="pt-6">
          <Link href="/dashboard/sport"><li className="flex rounded-md p-2 cursor-pointer hover:bg-[#243B55] hover:rounded  text-gray-300 text-sm items-center gap-x-4 mt-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{ "fill": "rgba(255, 255, 255, 1)", "transform": ";msFilter:;" }}><path d="M19 3H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2zm-7.933 13.481-3.774-3.774 1.414-1.414 2.226 2.226 4.299-5.159 1.537 1.28-5.702 6.841z"></path></svg>
            <span className={`${!open && "hidden"} origin-left duration-200`}>
             Sport
            </span>
          </li></Link>
          <Link href="/dashboard/admin"><li className="flex  rounded-md p-2 cursor-pointer hover:bg-[#243B55] hover:rounded  text-gray-300 text-sm items-center gap-x-4 mt-6">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{ "fill": "rgba(255, 255, 255, 1)", "transform": ";msFilter:;" }}><path d="M21 3h-7a2.98 2.98 0 0 0-2 .78A2.98 2.98 0 0 0 10 3H3a1 1 0 0 0-1 1v15a1 1 0 0 0 1 1h5.758a2.01 2.01 0 0 1 1.414.586l1.121 1.121c.009.009.021.012.03.021.086.08.182.15.294.196h.002a.996.996 0 0 0 .762 0h.002c.112-.046.208-.117.294-.196.009-.009.021-.012.03-.021l1.121-1.121A2.01 2.01 0 0 1 15.242 20H21a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm-1 15h-4.758a4.03 4.03 0 0 0-2.242.689V6c0-.551.448-1 1-1h6v13z"></path></svg>
            <span className={`${!open && "hidden"} origin-left duration-200`}>
            Admin
            </span>
          </li></Link>
          <Link href="/dashboard/session"><li className="flex  rounded-md p-2 cursor-pointer hover:bg-[#243B55] hover:rounded  text-gray-300 text-sm items-center gap-x-4 mt-6">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{ "fill": "rgba(255, 255, 255, 1)", "transform": ";msFilter:;" }}><path d="M21 3h-7a2.98 2.98 0 0 0-2 .78A2.98 2.98 0 0 0 10 3H3a1 1 0 0 0-1 1v15a1 1 0 0 0 1 1h5.758a2.01 2.01 0 0 1 1.414.586l1.121 1.121c.009.009.021.012.03.021.086.08.182.15.294.196h.002a.996.996 0 0 0 .762 0h.002c.112-.046.208-.117.294-.196.009-.009.021-.012.03-.021l1.121-1.121A2.01 2.01 0 0 1 15.242 20H21a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm-1 15h-4.758a4.03 4.03 0 0 0-2.242.689V6c0-.551.448-1 1-1h6v13z"></path></svg>
            <span className={`${!open && "hidden"} origin-left duration-200`}>
            Session
            </span>
          </li></Link>
          <Link href="/dashboard/coaches"><li className="flex  rounded-md p-2 cursor-pointer hover:bg-[#243B55] hover:rounded  text-gray-300 text-sm items-center gap-x-4 mt-6">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{ "fill": "rgba(255, 255, 255, 1)", "transform": ";msFilter:;" }}><path d="M20 5h-9.586L8.707 3.293A.997.997 0 0 0 8 3H4c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V7c0-1.103-.897-2-2-2zm-4 9h-3v3h-2v-3H8v-2h3V9h2v3h3v2z"></path></svg>
            <span className={`${!open && "hidden"} origin-left duration-200`}>
              Coaches
            </span>
          </li></Link>
          <Link href="/dashboard/location"><li className="flex  rounded-md p-2 cursor-pointer hover:bg-[#243B55] hover:rounded  text-gray-300 text-sm items-center gap-x-4 mt-6">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{ "fill": "rgba(255, 255, 255, 1)", "transform": ";msFilter:;" }}><path d="M16 2H8C4.691 2 2 4.691 2 8v13a1 1 0 0 0 1 1h13c3.309 0 6-2.691 6-6V8c0-3.309-2.691-6-6-6zm1 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"></path></svg>
            <span className={`${!open && "hidden"} origin-left duration-200`}>
              Location
            </span>
          </li></Link>
          <Link href="/dashboard/coupon"><li className="flex  rounded-md p-2 cursor-pointer hover:bg-[#243B55] hover:rounded  text-gray-300 text-sm items-center gap-x-4 mt-6">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{ "fill": "rgba(255, 255, 255, 1)", "transform": ";msFilter:;" }}><path d="M5 22h14c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2h-2V2h-2v2H9V2H7v2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2zm4.799-2.013H8v-1.799l4.977-4.97 1.799 1.799-4.977 4.97zm5.824-5.817-1.799-1.799L15.196 11l1.799 1.799-1.372 1.371zM5 7h14v2H5V7z"></path></svg>
            <span className={`${!open && "hidden"} origin-left duration-200`}>
             Coupon
            </span>
          </li></Link>

          <Link href="/dashboard/tournament"><li className="flex  rounded-md p-2 cursor-pointer hover:bg-[#243B55] hover:rounded  text-gray-300 text-sm items-center gap-x-4 mt-6">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{ "fill": "rgba(255, 255, 255, 1)", "transform": ";msFilter:;" }}><path d="M20 2H8c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zM8 16V4h12l.002 12H8z"></path><path d="M4 8H2v12c0 1.103.897 2 2 2h12v-2H4V8z"></path><path d="m12 12-1-1-2 3h10l-4-6z"></path></svg>
            <span className={`${!open && "hidden"} origin-left duration-200`}>
             Tournament
            </span>
          </li></Link>

          {/* <Link href="/educationboard"><li className="flex  rounded-md p-2 cursor-pointer hover:bg-[#243B55] hover:rounded  text-gray-300 text-sm items-center gap-x-4 mt-6">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{ "fill": "rgba(255, 255, 255, 1)", "transform": ";msFilter:;" }}><path d="M20 3H4c-1.103 0-2 .897-2 2v11c0 1.103.897 2 2 2h4l-1.8 2.4 1.6 1.2 2.7-3.6h3l2.7 3.6 1.6-1.2L16 18h4c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2zM4 16V5h16l.001 11H4z"></path><path d="M6 12h4v2H6z"></path></svg>
            <span className={`${!open && "hidden"} origin-left duration-200`}>
              
            </span>
          </li></Link> */}

        </ul>
      </div>
    </aside>
  )
}

export default Sidebar