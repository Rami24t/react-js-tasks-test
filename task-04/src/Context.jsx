import React, { createContext, useReducer } from "react";

export const Context = createContext();

export default function ContextProvider({children}){

    function reducer(prev,action){

        switch(action.type){
            case 'name':{
                return {...prev, name:action.payload}
                }
            case 'location':{
                return{...prev, location: action.payload};
                }
            default:
                    break;
        }
        return state
    }

    const [state,dispatch] = useReducer(reducer,{name: '', location: ''})

    return(
        <Context.Provider value={{state,dispatch}}>
            {children}
        </Context.Provider>
    )

}
