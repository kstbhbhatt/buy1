// alert('Click Buy Now to Proceed')
let active = JSON.parse(localStorage.getItem("active")) || [];
if(active.length == 0){
    document.getElementById("search-bar").innerHTML= `<a href="test.html" ><button class="btn3" >Log In</button></a>
    <a href="register.html" "><button class="btn3" >Sign Up</button></a>`;
    
    window.location = "home.html";
}else{
    document.getElementById("search-bar").innerHTML= `<a href="" ><button class="btn3" disabled>${active[0].username}</button></a>
    <a href="" id="logout"><button class="btn3" >Log Out</button></a>`;

}
let buy1 = JSON.parse(localStorage.getItem("buy1")) || [];
function removeDuplicateObjectFromArray(array, key) {
    var check = {};
    var res = [];
    array.forEach(element => {
        if(!check[element[key]]) {
            check[element[key]] = true;
            res.push(element);
        }
    });
    return res;
}
let buy2 =removeDuplicateObjectFromArray(buy1, 'sr');
console.log(buy2);
 
// console.log(removeDuplicateObjectFromArray(arr, 'name'))
if(buy2.length == 0){
    alert("Nothing to buy");
    window.location = "home.html";
}else{
buy2.forEach(product)

    function product(crt){
        // alert(crt.sr)
    const node = document.createElement("div");
    node.classList.add("light", "product");
    node.id = `card${crt.sr}`;


    const img = document.createElement("div");
    img.classList.add("col1", "prod-img");

    // const imgImg = document.createElement('img');
    // imgImg.src = `./Images/${crt.codeName}.jfif`;
    img.innerHTML= `<img src='./Images/${crt.codeName}.jfif' alt="">`;
    // img.appendChild(imgImg);

    const descp = document.createElement("div");
    descp.classList.add("col3", "prod-descp");
    descp.innerHTML=`<h2 id="prod-name">${crt.name}</h2>
    <p class="price">$${crt.price}</p>
    <p id="prod-descp">${crt.descp}</p>`;


    const readMore = document.createElement("div");
    readMore.classList.add("read-more");
    readMore.innerHTML=`<a href="${crt.buy}"><button class="btn1">Buy Now</button></a>`;


    node.appendChild(img);
    node.appendChild(descp);
    descp.appendChild(readMore);

    document.getElementById("smartphone").appendChild(node); 
    


};
}

document.getElementById("logout").addEventListener('click', function(){
    active = [];
    localStorage.setItem("active", JSON.stringify(active));
    alert("you successfully Signed Out")
});