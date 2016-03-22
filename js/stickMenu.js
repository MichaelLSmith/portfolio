
    var stickyMenu = {

        test:'this is test string',

        init:function(){
            console.log('init');
            this.htmlCache();
            this.clone();
            this.insert();
            this.noStickClass();
            this.checkMenu();
        },
        htmlCache:function() {
            console.log('htmlCache');
            // this.nav;
            this.nav = document.querySelector('.nav');
            console.log('this.nav in htmlCache');
            console.log(this.nav);
            this.body = HTML.body;
        },
        clone:function() {
            console.log('clone');
            this.cln = this.nav.cloneNode(true);
            this.nav.classList.add('original');
            this.orig = HTML.query('.original');
        },
        insert:function() {
            console.log('insert');
            this.body.insertBefore(this.cln, this.nav.nextSibling);
        },
        noStickClass:function() {
            console.log('noStickClass');
            // this.htmlCache();
            console.log(this);
            var print = this.nav.classList;
            console.log(print);
            this.cln.classList.add('clone', 'disableMenu', 'fixedMenu');
            this.orig.classList.remove('disableMenu');
        },
        stickClass:function() {
            console.log('stickClass');
            //remove disableMenu from clone;
            this.cln.classList.remove('disableMenu');
            //add disableMenu to orig;
            this.orig.classList.add('disableMenu');
            console.log(this.orig.classList);
        },
        stickMenu:function(){
            console.log('stickMenu');
            this.htmlCache();
            console.log('this.orig in stickMenu');
            console.log(this.orig);
            this.orgCoord = this.orig.getBoundingClientRect();
            console.log(this.orgCoord.top);

            // if orig position === clone position --> hide orig by adding disableMenu class to orig & removing it from clone.
            if ( this.orgCoord.top <= 0 ){
                console.log('call stickClass()');
                this.stickClass();
            }
            //do the opposite too.
            else {
                console.log('call noStickClass');
                this.noStickClass();
            }
        },
        checkMenu:function() {
            console.log('checkMenu()');
            this.scrollInterval = setInterval(this.stickMenu.bind(stickyMenu), 15000);
        }
    };

stickyMenu.init();
