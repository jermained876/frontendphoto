import React, { Component } from 'react';
import './albumfilter.css'
class Albumfilter extends Component {
    state = {  }
    
    render() { 

        const {handleAlbumFilter} = this.props

        return ( 
            <div className='filterbox'>
                <div className='row'>
                    <div className='col-md-6 offset-3 mt-1'>
                    <input onChange={handleAlbumFilter} type='text' className='form-control text-center mt-3' placeholder='Album Search'/>
                    </div>
                    
                </div>
                <div className='row'>
                    <div className='col-md-6 offset-3 mt-1'>
                    <button className='btn btn-block btn-purple'> Search</button>
                     </div>
                    
                </div>
                

                <div className='row'>
                    <div className='col-md-3 offset-8 mt-1'>
                                        <div className="form-group">
                                            <label classNameName=''>Sort By </label>  
                                            <select   className="custom-select  " name='Album-Access'>
                                            <option value="" disabled selected>Select Access</option>
 
                                                <option value=''>Date</option>
                                                                                            
                                            </select>

                                        </div>
                                    </div>
                        </div>

            </div>

         );
    }
}
 
export default Albumfilter;