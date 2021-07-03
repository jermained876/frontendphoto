import React, { Component } from 'react';

class Albumaccessadd extends Component {
    state = {  }
    render() { 
        const {albumAccessAddSearch,albumAccessAddData, addAlbumUserButton, albumUserData,  albumAccessUpdateSearch, albumAccessAddClose, albumAccessHandleSearchButton, albumAccessAddResult} =this.props
        const {username, email, first_name, last_name} = albumAccessAddSearch
        return (  
            <div>
                <h1><span>User search</span> </h1>
                <h5>Album - {albumUserData.name}</h5>
    <div className='accessdetailbo '>

    
                <div className='row'>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Username</label>  
                                <input onChange={albumAccessUpdateSearch} value={username} type="text"  name='User-Username' className="form-control filter-input" placeholder="" />
                            </div>
                        </div>

                        <div className="col-md-6">
                                <div className="form-group">
                                    <label>Email Address</label>  
                                    <input onChange={albumAccessUpdateSearch} value={email} type="text" name='User-Email' className="form-control filter-input" placeholder="" />
                                </div>
                        </div>
                        
                </div>
                <div className='row'>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>First Name</label>  
                                <input onChange={albumAccessUpdateSearch} value={first_name} type="text"   name='User-Firstname' className="form-control filter-input" placeholder="" />
                            </div>
                        </div>

                        <div className="col-md-6">
                                <div className="form-group">
                                    <label>Last Name</label>  
                                    <input onChange={albumAccessUpdateSearch} value={last_name} type="text"  name='User-Lastname' className="form-control filter-input" placeholder="" />
                                </div>
                        </div>
                        
                        </div>
                        <button className='float-left btn btn-warning' onClick={albumAccessAddClose}>Cancel</button>
                        <button className='float-right btn btn-primary' onClick={albumAccessHandleSearchButton}> Search</button>
                    </div>

                    {albumAccessAddData.length==0 ? '' :
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
                     {albumAccessAddData.map(user=> <tr key={user.id} class="table-light">

        
                                    <th scope="row">{user.username}</th>
                                    <td>{user.first_name}</td>
                                    <td>{user.last_name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.groups?.[0]?.name}</td>
                                    <td>

                                        <button className='btn btn-sm btn-outline-danger' onClick={()=>addAlbumUserButton(user)}>Add</button>

                                    </td>


                                    </tr> )}
                          
                          {/*albumAccessAddResult.map(user=> 
                          
                            <tr key={user.id} class="table-light">

        
                            <th scope="row">{user.username}</th>
                            <td>{user.first_name}</td>
                            <td>{user.last_name}</td>
                            <td>{user.email}</td>
                            <td>{user.groups?.[0]?.name}</td>
                            <td>
                      
                                <button className='btn btn-sm btn-outline-danger'>Add</button>
                           
                            </td>


                            </tr> 
    
                          )*/}
                            
                    </tbody>
                    </table>}
                           
            </div>

        );
    }
}
 
export default Albumaccessadd;