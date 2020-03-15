function animateLogoBalancEat() {
  var logo = document.querySelector('.balanceat-logo svg')
  logo.classList.add('active');
};

(function() {
  window.onscroll = function() { 
    menuAppear();
    animateCSS('js--wp-1', 'fadeIn');
    animateCSS('js--wp-2', 'fadeIn');
    animateCSS('js--wp-3', 'fadeIn');
    animateCSS('js--step-1', 'fadeInUp');
    animateCSS('js--step-2', 'fadeInUp');
    animateCSS('js--step-3', 'fadeInUp');
    animateCSS('js--signature', 'fadeIn');
  };

  function menuAppear() {
    const navbar = document.getElementById("js--navbar");
    const section = document.getElementById('js--section-features');
    const sticky = section.offsetTop; 
      
    // Sticky menu
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    };
  };

  function animateCSS(element, animationName) {
    const node = document.getElementById(element);
    const mount = window.innerHeight * 0.9;
    const action = node.offsetTop - mount;

    if (window.pageYOffset >= action) {
      node.classList.add('animated', animationName);
    }; 
  };

})();

