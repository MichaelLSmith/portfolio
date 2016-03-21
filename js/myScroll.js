//from: http://web.archive.org/web/20140213105950/http://itnewb.com/tutorial/Creating-the-Smooth-Scroll-Effect-with-JavaScript

// determine the visible top of page Y coordinate;
// determine the destination elements Y coordinate; and
// perform the scroll, dynamically adjusting the speed based on distance.


//function to find top and left coordinates of destination element
//from: http://javascript.info/tutorial/coordinates#the-right-way-elem-getboundingclientrect
function getOffsetRect(elem) {
    // (1)
    var box = elem.getBoundingClientRect();

    var body = document.body
    var docElem = document.documentElement

    // (2)
    var scrollTop = window.pageYOffset || docElem.scrollTop || body.scrollTop
    var scrollLeft = window.pageXOffset || docElem.scrollLeft || body.scrollLeft

    // (3)
    var clientTop = docElem.clientTop || body.clientTop || 0
    var clientLeft = docElem.clientLeft || body.clientLeft || 0

    // (4)
    var top  = box.top +  scrollTop - clientTop
    var left = box.left + scrollLeft - clientLeft

    return { top: Math.round(top), left: Math.round(left) }
}

var navLinks = document.querySelectorAll('li');
var len = navLinks.length;

for (var i = 0; i < len; i++ ){
    navLinks[i].addEventListener('click', goTo, false);
}

function goTo(evt){
    console.log('goTo()');
    console.dir(evt);
    var id = evt.target.id;

    if(id === 'toAbout'){ let elem = document.querySelector('#about');
    console.log(elem); }
    if(id === 'toPortfolio'){ console.log('functioncall'('portfolio'));}

    if(id === 'toContact'){ console.log('functioncall'('contact')); }
    }


//save result of getoffset rect in a variable:
//do we need coordinates of nav button?? or just target? Do I need to run
//getoffset rect twice?
// let  getOffsetRect(elem);

//do I actually need to find the coordinates of current position using offsetrect? Can I just use window.scrollY?

let currentPostion = window.scrollY;

console.log(currentPostion);


//smooth-scroll implementation: http://jsfiddle.net/0uwg96sh/

function scroll_down() {
    var el = document.querySelector('.container');
    smooth_scroll_to(el, el.scrollTop + 200, 600);
}




/**
    Smoothly scroll element to the given target (element.scrollTop)
    for the given duration

    Returns a promise that's fulfilled when done, or rejected if
    interrupted
 */
var smooth_scroll_to = function(element, target, duration) {
    target = Math.round(target);
    duration = Math.round(duration);
    if (duration < 0) {
        return Promise.reject("bad duration");
    }
    if (duration === 0) {
        element.scrollTop = target;
        return Promise.resolve();
    }

    var start_time = Date.now();
    var end_time = start_time + duration;

    var start_top = element.scrollTop;
    var distance = target - start_top;

    // based on http://en.wikipedia.org/wiki/Smoothstep
    var smooth_step = function(start, end, point) {
        if(point <= start) { return 0; }
        if(point >= end) { return 1; }
        var x = (point - start) / (end - start); // interpolation
        return x*x*(3 - 2*x);
    }

    return new Promise(function(resolve, reject) {
        // This is to keep track of where the element's scrollTop is
        // supposed to be, based on what we're doing
        var previous_top = element.scrollTop;

        // This is like a think function from a game loop
        var scroll_frame = function() {
            if(element.scrollTop != previous_top) {
                reject("interrupted");
                return;
            }

            // set the scrollTop for this frame
            var now = Date.now();
            var point = smooth_step(start_time, end_time, now);
            var frameTop = Math.round(start_top + (distance * point));
            element.scrollTop = frameTop;

            // check if we're done!
            if(now >= end_time) {
                resolve();
                return;
            }

            // If we were supposed to scroll but didn't, then we
            // probably hit the limit, so consider it done; not
            // interrupted.
            if(element.scrollTop === previous_top
                && element.scrollTop !== frameTop) {
                resolve();
                return;
            }
            previous_top = element.scrollTop;

            // schedule next frame for execution
            setTimeout(scroll_frame, 0);
        }

        // boostrap the animation process
        setTimeout(scroll_frame, 0);
    });
}
