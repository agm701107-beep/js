const news = ['あああ','いいい','ううう'];
const box3Ul = document.querySelector('.box3 ul');
for (let i of news){
    const li = document.createElement('li');
    li.textContent = i;
    box3Ul.appendChild(li);
}


