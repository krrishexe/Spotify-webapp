import React,{
    createContext ,
    useContext,
    useReducer
} from 'react'
                                        // creating context API
export const DataLayerContext = createContext();   // preparing the DataLayer

export const DataLayer = (
    {initalState ,
     reducer,
     children}) => (                // children is the element which is wrapped inside the DataLayer. , in this case its <App />
    <DataLayerContext.Provider value={useReducer(reducer,initalState)}>

        {children}
 
    </DataLayerContext.Provider>
)
 
export const useDataLayerValue = () => useContext(DataLayerContext);