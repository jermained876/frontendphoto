import React, { Component } from 'react';
import './useraccess.css'

class Useraccess extends Component {
    state = {  }
    render() { 

        const {userAccessData, accessFormSearchAlbum,userAccessSearchData, accessFormAddNew,handleRemoveAccess} =this.props
        const {first_name, last_name,username,email, albumuser_user} =userAccessData

        return (  
            <div>
                


<div className='accessdetailbo'>

    
                <div className='row'>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Username</label>  
                                <input value={username} type="text" disabled  name='User-Firstname' className="form-control filter-input" placeholder="" />
                            </div>
                        </div>

                        <div className="col-md-6">
                                <div className="form-group">
                                    <label>Email Address</label>  
                                    <input value={email} type="text" disabled name='User-Lastname' className="form-control filter-input" placeholder="" />
                                </div>
                        </div>
                        
                </div>
                <div className='row'>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>First Name</label>  
                                <input value={first_name} type="text" disabled  name='User-Firstname' className="form-control filter-input" placeholder="" />
                            </div>
                        </div>

                        <div className="col-md-6">
                                <div className="form-group">
                                    <label>Last Name</label>  
                                    <input value={last_name} type="text" disabled name='User-Lastname' className="form-control filter-input" placeholder="" />
                                </div>
                        </div>
                        
                </div>

</div>


<h2>Albums Access</h2>


{albumuser_user.length>0? 
<table class="table">
  <thead>
  <tr class="table-primary">
      <th colSpan='2' scope="col">Album</th>
      <th className='float-right mr-2' scope="col">Actions</th>
     
    </tr>
  </thead>
  <tbody>
  {albumuser_user.map(album=><tr class="table-light">
      <th colSpan='2' scope="row">{album.album.name}</th>
      <td><button className='float-right btn btn-danger' onClick={()=>handleRemoveAccess(album)}>Remove</button></td>
      
    </tr> )}
    
    
  </tbody>
</table>

:<div> Member has no album access</div>}



<h2 className='mt-5'>Add Album Access</h2>
<div className='row'>
                        <div className="col-md-6">
                            <div className="form-group">
                                 
                                <input type="text" onChange={accessFormSearchAlbum}   name='User-Firstname' className="form-control filter-input" placeholder="Search for Album" />
                            </div>
                        </div>

                       
</div>
{userAccessSearchData.length>0? 
<table class="table">
  <thead>
  <tr class="table-primary">
      <th colSpan='2' scope="col">Album</th>
      <th className='float-right mr-2' scope="col">Actions</th>
     
    </tr>
  </thead>
  <tbody>
   
  {userAccessSearchData.map(album=>
     <tr class="table-light">
     <th colSpan='2' scope="row">{album.name}</th>
     <td><button className='float-right btn btn-primary' onClick={()=>accessFormAddNew(album)}>Add</button></td>
     
   </tr>
    
    )}
   
 
    
  </tbody>
</table>
:''}


            </div>


        );
    }
}
 
export default Useraccess;