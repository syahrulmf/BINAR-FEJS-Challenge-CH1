$('.owl-carousel').owlCarousel({
  stagePadding: 400,
  loop:true,
  margin:36,
  nav:true,
  navText: ["<img src='./assets/icon/left_button.png'>","<img src='./assets/icon/right_button.png'>"],
  dots: false,
  responsive:{
    0:{
        items:1
    },
    600:{
        items:1
    },
    1000:{
        items:1
    }
  }
})