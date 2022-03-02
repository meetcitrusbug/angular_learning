$(document).ready(function () {
  $("#our-popular-classes-owl").owlCarousel({
    loop: true,
    nav: false,
    dots: false,
    stagePadding: 0,
    margin: 15,
    autoplay: false,
    smartSpeed: 2000,
    responsive: {
      0: {
        items: 1,
        autoplay: true,
      },
      600: {
        items: 2.3,
      },
      1200: {
        items: 3.1,
      },
      1600: {
        items: 3.15,
      },
    },
  });

  $(
    "#classes-catagories-owl-01, #classes-catagories-owl-02, #classes-catagories-owl-03, #classes-catagories-owl-04"
  ).owlCarousel({
    loop: true,
    nav: false,
    dots: false,
    stagePadding: 0,
    margin: 15,
    autoplay: false,
    smartSpeed: 2000,
    responsive: {
      0: {
        items: 1,
        autoplay: true,
      },
      600: {
        items: 2.3,
      },
      1200: {
        items: 3.1,
      },
      1600: {
        items: 3.15,
      },
    },
  });

  $("#our-pop-classes-owl").owlCarousel({
    loop: true,
    nav: false,
    dots: false,
    stagePadding: 0,
    margin: 30,
    autoplay: true,
    smartSpeed: 2000,
    responsive: {
      0: {
        items: 1.2,
        autoplay: true,
        dots: true,
        margin: 15,
      },
      600: {
        items: 2.3,
      },
      1200: {
        items: 3.1,
      },
      1600: {
        items: 4,
      },
    },
  });

  $("#upcoming-owl-theme-new").owlCarousel({
    loop: true,
    nav: false,
    dots: false,
    stagePadding: 0,
    margin: 30,
    autoplay: true,
    smartSpeed: 2000,
    responsive: {
      0: {
        items: 1.2,
        autoplay: true,
        dots: true,
        margin: 15,
      },
      600: {
        items: 2,
      },
      1200: {
        items: 3,
      },
      1600: {
        items: 3,
      },
    },
  });
  
  $("#the-creators-owl").owlCarousel({
    loop: true,
    nav: false,
    dots: false,
    stagePadding: 0,
    margin: 30,
    autoplay: true,
    smartSpeed: 2000,
    responsive: {
      0: {
        items: 1.2,
        autoplay: true,
        dots: true,
        margin: 15,
      },
      600: {
        items: 2,
      },
      1200: {
        items: 3,
      },
      1600: {
        items: 3,
      },
    },
  });
});
