'use client'

import {Card, Box, Typography, Button, Input, Alert } from '@mui/material';
// import Logo from '../../../public/assets/images/fulllogo.svg'
import $ from 'jquery';
import utils from '../../../backend/users'
import Image from 'next/image';
import { useEffect, useState } from 'react';
const onboardingCard2 = ({userform,setForm, aboutme1, birthday1, adress1}:any) => {

  
  useEffect(()=>{
    (async ()=>{
      const a:any=await utils.getUser();
      
      setForm(
        {
          about_me:a?a.user_metadata.about_me:'',
          birthday:a?a.user_metadata.birthday:'',
          street_address:a?a.user_metadata.street_address:'',
          city:a?a.user_metadata.city:'',
          state:a?a.user_metadata.state:'',
          zip:a?a.user_metadata.zip:''
        }
      )
    })()
  },[])

    
  function handleChange(e:any,element:String){
    e.preventDefault();
    if(element=='aboutme'){
      setForm({...userform, about_me:e.target.value})
    }else if(element=='birthday'){
      setForm({...userform, birthday:e.target.value})
    }else if(element=='city'){
      setForm({...userform, city:e.target.value})
    }else if(element=='state'){
      setForm({...userform, state:e.target.value})
    }else if(element=='zip'){
      setForm({...userform, zip:e.target.value})
    }else if(element=='streetaddress'){
      setForm({...userform, street_address:e.target.value})
    }
  }
    function nextSlide(e:any){
        e.preventDefault();
        console.log(aboutme1)
        console.log(adress1)
        console.log(birthday1)
        console.log(userform)
        console.log(userform.birthday)
        if((aboutme1==true && (userform.about_me==''||userform.about_me==undefined))||(adress1==true && (userform.street_address==undefined||userform.city==undefined|| userform.city==''||userform.state==''||userform.state==undefined||userform.zip==undefined||userform.zip==''))||(birthday1==true && userform.birthday==undefined)){
          alert('Please fill out all fields')
        }else{
          (async()=>{
          await utils.editData(userform)
        })()
        $('.card2').fadeOut();
        setTimeout(()=>{
            $('.card3').fadeIn();
            $('.card3').css('display','flex');
        },200)
        }
        
        
    }
    return (
    <Card className='card2' sx={{width:'85%', height:'80%', backgroundColor:'#dce8ef', justifyContent:'flex-start', alignItems:'center', borderRadius:4, boxShadow:'0px 0px 25px 3px rgb(0 0 0 / 25%)'}}>
    <Card className='card05' sx={{width:'44%', height:'100%', backgroundColor:'white', borderRadius: 2, padding:6, display:'flex', flexDirection:'column'}}>
    {/* <Image src={Logo} className='onboardingLogo'  alt=''/> */}
        <Typography sx={{display:'flex', flexDirection:'column', height:'100%', justifyContent:'center', align:'center', gap:3}}>
            <Typography variant='h2' sx={{color:'purple'}} component='h2'>
                02
            </Typography>
            <Typography className='title' variant='h2' component='h2'>Enter your information</Typography>
            
            <Typography className='titlepara' variant='h5' sx={{color:'grey', fontSize:18}} component='p'>
            Please continue to fill out your information
        </Typography>
        <Typography sx={{display:'flex', background:'none', justifyContent:'flex-start', alignItems:'center', gap:2}}>
        <Button onClick={nextSlide} sx={{color:'white', backgroundColor:'#6060e2', width:"100%"}}>Save</Button>
        </Typography>
        </Typography>
        <Typography sx={{width:'auto', display:'flex', alignItems:'center', gap:2,backgroundColor:'inherit'}}>
            
            <Typography sx={{width: 20, height: 20, border:'2px solid lightgrey',backgroundColor:'#6060e2', borderRadius:'50%'}}></Typography>
            <Typography sx={{width: 20, height: 20, border:'2px solid lightgrey',backgroundColor:'#6060e2', borderRadius:'50%'}}></Typography>
            <Typography sx={{width: 20, height: 20, border:'2px solid lightgrey',backgroundColor:'inherit', borderRadius:'50%'}}></Typography>
            <Typography sx={{width: 20, height: 20, border:'2px solid lightgrey',backgroundColor:'inherit', borderRadius:'50%'}}></Typography>
        </Typography>
    </Card>
    <Box className='fields' sx={{width:'56%', height:'100%', backgroundColor:'inherit', display:'flex',justifyContent:'center', alignItems:'center'}}>
    <Box className='inputfields' sx={{backgroundColor:'purple',display:'flex',width:'70%', flexDirection:'column', justifyContent:'center', gap:5}} >
      {aboutme1 && <div className='adress w-[100%] flex flex-col justify-center gap-5'>
        <label><h1>About Me: </h1></label>
        <Input type='text' onChange={(e)=>handleChange(e,'aboutme')} value={userform.about_me} placeholder='Tell us about yourself'/>
        </div>}
      {birthday1 &&<div className='adress w-[100%] flex flex-col justify-center gap-5'>
        <label><h1>Birthday:</h1></label>
        <Input type='date' onChange={(e)=>handleChange(e,'birthday')} value={userform.birthday}/>
        </div>}
      {adress1 &&<div className='adress w-[100%] flex flex-col justify-center gap-5'>
         <label><h1>Adress: </h1></label>
            <Input type='text'  onChange={(e)=>handleChange(e,'streetaddress')} value={userform.street_address} placeholder='Street adress'/>
            <Input type='text'  onChange={(e)=>handleChange(e,'city')} value={userform.city} placeholder='City'/>
            <Input type='text'  onChange={(e)=>handleChange(e,'state')} value={userform.state} placeholder='State'/>
            <Input type='text'  onChange={(e)=>handleChange(e,'zip')} value={userform.zip} placeholder='Zip'/>
        </div>}
         
            
            
          </Box >


    </Box>
    
    </Card>
);}

export default onboardingCard2;
