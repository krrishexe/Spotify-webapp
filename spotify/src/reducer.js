export const initalState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    token:"BQAbl3znu_w2cUn7glBckk-0n7Nztf5MjA2LEOyfZYl3_HRSRA…hn-xeK1BDz4fy2PFxlM_EVnPQahbaobI-MHh0mxRAGqeIrVUQ",
};
const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,                  // "..."  will return whatever there was initially in the initial state.
                user: action.user
            }
        case 'SET_TOKEN':
            return{
                ...state,
                token:action.token,
            }
        case 'SET_PLAYLISTS':
            return{
                ...state,
                playlists:action.playlists, 
            }
        default:
                return state
    }
}

export default reducer;