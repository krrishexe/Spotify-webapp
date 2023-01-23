import React,{
    createContext ,
    useContext,
    useReducer
} from 'react'
                                        // creating context API
export const StateContext = createContext();

export const DataLayer = (
    {initalState ,
     reducer,
     children}) => (
    <DataLayerContext.provider value={useReducer(reducer,initalState)}>

        {children}
        
    </DataLayerContext.provider>
)
 