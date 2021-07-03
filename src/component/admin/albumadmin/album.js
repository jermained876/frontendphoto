import React, { Component } from 'react';
import Albumfilter from '../filter/albumfilter'
import Card from '../card/card'
class Album extends Component {
    state = {  }
    render() { 
        return (  

            <div>
                <h1 className='text-center'>Album</h1>
                <Albumfilter/>
                <Card/>


            </div>


        );
    }
}
 
export default Album;