let inputEl=document.getElementById('input');
let spanEl=document.getElementById('span')


function onkeydown(event){
    let ele=event.key
    let op=ele.charCodeAt(0)
    let liEl=document.createElement('li')
    liEl.textContent=op
    liEl.style.listStyle="none"
    spanEl.appendChild(liEl)

}

inputEl.addEventListener('keydown',onkeydown)