import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField'
import { KeyboardDatePicker } from "@material-ui/pickers";
import { Albumaccess } from '../../accesscontrol/access';

class Albumform extends Component {
    state = {  }
    render() { 
        const {albumFormData, handleAlbumAddForm, albumAddDatabase, albumUpdateDatabase, edit, cancel} = this.props
        const {id,albumname,albumSelectedType,albumType,albumdate,albumAccess,albumSelectedAccess} = albumFormData

        return ( 
            <div className="tab-pane fade show active mr-5" id="general_info">
            <h2 className='header'> {edit ? <span>Edit</span>:<span>New</span>}  Album</h2>
           
           
            <div className="row">
                <div className="col-md-12">
                    <div className="form-group">
                        <label>Name   </label>  
                        <input onChange={handleAlbumAddForm} value={albumname} type="text"  name='Album-Name' className="form-control filter-input" placeholder="Event Date" />
                    </div>
                </div>
                <div className="col-md-12">
                    <div className="form-group">
                        <label classNameName=''>Type </label>  
                        <select onChange={handleAlbumAddForm}  className="custom-select mt-4 " name='Album-Type'>
                        <option value="" disabled selected>Select Event Type</option>
                        
                        {albumType.map(item=><option key={item.id} selected={albumSelectedType==item.id ? true : false} value={item.id}>{item.name}</option>)}
                            
                       
                        
                        </select>

                    </div>
                </div>
                <div className="col-md-12">
                    <div className="form-group">
                        <label classNameName=''>Access </label>  
                        <select onChange={handleAlbumAddForm}  className="custom-select mt-4 " name='Album-Access'>
                        <option value="" disabled selected>Select Access</option>
                        
                        {albumAccess.map(item=><option selected={albumSelectedAccess==item.id ? true: false} key={item.id} value={item.id}>{item.name}</option>)}
                            
                       
                        
                        </select>

                    </div>
                </div>

                <div className="col-md-12 mt-5">
                    
                <TextField
                id="date"
                label="Event Date"
                type="date"
                name='Album-Date'
                defaultValue=""
                value={albumdate}
                onChange={handleAlbumAddForm}
                InputLabelProps={{
                shrink: true,
                }}
            />

                </div>

               

                



            </div>
                <button className='btn btn-warning mt-5' onClick={cancel}>Cancel</button>

            <div className='float-right'>
            {edit?
            <button className='btn btn-success mt-5' onClick={albumUpdateDatabase} >Update</button>:
            <button className='btn btn-success mt-5' onClick={albumAddDatabase}>SAVE AND ADD</button>
            }
           
            </div>
        </div>

         );
    }
}
 
export default Albumform;