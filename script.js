// <!-- /HAMBURGER MENU   -->
function myFunction() {
    var x = document.getElementById("nav__links");
    if (x.style.display === "block") {
    x.style.display = "none";
    } else {
    x.style.display = "block";
    }
}
    // <!-- /HAMBURGER MENU   -->


// <!-- FIRST SLICK SLIDER -->
$('.why-choose__carousel').slick({
    dots: true,
    infinite: true,
    arrows: false,
    autoplay: true,
    speed: 500,
    fade: true,
    cssEase: 'linear'
});
// <!-- /FIRST SLICK SLIDER  -->


// <!-- SECOND SLICK SLIDER -->
    $('.my-slider').slick({
        dots: false,
        arrows: true,
        autoplay: true,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 3,
        // prevArrow:"<i class'fa fa-chevron-left'></i>",
        nextArrow:"<button class='slick_next'><i class='fa fa-chevron-right' aria-hidden='true'></i></button>", 
        prevArrow:"<button class='slick_prev'><i class='fa fa-chevron-left' aria-hidden='true'></i></button>", 
        responsive: [
            {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                arrows: true,
                }
            },
            {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                arrows: true,
                }
            },
            {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
    // <!-- /SECOND SLICK SLIDER -->

    // <!-- FAQ ACORDEON -->
    var acc = document.getElementsByClassName("faq_question");
    var i;

    for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("open");
        var faq_answer = this.nextElementSibling;
        if (faq_answer.style.maxHeight){
            faq_answer.style.maxHeight = null;
        } else {
            faq_answer.style.maxHeight = faq_answer.scrollHeight + "px";
        } 
    });
    }
    // <!--/FAQ ACORDEON -->