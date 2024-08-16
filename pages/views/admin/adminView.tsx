"use client"
import React, { useEffect, useState } from 'react'
import utils from '../../../backend/admin'
export default function adminView() {
  const [userSettings,setSettings]=useState({
    about_me1:false,
    about_me2:false,
    adress1:false,
    adress2:false,
    birthday1:false,
    birthday2:false
  })
  useEffect(()=>{
    (async()=>{
      const usersSetting:any=await utils.readSettings()
      setSettings(usersSetting)
      console.log(usersSetting)
    })()
  },[])
  function handleSubmit(e:any){
    (async ()=>{
      const a = await utils.editAdmin(userSettings)
    })()
    window.location.href='/data'
  }
  return (
    <form onSubmit={handleSubmit} className='bg-[#e8f2f5]  text-black w-screen h-screen flex flex-col items-center justify-center p-10 gap-8' >
      <h1 className='text-[50px] text-black'>Admin Page</h1>
      <div className='bg-[#e8f2f5] w-screen h-screen flex  items-center justify-center p-10 rounded-2xl'>
      <div className='w-[45%] h-[100%] bg-[white] flex flex-col  items-center'>
        <h1 className='my-20 text-[30px]'>Page 2</h1>
        <ul className='flex flex-col gap-8'>
          <li className='text-[25px] flex items-center gap-3'><input type='checkbox' className='w-5 h-5' onClick={()=>setSettings({...userSettings,about_me1:!userSettings.about_me1})} checked={userSettings.about_me1}  disabled={userSettings.about_me2}/>About Me</li>
          <li className='text-[25px] flex items-center gap-3'><input type='checkbox' className='w-5 h-5' onClick={()=>setSettings({...userSettings,adress1:!userSettings.adress1})} checked={userSettings.adress1} disabled={userSettings.adress2}/>Address</li>
          <li className='text-[25px] flex items-center gap-3'><input type='checkbox' className='w-5 h-5'  onClick={()=>setSettings({...userSettings,birthday1:!userSettings.birthday1})}checked={userSettings.birthday1} disabled={userSettings.birthday2}/>Birthday</li>
        </ul>
      </div>

      <div className='w-[45%] h-[100%] bg-[#905f90]  text-white flex flex-col  items-center'>
        <h1 className='my-20 text-[30px]'>Page 3</h1>
        <ul className='flex flex-col gap-8'>
        <li className='text-[25px] flex items-center gap-3'><input type='checkbox' className='w-5 h-5' onClick={()=>setSettings({...userSettings,about_me2:!userSettings.about_me2})} checked={userSettings.about_me2} disabled={userSettings.about_me1}/>About Me</li>
          <li className='text-[25px] flex items-center gap-3'><input type='checkbox' className='w-5 h-5' onClick={()=>setSettings({...userSettings,adress2:!userSettings.adress2})} checked={userSettings.adress2} disabled={userSettings.adress1}/>Address</li>
          <li className='text-[25px] flex items-center gap-3'><input type='checkbox' className='w-5 h-5' onClick={()=>setSettings({...userSettings,birthday2:!userSettings.birthday2})} checked={userSettings.birthday2} disabled={userSettings.birthday1}/>Birthday</li>
        </ul>
      </div>

      
</div>
<button type='submit' className='px-10 py-5 text-white  rounded-lg bg-[#905f90]'>Save changes</button>
    </form>
  )
}
