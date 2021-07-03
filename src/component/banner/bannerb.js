import { Title } from '@material-ui/icons';
import React, { Component } from 'react';
import './banner.css'

class Bannerb extends Component {
    state = {  }
    render() { 
        
        const {title, detail} = this.props

        return ( 
            
        <div className='banner'>
        <img src={process.env.PUBLIC_URL+'/images/backimg.jpg'} className='img img-fluid'/>

        <div class="hero-text  container inner pt-100 pb-100 text-center">
            <h1 class="heading">{title}</h1>
            <p class="lead larger text-center mb-0">{detail}</p>
      </div>

    </div>
    
    );
    }
}
 
export default Bannerb;