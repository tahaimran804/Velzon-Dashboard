import React, { useEffect, useState } from 'react'
import DashboardHeader from '../components/DashboardHeader'
import { LuArrowDownToLine } from "react-icons/lu";
import DashboardFooter from '../components/DashboardFooter';
import { IoCallOutline, IoLocation } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import { useForm } from 'react-hook-form';

const Contact = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitSuccessful },
    reset,
  } = useForm()
  const [showMessage, setShowMessage] = useState(false)
  const onSubmit = (data) => {
    console.log(data);
    reset();
  }
  useEffect(() => {
    if (isSubmitSuccessful) {
      setShowMessage(true);
      const timer = setTimeout(() => {
        setShowMessage(false)
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [isSubmitSuccessful])


  return (
    <div className='w-[100%] bg-[#EEEEF4] dark:bg-[#1a1d21] h-full overflow-auto'>
      <DashboardHeader title={"Dashboard"} />
      <section className='py-5 px-5 mt-6 flex items-start flex-col gap-4'>
        <div className='flex sm:items-start items-center gap-1 flex-col'>
          <h1 className='md:text-4xl text-2xl  text-purple-600 font-semibold' style={{ fontFamily: '"Momo Trust Sans", sans-serif' }}>Contact Us</h1>
          <p className='text-sm sm:text-lg text-gray-500 sm:text-start text-center'>
            We’d love to hear from you! Fill out the form below and our team will reach out to you shortly.</p>
        </div>
        <div className='w-full py-4 px-4 grid lg:grid-cols-2 grid-cols-1 items-start gap-4 bg-[white] dark:bg-[#292e32] rounded-md'>
          <section className='bg-[#f5f5f5] dark:bg-[#212529] py-4 px-4 rounded-md w-full h-full'>
            <h1
              style={{ fontFamily: '"Momo Trust Sans", sans-serif' }}
              className="text-lg sm:text-2xl text-gray-500 dark:text-white font-semibold">Get in touch with us.</h1>
            {showMessage && (
              <div className="dark:text-white my-10 flex items-center justify-center flex-col text-black">
                <h1 className='text-lg sm:text-2xl'>✅ Message sent successfully!</h1>
                <p className='text-sm'>Thank you for reaching out. Our team will contact you soon.</p>
              </div>
            )}
            <form form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-4 items-start mt-5'>
              <div className='grid w-full grid-cols-2 gap-4'>
                <div className='flex flex-col gap-2  items-start w-full'>
                  <label className='text-sm pl-1 text-black dark:text-white'>First Name</label>
                  <input className={
                    `py-2 px-4 w-full ${errors.name ? "border-red-500 outline-none" : "outline-0 border-0"} rounded-md text-sm  bg-gray-200 dark:dark:bg-[#292e32] capitalize placeholder:text-sm dark:placeholder:text-white placeholder:capitalize`
                  }
                    {...register('name', { required: "Name is required" })} type="text" placeholder='Jhon' />
                  {errors.name && (
                    <p className="text-red-500 text-sm pl-1">{errors.name.message}</p>
                  )}
                </div>
                <div className='flex flex-col gap-2  items-start w-full'>
                  <label className='text-sm pl-1 text-black dark:text-white'>Last Name</label>
                  <input className='py-2 px-4 w-full rounded-md text-sm  bg-gray-200 dark:dark:bg-[#292e32] capitalize placeholder:text-sm dark:placeholder:text-white placeholder:capitalize outline-0 border-0' type="text" placeholder='Smith' />
                </div>
              </div>
              <div className='grid w-full grid-cols-2 gap-4'>
                <div className='flex flex-col gap-2  items-start w-full'>
                  <label className='text-sm pl-1 text-black dark:text-white'>Email Address</label>
                  <input
                    className={
                      `py-2 px-4 w-full ${errors.email ? "border-red-500 outline-none" : "outline-0 border-0"} rounded-md text-sm  bg-gray-200 dark:dark:bg-[#292e32] placeholder:text-sm dark:placeholder:text-white`
                    }
                    {...register('email', { required: "Email is required" })}
                    type="email" placeholder='name@gmail.com' />
                  {errors.email && (
                    <p className="text-red-500 text-sm pl-1">{errors.email.message}</p>
                  )}
                </div>
                <div className='flex flex-col gap-2  items-start w-full'>
                  <label className='text-sm pl-1 text-black dark:text-white'>Phone Number</label>
                  <input
                    className={
                      `py-2 px-4 w-full ${errors.PhoneNumber ? "border-red-500 outline-none" : "outline-0 border-0"} rounded-md text-sm  bg-gray-200 dark:dark:bg-[#292e32] placeholder:text-sm dark:placeholder:text-white`
                    }
                    {...register('PhoneNumber', { required: "Phone Number is required" })}
                    type="number" placeholder='Enter Your Phone Number' />
                  {errors.PhoneNumber && (
                    <p className="text-red-500 text-sm pl-1">{errors.PhoneNumber.message}</p>
                  )}
                </div>
              </div>
              <div className='flex flex-col gap-2  items-start w-full'>
                <label className='text-sm pl-1 text-black dark:text-white'>Messgae</label>
                <textarea className='py-2 px-4 w-full rounded-md text-sm h-[12rem] bg-gray-200 dark:dark:bg-[#292e32] dark:placeholder:text-white  outline-0 border-0' type="number" placeholder='Your Message' />
              </div>
              <button type='submit' className='bg-purple-600 text-white py-3 px-10 rounded-md'>Submit</button>
            </form>
          </section>
          <div className='bg-gray-100 dark:bg-[#212529]  pt-4 lg:pb-10 pb-4 px-4 w-full grid lg:grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-5 items-start rounded-md'>
            <div className='bg-gray-200 dark:bg-[#292e32] w-[100%] h-[100%] flex items-center gap-4 py-4 px-4 rounded-xl'>
              <span className="w-[60px] h-[60px] rounded-full flex items-center justify-center text-lg text-2xl bg-purple-600 text-white"><IoCallOutline /></span>
              <div className='flex flex-col items-start gap-1'>
                <h2 className='text-lg text-black font-semibold dark:text-white'>Call Now</h2>
                <div className='flex flex-col items-start'>
                  <p className="text-sm text-black dark:text-white">
                    (907) 555-0101
                  </p>
                  <p className="text-sm text-black dark:text-white">(252) 555-0126</p>
                </div>
              </div>
            </div>
            <div className='bg-gray-200 dark:bg-[#292e32] w-[100%] h-[100%] flex items-center gap-4 py-4 px-4 rounded-xl'>
              <span className="w-[60px] h-[60px] rounded-full flex items-center justify-center text-lg bg-purple-600 text-white"><MdOutlineMailOutline /></span>
              <div className='flex flex-col items-start gap-1'>
                <h2 className='text-lg text-black font-semibold dark:text-white'>Email Address</h2>
                <div className='flex flex-col items-start'>
                  <p className="text-sm text-black dark:text-white">
                    info@example.com
                  </p>
                  <p className="text-sm text-black dark:text-white">info@example.com</p>
                </div>
              </div>
            </div>
            <div className='bg-gray-200 dark:bg-[#292e32] w-[100%] h-[100%] flex items-center gap-4 py-4 px-4 rounded-xl'>
              <span className="w-[60px] py-4 px-4 h-[60px] rounded-full flex items-center justify-center text-lg  bg-purple-600 text-white"><IoLocation /></span>
              <div className='flex flex-col items-start gap-1'>
                <h2 className='text-lg text-black font-semibold dark:text-white'>Location</h2>
                <div className='flex flex-col items-start'>
                  <p className="text-sm w-[120px] text-balck dark:text-white">
                    Royal Ln. Mesa, New Jersey 45463
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section >
      <DashboardFooter />
    </div >
  )
}

export default Contact