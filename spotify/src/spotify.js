//https://developer.spotify.com/documentation/web-playback-sdk/quick-start/#

//https://accounts.spotify.com/en/authorize?response_type=token&client_id=adaaf209fb064dfab873a71817029e0d&redirect_uri=https%3A%2F%2Fdeveloper.spotify.com%2Fdocumentation%2Fweb-playback-sdk%2Fquick-start%2F&scope=streaming+user-read-email+user-modify-playback-state+user-read-private&show_dialog=true

export const authEndpoint = "https://accounts.spotify.com/en/authorize";

const redirectUri = "http://localhost:3000/callback";
const clientId ="925ce03872cf4cc88e77303c8f38aecb"

const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
];

export const getTokenFormUrl = () =>{
    return window.location.hash
    .substring(1)
    .split('&')
    .reduce((inital,item) => {
        var parts = item.split('=')
        inital[parts[0]] = decodeURIComponent(parts[1])
        return inital;
    }, {});
}



export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`