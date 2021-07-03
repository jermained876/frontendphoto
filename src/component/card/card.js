import React, { Component } from 'react';
import './card.css'

class Card extends Component {
    state = {  }

  

    render() { 

        const {albums}  = this.props

        return (

            <div>

               
            

<div class="container container-gallery">
	<div class="row">

    {albums.map(item=>
    <div class="col-sm-6 col-md-4 ">
            <div class="profile-card-2"><img src={process.env.PUBLIC_URL+'/images/cb3.jpg'} class="img img-responsive"/>
                <div class="profile-name">{item.name}</div>
                <div class="profile-username">@johndoesurname</div>
               </div>
        </div>
        )}
		

       
</div>
</div>

            </div>

          );
    }
}
 
export default Card;

    
