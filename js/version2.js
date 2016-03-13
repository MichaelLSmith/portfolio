var navLinks = document.querySelectorAll('li');
var len = navLinks.length;

for (var i = 0; i < len; i++ ){
    navLinks[1].addEventListener('click', goTo, false);
}

function goTo(evt){
    console.log('goTo()');
    console.dir(evt);
    var id = evt.target.id;

    if(id === 'toAbout'){ smoothScr.anim('about'); }
    if(id === 'toPortfolio'){
        smoothScr.anim('portfolio');}
    
    if(id === 'toContact'){ smoothScr.anim('contact'); }
    }


console.dir(navLinks);
