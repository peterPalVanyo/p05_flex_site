const navbar = document.querySelector('#navbar');
let scrolled = false;


window.onscroll = function() {
    if(window.pageYOffset > 100) {
        navbar.classList.remove("top")
        if (!scrolled) {
            navbar.style.transform = "translateY(-70px)";
        }
        setTimeout(() => {
            navbar.style.transform = "translateY(0)";
            scrolled = true;
        }, 800);
    } else {
        navbar.classList.add("top")
        scrolled = false;
    }
}

//smooth scrolling

$("#navbar a, .btn").on("click", function(e) {
    if (this.hash != "") {
        e.preventDefault();
        const hash = this.hash;
        $("html, body").animate(
            {
                scrollTop: $(hash).offset().top - 80,
            },
            800
        );  
    }
})