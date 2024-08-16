'use client'
import {Card, Box, Typography, Link, Button } from '@mui/material';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import utils from '../../../backend/users'
const onboardingCard4 = () => {

        function handleClick(e:any){
            e.preventDefault();

            (async()=>{
                await utils.logout()
            })();
            setTimeout(()=>{
                window.location.href='/data'
            },100);

        }
return (
<Card className='card4' sx={{width:'85%', height:'80%', backgroundColor:'#dce8ef', justifyContent:'flex-start', alignItems:'center', borderRadius:4, boxShadow:'0px 0px 25px 3px rgb(0 0 0 / 25%)'}}>
    <Card className='card05' sx={{width:'44%', height:'100%', backgroundColor:'white', borderRadius: 2, padding:6, display:'flex', flexDirection:'column'}}>
   
        <Typography sx={{display:'flex', flexDirection:'column', height:'100%', justifyContent:'center', align:'center', gap:3}}>
            <Typography variant='h2' sx={{color:'purple'}} component='h2'>
                04
            </Typography>
            <Typography className='title' variant='h2' component='h2'>You'r All Set!</Typography>
            
            <Typography className='titlepara' variant='h5' sx={{color:'grey', fontSize:18}} component='p'>
         Thank you for onboarding with Zealthy click the button to view other signed up users?
        </Typography>
        
        <Button className='btnLink' onClick={handleClick} sx={{color:'white', backgroundColor:'#6060e2', width:'100%'}}>View all users</Button>
      
        </Typography>
        <Typography sx={{width:'auto', display:'flex', alignItems:'center', gap:2,backgroundColor:'inherit'}}>
            
            <Typography sx={{width: 20, height: 20, border:'2px solid lightgrey',backgroundColor:'#6060e2', borderRadius:'50%'}}></Typography>
            <Typography sx={{width: 20, height: 20, border:'2px solid lightgrey',backgroundColor:'#6060e2', borderRadius:'50%'}}></Typography>
            <Typography sx={{width: 20, height: 20, border:'2px solid lightgrey',backgroundColor:'#6060e2', borderRadius:'50%'}}></Typography>
            <Typography sx={{width: 20, height: 20, border:'2px solid lightgrey',backgroundColor:'#6060e2', borderRadius:'50%'}}></Typography>
        </Typography>
    </Card>
    <Box className='fields' sx={{width:'56%', height:'100%', backgroundColor:'inherit', display:'flex', justifyContent:'center', alignItems:'center'}}>
    
    <Box className='inputfields' sx={{position:'relative', background:'none', display:'flex', justifyContent:'center', alignItems:'center'}}>

    
        <CheckCircleRoundedIcon
        className='check'
            sx={{
                color:'#6060e2',
                height:'20vmin',
                width:'20vmin',
                zIndex: 30
        }}
        />
        </Box>
    </Box>
    
    </Card>)
};

export default onboardingCard4;
