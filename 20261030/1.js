const news=[
    'ああああ','いいいい','うううう'
];
const box3Ul = document.querySelector('.box3 ul');
for (let i of/*配列はof オブジェクトはin*/ news)/*<-リストの要素が取れる*/{
/*for (let i of news){console.log(i);}でリスト内表示*/
    const li = document.createElement/*タグを作る、html内になくても表示*/('li');/*リストをliタグに挿入 */
    li.textContent = i;
    box3Ul.appendChild(li);
}
