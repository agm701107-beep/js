/*最初の練習コード*/
console.log("hello world");

let a=4;
let b=137;
console.log(a*b);
const c=5;
const d=4;
console.log(c-d);
const e="おまえ、";
const f="かす";
console.log(e+f)


let name='鈴木';
let str=`こんにちは、${name}さん。`;
console.log(str);


let data=[
    ["Java Script","Python"],
    ["PHP","Ruby","Perl"]
];
console.log(data[0][1]);

let book={
    title:"javascript入門",
    price:2980,
    publisher:"技術評論社",
};
console.log(book.title);
console.log(book["title"]);

let x =15;/*xに15を代入 */
if (x>=10)/*もしxが10以上なら*/{
    console.log("変数xは10以上です");
}else/*そうではないなら*/{
    console.log("変数xは10未満です");
}

let rank="B"
switch(rank){
    case"A":
        console.log("Aランク");
        break;
    case"B":
        console.log("Bランク");
        break;
    case"C":
        console.log("Cランク");
        break;
    default:
        console.log("ランク外");
        break;
}

let i =5;
while(i<10)/*whileは繰り返し、iから9を繰り返す*/{
    console.log(`iの値は${i}`);
    i++;//i=i+1(変数iに1加える)
}//10以降で終わる

do/*doでとりあえず実行してからwhileで範囲を確認*/{
    console.log(`iの値は${i}`);
    i++;
}while(i<10);


for(let i=5;/*iが5*/i<10;i++/*iは10未満で1加えていく*/){
    console.log(`iの値は${i}`);//9まで繰り返される
}


let n=10
while(n<15){
    console.log(`おはよう`);
    n++;
}

let name1="田中";
let age="41";
let str1=`${name1}さんは${age}才です`;
console.log(str1);