export const initalState = {
    user : null ,
    playlists : [],
    playing:false ,
    item :null 
}
const reducer = (state , action) => {
    console.log(action);
    switch(action.type){
        case 'SET_USER' :
            return {
                    ...state ,                  // ...state will return whatever there was initially in the initial state.
                    user: action.user
            }
    }
}