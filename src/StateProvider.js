import React, { createContext, useContext, useReducer } from 'react';

//setpup data layer
//wee need this to track the basket


//thsis is the data layer
export const StateContext = createContext();

//build a provider
export const StateProvider = ({reducer,initialState, children})=>(
    <StateContext.Provider value={useReducer(reducer,initialState)}>
        {children}
    </StateContext.Provider>
);

//this is how we use it in a compenent 

/*


*/

export const useStateValue = () => useContext(StateContext)