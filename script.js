const btn = document.querySelector('.btn');
const p1 = document.querySelector('.p1');

function clickBtn(event){
    if(event.target){
        console.log('ok');
        p1.innerHTML = 'Кнопка была нажата!';
    }
}

btn.addEventListener('click', clickBtn);