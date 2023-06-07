//MAIN SCRIPT//

console.log("Hello World")
const loadingElement = document.querySelector('.loading');
const textElement = document.querySelector('.lorem');
const opacityElement = document.querySelector('main')
//const opacityElement2 = document.querySelector('nav')
const opacityElement3 = document.querySelector('body')
const text = textElement.textContent;
let index = 0;


function writer() {
  textElement.textContent = text.slice(0, index);

  if (index < text.length) {
    index++;
    setTimeout(writer, 1); /* delay typing */
  }
}
setTimeout(() => {
  writer();
  loadingElement.style.display = 'none';
  opacityElement.style.opacity = '1'
  //  opacityElement2.style.opacity = '1'
  opacityElement3.style.backgroundImage = 'var(--bg)'
}, 3000); // delay before start code
console.log('Hello, how are you!? My name is Irwan Zuwendri Z. Hope you enjoy with my content.\nThank you for visited  my Portfolio.')




//NAVBAR SCRIPT//

let i = document.getElementById('hvr')
let l = document.getElementById('mrp')
let j = document.getElementById('ul')

i.style.transform = 'rotate(0deg) translateX(0rem)'
if (i.style.transform === 'rotate(0deg) translateX(0rem)') {
  i.addEventListener('click', function() {
    i.style.display = 'none'
    j.style.transform = 'translateX(0rem)'
    if(j.style.transform === 'translateX(0rem)'){
      l.addEventListener('click', function(){
        j.style.transform = 'translateX(30rem)'
        i.style.display ='block'
      })
    }
  })
}














/*
i.addEventListener('click', function() {
  i.style.transform = 'rotate(180deg) translateX(0rem)'
  setTimeout(function() {
    i.style.transform = 'rotate(180deg) translateX(3rem)'
       j.style.transform = 'translateX(0vw)'
  }, 100), setTimeout(function() {
    i.style.display = 'none'
    l.style.display = 'block'
  }, 150)
})
l.addEventListener('click', function() {
  if(l.style.display === 'block'){
     j.style.transform = 'translateX(30vw)'
     l.style.transform = 'rotate(180deg) translate(-3rem)'
    setTimeout(function(){
      l.style.display = 'none'
      l.style.transform = 'rotate(180deg) translate(-3rem)'
    },200)
  }
     i.style.display = 'block'
  
 
  
  
  
  
  
  
  
  
  
  
  
/*  l.style.transform = 'rotate(180deg) translateX(0rem)'
  setTimeout(function() {
    l.style.transform = 'rotate(180deg) translateX(-2rem)'
        j.style.transform = 'translateX(0vw)'
  }, 100), setTimeout(function() {
    l.style.display = 'none'
    i.style.display = 'block'
  }, 200), setTimeout(function() {
    i.style.transform = 'rotate(0deg)'
    l.style.transform = 'rotate(180deg) translateX(0rem)'
     j.style.transform = 'translateX(30vw)'
  }, 200)
})*/