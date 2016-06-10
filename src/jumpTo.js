(function(factory) {
	'use strict';

	if (typeof define === 'function' && define.amd) {
			define(factory);
	} else if (typeof exports === 'object') {
			module.exports = factory;
	} else {
			window.JumpTo = factory;
	}

})(function() {

	var windowHeight = window.innerHeight;
	var pageYOffset = window.pageYOffset;
	var hasScrolled = pageYOffset > windowHeight;
	var isScrolling = false;
	var eventsBinded = false;

	var raf = (function(){ return  window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function( callback ) { window.setTimeout(callback, 1000 / 60); }; })();

	var $window = $(window);
	var $document = $(document);
	var $btn = $('#js-jump-to--btn');

	/**
	 * Bind events to jump
	 * @return {undefined}
	 */
	function bindEvents() {
		console.log('bindEvents');
		$window.on('mousewheel', jumpToContent);
		$document.on('keydown', jumpToContent);
		$btn.on('click', jumpToContent);
		eventsBinded = true;
	}


	/**
	 * Unbind the events, deactivate the jump
	 * @return {undefined}
	 */
	function unbindEvents() {
		console.log('unbindEvents');
		$window.off('mousewheel', jumpToContent);
		$document.off('keydown', jumpToContent);
		$btn.off('click', jumpToContent);
		eventsBinded = false;
		hasScrolled = true;
		isScrolling = false;
	}


	/**
	 * Do the jumping
	 * @param  {object} e The object of the event that has been triggered
	 * @return {undefined}
	 */
	function jumpToContent(e) {
		// Spacebar and arrow down keys
		var isKeydown = e.type === 'keydown' && ((e.which === 32 && !e.shiftKey) || e.which === 40) ;
		// Mousewheel
		var isMousewheel = e.type === 'mousewheel' && e.deltaY < 0;
		// Anchor button
		var isClick = e.type === 'click';

		if (isKeydown || isMousewheel || isClick) e.preventDefault();

		// Scroll only once
		if (!isScrolling && (isKeydown || isMousewheel || isClick )) {
			isScrolling = true;
			TweenLite.to(window, 1, {
				scrollTo: {
					y: windowHeight,
					onAutoKill: unbindEvents
				},
				ease: Expo.easeInOut,
				onComplete: unbindEvents
			});
		}
	}

	/**
	 * Launch the loop that will handle
	 * the binding/unbinding of the events
	 * @return {undefined}
	 */
	(function loop() {
		console.log('loop');
		pageYOffset = window.pageYOffset;
		if (pageYOffset === 0 && hasScrolled) hasScrolled = false;
		if (pageYOffset < windowHeight && !hasScrolled && !isScrolling && !eventsBinded) bindEvents();
		raf(loop);
	})();
});