'use client'
import {Card, Box, Typography, Button, Input } from '@mui/material';
import $ from 'jquery';
import utils from '../../../backend/users';
// import Logo from '../../../public/assets/images/fulllogo.svg'
import Image from 'next/image';
import { useEffect, useState } from 'react';
const onboardingCard3 = ({userform, setForm,adminSettings}:any) =>{
  
    
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
        (async()=>{
          await utils.createUser(userform)
        })();
        (async()=>{
          await utils.editData(userform);
        })();
        
        $('.card3').fadeOut();
        setTimeout(()=>{
            $('.card4').fadeIn();
            $('.card4').css('display','flex');
        },500)
        
    }
    return (
    <Card className='card3' sx={{width:'85%', height:'80%', backgroundColor:'#dce8ef', justifyContent:'flex-start', alignItems:'center',borderRadius:4, boxShadow:'0px 0px 25px 3px rgb(0 0 0 / 25%)'}}>
    <Card  sx={{width:'44%', height:'100%', backgroundColor:'white', borderRadius: 2, padding:6, display:'flex', flexDirection:'column'}}>
    {/* <Image src={Logo} className='onboardingLogo'  alt=''/> */}
        <Typography sx={{display:'flex', flexDirection:'column', height:'100%', justifyContent:'center', align:'center', gap:3}}>
            <Typography variant='h2' sx={{color:'purple'}} component='h2'>
                03
            </Typography>
            <Typography variant='h2' component='h2'>Enter your information</Typography>
            
            <Typography variant='h5' sx={{color:'grey', fontSize:18}} component='p'>
            Please continue to fill out your information
        </Typography>
        <Typography sx={{display:'flex', background:'none', justifyContent:'flex-start', alignItems:'center', gap:2}}>
        <Button onClick={nextSlide} sx={{color:'white', backgroundColor:'#6060e2', width:2/5}}>Save</Button>
        </Typography>
        </Typography>
        <Typography sx={{width:'auto', display:'flex', alignItems:'center', gap:2,backgroundColor:'inherit'}}>
            
            <Typography sx={{width: 20, height: 20, border:'2px solid lightgrey',backgroundColor:'#6060e2', borderRadius:'50%'}}></Typography>
            <Typography sx={{width: 20, height: 20, border:'2px solid lightgrey',backgroundColor:'#6060e2', borderRadius:'50%'}}></Typography>
            <Typography sx={{width: 20, height: 20, border:'2px solid lightgrey',backgroundColor:'#6060e2', borderRadius:'50%'}}></Typography>
            <Typography sx={{width: 20, height: 20, border:'2px solid lightgrey',backgroundColor:'inherit', borderRadius:'50%'}}></Typography>
        </Typography>
    </Card>
    <Box sx={{display:'flex', justifyContent:'center', flexDirection:'column', background:'none', alignItems:'center', width:'56%', height:'100%'}}>
    <Box sx={{backgroundColor:'purple',display:'flex',width:'70%', flexDirection:'column', justifyContent:'center', gap:5}} >
    {adminSettings.about_me2 && <div className='w-[100%] flex flex-col justify-center gap-5'>
        <label><h1>About Me: </h1></label>
          <Input type='text' onChange={(e)=>handleChange(e,'aboutme')} value={userform.about_me} placeholder='Tell us about yourself'/>
        </div>}
      {adminSettings.birthday2 && <div className='w-[100%] flex flex-col justify-center gap-5'>
        <label><h1>Birthday:</h1></label>
        <Input type='date' onChange={(e)=>handleChange(e,'birthday')} value={userform.birthday}/>
        </div>}
      {adminSettings.adress2 && <div className='w-[100%] flex flex-col justify-center gap-5'>
         <label><h1>Adress: </h1></label>
         <Input type='text'  onChange={(e)=>handleChange(e,'streetadress')} value={userform.street_address} placeholder='Street adress'/>
            <Input type='text'  onChange={(e)=>handleChange(e,'city')} value={userform.city} placeholder='City'/>
            <Input type='text'  onChange={(e)=>handleChange(e,'state')} value={userform.state} placeholder='State'/>
            <Input type='text'  onChange={(e)=>handleChange(e,'zip')} value={userform.zip} placeholder='Zip'/>
        </div>}
            
          </Box >
           
          </Box>
    </Card>
);}

export default onboardingCard3;
