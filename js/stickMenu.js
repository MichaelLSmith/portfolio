//get nav menu
var nav = HTML.query('.nav');

//add original class to nav bar
nav.classList.add('original');

var orig = HTML.query('.original');

var body = HTML.body;
//clone nav menu
var cln = nav.cloneNode(true);
//add css classes to cloned menu - initially set to display:none
cln.classList.add('clone', 'disableMenu', 'fixedMenu');
//insert cloned menu into doc
body.insertBefore(cln, nav.nextSibling);

var test = nav.getBoundingClientRect();
console.dir(test);
console.log(test.top);
