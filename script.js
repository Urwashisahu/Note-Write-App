let btn = document.querySelector("#btn");
let container =document.querySelector(".container")
let btnremove=""

btn.addEventListener('click',addnote)

function addnote(){
    let div = document.createElement('div');
    div.classList.add('content')

    let p=document.createElement('p')
    p.classList.add('inputbox')
    p.setAttribute('contenteditable',true)

    let btn=document.createElement('button')
    btn.classList.add('btnremove')
    btn.innerHTML='remove'

    div.appendChild(p)
    div.appendChild(btn)

  container.appendChild(div)

  btnremove = document.querySelector('.btnremove');
  btnremove.addEventListener('click',removenote)

}

function removenote(event){
  event.target.parentElement.remove()
}