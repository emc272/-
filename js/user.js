window.onload = function(){
    let nav = document.querySelector('.nav')
    for(let i = 0; i <= 2; i++){
        nav.children[i].addEventListener('click',function(){
            for(let j = 0; j <= 2; j++){
                nav.children[j].className = ''
            }
            this.className = 'active'
        })
    }
}