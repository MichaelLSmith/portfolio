smoothScroll.init();

//Headhesive options
       var options = {
           offset: '#showHere',
           classes: {
               clone:   'banner--clone',
               stick:   'banner--stick',
               unstick: 'banner--unstick'
           }
       };

       // Initialise with options
       var banner = new Headhesive('.nav',options);

       // Headhesive destroy
       // banner.destroy();
