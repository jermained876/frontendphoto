import React, { Component } from 'react';
import Banner from '../../banner/bannerb'

import { useForm } from "react-hook-form";
import axios from 'axios'



class Albumupload extends Component {
    state = {  }
    render() { 

        const {albumUserData, handleOpenAlbumUpload, getRootProps, getInputProps, images, albumUpFiles, handleUploadRemove} = this.props

        return (<div>

        <Banner title={albumUserData.name} detail ={'Upload files here'}/>
         

                     <div class="image-upload-wrap offset-md-3 col-md-6" {...getRootProps()}>
                                <input class="file-upload-input" type='file' disabled accept="image/*" />
                                <div class=" drag-box">
                                                    <div className='drag-text '>
                                                            <i class="ion-ios-cloud-upload" {...getInputProps()}></i>
                                                            <h3> Drop images here</h3>
                                                    </div>
                                </div>
                       </div>

                    <div className='mt-5 row'>

                      
{/* albumUpFiles?.map((file, index) => (

<div className='col-md-3'>  
<div class="card mb-1" style={{width: '100%' }}>
 <img class="card-img-top"  src={file.preview} style={{ width: "100%" }} alt="preview" />
<div class="card-body">
  <button class="btn btn-sm btn-danger" onClick={()=>handleUploadRemove(index)}>Remove</button>
</div>
</div>
</div>
))*/}



                    </div>

        </div>);
    }
}
 
export default Albumupload;