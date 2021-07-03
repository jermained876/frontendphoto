import React, { Component } from 'react';
import Banner from '../../banner/bannerb'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import VisibilityIcon from '@material-ui/icons/Visibility';
import './albumview.css'


class Albumview extends Component {
    state = {  }
    render() { 

        const {albumUserData, changeImageVisible, DeleteCloud, handleOpenAlbumUpload, albumFiles, handleCloseAlbumUpload, getRootProps, getInputProps, albumupload} = this.props

        
         


        return ( <div>

            <Banner title={albumUserData.name}/>

               

                {albumupload && <div class="image-upload-wrap offset-md-3 col-md-6" {...getRootProps()}>
                                <input class="file-upload-input" type='file' disabled accept="image/*" />
                                <div class=" drag-box">
                                                    <div className='drag-text '>
                                                            <i class="ion-ios-cloud-upload" {...getInputProps()}></i>
                                                            <h3> Drop images here</h3>
                                                    </div>
                                </div>
                 </div> }
            <div className='text-center'>
                 {albumupload == true ? <button className='mt-3 btn btn-danger' onClick={handleCloseAlbumUpload} >Close Upload</button>:
                 <button className='mt-3 btn btn-info' onClick={handleOpenAlbumUpload} >upload</button> }
                 
                </div>

            <div className='container row mt-5'>

           

                <Grid container spacing={5  }> 

           {albumFiles.map(file=>
            
            
            <Grid item xs={12} sm={4} md={4}>
            
            <Card className>
            <CardActionArea>
                <div className='imageContainer'>
                <img className="imageObj" src={file.url}/>
                </div>
                <CardContent>
                
                <Typography variant="body2" color="textSecondary" component="p">
                    {file.original_filename}
                </Typography>
                </CardContent>
            </CardActionArea>
            
            <div>
           
                <Button onClick={()=>DeleteCloud(file)} className=" mb-2 ml-2 btn btn-sm btn-danger">
                Remove
                </Button>
                <VisibilityIcon onClick={()=>changeImageVisible(file)} className={`${file.type=="Hidden" ? 'visibile-red':'visibile-green'} mb-2 mr-2 float-right`}/>
            </div>
            </Card>




            </Grid>

            
            )} 
            </Grid>

            </div>

            {/*  album: 12
            asset_id: "896d967154812b5b0cb631c43f6a587e"
            bytes: 21040
            created_at: "2021-06-06T23:06:43Z"
            etag: "009ca218b13700d8c6042a05bb0d45e4"
            format: "jpg"
            height: 500
            id: 23
            original_filename: null
            public_id: "sm2qtd6y1uhwlm85svu3"
            resource_type: "upload"
            secure_url: "https://res.cloudinary.com/jd999dawkins/image/upload/v1623020803/sm2qtd6y1uhwlm85svu3.jpg"
            signature: "3a122c6282072b140132cda6e568178fd56452f8"
            type: "Hidden"
            url: "http://res.cloudinary.com/jd999dawkins/image/upload/v1623020803/sm2qtd6y1uhwlm85svu3.jpg"
            width: 400
            l  */}

        </div> );
    }
}
 
export default Albumview;