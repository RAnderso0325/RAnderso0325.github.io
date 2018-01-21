$(document).ready(function() {
  $(document).foundation();
  $("#fullpage").fullpage({
    anchors: ["intro", "about", "projects", "contact", "lastPage"],
    menu: "#main-nav",
    slidesNavigation: true,
    css3: true,
    scrollingSpeed: 1000,
    responsiveWidth: 800,
    responsiveHeight: 300
  });
});
