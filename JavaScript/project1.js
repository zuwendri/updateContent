let btn = document.getElementById('btn');
let game1 = document.getElementById('Game1');

//btn click event//
//create Game1
//hide main tag
btn.addEventListener('click', function (){
  game1.style.display = 'block';
  let main = document.getElementById('ctn');
  let bg = document.getElementById('bg');
  
  bg.style.backgroundColor ='#000'
  main.style.display = 'none';
  game1.style.display = 'flex';
  
  if(game1.style.display == 'flex'){
    let btn2 = document.getElementById('btn2')
    console.log('test')
    //btn2 click Event//
    //Hide Game1
    //create main tag
    btn2.addEventListener('click', function(){
      game1.style.display ='none'
      bg.style.backgroundColor ='#fff'
  main.style.display = 'block';
      
    })
  }
})
