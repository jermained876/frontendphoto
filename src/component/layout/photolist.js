import React from 'react'
import Grid from '@material-ui/core/Grid';
import './photolist.css'

function Photolist() {
    return (
        <div className='container'>

            < Grid container spacing={3} className='mb-5'>
        
              <Grid item xs={12} sm={4} md={4}  >
            <div className='photo-box'>
            <img  src={process.env.PUBLIC_URL+'/images/hotel/hotel1.jpg'} className='photo-img' />
            </div>
            
        </Grid>

        <Grid item xs={12} sm={4} md={4}  >
            <div className='photo-box'>
            <img  src={process.env.PUBLIC_URL+'/images/hotel/hotel2.jpg'} className='photo-img' />
            </div>
            
        </Grid>

        <Grid item xs={12} sm={4} md={4}  >
            <div className='photo-box'>
            <img  src={process.env.PUBLIC_URL+'/images/hotel/hotel3.jpg'} className='photo-img' />
            </div>
            
        </Grid>

        <Grid item xs={12} sm={4} md={4}  >
            <div className='photo-box'>
            <img  src={process.env.PUBLIC_URL+'/images/hotel/hotel4.jpg'} className='photo-img' />
            </div>
            
        </Grid>
        <Grid item xs={12} sm={4} md={4}  >
            <div className='photo-box'>
            <img  src={process.env.PUBLIC_URL+'/images/hotel/hotel5.jpg'} className='photo-img' />
            </div>
            
        </Grid>
        <Grid item xs={12} sm={4} md={4}  >
            <div className='photo-box'>
            <img  src={process.env.PUBLIC_URL+'/images/hotel/hotel6.jpg'} className='photo-img' />
            </div>
            
        </Grid>

    </Grid>
            
        </div>
    )
}

export default Photolist
