const output=document.querySelector("#ab");

let a=2;
if (a===1){
    output.textContent="こんにちは";
}else if(a===2){
    output.textContent="こんばんは";
}




let f=document.querySelector("#box1");
let i=0;
while(i<5){
let e=document.createElement("div");
let list=["red","blue","yellow","green","black"]
console.log(list.sort(function(){
    return Math.random()-0.5
}));
e.style.width="100px";
e.style.height="100px";
e.style.backgroundColor=list[i];
e.style.transform="translateX(200px)"

f.append(e);


console.log(`${i++}`);
}