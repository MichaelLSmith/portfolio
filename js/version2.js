var navLinks = document.querySelectorAll('li');

// navLinks[1].onclick = smoothScr.anim('about');
// navLinks[2].onclick = smoothScr.anim('portfolio');
// navLinks[2].onclick = smoothScr.anim('contact');

navLinks[1].addEventListener('click', goTo, false);


function goTo(evt){
    console.log('goTo()');
    console.dir(evt);
    var id = evt.target.id;

    if(id === 'toAbout'){ smoothScr.anim('about'); }
    if(id === 'toPortfolio'){
        smoothScr.anim('portfolio');}
    }
    if(id === 'toContact'){ smoothScr.anim('contact'); }
}

console.dir(navLinks);
