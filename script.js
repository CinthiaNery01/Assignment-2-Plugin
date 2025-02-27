window.onload = function () {
    lax.init();

    // Add a driver that we use to control our animations
    lax.addDriver('scrollY', function () {
        return window.scrollY;
    });

    // Add animation bindings to elements
    lax.addElements('.selector', {
        scrollY: {
            translateX: [
                ["elInY", "elCenterY", "elOutY"],
                [0, 'screenWidth/2', 'screenWidth'],
            ]
        }
    });
};

lax.addElements(
    '.selector',  // Element selector rule
    {             // Animation data
      scrollY: {  
        opacity: [
          [0, 100],
          [1, 0]
        ]
      }
    },
    {             
      style: {}   // Element options
    }
  )