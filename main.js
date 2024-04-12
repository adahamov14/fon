// let inp = document.querySelector('input')
// let btn = document.querySelector('button')
// let h1 = document.querySelector('h1')


// let obj = {
//     name : 'Asan',
//     age:18,
// }


// btn.addEventListener('click', ()=>{
//     localStorage.setItem('flex', JSON.stringify(obj))
//  localStorage.setItem('text', obj.age)
// })

// let object = JSON.parse(localStorage.getItem('flex') )
// h1.innerHTML = object

// let num = 15
// localStorage.setItem('text',num)
// console.log(num)
// h1.innerHTML = num




// let obj = {
//     name: 'hello',
//     age: 20,
//     married: false
// }


// let ret  = JSON.stringify(obj)
// let obj1 = localStorage.setItem('text1', ret)
// let obj2 = JSON.parse(localStorage.getItem('text1')) 
// h1.innerHTML = obj2.name

let inp = document.querySelector('input')
let btn = document.querySelector('.btn')
let btn2 = document.querySelector('.btn2')
let btn3 = document.querySelector('.btn3')

 let h1 = document.querySelector('h1')

btn.addEventListener('click',()=>{
h1.innerHTML = inp.value
})

btn2.addEventListener('click',()=>{
    h1.innerHTML = ""
    inp.value = ""
    })

btn3.addEventListener('click', ()=>{
    localStorage.setItem('text', inp.value)
    // inp.value = ""
})