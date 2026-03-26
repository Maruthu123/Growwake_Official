import React from 'react'
import './placement.css';

import {TextField} from '@mui/material'
import CarouselSlider from '../../components/carousel/CarouselSlider'

function Login() {
  return (
    <>
     <div className='login_container'>
        <div className='login_left'>
           <CarouselSlider/>

        </div>
        <div className='login_right'>
        <h1 className='login_txt'>Login in your Account</h1>
           <div className='form_container'>
           
              <form>
                 <TextField id='outlined-basic' label='Email*' variant='outlined' color='success' size='small'
                 style={{width:'400px',marginTop:'10px'}}/>

                <TextField id='outlined-basic' label='Password*' variant='outlined' color='success' size='small'
                 style={{width:'400px',marginTop:'40px'}}/>

                 <button className='login_btn'>Login</button>
              </form>
            
            </div>     
        </div>

     </div>
    </>
  )
}

export default Login