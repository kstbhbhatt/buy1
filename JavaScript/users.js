// let user = new Array();
// user = [
//     {username: "kstbhbhatt",
//     password: "123456",
//     },
//     {username: "adty",
//     password: "1234",
//     },
//     {username: "pesu",
//     password: "123",
//     },
//     {username: "vis",
//     password: "12",
//     }
// ]
// localStorage.setItem("user", JSON.stringify(user));

// let user1 = JSON.parse(localStorage.getItem("user")) || [];

// localStorage.setItem("user1", JSON.stringify(user1));
let user1 = JSON.parse(localStorage.getItem("user1")) || [];
let user2 = JSON.parse(localStorage.getItem("user2")) || [];
let users
if (user1.length > user2.length){
    users = user1
}else{
    users = user2
}

console.log(users)
let arr = new Array();
// users.forEach(cartEach)
// function cartEach(users){
    
//     console.log(`${users.username}`)
   
//     localStorage.setItem(`${users.username}`, JSON.stringify(arr));

// }
document.getElementById('button').addEventListener('mousedown', function(e){
    login();


    e.preventDefault();
})

function login(){

    //ui variables
    let user1 = document.getElementById('username');
    let userName = user1.value;

    let pass = document.getElementById('password');
    let password = pass.value;
    let message = document.getElementById('message');
    let message1 = document.getElementById('register-para');


    if(check(userName, password) == true){
        message.innerText = `Welcome ${userName}`;
        message1.style.display = "none";
        document.getElementById('button').id="button1";
        document.getElementById('button1').innerHTML=`<a href="home.html"><button class="btn4 dark" value="Submit">Go To Home</button></a>`;
    }else{
        message.innerHTML = `Username or password don't match. Try <a href="register.html">registering</a>`;
        message1.style.display = "none";
        document.getElementById('button').id="button1";
        document.getElementById('button1').innerHTML=`<a href="test.html"><button class="btn4 dark" value="Submit">Retry</button></a>`;
      
    }
    localStorage.setItem(`active`, JSON.stringify(active));
}
let active = new Array()
active = JSON.parse(localStorage.getItem("active")) || [];
if(active.length == 0){
    
}else{
    document.getElementById("search-bar").innerHTML= `<a href="" ><button class="btn3" disabled>${active[0].username}</button></a>
    <a href="" id="logout"><button class="btn3" >Log Out</button></a>`;

}
document.getElementById("logout").addEventListener('click', function(){
    active = [];
    localStorage.setItem("active", JSON.stringify(active));
    alert("you successfully Signed Out")
});
function check(username, password){
        for(var i = 0; i < users.length; i++){
            if((users[i].username == username)&&(users[i].password == password)){
                active = [{username: `${username}`}];
                
                return true;
            }
        };
    }
    function checkuser(user2){
        for(var i =0; i < user.length; i++){
        if(users[i].username == user2){
            return true
        }else{
            return false
        }
    };}