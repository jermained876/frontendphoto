import React, {useState} from 'react'
import './carousel.css'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import {useHistory} from 'react-router-dom'

export default function Carousel() {


    const history = useHistory()

    return (
        <div className='carousel-holder'>
            
            <img src={process.env.PUBLIC_URL+'/images/best8.jpg'} className='carousel-image'/>
            {/*
            <ArrowBackIosIcon className='carousel-leftarrow' style={{ fontSize: 80 }}/>
            <ArrowForwardIosIcon className='carousel-rightarrow' style={{ fontSize: 80 }}/>
            */}

            <div className='hero-box'>
                <p className='hero-title font-weight-600 color-white text-center'>Jermaine Dawkins Photography</p>
                <p className='hero-caption font-weight-600 color-white text-center'>I take photographs with creativity, concept and passion</p>

                <div className='hero-button' onClick={()=>history.push('/portfolio')}>SEE MY PORTFOLIO</div>
               
            </div>
        </div>
    )
}
