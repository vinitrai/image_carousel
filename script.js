const leftArrow = document.querySelector('.left__arrow');
const rightArrow = document.querySelector('.right__arrow');
const mainImg = document.querySelector('.img__container img');
const circles = document.querySelectorAll('span');

let counter=-1;

rightArrow.addEventListener('click',function(){
    if(counter >=7){
        counter = -1;
    }

    counter += 1;
    mainImg.src = `./images/img${counter}.jpg`;
    [...circles].forEach(circle=>{
        if(circle.classList.contains('dark__bg')){
            circle.classList.remove('dark__bg')
        }
    })
    circles[counter].classList.add('dark__bg')
     
    console.log(mainImg.src)
    
    console.log(counter);
})
leftArrow.addEventListener('click',function(){
    if(counter <= 0){
        counter = 8;
    }
    counter -=1;
    console.log(counter);
    mainImg.src = `./images/img${counter}.jpg`;
    
    [...circles].forEach(circle=>{
        if(circle.classList.contains('dark__bg')){
            circle.classList.remove('dark__bg')
        }
    })
    circles[counter].classList.add('dark__bg')
    
    
    
    console.log(mainImg.src)
   
})
