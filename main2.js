let box = document.querySelector('.box');
let h1 = document.querySelector('h1');
let body = document.querySelector('body');

const wi = ()=>{
    body.style.backgroundColor = 'Black';
    h1.style.color = 'white';
    body.style.transition = '.3s'
}
const bl = ()=>{
    body.style.backgroundColor = 'white'
    h1.style.color = 'black';
    body.style.transition = '.3s'

}


if(localStorage.getItem ('color') == 'bl' ){
    bl()
}else(
    wi()
)

let i = 0

box.addEventListener('click', () => {
    if(i%2==0){
        bl()
        localStorage.setItem ('color', 'wi')
        i++
    }else{
        wi()
        localStorage.setItem ('color', 'bl')
        i=0
    }
})