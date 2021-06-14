function include(file) {
  
    var script  = document.createElement('script');
    script.src  = file;
    script.type = 'text/javascript';
    script.defer = true;
    
    document.getElementsByTagName('body').item(0).appendChild(script);
    
  }
    
  /* Include Many js files */
  include('./assets/js/main.js');
  //include('/assets/js/game.js');