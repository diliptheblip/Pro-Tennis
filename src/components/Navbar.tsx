"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation";
import Link from 'next/link';


const Navbar = () => {
  const router = useRouter()
  

 
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false)
  const [email, setEmail] = useState("")
  const [image, setImage] = useState("")
  const [name, setName] = useState("")
  const [show, setShow] = useState(false)

  const scrollHandler = () => {
    if (window.scrollY > 10) {
      setShow(true)
    } else {
      setShow(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', scrollHandler);
    return () => {
      window.removeEventListener('scroll', scrollHandler)
    }
  }, [])

  

  
//   useEffect(() => {
//     let email: any = localStorage.getItem('email')
//     email = email.replace(/^"(.+(?="$))"$/, '$1');
//     setEmail(email);
//     const navImage = async () => {
//       const output = await InstituteAPI.ReadInstitute({ email: email });
//       let verifyData = output?.output?.outputResponse[0];
//       setName(verifyData?.kycName);
//       console.log("verifyData", verifyData)
//       const s3Output = await s3API.ReadFile(verifyData?.profilePicture)
//       console.log("navS3", s3Output.output)
//       setImage(s3Output.output)

//     }
//     navImage();
//   }, [])

  return (
    <>
      <header className={`flex px-8 py-2 xs:px-0 w-[100vw] justify-between mb-2 fixed bg-[#ffffff]  z-20 `}>
        <div className="flex flex-col gap-1 w-4 justify-center cursor-pointer md:hidden ml-4" onClick={() => setVisible(!visible)}>
          <p className="border border-[#7e86bb]"></p>
          <p className="border border-[#7e86bb]"></p>
          <p className="border border-[#7e86bb]"></p>
        </div>
        <div className="w-[7rem] h-[3.3rem] p-2">
          <img src="http://localhost:3000/logo.jpg" alt="logo" className="w-[100%] h-[100%] ml-4" />
        </div>

        {/* <Search /> */}


        <div className="flex items-center md:w-48 justify-end relative mr-6">
          <div className="flex items-center xs:hidden sm:hidden md:flex">
            {(image) ? (<img className="w-8 h-8 rounded-full" src={image} alt="" />) : (<svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24" style={{ fill: "rgba(126, 134, 187, 1)", transform: "msFilter:" }}><path d="M12 2C6.579 2 2 6.579 2 12s4.579 10 10 10 10-4.579 10-10S17.421 2 12 2zm0 5c1.727 0 3 1.272 3 3s-1.273 3-3 3c-1.726 0-3-1.272-3-3s1.274-3 3-3zm-5.106 9.772c.897-1.32 2.393-2.2 4.106-2.2h2c1.714 0 3.209.88 4.106 2.2C15.828 18.14 14.015 19 12 19s-3.828-.86-5.106-2.228z"></path></svg>)
            }
            <span className="ml-2 text-xs"> {name} </span>

            {open && (
              <div className="p-2 w-52 shadow-lg absolute top-10 right-2 duration-200 bg-[#04061a] bg-opacity-60 ">
                <ul>
                  <Link href="/profile"> <li
                    onClick={() => setOpen(false)}
                    className="cursor-pointer hover:bg-[#243B55] hover:rounded px-2 py-1"
                  > Profile </li>
                  </Link>
                  <Link href="/dashboard/profilesettings"> <li
                    onClick={() => setOpen(false)}
                    className="cursor-pointer hover:bg-[#243B55] hover:rounded px-2 py-1"
                  > Profile-Settings </li>
                  </Link>
                  <li
                    // onClick={handleLogout}
                    className="cursor-pointer hover:bg-[#243B55] hover:rounded px-2 py-1"
                  > logout </li>
                </ul>
              </div>

            )

            }

            <svg onClick={() => setOpen(!open)} className={`cursor-pointer ${open && 'rotate-180'}`} xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" style={{ fill: "rgba(126, 134, 187, 1)", transform: ";msFilter:", }}><path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path></svg>
          </div>



          {/* <svg xmlns="http://www.w3.org/2000/svg" className="cursor-pointer md:flex sm:hidden xs:hidden" width="24" height="24" viewBox="0 0 24 24" style={{ fill: "rgba(126, 134, 187, 1)", transform: ";msFilter:;" }}><path d="M19 13.586V10c0-3.217-2.185-5.927-5.145-6.742C13.562 2.52 12.846 2 12 2s-1.562.52-1.855 1.258C7.185 4.074 5 6.783 5 10v3.586l-1.707 1.707A.996.996 0 0 0 3 16v2a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-2a.996.996 0 0 0-.293-.707L19 13.586zM19 17H5v-.586l1.707-1.707A.996.996 0 0 0 7 14v-4c0-2.757 2.243-5 5-5s5 2.243 5 5v4c0 .266.105.52.293.707L19 16.414V17zm-7 5a2.98 2.98 0 0 0 2.818-2H9.182A2.98 2.98 0 0 0 12 22z"></path></svg>
        <svg xmlns="http://www.w3.org/2000/svg" className="cursor-pointer md:flex sm:hidden xs:hidden" width="24" height="24" viewBox="0 0 24 24" style={{ fill: "rgba(126, 134, 187, 1)", transform: ";msFilter:;" }}><path d="M12 2C6.486 2 2 5.589 2 10c0 2.908 1.898 5.516 5 6.934V22l5.34-4.005C17.697 17.852 22 14.32 22 10c0-4.411-4.486-8-10-8zm0 14h-.333L9 18v-2.417l-.641-.247C5.67 14.301 4 12.256 4 10c0-3.309 3.589-6 8-6s8 2.691 8 6-3.589 6-8 6z"></path></svg> */}

          <div className="flex flex-col gap-1 w-4 cursor-pointer md:hidden" onClick={() => setOpen(!open)}>
            <p className="border border-[#7e86bb]"></p>
            <p className="border border-[#7e86bb]"></p>
            <p className="border border-[#7e86bb]"></p>
          </div>
        </div>
        {open && (
              <div className="p-2 w-52 shadow-lg absolute top-10 right-2 duration-200 bg-[#04061a] bg-opacity-70 md:hidden">
                <ul>
                  <Link href="/profile"> <li
                    onClick={() => setOpen(false)}
                    className="cursor-pointer hover:bg-[#243B55] hover:rounded px-2 py-1"
                  > Profile </li>
                  </Link>
                  <Link href="/dashboard/profilesettings"> <li
                    onClick={() => setOpen(false)}
                    className="cursor-pointer hover:bg-[#243B55] hover:rounded px-2 py-1"
                  > Profile-Settings </li>
                  </Link>
                  <li
                    // onClick={handleLogout}
                    className="cursor-pointer hover:bg-[#243B55] hover:rounded px-2 py-1"
                  > logout </li>
                </ul>
              </div>

            )

            }
      </header>
      {visible && <aside className='w-64 duration-200 p-5 pt-5 bg-[#000014] rounded xs:flex md:hidden fixed top-0 left-0 z-30 h-screen'>
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" onClick={() => setVisible(false)} className={`absolute cursor-pointer -right-2 top-6 `} style={{ "fill": "rgba(126, 134, 187, 1)", "transform": ";msFilter:" }}><path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm5 11h-5v4l-5-5 5-5v4h5v2z"></path></svg>
          <Link href="/dashboard"><div className='flex items-center gap-x-4 cursor-pointer'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{ "fill": "rgba(126, 134, 187, 1)", "transform": ";msFilter:;" }}><path d="M4 13h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1zm-1 7a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v4zm10 0a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v7zm1-10h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1z"></path></svg>
            <p className={`text-[rgba(126, 134, 187, 1)] origin-left font-medium duration-300`}>Dashboard</p>
          </div></Link>

          <ul className="pt-6">
            <Link href="/dashboard/kyc"><li className="flex rounded-md p-2 cursor-pointer hover:bg-[#243B55] hover:rounded  text-gray-300 text-sm items-center gap-x-4 mt-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{ "fill": "rgba(126, 134, 187, 1)", "transform": ";msFilter:;" }}><path d="M19 3H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2zm-7.933 13.481-3.774-3.774 1.414-1.414 2.226 2.226 4.299-5.159 1.537 1.28-5.702 6.841z"></path></svg>
              <span className=" origin-left duration-200">
                KYC Form
              </span>
            </li></Link>
            <Link href="/courses"><li className="flex  rounded-md p-2 cursor-pointer hover:bg-[#243B55] hover:rounded  text-gray-300 text-sm items-center gap-x-4 mt-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{ "fill": "rgba(126, 134, 187, 1)", "transform": ";msFilter:;" }}><path d="M21 3h-7a2.98 2.98 0 0 0-2 .78A2.98 2.98 0 0 0 10 3H3a1 1 0 0 0-1 1v15a1 1 0 0 0 1 1h5.758a2.01 2.01 0 0 1 1.414.586l1.121 1.121c.009.009.021.012.03.021.086.08.182.15.294.196h.002a.996.996 0 0 0 .762 0h.002c.112-.046.208-.117.294-.196.009-.009.021-.012.03-.021l1.121-1.121A2.01 2.01 0 0 1 15.242 20H21a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm-1 15h-4.758a4.03 4.03 0 0 0-2.242.689V6c0-.551.448-1 1-1h6v13z"></path></svg>
              <span className="origin-left duration-200">
                Courses
              </span>
            </li></Link>
            <Link href="/courses/addmastercourses"><li className="flex  rounded-md p-2 cursor-pointer hover:bg-[#243B55] hover:rounded  text-gray-300 text-sm items-center gap-x-4 mt-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{ "fill": "rgba(126, 134, 187, 1)", "transform": ";msFilter:;" }}><path d="M20 5h-9.586L8.707 3.293A.997.997 0 0 0 8 3H4c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V7c0-1.103-.897-2-2-2zm-4 9h-3v3h-2v-3H8v-2h3V9h2v3h3v2z"></path></svg>
              <span className="origin-left duration-200">
                Add Master Courses
              </span>
            </li></Link>
            <Link href="/courses/addsubcourses"><li className="flex  rounded-md p-2 cursor-pointer hover:bg-[#243B55] hover:rounded  text-gray-300 text-sm items-center gap-x-4 mt-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{ "fill": "rgba(126, 134, 187, 1)", "transform": ";msFilter:;" }}><path d="M16 2H8C4.691 2 2 4.691 2 8v13a1 1 0 0 0 1 1h13c3.309 0 6-2.691 6-6V8c0-3.309-2.691-6-6-6zm1 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"></path></svg>
              <span className="origin-left duration-200">
                Add Sub Courses
              </span>
            </li></Link>
            <Link href="/dashboard/enquiry"><li className="flex  rounded-md p-2 cursor-pointer hover:bg-[#243B55] hover:rounded  text-gray-300 text-sm items-center gap-x-4 mt-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{ "fill": "rgba(126, 134, 187, 1)", "transform": ";msFilter:;" }}><path d="M5 22h14c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2h-2V2h-2v2H9V2H7v2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2zm4.799-2.013H8v-1.799l4.977-4.97 1.799 1.799-4.977 4.97zm5.824-5.817-1.799-1.799L15.196 11l1.799 1.799-1.372 1.371zM5 7h14v2H5V7z"></path></svg>
              <span className="origin-left duration-200">
                Enquiry
              </span>
            </li></Link>

            <Link href="/gallery"><li className="flex  rounded-md p-2 cursor-pointer hover:bg-[#243B55] hover:rounded  text-gray-300 text-sm items-center gap-x-4 mt-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{ "fill": "rgba(126, 134, 187, 1)", "transform": ";msFilter:;" }}><path d="M20 2H8c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zM8 16V4h12l.002 12H8z"></path><path d="M4 8H2v12c0 1.103.897 2 2 2h12v-2H4V8z"></path><path d="m12 12-1-1-2 3h10l-4-6z"></path></svg>
              <span className="origin-left duration-200">
                Gallery
              </span>
            </li></Link>

          </ul>
        </div>
      </aside>}
    </>
  )
}

export default Navbar