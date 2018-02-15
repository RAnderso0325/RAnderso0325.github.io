$(document).ready(function() {
  $(".button-collapse").sideNav();
  $("#fullpage").fullpage({
    anchors: ["intro", "about", "projects", "contact", "lastPage"],
    menu: "#main-nav",
    slidesNavigation: false,
    css3: true,
    scrollBar: true,
    autoScrolling: false,

		// //Accessibility
		keyboardScrolling: true,
		animateAnchor: true,
		recordHistory: true,

		// //Design
		controlArrows: true,

		// //Custom selectors
		sectionSelector: '.section',
		slideSelector: '.slide',
		lazyLoading: true,

		// //events
		onLeave: function(index, nextIndex, direction){},
		afterLoad: function(anchorLink, index){},
		afterRender: function(){},
		afterResize: function(){},
		afterResponsive: function(isResponsive){},
		afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
		onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){}
  });
});
