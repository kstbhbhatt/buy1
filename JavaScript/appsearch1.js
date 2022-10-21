let searchss= new Array();
let stock4 = JSON.parse(localStorage.getItem("stock2")) || [];
    document.getElementById("search-button").addEventListener("mousedown", function(){
        // alert('hi')
        
        search(hello)
       
    });




function search(callback){
    searchss.splice(0, searchss.length);
    stock4.forEach(search)
    function search(stck){
        var input = document.getElementById("search");
        
        if(stck.name.toLowerCase().match(input.value.toLowerCase()) ){
            
            let searcher = 
            {
                sr : `${stck.sr}`,
                name: `${stck.name}`,
                price:  `${stck.price}`,
                codeName: `${stck.codeName}`,
                descp: `${stck.descp}`,
                serialNumber: `${stck.serialNumber}`,
                buy:  `${stck.buy}`,
                dimensions: `${stck.dimensions}`,
                weight: `${stck.weight}`,
                build: `${stck.build}`,
                displayType: `${stck.displayType}`,
                screenSize: `${stck.screenSize}`,
                resolution: `${stck.resolution}`,
                protection: `${stck.protection}`,
                os: `${stck.os}`,
                Chipset: `${stck.Chipset}`,
                selfieCamera: `${stck.selfieCamera}`,
                battery: `${stck.battery}`,


                
            }
            searchss.push(searcher);

            console.log(searchss);
            
            
        }
    };
    callback();
    return searchss

}

function hello(){
    searched(specs);
}



function searched(callback1){
    
    let search3 = searchss
if(search3.length == 0){
    // alert();
}
else{
    // alert('yo')
    var searchButton1 = document.getElementById("search-button");
    searchButton1.onmouseup = function() {
    var f = document.getElementById("smartphone");
    f.innerHTML='';
    var fg = document.getElementById("smartphone1");
    fg.innerHTML='';
    var cross = document.getElementById("search-button");
    
    search3.forEach(productt)
    callback1();
    function productt(stck){
        // alert(stck.sr)
    const node1 = document.createElement("div");
    node1.classList.add("light", "column");
    node1.id = `cardss${stck.sr}`;
    const node = document.createElement("div");
    node.classList.add("light", "product");
    node.id = `card${stck.sr}`;


    const img = document.createElement("div");
    img.classList.add("col1", "prod-img");
    img.innerHTML= `<img src='./Images/${stck.codeName}.jfif' alt="">`;


    const descp = document.createElement("div");
    descp.classList.add("col3", "prod-descp");descp.classList.add("col3", "prod-descp");
    descp.innerHTML=`<h2 id="prod-name">${stck.name}</h2>
    <p class="price">₹${stck.price}</p>
    <p id="prod-descp">${stck.descp}</p>
    <br>
    <p class="specs" id="specs${stck.sr}">Show Specifications<p>`;


    const readMore = document.createElement("div");
    readMore.classList.add("read-more");
    readMore.innerHTML=`<button class="btn1" id=${stck.sr}><a href="">Add To Cart</a></button>
    <a href="buy.html" id="buy${stck.sr}"><button class="btn1" >Buy Now</button></a>`;

    const table = document.createElement("div");
    table.classList.add("col");
    table.id = `table${stck.sr}`;
    table.innerHTML = `<table>
    <colgroup>
        <col span="1" style="background-color: #666 ">
        <col span="1" style="background-color: #eee" >
    </colgroup>
    
    <tr>
    <th>Dimensions</th>
    <td>${stck.dimensions}</td>
    </tr>
    <tr>
    <th>Weight	</th>
    <td>${stck.weight}</td>
    </tr>
    <tr>
    <th>Build	</th>
    <td>${stck.build}</td>
    </tr>
    <tr>
    <th>Display Type</th>
    <td>${stck.displayType}</td>
    </tr>
    <tr>
    <th>Screen Size</th>
    <td>${stck.screenSize}</td>
    </tr>
    <th>Resolution</th>
    <td>${stck.resolution}</td>
    </tr>
    <tr>
    <th>Protection</th>
    <td>${stck.protection}</td>
    </tr>
    <tr>
    <th>OS</th>
    <td>${stck.os}</td>
    </tr>
    <tr>
    <th>Chipset</th>
    <td>${stck.Chipset}</td>
    </tr>
    <tr>
    <th>Main Cameras</th>
    <td>${stck.mainCameras}</td>
    </tr>
    <tr>
    <th>Selfie Camera</th>
    <td>${stck.selfieCamera}</td>
    </tr>
    <tr>
    <th>Battery</th>
    <td>${stck.battery}</td>
    </tr>
    </table>
    <p class="specs hide" id="hide${stck.sr}">Hide Specs</p>`



    node.appendChild(img);
    node.appendChild(descp);
    descp.appendChild(readMore);
    node1.appendChild(node);
    node1.appendChild(table);

    document.getElementById("smartphone1").appendChild(node1);  
    

        console.log(searchss)
        // searchss.splice(0, searchss.length);
        
       
    };
    // document.getElementById("search-button1").addEventListener("click", reload);
    //     function reload(){
    //         // alert("hi")
    //            window.location.reload();
    //        }
    }
    
    };
    
    

}

function specs(){
    searchss.forEach(function(stck){
        document.getElementById(`specs${stck.sr}`).addEventListener('click', function(e){
            document.getElementById(`specs${stck.sr}`).innerHTML = '';
            var show = document.getElementById(`table${stck.sr}`);
            console.log('Yo');
            show.style.display = "block";
    
            e.preventDefault()
        })
    });
    searchss.forEach(function(stck){
        document.getElementById(`hide${stck.sr}`).addEventListener('click', function(e){
            document.getElementById(`specs${stck.sr}`).innerHTML = 'Show Specifications';
            var show = document.getElementById(`table${stck.sr}`);
            show.style.display = "none";
    
            e.preventDefault()
        })
    });}











