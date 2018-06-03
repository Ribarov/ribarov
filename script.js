var database = [
    {
    username: "Oliver",
    password: "ribar",
 
}];
 
var newsFeed = [
        {
        username: "",
        timeline: ""
    },
    {
        username: "",
        timeline: ""
    },
    {
        username: "",
        timeline: ""
    }
];

var userNamePrompt = prompt("what is your username");
var passwordPrompt = prompt("what is your password");

function signIn(username, password) {
    if (username === database[0].username && 
        password === database[0].password) {
            console.log(newsFeed);
        } else {
            alert("Sorry,wrong username and password");
        }
}
signIn(userNamePrompt, passwordPrompt);