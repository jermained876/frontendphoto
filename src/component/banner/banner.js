import { Title } from '@material-ui/icons';
import React, { Component } from 'react';
import './banner.css'
class Banner extends Component {
    state = {  }
    render() {
        
        const {banner} = this.props
    
        return (  
            <div className='banner'>
                <img src={process.env.PUBLIC_URL+banner.imgurl} className='img img-fluid'/>

                <div class="hero-text  container inner pt-100 pb-100 text-center">
                    <h1 class="heading">{banner.title}</h1>
                    <p class="lead larger text-center mb-0">{banner.detail}</p>
              </div>

            </div>
            
           
        );
    }
}
 
export default Banner;