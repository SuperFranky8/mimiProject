// // let mainHeading = document.getElementById('main-heading');
// // // newHeadingText = prompt('Enter new heading');
// // mainHeading.innerHTML = newHeadingText;


// let magBtn = document.getElementById('magic-btn');
// let myP= document.getElementById('my-p');
// let userText = document.querySelector('#user-text');

// magBtn.addEventListener('click', function(){
//     myP.innerHTML = userText.value;
// });

const iOthod = document.querySelector('.input__othod');
const str1 = document.querySelector('.input__area1');
const str2 = document.querySelector('.input__area2');
const str3 = document.querySelector('.input__area3');

const readyBtn = document.querySelector('.btn__ready');

const sum = document.querySelector('#sum');


readyBtn.addEventListener('click', function(){
    document.querySelector('.result__kod').innerHTML = iOthod.value;

    document.querySelector('.result1').innerHTML = str1.value;
    document.querySelector('.result2').innerHTML = str2.value;
    document.querySelector('.result3').innerHTML = str3.value;
    sum.innerHTML = str1.value+str2.value+str3.value;
})



