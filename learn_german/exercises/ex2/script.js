/************************ GUIZ 1 *********************************/


const quiz1 = document.querySelector('.quiz1'),
question1 = quiz1.querySelector('.question1'),
answer11 = question1.querySelector('.answer1'),
answer12 = question1.querySelector('.answer2'),
answer13 = question1.querySelector('.answer3'),
answer14 = question1.querySelector('.answer4'),

question2 = quiz1.querySelector('.question2'),
answer21 = question2.querySelector('.answer1'),
answer22 = question2.querySelector('.answer2'),
answer23 = question2.querySelector('.answer3'),
answer24 = question2.querySelector('.answer4'),


question3 = quiz1.querySelector('.question3'),
answer31 = question3.querySelector('.answer1'),
answer32 = question3.querySelector('.answer2'),
answer33 = question3.querySelector('.answer3'),
answer34 = question3.querySelector('.answer4'),

question4 = quiz1.querySelector('.question4'),
answer41 = question4.querySelector('.answer1'),
answer42 = question4.querySelector('.answer2'),
answer43 = question4.querySelector('.answer3'),
answer44 = question4.querySelector('.answer4'),

question5 = quiz1.querySelector('.question5'),
answer51 = question5.querySelector('.answer1'),
answer52 = question5.querySelector('.answer2'),
answer53 = question5.querySelector('.answer3'),
answer54 = question5.querySelector('.answer4'),

question6 = quiz1.querySelector('.question6'),
answer61 = question6.querySelector('.answer1'),
answer62 = question6.querySelector('.answer2'),
answer63 = question6.querySelector('.answer3'),
answer64 = question6.querySelector('.answer4');







button1 = quiz1.querySelector('button');



answer11.addEventListener('click', ()=>{
  answer11.classList.add('choosed');
  answer12.classList.remove('choosed');
  answer13.classList.remove('choosed');
  answer14.classList.remove('choosed');

});
answer12.addEventListener('click', ()=>{
  answer11.classList.remove('choosed');
  answer12.classList.add('choosed');
  answer13.classList.remove('choosed');
  answer14.classList.remove('choosed');
});
answer13.addEventListener('click', ()=>{
  answer11.classList.remove('choosed');
  answer12.classList.remove('choosed');
  answer13.classList.add('choosed');
  answer14.classList.remove('choosed');
});
answer14.addEventListener('click', ()=>{
  answer11.classList.remove('choosed');
  answer12.classList.remove('choosed');
  answer13.classList.remove('choosed');
  answer14.classList.add('choosed');
});


answer21.addEventListener('click', ()=>{
  answer21.classList.add('choosed');
  answer22.classList.remove('choosed');
  answer23.classList.remove('choosed');
  answer24.classList.remove('choosed');

});
answer22.addEventListener('click', ()=>{
  answer21.classList.remove('choosed');
  answer22.classList.add('choosed');
  answer23.classList.remove('choosed');
  answer24.classList.remove('choosed');
});
answer23.addEventListener('click', ()=>{
  answer21.classList.remove('choosed');
  answer22.classList.remove('choosed');
  answer23.classList.add('choosed');
  answer24.classList.remove('choosed');
});
answer24.addEventListener('click', ()=>{
  answer21.classList.remove('choosed');
  answer22.classList.remove('choosed');
  answer23.classList.remove('choosed');
  answer24.classList.add('choosed');
});


answer31.addEventListener('click', ()=>{
  answer31.classList.add('choosed');
  answer32.classList.remove('choosed');
  answer33.classList.remove('choosed');
  answer34.classList.remove('choosed');

});
answer32.addEventListener('click', ()=>{
  answer31.classList.remove('choosed');
  answer32.classList.add('choosed');
  answer33.classList.remove('choosed');
  answer34.classList.remove('choosed');
});
answer33.addEventListener('click', ()=>{
  answer31.classList.remove('choosed');
  answer32.classList.remove('choosed');
  answer33.classList.add('choosed');
  answer34.classList.remove('choosed');
});
answer34.addEventListener('click', ()=>{
  answer31.classList.remove('choosed');
  answer32.classList.remove('choosed');
  answer33.classList.remove('choosed');
  answer34.classList.add('choosed');
});


answer41.addEventListener('click', ()=>{
  answer41.classList.add('choosed');
  answer42.classList.remove('choosed');
  answer43.classList.remove('choosed');
  answer44.classList.remove('choosed');

});
answer42.addEventListener('click', ()=>{
  answer41.classList.remove('choosed');
  answer42.classList.add('choosed');
  answer43.classList.remove('choosed');
  answer44.classList.remove('choosed');
});
answer43.addEventListener('click', ()=>{
  answer41.classList.remove('choosed');
  answer42.classList.remove('choosed');
  answer43.classList.add('choosed');
  answer44.classList.remove('choosed');
});
answer44.addEventListener('click', ()=>{
  answer41.classList.remove('choosed');
  answer42.classList.remove('choosed');
  answer43.classList.remove('choosed');
  answer44.classList.add('choosed');
});


answer51.addEventListener('click', ()=>{
  answer51.classList.add('choosed');
  answer52.classList.remove('choosed');
  answer53.classList.remove('choosed');
  answer54.classList.remove('choosed');

});
answer52.addEventListener('click', ()=>{
  answer51.classList.remove('choosed');
  answer52.classList.add('choosed');
  answer53.classList.remove('choosed');
  answer54.classList.remove('choosed');
});
answer53.addEventListener('click', ()=>{
  answer51.classList.remove('choosed');
  answer52.classList.remove('choosed');
  answer53.classList.add('choosed');
  answer54.classList.remove('choosed');
});
answer54.addEventListener('click', ()=>{
  answer51.classList.remove('choosed');
  answer52.classList.remove('choosed');
  answer53.classList.remove('choosed');
  answer54.classList.add('choosed');
});

answer61.addEventListener('click', ()=>{
  answer61.classList.add('choosed');
  answer62.classList.remove('choosed');
  answer63.classList.remove('choosed');
  answer64.classList.remove('choosed');

});
answer62.addEventListener('click', ()=>{
  answer61.classList.remove('choosed');
  answer62.classList.add('choosed');
  answer63.classList.remove('choosed');
  answer64.classList.remove('choosed');
});
answer63.addEventListener('click', ()=>{
  answer61.classList.remove('choosed');
  answer62.classList.remove('choosed');
  answer63.classList.add('choosed');
  answer64.classList.remove('choosed');
});
answer64.addEventListener('click', ()=>{
  answer61.classList.remove('choosed');
  answer62.classList.remove('choosed');
  answer63.classList.remove('choosed');
  answer64.classList.add('choosed');
});




button1.addEventListener("click", ()=>{
    if(answer11.classList.contains("choosed")){
      answer11.classList.remove('choosed');
      answer11.classList.add('true');
      answer12.style.opacity = 0;
      answer13.style.opacity = 0;
      answer14.style.opacity = 0;
    }else if(answer12.classList.contains("choosed")){
      answer12.classList.remove('choosed');
      answer12.classList.add('false');
      answer11.classList.add('true');
      answer13.style.opacity = 0;
      answer14.style.opacity = 0;
    }else if(answer13.classList.contains("choosed")){
      answer13.classList.remove('choosed');
      answer13.classList.add('false');
      answer11.classList.add('true');
      answer12.style.opacity = 0;
      answer14.style.opacity = 0;
    }else if(answer14.classList.contains("choosed")){
      answer14.classList.remove('choosed');
      answer14.classList.add('false');
      answer11.classList.add('true');
      answer12.style.opacity = 0;
      answer13.style.opacity = 0;
    }else{

    }


    if(answer21.classList.contains("choosed")){
      answer21.classList.remove('choosed');
      answer21.classList.add('false');
      answer22.classList.add('true');
      answer23.style.opacity = 0;
      answer24.style.opacity = 0;
    }else if(answer22.classList.contains("choosed")){
      answer22.classList.remove('choosed');
      answer22.classList.add('false');
      answer22.classList.add('true');
      answer21.style.opacity = 0;
      answer23.style.opacity = 0;
      answer24.style.opacity = 0;
    }else if(answer23.classList.contains("choosed")){
      answer23.classList.remove('choosed');
      answer23.classList.add('false');
      answer22.classList.add('true');
      answer21.style.opacity = 0;
      answer24.style.opacity = 0;
    }else if(answer24.classList.contains("choosed")){
      answer24.classList.remove('choosed');
      answer24.classList.add('false');
      answer22.classList.add('true');
      answer21.style.opacity = 0;
      answer23.style.opacity = 0;
    }else{

    }

    if(answer31.classList.contains("choosed")){
      answer31.classList.remove('choosed');
      answer31.classList.add('true');
      answer32.style.opacity = 0;
      answer33.style.opacity = 0;
      answer34.style.opacity = 0;
    }else if(answer32.classList.contains("choosed")){
      answer32.classList.remove('choosed');
      answer32.classList.add('false');
      answer31.classList.add('true');
      answer33.style.opacity = 0;
      answer34.style.opacity = 0;
    }else if(answer33.classList.contains("choosed")){
      answer33.classList.remove('choosed');
      answer33.classList.add('false');
      answer31.classList.add('true');
      answer32.style.opacity = 0;
      answer34.style.opacity = 0;
    }else if(answer34.classList.contains("choosed")){
      answer34.classList.remove('choosed');
      answer34.classList.add('false');
      answer31.classList.add('true');
      answer32.style.opacity = 0;
      answer33.style.opacity = 0;
    }else{
    }



    if(answer41.classList.contains("choosed")){
      answer41.classList.remove('choosed');
      answer41.classList.add('false');
      answer43.classList.add('true');
      answer42.style.opacity = 0;
      answer44.style.opacity = 0;
    }else if(answer42.classList.contains("choosed")){
      answer42.classList.remove('choosed');
      answer42.classList.add('false');
      answer43.classList.add('true');
      answer41.style.opacity = 0;
      answer44.style.opacity = 0;
    }else if(answer43.classList.contains("choosed")){
      answer43.classList.remove('choosed');
      answer43.classList.add('true');
      answer41.style.opacity = 0;
      answer42.style.opacity = 0;
      answer44.style.opacity = 0;
    }else if(answer44.classList.contains("choosed")){
      answer44.classList.remove('choosed');
      answer44.classList.add('false');
      answer43.classList.add('true');
      answer42.style.opacity = 0;
      answer41.style.opacity = 0;
    }else{
    }




    if(answer51.classList.contains("choosed")){
      answer51.classList.remove('choosed');
      answer51.classList.add('false');
      answer54.classList.add('true');
      answer52.style.opacity = 0;
      answer53.style.opacity = 0;
    }else if(answer52.classList.contains("choosed")){
      answer52.classList.remove('choosed');
      answer52.classList.add('false');
      answer54.classList.add('true');
      answer51.style.opacity = 0;
      answer53.style.opacity = 0;
    }else if(answer53.classList.contains("choosed")){
      answer53.classList.remove('choosed');
      answer53.classList.add('false');
      answer54.classList.add('true');
      answer52.style.opacity = 0;
      answer51.style.opacity = 0;
    }else if(answer54.classList.contains("choosed")){
      answer54.classList.remove('choosed');
      answer54.classList.add('true');
      answer52.style.opacity = 0;
      answer53.style.opacity = 0;
      answer51.style.opacity = 0;
    }else{
    }






    if(answer61.classList.contains("choosed")){
      answer61.classList.remove('choosed');
      answer61.classList.add('false');
      answer63.classList.add('true');
      answer62.style.opacity = 0;
      answer64.style.opacity = 0;
    }else if(answer62.classList.contains("choosed")){
      answer62.classList.remove('choosed');
      answer62.classList.add('false');
      answer63.classList.add('true');
      answer61.style.opacity = 0;
      answer64.style.opacity = 0;
    }else if(answer63.classList.contains("choosed")){
      answer63.classList.remove('choosed');
      answer63.classList.add('true');
      answer61.style.opacity = 0;
      answer62.style.opacity = 0;
      answer64.style.opacity = 0;
    }else if(answer64.classList.contains("choosed")){
      answer64.classList.remove('choosed');
      answer64.classList.add('false');
      answer63.classList.add('true');
      answer62.style.opacity = 0;
      answer61.style.opacity = 0;
    }else{
    }



})

/************************ GUIZ 2 *********************************/


const quiz2 = document.querySelector('.quiz2'),
question21 = quiz2.querySelector('.question1'),
answer211 = question21.querySelector('.answer1'),
answer212 = question21.querySelector('.answer2'),
answer213 = question21.querySelector('.answer3'),
answer214 = question21.querySelector('.answer4'),

question22 = quiz2.querySelector('.question2'),
answer221 = question22.querySelector('.answer1'),
answer222 = question22.querySelector('.answer2'),
answer223 = question22.querySelector('.answer3'),
answer224 = question22.querySelector('.answer4'),


question23 = quiz2.querySelector('.question3'),
answer231 = question23.querySelector('.answer1'),
answer232 = question23.querySelector('.answer2'),
answer233 = question23.querySelector('.answer3'),
answer234 = question23.querySelector('.answer4'),

question24 = quiz2.querySelector('.question4'),
answer241 = question24.querySelector('.answer1'),
answer242 = question24.querySelector('.answer2'),
answer243 = question24.querySelector('.answer3'),
answer244 = question24.querySelector('.answer4'),

question25 = quiz2.querySelector('.question5'),
answer251 = question25.querySelector('.answer1'),
answer252 = question25.querySelector('.answer2'),
answer253 = question25.querySelector('.answer3'),
answer254 = question25.querySelector('.answer4'),

question26 = quiz2.querySelector('.question6'),
answer261 = question26.querySelector('.answer1'),
answer262 = question26.querySelector('.answer2'),
answer263 = question26.querySelector('.answer3'),
answer264 = question26.querySelector('.answer4');







button2 = quiz2.querySelector('button');



answer211.addEventListener('click', ()=>{
  answer211.classList.add('choosed');
  answer212.classList.remove('choosed');
  answer213.classList.remove('choosed');
  answer214.classList.remove('choosed');

});
answer212.addEventListener('click', ()=>{
  answer211.classList.remove('choosed');
  answer212.classList.add('choosed');
  answer213.classList.remove('choosed');
  answer214.classList.remove('choosed');
});
answer213.addEventListener('click', ()=>{
  answer211.classList.remove('choosed');
  answer212.classList.remove('choosed');
  answer213.classList.add('choosed');
  answer214.classList.remove('choosed');
});
answer214.addEventListener('click', ()=>{
  answer211.classList.remove('choosed');
  answer212.classList.remove('choosed');
  answer213.classList.remove('choosed');
  answer214.classList.add('choosed');
});


answer221.addEventListener('click', ()=>{
  answer221.classList.add('choosed');
  answer222.classList.remove('choosed');
  answer223.classList.remove('choosed');
  answer224.classList.remove('choosed');

});
answer222.addEventListener('click', ()=>{
  answer221.classList.remove('choosed');
  answer222.classList.add('choosed');
  answer223.classList.remove('choosed');
  answer224.classList.remove('choosed');
});
answer223.addEventListener('click', ()=>{
  answer221.classList.remove('choosed');
  answer222.classList.remove('choosed');
  answer223.classList.add('choosed');
  answer224.classList.remove('choosed');
});
answer224.addEventListener('click', ()=>{
  answer221.classList.remove('choosed');
  answer222.classList.remove('choosed');
  answer223.classList.remove('choosed');
  answer224.classList.add('choosed');
});


answer231.addEventListener('click', ()=>{
  answer231.classList.add('choosed');
  answer232.classList.remove('choosed');
  answer233.classList.remove('choosed');
  answer234.classList.remove('choosed');

});
answer232.addEventListener('click', ()=>{
  answer231.classList.remove('choosed');
  answer232.classList.add('choosed');
  answer233.classList.remove('choosed');
  answer234.classList.remove('choosed');
});
answer233.addEventListener('click', ()=>{
  answer231.classList.remove('choosed');
  answer232.classList.remove('choosed');
  answer233.classList.add('choosed');
  answer234.classList.remove('choosed');
});
answer234.addEventListener('click', ()=>{
  answer231.classList.remove('choosed');
  answer232.classList.remove('choosed');
  answer233.classList.remove('choosed');
  answer234.classList.add('choosed');
});


answer241.addEventListener('click', ()=>{
  answer241.classList.add('choosed');
  answer242.classList.remove('choosed');
  answer243.classList.remove('choosed');
  answer244.classList.remove('choosed');

});
answer242.addEventListener('click', ()=>{
  answer241.classList.remove('choosed');
  answer242.classList.add('choosed');
  answer243.classList.remove('choosed');
  answer244.classList.remove('choosed');
});
answer243.addEventListener('click', ()=>{
  answer241.classList.remove('choosed');
  answer242.classList.remove('choosed');
  answer243.classList.add('choosed');
  answer244.classList.remove('choosed');
});
answer244.addEventListener('click', ()=>{
  answer241.classList.remove('choosed');
  answer242.classList.remove('choosed');
  answer243.classList.remove('choosed');
  answer244.classList.add('choosed');
});


answer251.addEventListener('click', ()=>{
  answer251.classList.add('choosed');
  answer252.classList.remove('choosed');
  answer253.classList.remove('choosed');
  answer254.classList.remove('choosed');

});
answer252.addEventListener('click', ()=>{
  answer251.classList.remove('choosed');
  answer252.classList.add('choosed');
  answer253.classList.remove('choosed');
  answer254.classList.remove('choosed');
});
answer253.addEventListener('click', ()=>{
  answer251.classList.remove('choosed');
  answer252.classList.remove('choosed');
  answer253.classList.add('choosed');
  answer254.classList.remove('choosed');
});
answer254.addEventListener('click', ()=>{
  answer251.classList.remove('choosed');
  answer252.classList.remove('choosed');
  answer253.classList.remove('choosed');
  answer254.classList.add('choosed');
});

answer261.addEventListener('click', ()=>{
  answer261.classList.add('choosed');
  answer262.classList.remove('choosed');
  answer263.classList.remove('choosed');
  answer264.classList.remove('choosed');

});
answer262.addEventListener('click', ()=>{
  answer261.classList.remove('choosed');
  answer262.classList.add('choosed');
  answer263.classList.remove('choosed');
  answer264.classList.remove('choosed');
});
answer263.addEventListener('click', ()=>{
  answer261.classList.remove('choosed');
  answer262.classList.remove('choosed');
  answer263.classList.add('choosed');
  answer264.classList.remove('choosed');
});
answer264.addEventListener('click', ()=>{
  answer261.classList.remove('choosed');
  answer262.classList.remove('choosed');
  answer263.classList.remove('choosed');
  answer264.classList.add('choosed');
});




button2.addEventListener("click", ()=>{
    if(answer211.classList.contains("choosed")){
      answer211.classList.remove('choosed');
      answer211.classList.add('true');
      answer212.style.opacity = 0;
      answer213.style.opacity = 0;
      answer214.style.opacity = 0;
    }else if(answer212.classList.contains("choosed")){
      answer212.classList.remove('choosed');
      answer212.classList.add('false');
      answer211.classList.add('true');
      answer213.style.opacity = 0;
      answer214.style.opacity = 0;
    }else if(answer213.classList.contains("choosed")){
      answer213.classList.remove('choosed');
      answer213.classList.add('false');
      answer211.classList.add('true');
      answer212.style.opacity = 0;
      answer214.style.opacity = 0;
    }else if(answer214.classList.contains("choosed")){
      answer214.classList.remove('choosed');
      answer214.classList.add('false');
      answer211.classList.add('true');
      answer212.style.opacity = 0;
      answer213.style.opacity = 0;
    }else{

    }


    if(answer221.classList.contains("choosed")){
      answer221.classList.remove('choosed');
      answer221.classList.add('false');
      answer224.classList.add('true');
      answer223.style.opacity = 0;
      answer222.style.opacity = 0;
    }else if(answer222.classList.contains("choosed")){
      answer222.classList.remove('choosed');
      answer222.classList.add('false');
      answer224.classList.add('true');
      answer221.style.opacity = 0;
      answer223.style.opacity = 0;
    }else if(answer223.classList.contains("choosed")){
      answer223.classList.remove('choosed');
      answer223.classList.add('false');
      answer224.classList.add('true');
      answer221.style.opacity = 0;
      answer222.style.opacity = 0;
    }else if(answer224.classList.contains("choosed")){
      answer224.classList.remove('choosed');
      answer224.classList.add('true');
      answer221.style.opacity = 0;
      answer222.style.opacity = 0;
      answer223.style.opacity = 0;
    }else{

    }

    if(answer231.classList.contains("choosed")){
      answer231.classList.remove('choosed');
      answer231.classList.add('false');
      answer234.classList.add('true');
      answer232.style.opacity = 0;
      answer233.style.opacity = 0;
    }else if(answer232.classList.contains("choosed")){
      answer232.classList.remove('choosed');
      answer232.classList.add('false');
      answer234.classList.add('true');
      answer233.style.opacity = 0;
      answer231.style.opacity = 0;
    }else if(answer233.classList.contains("choosed")){
      answer233.classList.remove('choosed');
      answer233.classList.add('false');
      answer234.classList.add('true');
      answer232.style.opacity = 0;
      answer231.style.opacity = 0;
    }else if(answer234.classList.contains("choosed")){
      answer234.classList.remove('choosed');
      answer234.classList.add('true');
      answer232.style.opacity = 0;
      answer233.style.opacity = 0;
      answer231.style.opacity = 0;
    }else{
    }



    if(answer241.classList.contains("choosed")){
      answer241.classList.remove('choosed');
      answer241.classList.add('false');
      answer243.classList.add('true');
      answer242.style.opacity = 0;
      answer244.style.opacity = 0;
    }else if(answer242.classList.contains("choosed")){
      answer242.classList.remove('choosed');
      answer242.classList.add('false');
      answer243.classList.add('true');
      answer241.style.opacity = 0;
      answer244.style.opacity = 0;
    }else if(answer243.classList.contains("choosed")){
      answer243.classList.remove('choosed');
      answer243.classList.add('true');
      answer241.style.opacity = 0;
      answer242.style.opacity = 0;
      answer244.style.opacity = 0;
    }else if(answer244.classList.contains("choosed")){
      answer244.classList.remove('choosed');
      answer244.classList.add('false');
      answer243.classList.add('true');
      answer242.style.opacity = 0;
      answer241.style.opacity = 0;
    }else{
    }




    if(answer251.classList.contains("choosed")){
      answer251.classList.remove('choosed');
      answer251.classList.add('false');
      answer253.classList.add('true');
      answer252.style.opacity = 0;
      answer254.style.opacity = 0;
    }else if(answer252.classList.contains("choosed")){
      answer252.classList.remove('choosed');
      answer252.classList.add('false');
      answer253.classList.add('true');
      answer251.style.opacity = 0;
      answer254.style.opacity = 0;
    }else if(answer253.classList.contains("choosed")){
      answer253.classList.remove('choosed');
      answer253.classList.add('true');
      answer252.style.opacity = 0;
      answer254.style.opacity = 0;
      answer251.style.opacity = 0;
    }else if(answer254.classList.contains("choosed")){
      answer254.classList.remove('choosed');
      answer254.classList.add('false');
      answer253.classList.add('true');
      answer252.style.opacity = 0;
      answer251.style.opacity = 0;
    }else{
    }






    if(answer261.classList.contains("choosed")){
      answer261.classList.remove('choosed');
      answer261.classList.add('false');
      answer263.classList.add('true');
      answer262.style.opacity = 0;
      answer264.style.opacity = 0;
    }else if(answer262.classList.contains("choosed")){
      answer262.classList.remove('choosed');
      answer262.classList.add('false');
      answer263.classList.add('true');
      answer261.style.opacity = 0;
      answer264.style.opacity = 0;
    }else if(answer263.classList.contains("choosed")){
      answer263.classList.remove('choosed');
      answer263.classList.add('true');
      answer261.style.opacity = 0;
      answer262.style.opacity = 0;
      answer264.style.opacity = 0;
    }else if(answer264.classList.contains("choosed")){
      answer264.classList.remove('choosed');
      answer264.classList.add('false');
      answer263.classList.add('true');
      answer262.style.opacity = 0;
      answer261.style.opacity = 0;
    }else{
    }



})


/************************ GUIZ 3 *********************************/


const quiz3 = document.querySelector('.quiz3'),
question31 = quiz3.querySelector('.question1'),
answer311 = question31.querySelector('.answer1'),
answer312 = question31.querySelector('.answer2'),
answer313 = question31.querySelector('.answer3'),
answer314 = question31.querySelector('.answer4'),

question32 = quiz3.querySelector('.question2'),
answer321 = question32.querySelector('.answer1'),
answer322 = question32.querySelector('.answer2'),
answer323 = question32.querySelector('.answer3'),
answer324 = question32.querySelector('.answer4'),


question33 = quiz3.querySelector('.question3'),
answer331 = question33.querySelector('.answer1'),
answer332 = question33.querySelector('.answer2'),
answer333 = question33.querySelector('.answer3'),
answer334 = question33.querySelector('.answer4'),

question34 = quiz3.querySelector('.question4'),
answer341 = question34.querySelector('.answer1'),
answer342 = question34.querySelector('.answer2'),
answer343 = question34.querySelector('.answer3'),
answer344 = question34.querySelector('.answer4'),

question35 = quiz3.querySelector('.question5'),
answer351 = question35.querySelector('.answer1'),
answer352 = question35.querySelector('.answer2'),
answer353 = question35.querySelector('.answer3'),
answer354 = question35.querySelector('.answer4'),

question36 = quiz3.querySelector('.question6'),
answer361 = question36.querySelector('.answer1'),
answer362 = question36.querySelector('.answer2'),
answer363 = question36.querySelector('.answer3'),
answer364 = question36.querySelector('.answer4');







button3 = quiz3.querySelector('button');



answer311.addEventListener('click', ()=>{
  answer311.classList.add('choosed');
  answer312.classList.remove('choosed');
  answer313.classList.remove('choosed');
  answer314.classList.remove('choosed');

});
answer312.addEventListener('click', ()=>{
  answer311.classList.remove('choosed');
  answer312.classList.add('choosed');
  answer313.classList.remove('choosed');
  answer314.classList.remove('choosed');
});
answer313.addEventListener('click', ()=>{
  answer311.classList.remove('choosed');
  answer312.classList.remove('choosed');
  answer313.classList.add('choosed');
  answer314.classList.remove('choosed');
});
answer314.addEventListener('click', ()=>{
  answer311.classList.remove('choosed');
  answer312.classList.remove('choosed');
  answer313.classList.remove('choosed');
  answer314.classList.add('choosed');
});


answer321.addEventListener('click', ()=>{
  answer321.classList.add('choosed');
  answer322.classList.remove('choosed');
  answer323.classList.remove('choosed');
  answer324.classList.remove('choosed');

});
answer322.addEventListener('click', ()=>{
  answer321.classList.remove('choosed');
  answer322.classList.add('choosed');
  answer323.classList.remove('choosed');
  answer324.classList.remove('choosed');
});
answer323.addEventListener('click', ()=>{
  answer321.classList.remove('choosed');
  answer322.classList.remove('choosed');
  answer323.classList.add('choosed');
  answer324.classList.remove('choosed');
});
answer324.addEventListener('click', ()=>{
  answer321.classList.remove('choosed');
  answer322.classList.remove('choosed');
  answer323.classList.remove('choosed');
  answer324.classList.add('choosed');
});


answer331.addEventListener('click', ()=>{
  answer331.classList.add('choosed');
  answer332.classList.remove('choosed');
  answer333.classList.remove('choosed');
  answer334.classList.remove('choosed');

});
answer332.addEventListener('click', ()=>{
  answer331.classList.remove('choosed');
  answer332.classList.add('choosed');
  answer333.classList.remove('choosed');
  answer334.classList.remove('choosed');
});
answer333.addEventListener('click', ()=>{
  answer331.classList.remove('choosed');
  answer332.classList.remove('choosed');
  answer333.classList.add('choosed');
  answer334.classList.remove('choosed');
});
answer334.addEventListener('click', ()=>{
  answer331.classList.remove('choosed');
  answer332.classList.remove('choosed');
  answer333.classList.remove('choosed');
  answer334.classList.add('choosed');
});


answer341.addEventListener('click', ()=>{
  answer341.classList.add('choosed');
  answer342.classList.remove('choosed');
  answer343.classList.remove('choosed');
  answer344.classList.remove('choosed');

});
answer342.addEventListener('click', ()=>{
  answer341.classList.remove('choosed');
  answer342.classList.add('choosed');
  answer343.classList.remove('choosed');
  answer344.classList.remove('choosed');
});
answer343.addEventListener('click', ()=>{
  answer341.classList.remove('choosed');
  answer342.classList.remove('choosed');
  answer343.classList.add('choosed');
  answer344.classList.remove('choosed');
});
answer344.addEventListener('click', ()=>{
  answer341.classList.remove('choosed');
  answer342.classList.remove('choosed');
  answer343.classList.remove('choosed');
  answer344.classList.add('choosed');
});


answer351.addEventListener('click', ()=>{
  answer351.classList.add('choosed');
  answer352.classList.remove('choosed');
  answer353.classList.remove('choosed');
  answer354.classList.remove('choosed');

});
answer352.addEventListener('click', ()=>{
  answer351.classList.remove('choosed');
  answer352.classList.add('choosed');
  answer353.classList.remove('choosed');
  answer354.classList.remove('choosed');
});
answer353.addEventListener('click', ()=>{
  answer351.classList.remove('choosed');
  answer352.classList.remove('choosed');
  answer353.classList.add('choosed');
  answer354.classList.remove('choosed');
});
answer354.addEventListener('click', ()=>{
  answer351.classList.remove('choosed');
  answer352.classList.remove('choosed');
  answer353.classList.remove('choosed');
  answer354.classList.add('choosed');
});

answer361.addEventListener('click', ()=>{
  answer361.classList.add('choosed');
  answer362.classList.remove('choosed');
  answer363.classList.remove('choosed');
  answer364.classList.remove('choosed');

});
answer362.addEventListener('click', ()=>{
  answer361.classList.remove('choosed');
  answer362.classList.add('choosed');
  answer363.classList.remove('choosed');
  answer364.classList.remove('choosed');
});
answer363.addEventListener('click', ()=>{
  answer361.classList.remove('choosed');
  answer362.classList.remove('choosed');
  answer363.classList.add('choosed');
  answer364.classList.remove('choosed');
});
answer364.addEventListener('click', ()=>{
  answer361.classList.remove('choosed');
  answer362.classList.remove('choosed');
  answer363.classList.remove('choosed');
  answer364.classList.add('choosed');
});




button3.addEventListener("click", ()=>{
    if(answer311.classList.contains("choosed")){
      answer311.classList.remove('choosed');
      answer311.classList.add('false');
      answer313.classList.add('true');
      answer312.style.opacity = 0;
      answer314.style.opacity = 0;
    }else if(answer312.classList.contains("choosed")){
      answer312.classList.remove('choosed');
      answer312.classList.add('false');
      answer313.classList.add('true');
      answer311.style.opacity = 0;
      answer314.style.opacity = 0;
    }else if(answer313.classList.contains("choosed")){
      answer313.classList.remove('choosed');
      answer313.classList.add('true');
      answer311.style.opacity = 0;
      answer312.style.opacity = 0;
      answer314.style.opacity = 0;
    }else if(answer314.classList.contains("choosed")){
      answer314.classList.remove('choosed');
      answer314.classList.add('false');
      answer313.classList.add('true');
      answer312.style.opacity = 0;
      answer311.style.opacity = 0;
    }else{

    }


    if(answer321.classList.contains("choosed")){
      answer321.classList.remove('choosed');
      answer321.classList.add('false');
      answer322.classList.add('true');
      answer323.style.opacity = 0;
      answer324.style.opacity = 0;
    }else if(answer322.classList.contains("choosed")){
      answer322.classList.remove('choosed');
      answer322.classList.add('false');
      answer322.classList.add('true');
      answer321.style.opacity = 0;
      answer323.style.opacity = 0;
      answer324.style.opacity = 0;
    }else if(answer323.classList.contains("choosed")){
      answer323.classList.remove('choosed');
      answer323.classList.add('false');
      answer322.classList.add('true');
      answer321.style.opacity = 0;
      answer324.style.opacity = 0;
    }else if(answer324.classList.contains("choosed")){
      answer324.classList.remove('choosed');
      answer324.classList.add('false');
      answer322.classList.add('true');
      answer321.style.opacity = 0;
      answer323.style.opacity = 0;
    }else{

    }

    if(answer331.classList.contains("choosed")){
      answer331.classList.remove('choosed');
      answer331.classList.add('false');
      answer333.classList.add('true');
      answer332.style.opacity = 0;
      answer334.style.opacity = 0;
    }else if(answer332.classList.contains("choosed")){
      answer332.classList.remove('choosed');
      answer332.classList.add('false');
      answer333.classList.add('true');
      answer331.style.opacity = 0;
      answer334.style.opacity = 0;
    }else if(answer333.classList.contains("choosed")){
      answer333.classList.remove('choosed');
      answer333.classList.add('true');
      answer332.style.opacity = 0;
      answer331.style.opacity = 0;
      answer334.style.opacity = 0;
    }else if(answer334.classList.contains("choosed")){
      answer334.classList.remove('choosed');
      answer334.classList.add('false');
      answer333.classList.add('true');
      answer332.style.opacity = 0;
      answer331.style.opacity = 0;
    }else{
    }



    if(answer341.classList.contains("choosed")){
      answer341.classList.remove('choosed');
      answer341.classList.add('true');
      answer342.style.opacity = 0;
      answer343.style.opacity = 0;
      answer344.style.opacity = 0;
    }else if(answer342.classList.contains("choosed")){
      answer342.classList.remove('choosed');
      answer342.classList.add('false');
      answer341.classList.add('true');
      answer343.style.opacity = 0;
      answer344.style.opacity = 0;
    }else if(answer343.classList.contains("choosed")){
      answer343.classList.remove('choosed');
      answer343.classList.add('false');
      answer341.classList.add('true');
      answer342.style.opacity = 0;
      answer344.style.opacity = 0;
    }else if(answer344.classList.contains("choosed")){
      answer344.classList.remove('choosed');
      answer344.classList.add('false');
      answer341.classList.add('true');
      answer342.style.opacity = 0;
      answer343.style.opacity = 0;
    }else{
    }




    if(answer351.classList.contains("choosed")){
      answer351.classList.remove('choosed');
      answer351.classList.add('false');
      answer354.classList.add('true');
      answer352.style.opacity = 0;
      answer353.style.opacity = 0;
    }else if(answer352.classList.contains("choosed")){
      answer352.classList.remove('choosed');
      answer352.classList.add('false');
      answer354.classList.add('true');
      answer351.style.opacity = 0;
      answer353.style.opacity = 0;
    }else if(answer353.classList.contains("choosed")){
      answer353.classList.remove('choosed');
      answer353.classList.add('false');
      answer354.classList.add('true');
      answer352.style.opacity = 0;
      answer351.style.opacity = 0;
    }else if(answer354.classList.contains("choosed")){
      answer354.classList.remove('choosed');
      answer354.classList.add('true');
      answer352.style.opacity = 0;
      answer353.style.opacity = 0;
      answer351.style.opacity = 0;
    }else{
    }






    if(answer361.classList.contains("choosed")){
      answer361.classList.remove('choosed');
      answer361.classList.add('false');
      answer364.classList.add('true');
      answer362.style.opacity = 0;
      answer363.style.opacity = 0;
    }else if(answer362.classList.contains("choosed")){
      answer362.classList.remove('choosed');
      answer362.classList.add('false');
      answer364.classList.add('true');
      answer361.style.opacity = 0;
      answer363.style.opacity = 0;
    }else if(answer363.classList.contains("choosed")){
      answer363.classList.remove('choosed');
      answer363.classList.add('false');
      answer364.classList.add('true');
      answer362.style.opacity = 0;
      answer361.style.opacity = 0;
    }else if(answer364.classList.contains("choosed")){
      answer364.classList.remove('choosed');
      answer364.classList.add('true');
      answer362.style.opacity = 0;
      answer363.style.opacity = 0;
      answer361.style.opacity = 0;
    }else{
    }



})

/************************ GUIZ 4 *********************************/


const quiz4 = document.querySelector('.quiz4'),
question41 = quiz4.querySelector('.question1'),
answer411 = question41.querySelector('.answer1'),
answer412 = question41.querySelector('.answer2'),
answer413 = question41.querySelector('.answer3'),
answer414 = question41.querySelector('.answer4'),

question42 = quiz4.querySelector('.question2'),
answer421 = question42.querySelector('.answer1'),
answer422 = question42.querySelector('.answer2'),
answer423 = question42.querySelector('.answer3'),
answer424 = question42.querySelector('.answer4'),


question43 = quiz4.querySelector('.question3'),
answer431 = question43.querySelector('.answer1'),
answer432 = question43.querySelector('.answer2'),
answer433 = question43.querySelector('.answer3'),
answer434 = question43.querySelector('.answer4'),

question44 = quiz4.querySelector('.question4'),
answer441 = question44.querySelector('.answer1'),
answer442 = question44.querySelector('.answer2'),
answer443 = question44.querySelector('.answer3'),
answer444 = question44.querySelector('.answer4'),

question45 = quiz4.querySelector('.question5'),
answer451 = question45.querySelector('.answer1'),
answer452 = question45.querySelector('.answer2'),
answer453 = question45.querySelector('.answer3'),
answer454 = question45.querySelector('.answer4'),

question46 = quiz4.querySelector('.question6'),
answer461 = question46.querySelector('.answer1'),
answer462 = question46.querySelector('.answer2'),
answer463 = question46.querySelector('.answer3'),
answer464 = question46.querySelector('.answer4');







button4 = quiz4.querySelector('button');



answer411.addEventListener('click', ()=>{
  answer411.classList.add('choosed');
  answer412.classList.remove('choosed');
  answer413.classList.remove('choosed');
  answer414.classList.remove('choosed');

});
answer412.addEventListener('click', ()=>{
  answer411.classList.remove('choosed');
  answer412.classList.add('choosed');
  answer413.classList.remove('choosed');
  answer414.classList.remove('choosed');
});
answer413.addEventListener('click', ()=>{
  answer411.classList.remove('choosed');
  answer412.classList.remove('choosed');
  answer413.classList.add('choosed');
  answer414.classList.remove('choosed');
});
answer414.addEventListener('click', ()=>{
  answer411.classList.remove('choosed');
  answer412.classList.remove('choosed');
  answer413.classList.remove('choosed');
  answer414.classList.add('choosed');
});


answer421.addEventListener('click', ()=>{
  answer421.classList.add('choosed');
  answer422.classList.remove('choosed');
  answer423.classList.remove('choosed');
  answer424.classList.remove('choosed');

});
answer422.addEventListener('click', ()=>{
  answer421.classList.remove('choosed');
  answer422.classList.add('choosed');
  answer423.classList.remove('choosed');
  answer424.classList.remove('choosed');
});
answer423.addEventListener('click', ()=>{
  answer421.classList.remove('choosed');
  answer422.classList.remove('choosed');
  answer423.classList.add('choosed');
  answer424.classList.remove('choosed');
});
answer424.addEventListener('click', ()=>{
  answer421.classList.remove('choosed');
  answer422.classList.remove('choosed');
  answer423.classList.remove('choosed');
  answer424.classList.add('choosed');
});


answer431.addEventListener('click', ()=>{
  answer431.classList.add('choosed');
  answer432.classList.remove('choosed');
  answer433.classList.remove('choosed');
  answer434.classList.remove('choosed');

});
answer432.addEventListener('click', ()=>{
  answer431.classList.remove('choosed');
  answer432.classList.add('choosed');
  answer433.classList.remove('choosed');
  answer434.classList.remove('choosed');
});
answer433.addEventListener('click', ()=>{
  answer431.classList.remove('choosed');
  answer432.classList.remove('choosed');
  answer433.classList.add('choosed');
  answer434.classList.remove('choosed');
});
answer434.addEventListener('click', ()=>{
  answer431.classList.remove('choosed');
  answer432.classList.remove('choosed');
  answer433.classList.remove('choosed');
  answer434.classList.add('choosed');
});


answer441.addEventListener('click', ()=>{
  answer441.classList.add('choosed');
  answer442.classList.remove('choosed');
  answer443.classList.remove('choosed');
  answer444.classList.remove('choosed');

});
answer442.addEventListener('click', ()=>{
  answer441.classList.remove('choosed');
  answer442.classList.add('choosed');
  answer443.classList.remove('choosed');
  answer444.classList.remove('choosed');
});
answer443.addEventListener('click', ()=>{
  answer441.classList.remove('choosed');
  answer442.classList.remove('choosed');
  answer443.classList.add('choosed');
  answer444.classList.remove('choosed');
});
answer444.addEventListener('click', ()=>{
  answer441.classList.remove('choosed');
  answer442.classList.remove('choosed');
  answer443.classList.remove('choosed');
  answer444.classList.add('choosed');
});


answer451.addEventListener('click', ()=>{
  answer451.classList.add('choosed');
  answer452.classList.remove('choosed');
  answer453.classList.remove('choosed');
  answer454.classList.remove('choosed');

});
answer452.addEventListener('click', ()=>{
  answer451.classList.remove('choosed');
  answer452.classList.add('choosed');
  answer453.classList.remove('choosed');
  answer454.classList.remove('choosed');
});
answer453.addEventListener('click', ()=>{
  answer451.classList.remove('choosed');
  answer452.classList.remove('choosed');
  answer453.classList.add('choosed');
  answer454.classList.remove('choosed');
});
answer454.addEventListener('click', ()=>{
  answer451.classList.remove('choosed');
  answer452.classList.remove('choosed');
  answer453.classList.remove('choosed');
  answer454.classList.add('choosed');
});

answer461.addEventListener('click', ()=>{
  answer461.classList.add('choosed');
  answer462.classList.remove('choosed');
  answer463.classList.remove('choosed');
  answer464.classList.remove('choosed');

});
answer462.addEventListener('click', ()=>{
  answer461.classList.remove('choosed');
  answer462.classList.add('choosed');
  answer463.classList.remove('choosed');
  answer464.classList.remove('choosed');
});
answer463.addEventListener('click', ()=>{
  answer461.classList.remove('choosed');
  answer462.classList.remove('choosed');
  answer463.classList.add('choosed');
  answer464.classList.remove('choosed');
});
answer464.addEventListener('click', ()=>{
  answer461.classList.remove('choosed');
  answer462.classList.remove('choosed');
  answer463.classList.remove('choosed');
  answer464.classList.add('choosed');
});




button4.addEventListener("click", ()=>{
    if(answer411.classList.contains("choosed")){
      answer411.classList.remove('choosed');
      answer411.classList.add('false');
      answer412.classList.add('true');
      answer413.style.opacity = 0;
      answer414.style.opacity = 0;
    }else if(answer412.classList.contains("choosed")){
      answer412.classList.remove('choosed');
      answer412.classList.add('true');
      answer413.style.opacity = 0;
      answer414.style.opacity = 0;
      answer411.style.opacity = 0;
    }else if(answer413.classList.contains("choosed")){
      answer413.classList.remove('choosed');
      answer413.classList.add('false');
      answer412.classList.add('true');
      answer411.style.opacity = 0;
      answer414.style.opacity = 0;
    }else if(answer414.classList.contains("choosed")){
      answer414.classList.remove('choosed');
      answer414.classList.add('false');
      answer412.classList.add('true');
      answer411.style.opacity = 0;
      answer413.style.opacity = 0;
    }else{

    }


    if(answer421.classList.contains("choosed")){
      answer421.classList.remove('choosed');
      answer421.classList.add('false');
      answer424.classList.add('true');
      answer423.style.opacity = 0;
      answer422.style.opacity = 0;
    }else if(answer422.classList.contains("choosed")){
      answer422.classList.remove('choosed');
      answer422.classList.add('false');
      answer424.classList.add('true');
      answer423.style.opacity = 0;
      answer421.style.opacity = 0;
    }else if(answer423.classList.contains("choosed")){
      answer423.classList.remove('choosed');
      answer423.classList.add('false');
      answer424.classList.add('true');
      answer422.style.opacity = 0;
      answer421.style.opacity = 0;
    }else if(answer424.classList.contains("choosed")){
      answer424.classList.remove('choosed');
      answer424.classList.add('true');
      answer421.style.opacity = 0;
      answer422.style.opacity = 0;
      answer423.style.opacity = 0;
    }else{

    }

    if(answer431.classList.contains("choosed")){
      answer431.classList.remove('choosed');
      answer431.classList.add('false');
      answer434.classList.add('true');
      answer433.style.opacity = 0;
      answer432.style.opacity = 0;
    }else if(answer432.classList.contains("choosed")){
      answer432.classList.remove('choosed');
      answer432.classList.add('false');
      answer434.classList.add('true');
      answer433.style.opacity = 0;
      answer431.style.opacity = 0;
    }else if(answer433.classList.contains("choosed")){
      answer433.classList.remove('choosed');
      answer433.classList.add('false');
      answer434.classList.add('true');
      answer432.style.opacity = 0;
      answer431.style.opacity = 0;
    }else if(answer434.classList.contains("choosed")){
      answer434.classList.remove('choosed');
      answer434.classList.add('true');
      answer431.style.opacity = 0;
      answer432.style.opacity = 0;
      answer433.style.opacity = 0;
    }else{
    }



    if(answer441.classList.contains("choosed")){
      answer441.classList.remove('choosed');
      answer441.classList.add('true');
      answer443.style.opacity = 0;
      answer442.style.opacity = 0;
      answer444.style.opacity = 0;
    }else if(answer442.classList.contains("choosed")){
      answer442.classList.remove('choosed');
      answer442.classList.add('false');
      answer441.classList.add('true');
      answer443.style.opacity = 0;
      answer444.style.opacity = 0;
    }else if(answer443.classList.contains("choosed")){
      answer443.classList.remove('choosed');
      answer443.classList.add('false');
      answer441.classList.add('true');
      answer442.style.opacity = 0;
      answer444.style.opacity = 0;
    }else if(answer444.classList.contains("choosed")){
      answer444.classList.remove('choosed');
      answer444.classList.add('false');
      answer441.classList.add('true');
      answer442.style.opacity = 0;
      answer443.style.opacity = 0;
    }else{
    }




    if(answer451.classList.contains("choosed")){
      answer451.classList.remove('choosed');
      answer451.classList.add('false');
      answer453.classList.add('true');
      answer454.style.opacity = 0;
      answer452.style.opacity = 0;
    }else if(answer452.classList.contains("choosed")){
      answer452.classList.remove('choosed');
      answer452.classList.add('false');
      answer453.classList.add('true');
      answer451.style.opacity = 0;
      answer454.style.opacity = 0;
    }else if(answer453.classList.contains("choosed")){
      answer453.classList.remove('choosed');
      answer453.classList.add('true');
      answer454.style.opacity = 0;
      answer451.style.opacity = 0;
      answer452.style.opacity = 0;
    }else if(answer454.classList.contains("choosed")){
      answer454.classList.remove('choosed');
      answer454.classList.add('false');
      answer453.classList.add('true');
      answer452.style.opacity = 0;
      answer451.style.opacity = 0;
    }else{
    }






    if(answer461.classList.contains("choosed")){
      answer461.classList.remove('choosed');
      answer461.classList.add('false');
      answer462.classList.add('true');
      answer463.style.opacity = 0;
      answer464.style.opacity = 0;
    }else if(answer462.classList.contains("choosed")){
      answer462.classList.remove('choosed');
      answer462.classList.add('true');
      answer461.style.opacity = 0;
      answer463.style.opacity = 0;
      answer464.style.opacity = 0;
    }else if(answer463.classList.contains("choosed")){
      answer463.classList.remove('choosed');
      answer463.classList.add('false');
      answer462.classList.add('true');
      answer461.style.opacity = 0;
      answer464.style.opacity = 0;
    }else if(answer464.classList.contains("choosed")){
      answer464.classList.remove('choosed');
      answer464.classList.add('false');
      answer462.classList.add('true');
      answer463.style.opacity = 0;
      answer461.style.opacity = 0;
    }else{
    }



})

/************************ GUIZ 1 *********************************/


const quiz5 = document.querySelector('.quiz5'),
question51 = quiz5.querySelector('.question1'),
answer511 = question51.querySelector('.answer1'),
answer512 = question51.querySelector('.answer2'),
answer513 = question51.querySelector('.answer3'),
answer514 = question51.querySelector('.answer4'),

question52 = quiz5.querySelector('.question2'),
answer521 = question52.querySelector('.answer1'),
answer522 = question52.querySelector('.answer2'),
answer523 = question52.querySelector('.answer3'),
answer524 = question52.querySelector('.answer4'),


question53 = quiz5.querySelector('.question3'),
answer531 = question53.querySelector('.answer1'),
answer532 = question53.querySelector('.answer2'),
answer533 = question53.querySelector('.answer3'),
answer534 = question53.querySelector('.answer4'),

question54 = quiz5.querySelector('.question4'),
answer541 = question54.querySelector('.answer1'),
answer542 = question54.querySelector('.answer2'),
answer543 = question54.querySelector('.answer3'),
answer544 = question54.querySelector('.answer4'),

question55 = quiz5.querySelector('.question5'),
answer551 = question55.querySelector('.answer1'),
answer552 = question55.querySelector('.answer2'),
answer553 = question55.querySelector('.answer3'),
answer554 = question55.querySelector('.answer4'),

question56 = quiz5.querySelector('.question6'),
answer561 = question56.querySelector('.answer1'),
answer562 = question56.querySelector('.answer2'),
answer563 = question56.querySelector('.answer3'),
answer564 = question56.querySelector('.answer4');







button5 = quiz5.querySelector('button');



answer511.addEventListener('click', ()=>{
  answer511.classList.add('choosed');
  answer512.classList.remove('choosed');
  answer513.classList.remove('choosed');
  answer514.classList.remove('choosed');

});
answer512.addEventListener('click', ()=>{
  answer511.classList.remove('choosed');
  answer512.classList.add('choosed');
  answer513.classList.remove('choosed');
  answer514.classList.remove('choosed');
});
answer513.addEventListener('click', ()=>{
  answer511.classList.remove('choosed');
  answer512.classList.remove('choosed');
  answer513.classList.add('choosed');
  answer514.classList.remove('choosed');
});
answer514.addEventListener('click', ()=>{
  answer511.classList.remove('choosed');
  answer512.classList.remove('choosed');
  answer513.classList.remove('choosed');
  answer514.classList.add('choosed');
});


answer521.addEventListener('click', ()=>{
  answer521.classList.add('choosed');
  answer522.classList.remove('choosed');
  answer523.classList.remove('choosed');
  answer524.classList.remove('choosed');

});
answer522.addEventListener('click', ()=>{
  answer521.classList.remove('choosed');
  answer522.classList.add('choosed');
  answer523.classList.remove('choosed');
  answer524.classList.remove('choosed');
});
answer523.addEventListener('click', ()=>{
  answer521.classList.remove('choosed');
  answer522.classList.remove('choosed');
  answer523.classList.add('choosed');
  answer524.classList.remove('choosed');
});
answer524.addEventListener('click', ()=>{
  answer521.classList.remove('choosed');
  answer522.classList.remove('choosed');
  answer523.classList.remove('choosed');
  answer524.classList.add('choosed');
});


answer531.addEventListener('click', ()=>{
  answer531.classList.add('choosed');
  answer532.classList.remove('choosed');
  answer533.classList.remove('choosed');
  answer534.classList.remove('choosed');

});
answer532.addEventListener('click', ()=>{
  answer531.classList.remove('choosed');
  answer532.classList.add('choosed');
  answer533.classList.remove('choosed');
  answer534.classList.remove('choosed');
});
answer533.addEventListener('click', ()=>{
  answer531.classList.remove('choosed');
  answer532.classList.remove('choosed');
  answer533.classList.add('choosed');
  answer534.classList.remove('choosed');
});
answer534.addEventListener('click', ()=>{
  answer531.classList.remove('choosed');
  answer532.classList.remove('choosed');
  answer533.classList.remove('choosed');
  answer534.classList.add('choosed');
});


answer541.addEventListener('click', ()=>{
  answer541.classList.add('choosed');
  answer542.classList.remove('choosed');
  answer543.classList.remove('choosed');
  answer544.classList.remove('choosed');

});
answer542.addEventListener('click', ()=>{
  answer541.classList.remove('choosed');
  answer542.classList.add('choosed');
  answer543.classList.remove('choosed');
  answer544.classList.remove('choosed');
});
answer543.addEventListener('click', ()=>{
  answer541.classList.remove('choosed');
  answer542.classList.remove('choosed');
  answer543.classList.add('choosed');
  answer544.classList.remove('choosed');
});
answer544.addEventListener('click', ()=>{
  answer541.classList.remove('choosed');
  answer542.classList.remove('choosed');
  answer543.classList.remove('choosed');
  answer544.classList.add('choosed');
});


answer551.addEventListener('click', ()=>{
  answer551.classList.add('choosed');
  answer552.classList.remove('choosed');
  answer553.classList.remove('choosed');
  answer554.classList.remove('choosed');

});
answer552.addEventListener('click', ()=>{
  answer551.classList.remove('choosed');
  answer552.classList.add('choosed');
  answer553.classList.remove('choosed');
  answer554.classList.remove('choosed');
});
answer553.addEventListener('click', ()=>{
  answer551.classList.remove('choosed');
  answer552.classList.remove('choosed');
  answer553.classList.add('choosed');
  answer554.classList.remove('choosed');
});
answer554.addEventListener('click', ()=>{
  answer551.classList.remove('choosed');
  answer552.classList.remove('choosed');
  answer553.classList.remove('choosed');
  answer554.classList.add('choosed');
});

answer561.addEventListener('click', ()=>{
  answer561.classList.add('choosed');
  answer562.classList.remove('choosed');
  answer563.classList.remove('choosed');
  answer564.classList.remove('choosed');

});
answer562.addEventListener('click', ()=>{
  answer561.classList.remove('choosed');
  answer562.classList.add('choosed');
  answer563.classList.remove('choosed');
  answer564.classList.remove('choosed');
});
answer563.addEventListener('click', ()=>{
  answer561.classList.remove('choosed');
  answer562.classList.remove('choosed');
  answer563.classList.add('choosed');
  answer564.classList.remove('choosed');
});
answer564.addEventListener('click', ()=>{
  answer561.classList.remove('choosed');
  answer562.classList.remove('choosed');
  answer563.classList.remove('choosed');
  answer564.classList.add('choosed');
});




button5.addEventListener("click", ()=>{
    if(answer511.classList.contains("choosed")){
      answer511.classList.remove('choosed');
      answer511.classList.add('false');
      answer512.classList.add('true');
      answer513.style.opacity = 0;
      answer514.style.opacity = 0;
    }else if(answer512.classList.contains("choosed")){
      answer512.classList.remove('choosed');
      answer512.classList.add('true');
      answer513.style.opacity = 0;
      answer511.style.opacity = 0;
      answer514.style.opacity = 0;
    }else if(answer513.classList.contains("choosed")){
      answer513.classList.remove('choosed');
      answer513.classList.add('false');
      answer512.classList.add('true');
      answer511.style.opacity = 0;
      answer514.style.opacity = 0;
    }else if(answer514.classList.contains("choosed")){
      answer514.classList.remove('choosed');
      answer514.classList.add('false');
      answer512.classList.add('true');
      answer511.style.opacity = 0;
      answer513.style.opacity = 0;
    }else{

    }


    if(answer521.classList.contains("choosed")){
      answer521.classList.remove('choosed');
      answer521.classList.add('false');
      answer522.classList.add('true');
      answer523.style.opacity = 0;
      answer524.style.opacity = 0;
    }else if(answer522.classList.contains("choosed")){
      answer522.classList.remove('choosed');
      answer522.classList.add('false');
      answer522.classList.add('true');
      answer521.style.opacity = 0;
      answer523.style.opacity = 0;
      answer524.style.opacity = 0;
    }else if(answer523.classList.contains("choosed")){
      answer523.classList.remove('choosed');
      answer523.classList.add('false');
      answer522.classList.add('true');
      answer521.style.opacity = 0;
      answer524.style.opacity = 0;
    }else if(answer524.classList.contains("choosed")){
      answer524.classList.remove('choosed');
      answer524.classList.add('false');
      answer522.classList.add('true');
      answer521.style.opacity = 0;
      answer523.style.opacity = 0;
    }else{

    }

    if(answer531.classList.contains("choosed")){
      answer531.classList.remove('choosed');
      answer531.classList.add('true');
      answer532.style.opacity = 0;
      answer533.style.opacity = 0;
      answer534.style.opacity = 0;
    }else if(answer532.classList.contains("choosed")){
      answer532.classList.remove('choosed');
      answer532.classList.add('false');
      answer531.classList.add('true');
      answer533.style.opacity = 0;
      answer534.style.opacity = 0;
    }else if(answer533.classList.contains("choosed")){
      answer533.classList.remove('choosed');
      answer533.classList.add('false');
      answer531.classList.add('true');
      answer532.style.opacity = 0;
      answer534.style.opacity = 0;
    }else if(answer534.classList.contains("choosed")){
      answer534.classList.remove('choosed');
      answer534.classList.add('false');
      answer531.classList.add('true');
      answer532.style.opacity = 0;
      answer533.style.opacity = 0;
    }else{
    }



    if(answer541.classList.contains("choosed")){
      answer541.classList.remove('choosed');
      answer541.classList.add('false');
      answer542.classList.add('true');
      answer543.style.opacity = 0;
      answer544.style.opacity = 0;
    }else if(answer542.classList.contains("choosed")){
      answer542.classList.remove('choosed');
      answer542.classList.add('true');
      answer541.style.opacity = 0;
      answer543.style.opacity = 0;
      answer544.style.opacity = 0;
    }else if(answer543.classList.contains("choosed")){
      answer543.classList.remove('choosed');
      answer543.classList.add('false');
      answer542.classList.add('true');
      answer541.style.opacity = 0;
      answer544.style.opacity = 0;
    }else if(answer544.classList.contains("choosed")){
      answer544.classList.remove('choosed');
      answer544.classList.add('false');
      answer542.classList.add('true');
      answer543.style.opacity = 0;
      answer541.style.opacity = 0;
    }else{
    }




    if(answer551.classList.contains("choosed")){
      answer551.classList.remove('choosed');
      answer551.classList.add('false');
      answer552.classList.add('true');
      answer554.style.opacity = 0;
      answer553.style.opacity = 0;
    }else if(answer552.classList.contains("choosed")){
      answer552.classList.remove('choosed');
      answer552.classList.add('true');
      answer551.style.opacity = 0;
      answer553.style.opacity = 0;
      answer554.style.opacity = 0;
    }else if(answer553.classList.contains("choosed")){
      answer553.classList.remove('choosed');
      answer553.classList.add('false');
      answer552.classList.add('true');
      answer554.style.opacity = 0;
      answer551.style.opacity = 0;
    }else if(answer554.classList.contains("choosed")){
      answer554.classList.remove('choosed');
      answer554.classList.add('false');
      answer552.classList.add('true');
      answer553.style.opacity = 0;
      answer551.style.opacity = 0;
    }else{
    }






    if(answer561.classList.contains("choosed")){
      answer561.classList.remove('choosed');
      answer561.classList.add('true');
      answer562.style.opacity = 0;
      answer563.style.opacity = 0;
      answer564.style.opacity = 0;
    }else if(answer562.classList.contains("choosed")){
      answer562.classList.remove('choosed');
      answer562.classList.add('false');
      answer561.classList.add('true');
      answer563.style.opacity = 0;
      answer564.style.opacity = 0;
    }else if(answer563.classList.contains("choosed")){
      answer563.classList.remove('choosed');
      answer563.classList.add('false');
      answer561.classList.add('true');
      answer562.style.opacity = 0;
      answer564.style.opacity = 0;
    }else if(answer564.classList.contains("choosed")){
      answer564.classList.remove('choosed');
      answer564.classList.add('false');
      answer561.classList.add('true');
      answer562.style.opacity = 0;
      answer563.style.opacity = 0;
    }else{
    }



})

/************************ GUIZ 1 *********************************/


const quiz6 = document.querySelector('.quiz6'),
question61 = quiz6.querySelector('.question1'),
answer611 = question61.querySelector('.answer1'),
answer612 = question61.querySelector('.answer2'),
answer613 = question61.querySelector('.answer3'),
answer614 = question61.querySelector('.answer4'),

question62 = quiz6.querySelector('.question2'),
answer621 = question62.querySelector('.answer1'),
answer622 = question62.querySelector('.answer2'),
answer623 = question62.querySelector('.answer3'),
answer624 = question62.querySelector('.answer4'),


question63 = quiz6.querySelector('.question3'),
answer631 = question63.querySelector('.answer1'),
answer632 = question63.querySelector('.answer2'),
answer633 = question63.querySelector('.answer3'),
answer634 = question63.querySelector('.answer4'),

question64 = quiz6.querySelector('.question4'),
answer641 = question64.querySelector('.answer1'),
answer642 = question64.querySelector('.answer2'),
answer643 = question64.querySelector('.answer3'),
answer644 = question64.querySelector('.answer4'),

question65 = quiz6.querySelector('.question5'),
answer651 = question65.querySelector('.answer1'),
answer652 = question65.querySelector('.answer2'),
answer653 = question65.querySelector('.answer3'),
answer654 = question65.querySelector('.answer4'),

question66 = quiz6.querySelector('.question6'),
answer661 = question66.querySelector('.answer1'),
answer662 = question66.querySelector('.answer2'),
answer663 = question66.querySelector('.answer3'),
answer664 = question66.querySelector('.answer4');







button6 = quiz6.querySelector('button');



answer611.addEventListener('click', ()=>{
  answer611.classList.add('choosed');
  answer612.classList.remove('choosed');
  answer613.classList.remove('choosed');
  answer614.classList.remove('choosed');

});
answer612.addEventListener('click', ()=>{
  answer611.classList.remove('choosed');
  answer612.classList.add('choosed');
  answer613.classList.remove('choosed');
  answer614.classList.remove('choosed');
});
answer613.addEventListener('click', ()=>{
  answer611.classList.remove('choosed');
  answer612.classList.remove('choosed');
  answer613.classList.add('choosed');
  answer614.classList.remove('choosed');
});
answer614.addEventListener('click', ()=>{
  answer611.classList.remove('choosed');
  answer612.classList.remove('choosed');
  answer613.classList.remove('choosed');
  answer614.classList.add('choosed');
});


answer621.addEventListener('click', ()=>{
  answer621.classList.add('choosed');
  answer622.classList.remove('choosed');
  answer623.classList.remove('choosed');
  answer624.classList.remove('choosed');

});
answer622.addEventListener('click', ()=>{
  answer621.classList.remove('choosed');
  answer622.classList.add('choosed');
  answer623.classList.remove('choosed');
  answer624.classList.remove('choosed');
});
answer623.addEventListener('click', ()=>{
  answer621.classList.remove('choosed');
  answer622.classList.remove('choosed');
  answer623.classList.add('choosed');
  answer624.classList.remove('choosed');
});
answer624.addEventListener('click', ()=>{
  answer621.classList.remove('choosed');
  answer622.classList.remove('choosed');
  answer623.classList.remove('choosed');
  answer624.classList.add('choosed');
});


answer631.addEventListener('click', ()=>{
  answer631.classList.add('choosed');
  answer632.classList.remove('choosed');
  answer633.classList.remove('choosed');
  answer634.classList.remove('choosed');

});
answer632.addEventListener('click', ()=>{
  answer631.classList.remove('choosed');
  answer632.classList.add('choosed');
  answer633.classList.remove('choosed');
  answer634.classList.remove('choosed');
});
answer633.addEventListener('click', ()=>{
  answer631.classList.remove('choosed');
  answer632.classList.remove('choosed');
  answer633.classList.add('choosed');
  answer634.classList.remove('choosed');
});
answer634.addEventListener('click', ()=>{
  answer631.classList.remove('choosed');
  answer632.classList.remove('choosed');
  answer633.classList.remove('choosed');
  answer634.classList.add('choosed');
});


answer641.addEventListener('click', ()=>{
  answer641.classList.add('choosed');
  answer642.classList.remove('choosed');
  answer643.classList.remove('choosed');
  answer644.classList.remove('choosed');

});
answer642.addEventListener('click', ()=>{
  answer641.classList.remove('choosed');
  answer642.classList.add('choosed');
  answer643.classList.remove('choosed');
  answer644.classList.remove('choosed');
});
answer643.addEventListener('click', ()=>{
  answer641.classList.remove('choosed');
  answer642.classList.remove('choosed');
  answer643.classList.add('choosed');
  answer644.classList.remove('choosed');
});
answer644.addEventListener('click', ()=>{
  answer641.classList.remove('choosed');
  answer642.classList.remove('choosed');
  answer643.classList.remove('choosed');
  answer644.classList.add('choosed');
});


answer651.addEventListener('click', ()=>{
  answer651.classList.add('choosed');
  answer652.classList.remove('choosed');
  answer653.classList.remove('choosed');
  answer654.classList.remove('choosed');

});
answer652.addEventListener('click', ()=>{
  answer651.classList.remove('choosed');
  answer652.classList.add('choosed');
  answer653.classList.remove('choosed');
  answer654.classList.remove('choosed');
});
answer653.addEventListener('click', ()=>{
  answer651.classList.remove('choosed');
  answer652.classList.remove('choosed');
  answer653.classList.add('choosed');
  answer654.classList.remove('choosed');
});
answer654.addEventListener('click', ()=>{
  answer651.classList.remove('choosed');
  answer652.classList.remove('choosed');
  answer653.classList.remove('choosed');
  answer654.classList.add('choosed');
});

answer661.addEventListener('click', ()=>{
  answer661.classList.add('choosed');
  answer662.classList.remove('choosed');
  answer663.classList.remove('choosed');
  answer664.classList.remove('choosed');

});
answer662.addEventListener('click', ()=>{
  answer661.classList.remove('choosed');
  answer662.classList.add('choosed');
  answer663.classList.remove('choosed');
  answer664.classList.remove('choosed');
});
answer663.addEventListener('click', ()=>{
  answer661.classList.remove('choosed');
  answer662.classList.remove('choosed');
  answer663.classList.add('choosed');
  answer664.classList.remove('choosed');
});
answer664.addEventListener('click', ()=>{
  answer661.classList.remove('choosed');
  answer662.classList.remove('choosed');
  answer663.classList.remove('choosed');
  answer664.classList.add('choosed');
});




button6.addEventListener("click", ()=>{
    if(answer611.classList.contains("choosed")){
      answer611.classList.remove('choosed');
      answer611.classList.add('false');
      answer612.classList.add('true');
      answer613.style.opacity = 0;
      answer614.style.opacity = 0;
    }else if(answer612.classList.contains("choosed")){
      answer612.classList.remove('choosed');
      answer612.classList.add('true');
      answer611.style.opacity = 0;
      answer613.style.opacity = 0;
      answer614.style.opacity = 0;
    }else if(answer613.classList.contains("choosed")){
      answer613.classList.remove('choosed');
      answer613.classList.add('false');
      answer612.classList.add('true');
      answer611.style.opacity = 0;
      answer614.style.opacity = 0;
    }else if(answer614.classList.contains("choosed")){
      answer614.classList.remove('choosed');
      answer614.classList.add('false');
      answer612.classList.add('true');
      answer611.style.opacity = 0;
      answer613.style.opacity = 0;
    }else{

    }


    if(answer621.classList.contains("choosed")){
      answer621.classList.remove('choosed');
      answer621.classList.add('true');
      answer622.style.opacity = 0;
      answer623.style.opacity = 0;
      answer624.style.opacity = 0;
    }else if(answer622.classList.contains("choosed")){
      answer622.classList.remove('choosed');
      answer622.classList.add('false');
      answer621.classList.add('true');
      answer623.style.opacity = 0;
      answer624.style.opacity = 0;
    }else if(answer623.classList.contains("choosed")){
      answer623.classList.remove('choosed');
      answer623.classList.add('false');
      answer621.classList.add('true');
      answer622.style.opacity = 0;
      answer624.style.opacity = 0;
    }else if(answer624.classList.contains("choosed")){
      answer624.classList.remove('choosed');
      answer624.classList.add('false');
      answer621.classList.add('true');
      answer622.style.opacity = 0;
      answer623.style.opacity = 0;
    }else{

    }

    if(answer631.classList.contains("choosed")){
      answer631.classList.remove('choosed');
      answer631.classList.add('false');
      answer632.classList.add('true');
      answer633.style.opacity = 0;
      answer634.style.opacity = 0;
    }else if(answer632.classList.contains("choosed")){
      answer632.classList.remove('choosed');
      answer632.classList.add('true');
      answer631.style.opacity = 0;
      answer633.style.opacity = 0;
      answer634.style.opacity = 0;
    }else if(answer633.classList.contains("choosed")){
      answer633.classList.remove('choosed');
      answer633.classList.add('false');
      answer632.classList.add('true');
      answer631.style.opacity = 0;
      answer634.style.opacity = 0;
    }else if(answer634.classList.contains("choosed")){
      answer634.classList.remove('choosed');
      answer634.classList.add('false');
      answer632.classList.add('true');
      answer631.style.opacity = 0;
      answer633.style.opacity = 0;
    }else{
    }



    if(answer641.classList.contains("choosed")){
      answer641.classList.remove('choosed');
      answer641.classList.add('true');
      answer642.style.opacity = 0;
      answer643.style.opacity = 0;
      answer644.style.opacity = 0;
    }else if(answer642.classList.contains("choosed")){
      answer642.classList.remove('choosed');
      answer642.classList.add('false');
      answer641.classList.add('true');
      answer643.style.opacity = 0;
      answer644.style.opacity = 0;
    }else if(answer643.classList.contains("choosed")){
      answer643.classList.remove('choosed');
      answer643.classList.add('false');
      answer641.classList.add('true');
      answer642.style.opacity = 0;
      answer644.style.opacity = 0;
    }else if(answer644.classList.contains("choosed")){
      answer644.classList.remove('choosed');
      answer644.classList.add('false');
      answer641.classList.add('true');
      answer642.style.opacity = 0;
      answer643.style.opacity = 0;
    }else{
    }




    if(answer651.classList.contains("choosed")){
      answer651.classList.remove('choosed');
      answer651.classList.add('true');
      answer652.style.opacity = 0;
      answer654.style.opacity = 0;
      answer653.style.opacity = 0;
    }else if(answer652.classList.contains("choosed")){
      answer652.classList.remove('choosed');
      answer652.classList.add('false');
      answer651.classList.add('true');
      answer654.style.opacity = 0;
      answer653.style.opacity = 0;
    }else if(answer653.classList.contains("choosed")){
      answer653.classList.remove('choosed');
      answer653.classList.add('false');
      answer651.classList.add('true');
      answer652.style.opacity = 0;
      answer654.style.opacity = 0;
    }else if(answer654.classList.contains("choosed")){
      answer654.classList.remove('choosed');
      answer654.classList.add('false');
      answer651.classList.add('true');
      answer652.style.opacity = 0;
      answer653.style.opacity = 0;
    }else{
    }






    if(answer661.classList.contains("choosed")){
      answer661.classList.remove('choosed');
      answer661.classList.add('true');
      answer662.style.opacity = 0;
      answer663.style.opacity = 0;
      answer664.style.opacity = 0;
    }else if(answer662.classList.contains("choosed")){
      answer662.classList.remove('choosed');
      answer662.classList.add('false');
      answer661.classList.add('true');
      answer663.style.opacity = 0;
      answer664.style.opacity = 0;
    }else if(answer663.classList.contains("choosed")){
      answer663.classList.remove('choosed');
      answer663.classList.add('false');
      answer661.classList.add('true');
      answer662.style.opacity = 0;
      answer664.style.opacity = 0;
    }else if(answer664.classList.contains("choosed")){
      answer664.classList.remove('choosed');
      answer664.classList.add('false');
      answer661.classList.add('true');
      answer662.style.opacity = 0;
      answer663.style.opacity = 0;
    }else{
    }



})
