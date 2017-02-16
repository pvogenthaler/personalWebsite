$(document).ready(function() {

  (function() {
    var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'shortcut icon';
    link.href = 'myfavicon.ico';
    document.getElementsByTagName('head')[0].appendChild(link);
  }());


  $("#home").addClass("activeNav");
  $("#nav li").click(function() {
    $("#nav li").removeClass("activeNav");
    $(this).addClass("activeNav");
  })

  $("li").click(function() {
    if ( $(this).text() !== "ABOUT" ) {
      $("#aboutMe").hide();
    }
    if ( $(this).text() !== "CONTACT" ) {
      $("#contactMe").hide();
    }
    if ( $(this).text() !== "HOME" ) {
      $("#name").hide();
    }
  })

  $("#about").click(function() {
    if ( $("#aboutMe:hidden") ) {
      $("#aboutMe").fadeIn("slow");
    }
  })

  $("#contact").click(function() {
    if ( $("contactMe:hidden") ) {
      $("#contactMe").fadeIn("slow");
    }
  })

  $("#home").click(function() {
    if ( $("name:hidden") ) {
      $("#name").fadeIn("slow");
    }
  })

})
