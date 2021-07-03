import React, { Component } from 'react';

class albumUser extends Component {
    state = {  }
    render() { 
        const {albumUserData, albumAccessAddOpen, removeAlbumUserButton} = this.props

        return (  
            <div>
                <h2>Album</h2>
                <div className='row'>
                        <div className="col-md-6">
                            <div className="form-group">
                               <input  type="text" disabled  name='User-Firstname' className="form-control filter-input" placeholder="" value={albumUserData.name} />
                            </div>
                        </div>
                </div>

                <h2 className='mt-5'>Album user access</h2>
               {albumUserData.albumuser_album == 0 ? 'No users are able to view this album - add user':
               

                <table class="table">
                    <thead>
                        <tr className="">
                        <th scope="col">Username</th>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Groups</th>
                        <th className='text-center' scope="col">Actions</th>
                        </tr>
                    </thead>
                 <tbody>
                          
                          {albumUserData.albumuser_album.map(user=> 
                            <tr class="table-light">

        
                            <th scope="row">{user.user.username}</th>
                            <td>{user.user.first_name}</td>
                            <td>{user.user.last_name}</td>
                            <td>{user.user.email}</td>
                            <td>{user.user.groups?.[0]?.name}</td>
                            <td>
                      
                                <button className='btn btn-sm btn-outline-danger' onClick={()=>removeAlbumUserButton(user)}>Remove</button>
                           
                            </td>


                            </tr> 
    
                          )}
                            
                    </tbody>
                    </table>
                         }


                        <div className='mt-5'>
                        <button className='btn btn-warning float-left'> Cancel</button>
                        <button className='btn btn-purple float-right' onClick={albumAccessAddOpen}> Add User</button>

                        </div>

                   


            </div>
        );
    }
}
 
export default albumUser;