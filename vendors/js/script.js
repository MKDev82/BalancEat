(function() {
    window.onscroll = function() { menuAppear() };

    function menuAppear() {
        var navbar = document.getElementById("js--navbar");
        var section = document.getElementById('js--section-features')
        var sticky = section.offsetTop - 60; 
        if (window.pageYOffset >= sticky) {
            navbar.classList.add("sticky")
        } else {
            navbar.classList.remove("sticky");
        };
    };
    
    return console.log('ready');
    
})();

