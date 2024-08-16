'use client'
import {Card, Box, Typography, Button, Input  } from '@mui/material';
import $ from 'jquery';
import utils from '../../../backend/users'
import Image from 'next/image'
import UploadFileIcon from '@mui/icons-material/UploadFile';
import { useState } from 'react';
// import Logo from '../../../public/assets/images/fulllogo.svg'
const onboardingCard15 = () =>{
    const [user,setUser]= useState({
        email:'',
        password:'',
    })
    function handleChange(e:any, arg:any){
        e.preventDefault();
        if(arg=='email'){
            setUser({...user, email:e.target.value})
        }else if(arg=='password'){
            setUser({...user, password:e.target.value})
        }
    }
    function nextSlide(e:any){
        e.preventDefault();
        (async()=>{
                const userSignin:any = await utils.login(user.email,user.password)
                if(userSignin!=null && userSignin.user?.role=='authenticated'){
        $('.card15').fadeOut();
        setTimeout(()=>{
            $('.card2').fadeIn();
            $('.card2').css('display','flex');
        },200)
    }else{
        alert('Error signing in')
    }
    
        })()
    }
    return (
    <Card className='card15' sx={{width:'85%', height:'80%', backgroundColor:'#dce8ef', justifyContent:'flex-start', alignItems:'center',borderRadius:4, boxShadow:'0px 0px 25px 3px rgb(0 0 0 / 25%)'}}>
    <Card className='card05' sx={{width:'44%', height:'100%', backgroundColor:'white', borderRadius: 2, padding:6, display:'flex', flexDirection:'column'}}>
    {/* <Image src={Logo} className='onboardingLogo'  alt=''/> */}
            <Typography sx={{display:'flex', flexDirection:'column', height:'100%', justifyContent:'center', align:'center', gap:3}}>
            <Typography variant='h2' sx={{color:'purple'}} component='h2'>
                01
            </Typography>
            <Typography className='title' variant='h2' component='h2'>Login to your account</Typography>
            
            <Typography className='titlepara' variant='h5' sx={{color:'grey', fontSize:18}} component='p'>
       Resume by entering your email and password
        </Typography>
        <Typography sx={{display:'flex', backgroundColor:'white', justifyContent:'flex-start', alignItems:'center', gap:2}}>
        <Button onClick={nextSlide} sx={{color:'white', backgroundColor:'#6060e2', width:2/5}}>Save</Button>
        {/* <Button onClick={nextSlide} sx={{color:'#6060e2', backgroundColor:'lightgrey', width:2/5}}>Skip for now</Button> */}
        </Typography>
        </Typography>
        <Typography sx={{width:'auto', display:'flex', alignItems:'center', gap:2,backgroundColor:'inherit'}}>
            <Typography sx={{width: 20, height: 20, border:'2px solid lightgrey',backgroundColor:'#6060e2', borderRadius:'50%'}}></Typography>
            <Typography sx={{width: 20, height: 20, border:'2px solid lightgrey',backgroundColor:'inherit', borderRadius:'50%'}}></Typography>
            <Typography sx={{width: 20, height: 20, border:'2px solid lightgrey',backgroundColor:'inherit', borderRadius:'50%'}}></Typography>
            <Typography sx={{width: 20, height: 20, border:'2px solid lightgrey',backgroundColor:'inherit', borderRadius:'50%'}}></Typography>
        </Typography>
    </Card>
    <Box className='fields' sx={{width:'56%', height:'100%', backgroundColor:'inherit', display:'flex',justifyContent:'center', alignItems:'center'}}>
    <Box className='inputfields' sx={{width:'70%',display:'flex', flexDirection:'column', justifyContent:'center', gap:5}} >
          <label>Email </label>
          <Input type='email' onChange={(e)=>handleChange(e,'email')} value={user.email} placeholder='Enter email here'/>
          <label>Password</label> 
          <Input type='password' onChange={(e)=>handleChange(e,'password')} value={user.password} placeholder='Create new password here'/>
         
          </Box >
    </Box>
    
    </Card>
);}

export default onboardingCard15;
