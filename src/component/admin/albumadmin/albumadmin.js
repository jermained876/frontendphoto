import React, { Component } from 'react';

import Card from '../../card/card'
import Albumfilter from '../../filter/albumfilter'
import AlbumAdd from './albumadd'

class Albumadmin extends Component {
    state = {  }
    
    render() { 
        const {albums, updateAlbumAdd, handleAlbumFilter, edit, users, remove, view } = this.props

        return ( 

            <div>
                <h1 className='header'>Album</h1>
                <Albumfilter handleAlbumFilter={handleAlbumFilter}/>
                <button className='btn btn-rounded btn-primary' onClick={updateAlbumAdd}>Add</button>

 <div class="container container-gallery">
	<div class="row">

                {albums.map(item=>
    <div class="col-sm-6 col-md-4 ">
            <div class="profile-card-2"><img src={process.env.PUBLIC_URL+'/images/cb3.jpg'} class="img img-responsive" onClick={()=>view(item)}/>
                <div class="profile-name">{item.name}</div>
                <div class="profile-username">
                    <button className='btn btn-sm btn-ou btn-warning' onClick={()=>edit(item)} >Edit</button>
                    <button className='btn btn-sm btn-info' onClick={()=>users(item)}>Users</button>
                    <button className='btn btn-sm btn-danger' onClick={()=>remove(item)}>Delete</button>

                </div>
               </div>
        </div>
        )}


                    </div>
       </div>
           

            </div>

         );
    }
}
 
export default Albumadmin;