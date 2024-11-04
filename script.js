const first = document.getElementById('1');
const img1 = document.getElementById('img1')
const second = document.getElementById('2')
const img2 = document.getElementById('img2')
const third= document.getElementById('3')
const img3 = document.getElementById('img3')
const fourth = document.getElementById('4')
const img4 = document.getElementById('img4')
const five = document.getElementById('5')
const img5 = document.getElementById('img5')
const six = document.getElementById('6')
const img6 = document.getElementById('img6')
const leftArr = document.getElementById('larr');
const rightArr = document.getElementById('rarr');


first.addEventListener('click',()=>{
  document.getElementById('des1').style.display = 'block';
  document.getElementById('des2').style.display = 'none';
  document.getElementById('des3').style.display = 'none';
  document.getElementById('des4').style.display = 'none';
  document.getElementById('des5').style.display = 'none';
  document.getElementById('des6').style.display = 'none';
  img1.style.rotate = '225deg';
  img2.style.rotate = '0deg';
  img3.style.rotate = '0deg';
  img4.style.rotate = '0deg';
  img5.style.rotate = '0deg';
  img6.style.rotate = '0deg';
  img1.style.transition = 'rotate 0.5s linear';
})

img1.addEventListener('click',()=>{
  document.getElementById('des1').style.display = 'none';
  document.getElementById('des1').style.paddingBottom = '';
  img1.style.rotate = '0deg';
  img1.style.transition = 'rotate 0.5s linear';
} )


second.addEventListener('click',()=>{
  document.getElementById('des1').style.display = 'none';
  document.getElementById('des2').style.display = 'block';
  document.getElementById('des3').style.display = 'none';
  document.getElementById('des4').style.display = 'none';
  document.getElementById('des5').style.display = 'none';
  document.getElementById('des6').style.display = 'none';
  img1.style.rotate = '0deg';
  img2.style.rotate = '225deg';
  img3.style.rotate = '0deg';
  img4.style.rotate = '0deg';
  img5.style.rotate = '0deg';
  img6.style.rotate = '0deg';
  img2.style.transition = 'rotate 0.5s linear';
})

img2.addEventListener('click',()=>{
  document.getElementById('des2').style.display = 'none';
  document.getElementById('des2').style.paddingBottom = '';
  img2.style.rotate = '0deg';
  img2.style.transition = 'rotate 0.5s linear';
} )


third.addEventListener('click',()=>{
  document.getElementById('des1').style.display = 'none';
  document.getElementById('des2').style.display = 'none';
  document.getElementById('des3').style.display = 'block';
  document.getElementById('des4').style.display = 'none';
  document.getElementById('des5').style.display = 'none';
  document.getElementById('des6').style.display = 'none';
  img1.style.rotate = '0deg';
  img2.style.rotate = '0deg';
  img3.style.rotate = '225deg';
  img4.style.rotate = '0deg';
  img5.style.rotate = '0deg';
  img6.style.rotate = '0deg';
  img3.style.transition = 'rotate 0.5s linear';
})

img3.addEventListener('click',()=>{
  document.getElementById('des3').style.display = 'none';
  document.getElementById('des3').style.paddingBottom = '';
  img3.style.rotate = '0deg';
  img3.style.transition = 'rotate 0.5s linear';
} )


fourth.addEventListener('click',()=>{
  document.getElementById('des1').style.display = 'none';
  document.getElementById('des2').style.display = 'none';
  document.getElementById('des3').style.display = 'none';
  document.getElementById('des4').style.display = 'block';
  document.getElementById('des5').style.display = 'none';
  document.getElementById('des6').style.display = 'none';
  img1.style.rotate = '0deg';
  img2.style.rotate = '0deg';
  img3.style.rotate = '0deg';
  img4.style.rotate = '225deg';
  img5.style.rotate = '0deg';
  img6.style.rotate = '0deg';
  img4.style.transition = 'rotate 0.5s linear';
})

img4.addEventListener('click',()=>{
  document.getElementById('des4').style.display = 'none';
  document.getElementById('des4').style.paddingBottom = '';
  img4.style.rotate = '0deg';
  img4.style.transition = 'rotate 0.5s linear';
} )


five.addEventListener('click',()=>{
  document.getElementById('des1').style.display = 'none';
  document.getElementById('des2').style.display = 'none';
  document.getElementById('des3').style.display = 'none';
  document.getElementById('des4').style.display = 'none';
  document.getElementById('des5').style.display = 'block';
  document.getElementById('des6').style.display = 'none';
  img1.style.rotate = '0deg';
  img2.style.rotate = '0deg';
  img3.style.rotate = '0deg';
  img4.style.rotate = '0deg';
  img5.style.rotate = '225deg';
  img6.style.rotate = '0deg';
  img5.style.transition = 'rotate 0.5s linear';
})

img5.addEventListener('click',()=>{
  document.getElementById('des5').style.display = 'none';
  document.getElementById('des5').style.paddingBottom = '';
  img5.style.rotate = '0deg';
  img5.style.transition = 'rotate 0.5s linear';
} )


six.addEventListener('click',()=>{
  document.getElementById('des1').style.display = 'none';
  document.getElementById('des2').style.display = 'none';
  document.getElementById('des3').style.display = 'none';
  document.getElementById('des4').style.display = 'none';
  document.getElementById('des5').style.display = 'none';
  document.getElementById('des6').style.display = 'block';
  img1.style.rotate = '0deg';
  img2.style.rotate = '0deg';
  img3.style.rotate = '0deg';
  img4.style.rotate = '0deg';
  img5.style.rotate = '0deg';
  img6.style.rotate = '225deg';
  img6.style.transition = 'rotate 0.5s linear';
})

img6.addEventListener('click',()=>{
  document.getElementById('des6').style.display = 'none';
  document.getElementById('des6').style.paddingBottom = '';
  img6.style.rotate = '0deg';
  img6.style.transition = 'rotate 0.5s linear';
} )

rightArr.addEventListener('click' ,()=>{
  let element = document.getElementById('cards')
  element.scrollLeft += 400;
  leftArr.style.display = 'block';
})

leftArr.addEventListener('click' ,(e)=>{
  let element = document.getElementById('cards')
  if(screenX === 0 ){
    leftArr.style.display = 'none'
  }else(leftArr.style.display = 'block')
  element.scrollLeft += -1500;
})
