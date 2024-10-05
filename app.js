var arr = ["white" , "green" , "yellow" , "red" , "black"];
var div = document.querySelector("div");
var body = document.querySelector("body")

for(var i=0;i<arr.length; i++){
        div.innerHTML += `<button onclick = "colorBtn(${i})">${arr[i]}</button>`;
}

function colorBtn(i){
    body.style.backgroundColor = `${arr[i]}`;
}