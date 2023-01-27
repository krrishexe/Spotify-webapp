export const initalState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    token:null
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
        default:
                return state
    }
}

export default reducer;