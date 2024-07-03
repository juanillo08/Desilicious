
var slider = tns({
    container: ".testimonial__slider",
    items: 3,
    speed: 400,
    gutter:100,
    slideBy: "page",
    autoplay: true,
    navPosition: "buttom",
    containerControls: "#controls",
    prevButton: ".prev",
    nextButton: ".next",
    responsive: {
        1250:{
            items: 3,
        },
        200:{
            items:1,
        }
    },
});


