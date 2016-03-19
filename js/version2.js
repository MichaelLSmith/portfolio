// var navLinks = document.querySelectorAll('li');
// var len = navLinks.length;

// var HTML = require('html');

// for (var i = 0; i < len; i++ ){
//     navLinks[i].addEventListener('click', goTo, false);
// }

var nav = HTML.query('.top');
// var q = document.getElementById('.top');
console.log(q);

var main = HTML.query('#landing');

var cln = q.cloneNode();
cln.innerHTML = 'howdy';

main.insertBefore(cln, null);

// function goTo(evt){
//     console.log('goTo()');
//     console.dir(evt);
//     var id = evt.target.id;

//     if(id === 'toAbout'){ smoothScr.anim('about'); }
//     if(id === 'toPortfolio'){
//         smoothScr.anim('portfolio');}
    
//     if(id === 'toContact'){ smoothScr.anim('contact'); }
//     }


// console.dir(navLinks);


