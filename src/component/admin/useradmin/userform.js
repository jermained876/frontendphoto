import React, { Component } from 'react';

class Userform extends Component {
    state = {  }
    render() { 
        const {userformEdit,handleUserFormChange, handleUserFormSubmit, userform,cancel} =this.props

        return ( 
            <div className="tab-pane fade show active mr-5" id="general_info">
            <h2 className='header'> {userformEdit ? <span>Update</span>: <span>New</span>}   User</h2>
           
           
            <div className="row">
                <div className="col-md-12">
                    <div className="form-group">
                        <label>Username   </label>  
                        <input value={userform.username} onChange={handleUserFormChange} type="text"  name='User-Username' className="form-control filter-input" placeholder="Username" />
                    </div>
                </div>

                <div className="col-md-12">

                    <div className='row'>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>First Name   </label>  
                                <input value={userform.first_name} onChange={handleUserFormChange} type="text"  name='User-Firstname' className="form-control filter-input" placeholder="First Name" />
                            </div>
                        </div>

                        <div className="col-md-6">
                                <div className="form-group">
                                    <label>Last Name   </label>  
                                    <input value={userform.last_name} onChange={handleUserFormChange} type="text"  name='User-Lastname' className="form-control filter-input" placeholder="Last Name" />
                                </div>
                        </div>
                        </div>



                </div>
               

                <div className="col-md-12">
                    <div className="form-group">
                        <label>Email   </label>  
                        <input value={userform.email} onChange={handleUserFormChange} type="text"  name='User-Email' className="form-control filter-input" placeholder="Email" />
                    </div>
                </div>


                <div className="col-md-12">
                    <div className="form-group">
                        <label classNameName=''>Access </label>  
                        <select  onChange={handleUserFormChange}  className="custom-select mt-4 " name='User-Access'>
                        <option value="" disabled selected>Select Access</option>
                        
                       <option selected={userform.access == 'Admin' ? true : false} value='Admin'>Admin</option>
                       <option selected={userform.access == 'Customer' ? true : false}  value='Customer'>Customer</option>
                       <option  selected={userform.access == 'Guest' ? true : false} value='Guest'>Guest</option>     
                       
                        
                        </select>

                    </div>
                </div>

                            



            </div>
           {userformEdit ? <span> <button onClick={cancel} className='btn btn-yellow mt-5'>Cancel</button> <button className='float-right btn btn-primary mt-5'>Update</button> </span> : <span> <button onClick={cancel} className='btn btn-yellow mt-5'>Cancel</button> <button onClick={handleUserFormSubmit} className='float-right btn btn-purple mt-5' >ADD</button></span>}
            
        </div>

         );
    }
}
 
export default Userform;