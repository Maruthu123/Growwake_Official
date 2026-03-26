import React from 'react'
import Marque from 'react-fast-marquee'
import './marquee.css'
function Marquee() {
  return (
    <>
    <div className='marque_container'>
        <h1 className='title'>Hiring Partners</h1>
        <Marque speed={100} delay={2}>
            <div className='img_logos'>
                <img src='logo_1.webp' className='img_logo' />
                <img src='logo_2.webp' className='img_logo'/>
                <img src='logo_3.webp' className='img_logo'/>
                <img src='logo_4.webp' className='img_logo'/>
                <img src='logo_5.webp' className='img_logo'/>
                <img src='logo_6.webp' className='img_logo'/>
                <img src='logo_7.webp' className='img_logo'/>
                <img src='logo_8.webp' className='img_logo'/>
                <img src='logo_9.webp' className='img_logo'/>
                <img src='logo_10.webp' className='img_logo'/>
                <img src='logo_11.webp' className='img_logo'/>
                <img src='logo_12.webp' className='img_logo'/>
                <img src='logo_13.webp' className='img_logo'/>
                <img src='logo_14.webp' className='img_logo'/>
                <img src='logo_15.webp' className='img_logo'/>
                <img src='logo_16.webp' className='img_logo'/>
                <img src='logo_17.webp' className='img_logo'/>
                <img src='logo_18.webp' className='img_logo'/>
                <img src='logo_19.webp' className='img_logo'/>
                <img src='logo_20.webp' className='img_logo'/>


            </div>
        </Marque>

    </div>
    
    </>
  )
}

export default Marquee