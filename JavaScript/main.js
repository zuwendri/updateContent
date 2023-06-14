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



window.addEventListener('load', () => {
  writer();
  setTimeout(() => {
    writer();
    loadingElement.style.display = 'none';
    opacityElement.style.opacity = '1'
    //  opacityElement2.style.opacity = '1'
    opacityElement3.style.backgroundImage = 'var(--bg)'
  }, 3000); // delay before start code
  console.log('Hello, how are you!? My name is Irwan Zuwendri Z. Hope you enjoy with my content.\nThank you for visited  my Portfolio.')
})



//NAVBAR SCRIPT//

let i = document.getElementById('hvr')
let l = document.getElementById('mrp')
let j = document.getElementById('ul')
let I = document.querySelectorAll('[id^="lin"]')
let n = document.getElementById('popUp')
let N = document.getElementById('txtX')
let b = document.querySelector('main')

j.style.opacity = '0'

i.style.transform = 'rotate(0deg) translateX(0rem)'
if (i.style.transform === 'rotate(0deg) translateX(0rem)') {
  i.addEventListener('click', function() {
    i.style.display = 'none'
    setInterval(function() {
      j.style.opacity = '1'
    }, 22)
    j.style.transform = 'translateX(0rem)'

    if (j.style.transform === 'translateX(0rem)') {
      l.addEventListener('click', function() {
        setTimeout(function() {
          j.style.opacity = '0'
        }, 20)
        j.style.transform = 'translateX(30rem)'
        i.style.display = 'block'
      })
    }
  })
}



window.addEventListener('scroll', function() {
  j.style.transform = 'translateX(30rem)'
  i.style.display = 'block'
})

I.forEach(I => {
  I.addEventListener('click', function() {
    n.style.opacity = '1'
    N.innerHTML = I.textContent + ' Content is being developed...'
    setTimeout(function() {
      n.style.opacity = '0'
    }, 3000)
  })
})