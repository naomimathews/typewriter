(function($) {
    var defaults = {
        cursor: true,
        callback: function() {},
        typeSpeedInms: 100
    }

    var options = {}, elm;

    var showCursor = function(){
      var css = ".typewriter::after{animation: blink 1s infinite; content:'|'; color:black; display:inline-block}@keyframes blink{to{opacity: .0;}}",
          head = document.head || document.getElementsByTagName('head')[0],
          style = document.createElement('style');

      style.type = 'text/css';
      if (style.styleSheet) {
          style.styleSheet.cssText = css;
      } else {
          style.appendChild(document.createTextNode(css));
      }

      head.appendChild(style);

      $(elm).addClass("typewriter")
    }

    $.fn.typeWriter = function(customOptions) {
        elm = this[0];
        var text = elm.innerHTML;
        var idx = 0;
        elm.innerHTML = "";
        $.extend(options, defaults, customOptions);


        if(options.cursor){
          showCursor();
        }

        var interval = setInterval(function() {
            elm.innerHTML = elm.innerHTML + text.slice(idx, idx + 1);
            idx += 1;
            if (idx == text.length) {
                clearInterval(interval);
                options.callback();
            }
        }, options.typeSpeedInms)
        return this;
    }

}(jQuery));
