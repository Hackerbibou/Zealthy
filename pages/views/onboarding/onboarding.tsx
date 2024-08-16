'use client'
import {Card, Box, Typography, Button, Input } from '@mui/material';
import Card1 from './onboardingCard1';
import Card15 from './onboardingCard15';
import Card2 from './onboardingCard2';
import Card3 from './onboardingCard3';
import Card4 from './onboardingCard4';
// import Logo from '../../../public/assets/images/fulllogo.svg'
import util from '../../../backend/admin'
import utils from '../../../backend/users'
import Image from 'next/image'
import $ from 'jquery';
import { useEffect, useState } from 'react';
const Onboarding = () =>{
  interface User{
    user_metadata:{
      about_me:'',
      birthday:'',
      street_address:'',
      city:'',
      state:'',
      zip:''
    }
  }
  const [user,setUser]=useState<User|null>(null)
  const [userform,setForm]=useState({
    about_me:'',
    birthday:'',
    street_address:'',
    city:'',
    state:'',
    zip:''

  });
  const [adminSettings, setSettings]=useState({
    about_me1:true,
    about_me2:false,
    adress1:false,
    adress2:true,
    birthday1:true,
    birthday2:false
  })
  useEffect(()=>{
    (async ()=>{
      const users:any= await utils.getUser()
      setUser(users)
      console.log(users)
      
      if(users!=null){
        $('.card0').fadeOut();
        setTimeout(()=>{
            $('.card2').fadeIn();
            $('.card2').css('display','flex');
        },10)
      }
    })();
    (async ()=>{
      const settings:any= await util.readSettings()
      setSettings(settings)
      console.log(settings)
    })();

  },[])
    function nextSlide(e:any){
        e.preventDefault();
        $('.card0').fadeOut();
        setTimeout(()=>{
            $('.card1').fadeIn();
            $('.card1').css('display','flex');
        },200)
        
    }
    function nextSlide1(e:any){
      e.preventDefault();
      $('.card0').fadeOut();
      setTimeout(()=>{
          $('.card15').fadeIn();
          $('.card15').css('display','flex');
      },200)
      
  }
    return (
  <Box sx={{display: 'flex', justifyContent:'center', alignItems:'center', backgroundColor:'#e8f2f5', height:'100vh'}}>
    <Card className='card0' sx={{width:'85%', height:'80%', backgroundColor:'purple',display: 'flex',zIndex:3, justifyContent:'flex-start', alignItems:'center',borderRadius:4, boxShadow:'0px 0px 25px 3px rgb(0 0 0 / 25%)'}}>
        <Card sx={{width:'44%', height:'100%', backgroundColor:'white', borderRadius: 2, padding:6, display:'flex', flexDirection:'column', justifyContent:'center', align:'center', gap:3}}>
           {/* <Image src={Logo} className='onboardingLogo'  alt=''/> */}
            {/* <Box sx={{display:'flex', flexDirection:'column', height:'100%', justifyContent:'center', align:'center', gap:3}}> */}
            <Typography variant='h3' component='h3'>Welcome to Zealthy's onboarding!</Typography>
            <Typography variant='h5' sx={{color:'grey', fontSize:18}} component='p'>
            Please fill out your information in the following slides.
            </Typography>
            <Button onClick={nextSlide} sx={{color:'white', backgroundColor:'#6060e2', width:2/5}}>Let's Get Started</Button>
            <Button onClick={nextSlide1} sx={{color:'white', backgroundColor:'red', width:2/5}}>Resume onboarding</Button>
            
        </Card>
        <Card sx={{width:'56%', height:'100%', backgroundColor:'purple',display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
         
        </Card>

    </Card>
    <Card1/>
    <Card15/>
    <Card2 userform={userform} setForm={setForm} adminSettings={adminSettings}/>
    <Card3 userform={userform} setForm={setForm} adminSettings={adminSettings}/>
    <Card4/>
  
  </Box>
);}

export default Onboarding;
