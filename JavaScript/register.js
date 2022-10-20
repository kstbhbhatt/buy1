document.getElementById('register').addEventListener('mousedown', function(e){
    register();


    e.preventDefault();
})


// register()
// user = [
//     {username: "abc1", password: "pass1"},
//     {username: "abc2", password: "pass2"},
//     {username: "abc3", password: "pass3"},
//     {username: "abc4", password: "pass4"},
//     {username: "abc5", password: "pass5"},
// ];
// document.querySelector("#register").onmousedown = function(){
//     register();
// };

// let user = JSON.parse(localStorage.getItem("user1")) || [];

let user1 = JSON.parse(localStorage.getItem("user1")) || [];
let user2 = JSON.parse(localStorage.getItem("user2")) || [];
let user
if (user1.length > user2.length){
    user = user1
}else{
    user = user2
}
function register(){
    let user1 = document.getElementById('username');
    let userName = user1.value;

    let pass = document.getElementById('password');
    let password = pass.value;
    let message = document.getElementById('message');


        // let user1 = prompt('Set your username');
        // let pass1 = prompt('Set your password');    
    
        if(check(userName, password) == true){
            message.innerHTML = `You are already a user!! Click here to <a href="test.html">Login</a> `;
        }else if(checkuser(userName) == true){
            message.innerText = `${userName} is already taken` ;
        }else{
           message.innerHTML = `${userName} is now a user`;
            object = {
                username: `${userName}`,
                password: `${password}`,
            };
            user.push(object);
            localStorage.setItem("user2", JSON.stringify(user));

        }
        console.log(user);
    }
    
    

    function check(username, password){
        for(var i =0; i < user.length; i++){
            if((user[i].username == username)&&(user[i].password == password)){
                return true;
            }else{
                return false;
            }
        };
    }
    function checkuser(user2){
        for(var i =0; i < user.length; i++){
        if(user[i].username == user2){
            return true
        }else{
            return false
        }
    };}