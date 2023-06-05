 console.log("Hello World")
const loadingElement = document.querySelector('.loading');
const textElement = document.querySelector('.lorem');
const opacityElement = document.querySelector('main')
const opacityElement2 = document.querySelector('nav')
const opacityElement3 = document.querySelector('body')
const text = textElement.textContent;
let index = 0;


function writer() {
  textElement.textContent = text.slice(0, index);

  if (index < text.length) {
    index++;
    setTimeout(writer, 1); /* delay typing (millisecond)*/
  }
}
setTimeout(() => {
  writer();
  loadingElement.style.display = 'none';
  opacityElement.style.opacity = '1'
  opacityElement2.style.opacity = '1'
  opacityElement3.style.backgroundImage = 'var(--bg)'
}, 3000); // delay before start code
console.log('Hello, how are you!? My name is Irwan Zuwendri Z. Hope you enjoy with my content.\nThank you for visited  my Portfolio.')




//Navbar
let i = document.getElementById('rtd');



/*

//BETULKAN KODENYA||UPDATE THE CODE MAN//
const i = document.getElementById('rtd');
let rotation = 0;
let translate = 200;

i.addEventListener('click', function() {
  if (rotation === 0) {
    rotation = 180;
    translate = -360;
  } else {
    rotation = 0;
    translate = 350;
  }
  
  i.style.transform = `rotate(${rotation}deg) translateX(${rotation}px)`;
});
*/


