function isElementInViewport(elem) {
  console.log('find');
  var $elem = $(elem);

  // Get the scroll position of the page.
  var scrollElem = ((navigator.userAgent.toLowerCase().indexOf('webkit') != -1) ? 'body' : 'html');
  var viewportTop = $(scrollElem).scrollTop();
  var viewportBottom = viewportTop + $(window).height();

  // Get the position of the element on the page.
  var elemTop = Math.round( $elem.offset().top );
  var elemBottom = elemTop + $elem.height();

  return ((elemTop < viewportBottom) && (elemBottom > viewportTop));
}

// Check if it's time to start the animation.
function checkAnimation() {
  var $elem = $('.level');

  // If the animation has already been started
  if ($elem.hasClass('start')) {
    $elem.classList.remove('start');
  }

  if (isElementInViewport($elem)) {
      // Start the animation
      $elem.addClass('start');
  } else {
    $elem.classList.remove('start');
  }
}

// Capture scroll events
function Onscrollfunction() {
  checkAnimation();
};