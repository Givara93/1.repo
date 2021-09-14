/************************ GUIZ 1 *********************************/


const quiz1 = document.querySelector('.quiz1'),
question1 = quiz1.querySelector('.question1'),
ja1 = quiz1.querySelector('.ja'),
nein1 = quiz1.querySelector('.nein'),
answer1 = quiz1.querySelector('.answer'),
button1 = quiz1.querySelector('button');


nein1.addEventListener("click",()=>{
    if(!nein1.classList.contains("choosed") && !ja1.classList.contains("choosed")){
        nein1.classList.add('choosed');
    }else if(!nein1.classList.contains("choosed") && ja1.classList.contains("choosed")){
        nein1.classList.add('choosed');
        ja1.classList.remove('choosed');
    }else{
        nein1.classList.remove('choosed');
    }
})
ja1.addEventListener("click",()=>{
    if(!ja1.classList.contains("choosed") && !nein1.classList.contains("choosed")){
        ja1.classList.add('choosed');
    }else if(!ja1.classList.contains("choosed") && nein1.classList.contains("choosed")){
        ja1.classList.add('choosed');
        nein1.classList.remove('choosed');
    }else{
        ja1.classList.remove('choosed');
    }

})

button1.addEventListener("click", ()=>{
    if(ja1.classList.contains("choosed")){
        ja1.classList.add('true');
        nein1.classList.add('false');
        button1.style.display = "none";
        answer1.innerHTML = "Richtig";
        answer1.classList.add("true");
        answer1.style.display = "block";
    }else if(nein1.classList.contains("choosed")){
        ja1.classList.add('true');
        nein1.classList.add('false');
        button1.style.display = "none";
        answer1.innerHTML = "Falsch";
        answer1.classList.add("false");
        answer1.style.display = "block";
    }else{

        answer1.innerHTML = "Bitte wähle eine Antwort aus...";
        answer1.style.display = "block";
        answer1.style.fontSize = '12px';
    }
})



/************************ GUIZ 2 *********************************/


const quiz2 = document.querySelector('.quiz2'),
question2 = quiz2.querySelector('.question2'),
ja2 = quiz2.querySelector('.ja'),
nein2 = quiz2.querySelector('.nein'),
answer2 = quiz2.querySelector('.answer'),
button2 = quiz2.querySelector('button');


nein2.addEventListener("click",()=>{
    if(!nein2.classList.contains("choosed") && !ja2.classList.contains("choosed")){
        nein2.classList.add('choosed');
    }else if(!nein2.classList.contains("choosed") && ja2.classList.contains("choosed")){
        nein2.classList.add('choosed');
        ja2.classList.remove('choosed');
    }else{
        nein2.classList.remove('choosed');
    }
})
ja2.addEventListener("click",()=>{
    if(!ja2.classList.contains("choosed") && !nein2.classList.contains("choosed")){
        ja2.classList.add('choosed');
    }else if(!ja2.classList.contains("choosed") && nein2.classList.contains("choosed")){
        ja2.classList.add('choosed');
        nein2.classList.remove('choosed');
    }else{
        ja2.classList.remove('choosed');
    }

})

button2.addEventListener("click", ()=>{
    if(ja2.classList.contains("choosed")){
        ja2.classList.add('true');
        nein2.classList.add('false');
        button2.style.display = "none";
        answer2.innerHTML = "Falsch";
        answer2.classList.add("false");
        answer2.style.display = "block";
    }else if(nein2.classList.contains("choosed")){
        ja2.classList.add('true');
        nein2.classList.add('false');
        button2.style.display = "none";
        answer2.innerHTML = "Richtig";
        answer2.classList.add("true");
        answer2.style.display = "block";
    }else{

        answer2.innerHTML = "Bitte wähle eine Antwort aus...";
        answer2.style.display = "block";
        answer2.style.fontSize = '12px';
    }
})



/************************ GUIZ 3 *********************************/


const quiz3 = document.querySelector('.quiz3'),
question3 = quiz3.querySelector('.question3'),
ja3 = quiz3.querySelector('.ja'),
nein3 = quiz3.querySelector('.nein'),
answer3 = quiz3.querySelector('.answer'),
button3 = quiz3.querySelector('button');


nein3.addEventListener("click",()=>{
    if(!nein3.classList.contains("choosed") && !ja3.classList.contains("choosed")){
        nein3.classList.add('choosed');
    }else if(!nein3.classList.contains("choosed") && ja3.classList.contains("choosed")){
        nein3.classList.add('choosed');
        ja3.classList.remove('choosed');
    }else{
        nein3.classList.remove('choosed');
    }
})
ja3.addEventListener("click",()=>{
    if(!ja3.classList.contains("choosed") && !nein3.classList.contains("choosed")){
        ja3.classList.add('choosed');
    }else if(!ja1.classList.contains("choosed") && nein3.classList.contains("choosed")){
        ja3.classList.add('choosed');
        nein3.classList.remove('choosed');
    }else{
        ja3.classList.remove('choosed');
    }

})

button3.addEventListener("click", ()=>{
    if(ja3.classList.contains("choosed")){
        ja3.classList.add('true');
        nein3.classList.add('false');
        button3.style.display = "none";
        answer3.innerHTML = "Richtig";
        answer3.classList.add("true");
        answer3.style.display = "block";
    }else if(nein3.classList.contains("choosed")){
        ja3.classList.add('true');
        nein3.classList.add('false');
        button3.style.display = "none";
        answer3.innerHTML = "Falsch";
        answer3.classList.add("false");
        answer3.style.display = "block";
    }else{

        answer3.innerHTML = "Bitte wähle eine Antwort aus...";
        answer3.style.display = "block";
        answer3.style.fontSize = '12px';
    }
})



/************************ GUIZ 4 *********************************/


const quiz4 = document.querySelector('.quiz4'),
question4 = quiz1.querySelector('.question4'),
ja4 = quiz4.querySelector('.ja'),
nein4 = quiz4.querySelector('.nein'),
answer4 = quiz4.querySelector('.answer'),
button4 = quiz4.querySelector('button');


nein4.addEventListener("click",()=>{
    if(!nein4.classList.contains("choosed") && !ja4.classList.contains("choosed")){
        nein4.classList.add('choosed');
    }else if(!nein4.classList.contains("choosed") && ja4.classList.contains("choosed")){
        nein4.classList.add('choosed');
        ja4.classList.remove('choosed');
    }else{
        nein4.classList.remove('choosed');
    }
})
ja4.addEventListener("click",()=>{
    if(!ja4.classList.contains("choosed") && !nein4.classList.contains("choosed")){
        ja4.classList.add('choosed');
    }else if(!ja4.classList.contains("choosed") && nein4.classList.contains("choosed")){
        ja4.classList.add('choosed');
        nein4.classList.remove('choosed');
    }else{
        ja4.classList.remove('choosed');
    }

})

button4.addEventListener("click", ()=>{
    if(ja4.classList.contains("choosed")){
        ja4.classList.add('true');
        nein4.classList.add('false');
        button4.style.display = "none";
        answer4.innerHTML = "Richtig";
        answer4.classList.add("true");
        answer4.style.display = "block";
    }else if(nein4.classList.contains("choosed")){
        ja4.classList.add('true');
        nein4.classList.add('false');
        button4.style.display = "none";
        answer4.innerHTML = "Falsch";
        answer4.classList.add("false");
        answer4.style.display = "block";
    }else{

        answer4.innerHTML = "Bitte wähle eine Antwort aus...";
        answer4.style.display = "block";
        answer4.style.fontSize = '12px';
    }
})



/************************ GUIZ 5 *********************************/


const quiz5 = document.querySelector('.quiz5'),
question5 = quiz5.querySelector('.question5'),
ja5 = quiz5.querySelector('.ja'),
nein5 = quiz5.querySelector('.nein'),
answer5 = quiz5.querySelector('.answer'),
button5 = quiz5.querySelector('button');


nein5.addEventListener("click",()=>{
    if(!nein5.classList.contains("choosed") && !ja5.classList.contains("choosed")){
        nein5.classList.add('choosed');
    }else if(!nein5.classList.contains("choosed") && ja5.classList.contains("choosed")){
        nein5.classList.add('choosed');
        ja5.classList.remove('choosed');
    }else{
        nein5.classList.remove('choosed');
    }
})
ja5.addEventListener("click",()=>{
    if(!ja5.classList.contains("choosed") && !nein5.classList.contains("choosed")){
        ja5.classList.add('choosed');
    }else if(!ja5.classList.contains("choosed") && nein5.classList.contains("choosed")){
        ja5.classList.add('choosed');
        nein5.classList.remove('choosed');
    }else{
        ja5.classList.remove('choosed');
    }

})

button5.addEventListener("click", ()=>{
    if(ja5.classList.contains("choosed")){
        ja5.classList.add('true');
        nein5.classList.add('false');
        button5.style.display = "none";
        answer5.innerHTML = "Richtig";
        answer5.classList.add("true");
        answer5.style.display = "block";
    }else if(nein5.classList.contains("choosed")){
        ja5.classList.add('true');
        nein5.classList.add('false');
        button5.style.display = "none";
        answer5.innerHTML = "Falsch";
        answer5.classList.add("false");
        answer5.style.display = "block";
    }else{

        answer5.innerHTML = "Bitte wähle eine Antwort aus...";
        answer5.style.display = "block";
        answer5.style.fontSize = '12px';
    }
})



/************************ GUIZ 6 *********************************/


const quiz6 = document.querySelector('.quiz6'),
question6 = quiz6.querySelector('.question6'),
ja6 = quiz6.querySelector('.ja'),
nein6 = quiz6.querySelector('.nein'),
answer6 = quiz6.querySelector('.answer'),
button6 = quiz6.querySelector('button');


nein6.addEventListener("click",()=>{
    if(!nein6.classList.contains("choosed") && !ja6.classList.contains("choosed")){
        nein6.classList.add('choosed');
    }else if(!nein6.classList.contains("choosed") && ja6.classList.contains("choosed")){
        nein6.classList.add('choosed');
        ja6.classList.remove('choosed');
    }else{
        nein6.classList.remove('choosed');
    }
})
ja6.addEventListener("click",()=>{
    if(!ja6.classList.contains("choosed") && !nein6.classList.contains("choosed")){
        ja6.classList.add('choosed');
    }else if(!ja6.classList.contains("choosed") && nein6.classList.contains("choosed")){
        ja6.classList.add('choosed');
        nein6.classList.remove('choosed');
    }else{
        ja6.classList.remove('choosed');
    }

})

button6.addEventListener("click", ()=>{
    if(ja6.classList.contains("choosed")){
        ja6.classList.add('true');
        nein6.classList.add('false');
        button6.style.display = "none";
        answer6.innerHTML = "Richtig";
        answer6.classList.add("true");
        answer6.style.display = "block";
    }else if(nein6.classList.contains("choosed")){
        ja6.classList.add('true');
        nein6.classList.add('false');
        button6.style.display = "none";
        answer6.innerHTML = "Falsch";
        answer6.classList.add("false");
        answer6.style.display = "block";
    }else{

        answer6.innerHTML = "Bitte wähle eine Antwort aus...";
        answer6.style.display = "block";
        answer6.style.fontSize = '12px';
    }
})



/************************ GUIZ 7 *********************************/


const quiz7 = document.querySelector('.quiz7'),
question7 = quiz1.querySelector('.question7'),
ja7 = quiz7.querySelector('.ja'),
nein7 = quiz7.querySelector('.nein'),
answer7 = quiz7.querySelector('.answer'),
button7 = quiz7.querySelector('button');


nein7.addEventListener("click",()=>{
    if(!nein7.classList.contains("choosed") && !ja7.classList.contains("choosed")){
        nein7.classList.add('choosed');
    }else if(!nein7.classList.contains("choosed") && ja7.classList.contains("choosed")){
        nein7.classList.add('choosed');
        ja7.classList.remove('choosed');
    }else{
        nein7.classList.remove('choosed');
    }
})
ja7.addEventListener("click",()=>{
    if(!ja7.classList.contains("choosed") && !nein7.classList.contains("choosed")){
        ja7.classList.add('choosed');
    }else if(!ja7.classList.contains("choosed") && nein7.classList.contains("choosed")){
        ja7.classList.add('choosed');
        nein7.classList.remove('choosed');
    }else{
        ja7.classList.remove('choosed');
    }

})

button7.addEventListener("click", ()=>{
    if(ja7.classList.contains("choosed")){
        ja7.classList.add('true');
        nein7.classList.add('false');
        button7.style.display = "none";
        answer7.innerHTML = "Falsch";
        answer7.classList.add("false");
        answer7.style.display = "block";
    }else if(nein7.classList.contains("choosed")){
        ja7.classList.add('true');
        nein7.classList.add('false');
        button7.style.display = "none";
        answer7.innerHTML = "Richtig";
        answer7.classList.add("true");
        answer7.style.display = "block";
    }else{

        answer7.innerHTML = "Bitte wähle eine Antwort aus...";
        answer7.style.display = "block";
        answer7.style.fontSize = '12px';
    }
})



/************************ GUIZ 8 *********************************/


const quiz8 = document.querySelector('.quiz8'),
question8 = quiz1.querySelector('.question8'),
ja8 = quiz8.querySelector('.ja'),
nein8 = quiz8.querySelector('.nein'),
answer8 = quiz8.querySelector('.answer'),
button8 = quiz8.querySelector('button');


nein8.addEventListener("click",()=>{
    if(!nein8.classList.contains("choosed") && !ja8.classList.contains("choosed")){
        nein8.classList.add('choosed');
    }else if(!nein8.classList.contains("choosed") && ja8.classList.contains("choosed")){
        nein8.classList.add('choosed');
        ja8.classList.remove('choosed');
    }else{
        nein8.classList.remove('choosed');
    }
})
ja8.addEventListener("click",()=>{
    if(!ja8.classList.contains("choosed") && !nein8.classList.contains("choosed")){
        ja8.classList.add('choosed');
    }else if(!ja8.classList.contains("choosed") && nein8.classList.contains("choosed")){
        ja8.classList.add('choosed');
        nein8.classList.remove('choosed');
    }else{
        ja8.classList.remove('choosed');
    }

})

button8.addEventListener("click", ()=>{
    if(ja8.classList.contains("choosed")){
        ja8.classList.add('true');
        nein8.classList.add('false');
        button8.style.display = "none";
        answer8.innerHTML = "Falsch";
        answer8.classList.add("false");
        answer8.style.display = "block";
    }else if(nein8.classList.contains("choosed")){
        ja8.classList.add('true');
        nein8.classList.add('false');
        button8.style.display = "none";
        answer8.innerHTML = "Richtig";
        answer8.classList.add("true");
        answer8.style.display = "block";
    }else{

        answer8.innerHTML = "Bitte wähle eine Antwort aus...";
        answer8.style.display = "block";
        answer8.style.fontSize = '12px';
    }
})



/************************ GUIZ 9 *********************************/


const quiz9 = document.querySelector('.quiz9'),
question9 = quiz9.querySelector('.question9'),
ja9 = quiz9.querySelector('.ja'),
nein9 = quiz9.querySelector('.nein'),
answer9 = quiz9.querySelector('.answer'),
button9 = quiz9.querySelector('button');


nein9.addEventListener("click",()=>{
    if(!nein9.classList.contains("choosed") && !ja9.classList.contains("choosed")){
        nein9.classList.add('choosed');
    }else if(!nein9.classList.contains("choosed") && ja9.classList.contains("choosed")){
        nein9.classList.add('choosed');
        ja9.classList.remove('choosed');
    }else{
        nein9.classList.remove('choosed');
    }
})
ja9.addEventListener("click",()=>{
    if(!ja9.classList.contains("choosed") && !nein9.classList.contains("choosed")){
        ja9.classList.add('choosed');
    }else if(!ja9.classList.contains("choosed") && nein9.classList.contains("choosed")){
        ja9.classList.add('choosed');
        nein9.classList.remove('choosed');
    }else{
        ja9.classList.remove('choosed');
    }

})

button9.addEventListener("click", ()=>{
    if(ja9.classList.contains("choosed")){
        ja9.classList.add('true');
        nein9.classList.add('false');
        button9.style.display = "none";
        answer9.innerHTML = "Richtig";
        answer9.classList.add("true");
        answer9.style.display = "block";
    }else if(nein9.classList.contains("choosed")){
        ja9.classList.add('true');
        nein9.classList.add('false');
        button9.style.display = "none";
        answer9.innerHTML = "Falsch";
        answer9.classList.add("false");
        answer9.style.display = "block";
    }else{

        answer9.innerHTML = "Bitte wähle eine Antwort aus...";
        answer9.style.display = "block";
        answer9.style.fontSize = '12px';
    }
})



/************************ GUIZ 10 *********************************/


const quiz10 = document.querySelector('.quiz10'),
question10 = quiz10.querySelector('.question10'),
ja10 = quiz10.querySelector('.ja'),
nein10 = quiz10.querySelector('.nein'),
answer10 = quiz10.querySelector('.answer'),
button10 = quiz10.querySelector('button');


nein10.addEventListener("click",()=>{
    if(!nein10.classList.contains("choosed") && !ja10.classList.contains("choosed")){
        nein10.classList.add('choosed');
    }else if(!nein10.classList.contains("choosed") && ja10.classList.contains("choosed")){
        nein10.classList.add('choosed');
        ja10.classList.remove('choosed');
    }else{
        nein10.classList.remove('choosed');
    }
})
ja10.addEventListener("click",()=>{
    if(!ja10.classList.contains("choosed") && !nein10.classList.contains("choosed")){
        ja10.classList.add('choosed');
    }else if(!ja10.classList.contains("choosed") && nein10.classList.contains("choosed")){
        ja10.classList.add('choosed');
        nein10.classList.remove('choosed');
    }else{
        ja10.classList.remove('choosed');
    }

})

button10.addEventListener("click", ()=>{
    if(ja10.classList.contains("choosed")){
        ja10.classList.add('true');
        nein10.classList.add('false');
        button10.style.display = "none";
        answer10.innerHTML = "Falsch";
        answer10.classList.add("false");
        answer10.style.display = "block";
    }else if(nein10.classList.contains("choosed")){
        ja10.classList.add('true');
        nein10.classList.add('false');
        button10.style.display = "none";
        answer10.innerHTML = "Richtig";
        answer10.classList.add("true");
        answer10.style.display = "block";
    }else{

        answer10.innerHTML = "Bitte wähle eine Antwort aus...";
        answer10.style.display = "block";
        answer10.style.fontSize = '12px';
    }
})
