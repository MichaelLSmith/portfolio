
    let stickyMenu = {
        init:function(){
            this.htmlCache();
            this.clone();
            this.insert();
            this.addClass();
        },
        htmlCache:function() {
            this.nav = HTML.query('.nav');
            this.body = HTML.body;
            this.orig = HTML.query('.original');
        },
        clone:function() {
            this.cln = this.nav.cloneNode(true);
        },
        insert:function() {
            this.body.insertBefore(this.cln, this.nav.nextSibling);
        },
        addClass:function() {
            this.cln.classList.add('clone', 'disableMenu', 'fixedMenu');
            this.orig.classList.add('original');
        },
        removeClass:function() {
            //remove disableMenu from clone;
            //add disableMenu to orig;
        },
        stickMenu:function(){
            this.orgCoord = this.nav.getBoundingClientRect();
            //if orig position === clone position --> hide orig by adding disableMenu class to orig & removing it from clone.
            //do the opposite too.

        }
    };

stickyMenu.init();

    // //get nav menu
    // var nav = HTML.query('.nav');
    //
    // //add original class to nav bar
    // nav.classList.add('original');
    //
    // var orig = HTML.query('.original');
    //
    // var body = HTML.body;
    // //clone nav menu
    // var cln = nav.cloneNode(true);
    // //add css classes to cloned menu - initially set to display:none
    // cln.classList.add('clone', 'disableMenu', 'fixedMenu');
    // //insert cloned menu into doc
    // body.insertBefore(cln, nav.nextSibling);

//     function sticky(){
//         var orig = nav.getBoundingClientRect();
//         var
//         if(orig.top <= 0)
//     }
// }
