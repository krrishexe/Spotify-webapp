import React,{
    createContext ,
    useContext,
    useReducer
} from 'react'
                                        // creating context API
export const StateContext = createContext();   // preparing the DataLayer

export const DataLayerContext = (
    {initalState ,
     reducer,
     children}) => (                // children is the element which is wrapped inside the DataLayer. , in this case its <App />
    <DataLayerContext.provider value={useReducer(reducer,initalState)}>

        {children}
 
    </DataLayerContext.provider>
)
 