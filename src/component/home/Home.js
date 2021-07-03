import React from 'react'
import Carousel from './carousel'
import Nav from '../nav/navb'
import Grid from '@material-ui/core/Grid';
import './Home.css'
function Home() {
    return (
        <div>

          <Nav/>
            
            <Carousel/>

            
                    <div class="container inner">
                    <h2 class="section-title text-center mt-5 mb-5">My Specialties</h2>
                    <p class="lead2 text-center">I would like to give you a unique photography experience, built to serve you best</p>
                    <div class="space30"></div>
                    <div class="row gutter-50 text-center">
                        <div class="col-md-4"> <span class="icon icon-color color-default fs-48 mb-20"><i class="si-cafe_fork-spoon-knife"></i></span>
                        <h5>Food Photography</h5>
                        <p>Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus. Cras justo odio dapibus ac facilisis.</p>
                        </div>
                    
                        <div class="col-md-4"> <span class="icon icon-color color-default fs-48 mb-20"><i class="si-spa_perfume"></i></span>
                        <h5>Product Photography</h5>
                        <p>Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus. Cras justo odio dapibus ac facilisis.</p>
                        </div>
                      
                        <div class="col-md-4"> <span class="icon icon-color color-default fs-48 mb-20"><i class="si-cafe_coctail-drink"></i></span>
                        <h5>Event Photography</h5>
                        <p>Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus. Cras justo odio dapibus ac facilisis.</p>
                        </div>
                       
                    </div>
                    
                    </div>


                    <div class="container inner mb-5">
                    <h2 class="section-title text-center mt-5 mb-5">Who is Behind All This?</h2>
                   

                    <Grid container component="main" spacing={3}>
    
                     <Grid item  sm={12} md={6} > 
                        <div className="aboutimg-box">
                        <img src={process.env.PUBLIC_URL+'/images/about3.jpg'} className='aboutimg'/>
                        </div>

                     </Grid>

                     <Grid item  sm={12} md={6} > 
                     

                     <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Aenean lacinia bibendum nulla sed consectetur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lacinia bibendum nulla sed consectetur. Curabitur blandit tempus porttitor. Vestibulum id ligula.</p>
                        <blockquote class="bordered">
                            <p>Sed posuere consectetur est at lobortis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis, est non commodo luctus, nisi erat porttitor ligula lacinia odio sem nec elit.</p>
                            <footer class="blockquote-footer">Connor Gibson</footer>
                        </blockquote>
                        <p>Curabitur blandit tempus porttitor. Nulla vitae elit libero, a pharetra augue. Donec sed odio dui. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Nullam id dolor id nibh ultricies.</p>

                                    </Grid>

                     </Grid>
                     
                    
                    </div>
                    
                

        
                    
                    
                    </div>

       

    )
}

export default Home
