// Set options
       var options = {
           offset: '#showHere',
           classes: {
               clone:   'banner--clone',
               stick:   'banner--stick',
               unstick: 'banner--unstick'
           }
       };

       // Initialise with options
       var banner = new Headhesive('.mdl-layout__header', options);
       console.log(banner);

       // Headhesive destroy
       // banner.destroy();
