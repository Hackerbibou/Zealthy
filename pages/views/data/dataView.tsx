"use client"
import React, { useEffect, useState } from 'react'
import utils from '../../../backend/data'
export default function dataView() {

  const [users,setUsers]=useState([{
    name:'',
    email:'',
    about_me:'',
    birthday:'',
    street_address:'',
    city:'',
    state:'',
    zip:''
  }])

  useEffect(()=>{
    (async()=>{
      const user:any= await utils.viewAll()
      setUsers(user)
    })()
    
  },[])
  return (
    <div className='bg-[#e8f2f5] w-screen h-screen flex flex-col items-center justify-center p-10 gap-8'>
      <h1 className='text-[40px] text-black'>All Users</h1>
    
     
      <ul className='flex flex-col items-center w-[85%] h-[80%] bg-white rounded-2xl p-8'>
        <li className='text-[#9db9bc] flex w-[100%] justify-start py-5 gap-4 '>
          <p className='w-[25%]'>Email</p>
          <p className='w-[40%]'>About me</p>
          <p className='w-[10%]'>Birthday</p>
          <p className='w-[15%]'>Address</p>
        </li>
        <hr className='w-[100%] text-black '/>
        <ul className='flex flex-col items-center w-[100%] h-[100%] overflow-y-scroll'>
          {users.length==0?<p className='text-black h-[100%] w-[100%] flex justify-center items-center'>No users yet</p>:users.map(elem=><div className='w-[100%]'>
            <li className='text-[#9db9bc] flex w-[100%] justify-start  py-5 gap-4'>

          <p className='w-[25%]'>{elem.email}</p>
          <p className='w-[40%] '>{elem.about_me}</p>
          <p className='w-[10%]'>{elem.birthday}</p>
          <p className='w-[15%]'>{elem.street_address} {elem.city}, {elem.state} {elem.zip}
            </p>
        </li>
        <hr className='w-[100%] text-black '/>
        </div>)}
        </ul>
      </ul>
    </div>
  )
}
