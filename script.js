let inp1 = document.querySelector('.inp1')
let inp2 = document.querySelector('.inp2')
let btn = document.querySelector('button')
let kama = {
    id:11,
    password:12
}
let jafa = {
    id:12,
    password:13
}
let yahya = {
    id:13,
    password:14
}
btn.addEventListener('click', ()=>{
    if(inp1.value == kama.id && inp2.value == kama.password){
        alert('hello Kamron')
    }else{
        alert('idi domoy')
    }
})

inp1.addEventListener('input', ()=>{
    if(inp2.value.length > 0 && inp1.value.length > 0 ){
        btn.classList.add('btn1')
    }else{  
        btn.classList.remove('btn1');
    }
})
inp2.addEventListener('input', ()=>{
    if(inp2.value.length > 0 && inp1.value.length > 0 ){
        btn.classList.add('btn1')
    }else{  
        btn.classList.remove('btn1');
    }
})