import React, { Component } from 'react';
import './dashboard.css'
import AttachmentIcon from '@material-ui/icons/Attachment';
import PhotoAlbumIcon from '@material-ui/icons/PhotoAlbum';
import PeopleIcon from '@material-ui/icons/People';


class Dashboard extends Component {
    state = {  }
    render() { 
        return ( 

                <div className='container'>


                <div className='row'>

                <div className='col-md-4'>

                <div className='dashboard-box files'>
                    <AttachmentIcon style={{fontSize: 50}}/>

                </div>

                </div>
                <div className='col-md-4'>

                <div className='dashboard-box albums'>
                    <PhotoAlbumIcon style={{  fontSize: 50}}/>


                </div>

                </div>


                <div className='col-md-4'>

                    <div className='dashboard-box users'>
                        <PeopleIcon  style={{fontSize: 50}}/>

                    </div>
                </div>
               


                </div>



                </div>

         );
    }
}
 
export default Dashboard;