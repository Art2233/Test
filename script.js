const btn = document.querySelector('.btn');

function clickBtn(event){
    if(event.target){
        console.log('ok');
    }
}

btn.addEventListener('click', clickBtn);