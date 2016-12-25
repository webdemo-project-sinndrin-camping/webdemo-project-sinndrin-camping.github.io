/* ==========================================================================
   jQuery plugin settings and other scripts
   ========================================================================== */

$(document).ready(function(){

  // jquerymodal modifications
  $.modal.defaults = {
  closeExisting: true,    // Close existing modals. Set this to false if you need to stack multiple modal instances.
  escapeClose: true,      // Allows the user to close the modal by pressing `ESC`
  clickClose: true,       // Allows the user to close the modal by clicking the overlay
  closeText: 'Close',     // Text content for the close <a> tag.
  closeClass: '',         // Add additional class(es) to the close <a> tag.
  showClose: false,        // Shows a (X) icon/link in the top-right corner
  modalClass: "modal",    // CSS class added to the element being displayed in the modal.
  spinnerHtml: null,      // HTML appended to the default spinner during AJAX requests.
  showSpinner: true,      // Enable/disable the default spinner during AJAX requests.
  fadeDuration: null,     // Number of milliseconds the fade transition takes (null means no transition)
  fadeDelay: 1.0          // Point during the overlay's fade-in that the modal begins to fade in (.5 = 50%, 1.5 = 150%, etc.)
};

  // Slick initialization
  // home page
  $('.slick-home-campingplatz').slick({
    arrows: false,
    dots: true,
    lazyLoad: 'ondemand',
  });
  $('.slick-home-infrastruktur').slick({
    arrows: false,
    dots: true,
    lazyLoad: 'ondemand',
  });
  $('.slick-home-gegend').slick({
    arrows: false,
    dots: true,
    lazyLoad: 'ondemand',
  });
  // modals
  $('.slick-home-campingplatz-modal').slick({
    accessibility: true,
    arrows: true,
    dots: true,
    autoplay: true,
    autoplaySpeed: 2500,
    lazyLoad: 'ondemand',
  });
  $('.slick-home-campingplatz-modal').slick('slickPause');
  $('.slick-home-infrastruktur-modal').slick({
    accessibility: true,
    arrows: true,
    dots: true,
    autoplay: true,
    autoplaySpeed: 2500,
    lazyLoad: 'ondemand',
  });
  $('.slick-home-infrastruktur-modal').slick('slickPause');
  $('.slick-home-gegend-modal').slick({
    accessibility: true,
    arrows: true,
    dots: true,
    autoplay: true,
    autoplaySpeed: 2500,
    lazyLoad: 'ondemand',
  });
  $('.slick-home-gegend-modal').slick('slickPause');
  // Unterkünfte page
  $('.slick-unterkuenfte-ferienhaus').slick({
    arrows: false,
    dots: true,
    lazyLoad: 'ondemand',
  });
  $('.slick-unterkuenfte-stugor').slick({
    arrows: false,
    dots: true,
    lazyLoad: 'ondemand',
  });
  $('.slick-unterkuenfte-stellplaetze').slick({
    arrows: false,
    dots: true,
    lazyLoad: 'ondemand',
  });

  // Sticky footer
  var bumpIt = function() {
      $('body').css('margin-bottom', $('.page__footer').outerHeight(true));
    },
    didResize = false;

  bumpIt();

  $(window).resize(function() {
    didResize = true;
  });
  setInterval(function() {
    if(didResize) {
      didResize = false;
      bumpIt();
    }
  }, 250);

  // FitVids init
  $("#main").fitVids();

  // init sticky sidebar
  $(".sticky").Stickyfill();

  var stickySideBar = function(){
    var show = $(".author__urls-wrapper button").length === 0 ? $(window).width() > 1024 : !$(".author__urls-wrapper button").is(":visible");
    // console.log("has button: " + $(".author__urls-wrapper button").length === 0);
    // console.log("Window Width: " + windowWidth);
    // console.log("show: " + show);
    //old code was if($(window).width() > 1024)
    if (show) {
      // fix
      Stickyfill.rebuild();
      Stickyfill.init();
      $(".author__urls").show();
    } else {
      // unfix
      Stickyfill.stop();
      $(".author__urls").hide();
    }
  };

  stickySideBar();

  $(window).resize(function(){
    stickySideBar();
  });

  // Follow menu drop down

  $(".author__urls-wrapper button").on("click", function() {
    $(".author__urls").fadeToggle("fast", function() {});
    $(".author__urls-wrapper button").toggleClass("open");
  });

  // init smooth scroll
  $("a").smoothScroll({offset: -20});

  // add lightbox class to all image links
  $("a[href$='.jpg'],a[href$='.jpeg'],a[href$='.JPG'],a[href$='.png'],a[href$='.gif']").addClass("image-popup");

  // Magnific-Popup options
  $(".image-popup").magnificPopup({
    // disableOn: function() {
    //   if( $(window).width() < 500 ) {
    //     return false;
    //   }
    //   return true;
    // },
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0,1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      tError: '<a href="%url%">Image #%curr%</a> could not be loaded.',
    },
    removalDelay: 500, // Delay in milliseconds before popup is removed
    // Class that is added to body when popup is open.
    // make it unique to apply your CSS animations just to this exact popup
    mainClass: 'mfp-zoom-in',
    callbacks: {
      beforeOpen: function() {
        // just a hack that adds mfp-anim class to markup
        this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
      }
    },
    closeOnContentClick: true,
    midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
  });

});
