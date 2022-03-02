$(document).ready(function () {
  $("#our-classes-owl").owlCarousel({
    loop: true,
    nav: false,
    dots: false,
    stagePadding: 0,
    margin: 30,
    autoplay: true,
    smartSpeed: 2000,
    responsive: {
      0: {
        items: 1.3,
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
      }
    }
  });

  $("#meet-the-creators-owl").owlCarousel({
    loop: true,
    nav: false,
    dots: false,
    stagePadding: 0,
    margin: 15,
    autoplay: false,
    autoWidth:true,
    smartSpeed: 2000,
    center: true,
    responsive: {
      0: {
        items: 2,
        autoplay: true,
        center: true,
        margin: 8, 
      },
      600: {
        items: 2.3,
      },
      1200: {
        items: 3.1,
      },
      1600: {
        items: 4,
      }
    }
  });

  // $("#sync1").owlCarousel({
  //   loop:false,
  //   navText: ['<span class="span-roundcircle left-roundcircle"><i class="fe fe-chevron-left left-arrow"></span>','<span class="span-roundcircle right-roundcircle"><i class="fe fe-chevron-right right-arrow"></span>'],
  //   dots: false,
  //   stagePadding: 0,
  //   nav:false,
  //   margin: 15,
  //   smartSpeed:2000,
  //   responsive:{
  //       0:{
  //           items:1 
  //       },
  //       600:{
  //           items:1
  //       },
  //       1180:{
  //         items:1
  //       }
  //   }
  // });

  $("#upcoming-live-streams-owl").owlCarousel({
    loop: true,
    nav: false,
    dots: false,
    stagePadding: 0,
    margin: 20,
    autoWidth:true,
    autoplay: false,
    smartSpeed: 2000,
    responsive: {
      0: {
        items: 1,
        autoWidth:false,
        autoplay: true,
      },
      600: {
        items: 1.9,
        autoWidth:false,
        autoplay: true,
      },
      1200: {
        items: 1.2,
      },
      1600: {
        items: 1.25,
      }
    }
  });

  $("#similar-creators-owl").owlCarousel({
    loop: true,
    nav: false,
    dots: false,
    stagePadding: 0,
    margin: 15,
    autoplay: false,
    autoWidth:true,
    smartSpeed: 2000,
    responsive: {
      0: {
        items: 1,
        autoWidth:false,
        autoplay: true,
      },
      600: {
        items: 2.3,
        autoWidth:false,
        autoplay: true,
      },
      1200: {
        items: 3.1,
      },
      1600: {
        items: 3.15,
      }
    }
  });

  $("#materials-creators-owl").owlCarousel({
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

$(document).ready(function() {

  var sync1 = $("#sync1");
  var sync2 = $("#sync2");
  var slidesPerPage = 8; //globaly define number of elements per page
  var syncedSecondary = true;

  sync1.owlCarousel({
    loop: true,
    autoplay: true,
    smartSpeed:2000,
    navText: ['<span class="span-roundcircle left-roundcircle"><i class="fe fe-chevron-left left-arrow"></span>','<span class="span-roundcircle right-roundcircle"><i class="fe fe-chevron-right right-arrow"></span>'],
    dots: false,
    stagePadding: 0,
    slideSpeed: 2000,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    nav:false,
    margin: 15,
    items: 1,

  }).on('changed.owl.carousel', syncPosition);

  sync2
      .on('initialized.owl.carousel', function() {
          sync2.find(".owl-item").eq(0).addClass("current");
      })
      .owlCarousel({
          items: slidesPerPage,
          dots: true,
          nav: true,
          slideSpeed: 2000,
          loop: false,
          margin: 10,
          autoWidth: true,
          smartSpeed: 2000,
          // slideSpeed: 5000,
          slideBy: slidesPerPage, //alternatively you can slide by 1, this way the active slide will stick to the first item in the second carousel
          responsiveRefreshRate: 200,
          responsive:{
                  0:{
                      items:4
                  },
                  600:{
                      items:4
                  },
                }
      }).on('changed.owl.carousel', syncPosition2);

  function syncPosition(el) {
      //if you set loop to false, you have to restore this next line
      //var current = el.item.index;

      //if you disable loop you have to comment this block
      var count = el.item.count - 1;
      var current = Math.round(el.item.index - (el.item.count / 2) - .5);

      if (current < 0) {
          current = count;
      }
      if (current > count) {
          current = 0;
      }

      //end block

      sync2
          .find(".owl-item")
          .removeClass("current")
          .eq(current)
          .addClass("current");
      var onscreen = sync2.find('.owl-item.active').length - 1;
      var start = sync2.find('.owl-item.active').first().index();
      var end = sync2.find('.owl-item.active').last().index();

      if (current > end) {
          sync2.data('owl.carousel').to(current, 1000, true);
      }
      if (current < start) {
          sync2.data('owl.carousel').to(current - onscreen, 1000, true);
      }
  }

  function syncPosition2(el) {
      if (syncedSecondary) {
          var number = el.item.index;
          sync1.data('owl.carousel').to(number, 100, true);
      }
  }

  sync2.on("click", ".owl-item", function(e) {
      e.preventDefault();
      var number = $(this).index();
      sync1.data('owl.carousel').to(number, 300, true);
  });
});