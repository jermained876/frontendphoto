
export const initialState={
    basket:[{name:'BV Electric',
        address:'2400 Taraval San Francisco, CA 94116',
        Overview:'For residential or commercial electrical services, contact BV Electric, Inc. We provide electrical',
        website:'BVel.com',
        images:[ 'https://s3-media0.fl.yelpcdn.com/bphoto/4YOqCYVSVQAaOP-aEAlfFA/o.jpg',
        'https://s3-media0.fl.yelpcdn.com/bphoto/Cj2CAXSBXOwco8wRNwsv9Q/o.jpg',
        'https://s3-media0.fl.yelpcdn.com/bphoto/8HMlBMuNnOBmsgK4fMp2-w/o.jpg',
       'https://s3-media0.fl.yelpcdn.com/bphoto/9D6aXSY2J8x__Y0hTvH4yw/o.jpg'],
        type:'electrican',
        image:'https://s3-media0.fl.yelpcdn.com/bphoto/Cj2CAXSBXOwco8wRNwsv9Q/o.jpg',
        rating:4
        },
       
    
    {name:'dawkins'}],
    user:{name:'tetsing jermaine'},
    access:'',
    token:{},
    parish:[],
    category:[],
    navlink:{book:false,profolio:false,mygallery:false}
};

function reducer(state,action){
    console.log(action)
switch(action.type){
     case 'SET_USER':

        return {
            ...state, 
            user:action.user
        };

     break;
     case 'LOAD_BASKET':
         
        
        //logic for adding item to basket
           return {
               //return whatwver is in state
               ...state,
               //return the basket with current state but add action item
               basket:action.item
           };
        break;

        case 'LOGOUT':
         
        
            //logic for adding item to basket
               return {
                   //return whatwver is in state
                   ...state,
                   //return the basket with current state but add action item
                   user:{}, access:''
               };
            break;
     case 'LOAD_PARISH':
         
        
        //logic for adding item to basket
           return {
               //return whatwver is in state
               ...state,
               //return the basket with current state but add action item
               parish:action.item
           };
        break;
        case 'LOAD_USER':
            console.log('loading')
            console.log(action.item)
            console.log(state)
        
        //logic for adding item to basket
           return {
               //return whatwver is in state
               ...state,
               //return the basket with current state but add action item
               user:action.item
               
           };

    
        break;
        case 'LOAD_ACCESS':
            console.log('loading')
            console.log(action.item)
            console.log(state)
        
        //logic for adding item to basket
           return {
               //return whatwver is in state
               ...state,
               //return the basket with current state but add action item
               access:action.item
               
           };

    
        break;
        case 'LOAD_TOKEN':
            console.log('loading')
            console.log(action.item)
            console.log(state)
        
        //logic for adding item to basket
           return {
               //return whatwver is in state
               ...state,
               //return the basket with current state but add action item
               token:action.item
               
           };

    
        break;
     case 'ADD_TO_BASKET':
        
     //logic for adding item to basket
    
        return {
            //return whatwver is in state
            ...state,
            //return the basket with current state but add action item
            basket:[...state.basket,action.item]
        };
     break;
     
     case 'REMOVE_TO_BASKET':
     //logic for adding item to basket
      let newBasket = [...state.basket]
       

      let upBasket = newBasket.filter(item=>item.id != action.id)  
        console.log(upBasket)
     return {...state, basket:upBasket};
     break;
     default:
         return state;

    }

    
}

export default reducer;