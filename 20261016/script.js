console.log("こんにちは");

const a=1;
const b=2;
console.log(a+b);

function/*関数化*/ ab/*関数名*/(a,b/*仮引数*/){
    console.log(a+b);//処理
};
ab(1,2);//実引数、値を与える

const c="わたしは";
const d="人間です";
console.log(c+d);

function cd(c,d){
    console.log(c+d);
};
cd("わたしは","人間です")

let person={
    name:"田中",
    age:21,
    height:176,
};
person.height=176;
console.log(person.name)
function showperson(p){//personを関数化
    console.log(p.name);
    console.log(p.age);
    let str=`わたしは${p.name}で,${p.age}です。身長は${p.height}です。`;
    console.log(str);
};
showperson(person)//personをつなげて関数を呼び出す

let photo={
    file:aiu.jpg,
    text:"aiuの説明",
};
console.log(photo.file);
console.log(photo.text);
const img1=document.querySelector(".img1");
img1.src=photo.file;