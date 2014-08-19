Simple-Parallax
===============

A simple parallax script.
Moves a background image at 0.5x the speed of its container.


Instructions
------------

- Reuseable functions activates each parallax section
- call parallaxIt() passing two variables
- parallaxIt(CONTAINER, CONTAINER PARALLAX IMG );
- eg parallaxIt($(.container).scrollTop(), $(.container img));
- the .scrollTop() calculates from the top of the page.
- we also subtract how far we are from the top of the page 
- from how far the element is from the top of the page
- parallaxIt($(.container).offset().top - $window.scrollTop(), $(.container img));

There may be better ways of doing this. If you know of one then shoot me a tweet @webknit