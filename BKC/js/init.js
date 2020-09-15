(function($){
  $(function(){

    $('.sidenav').sidenav();

  }); // end of document ready
})(jQuery); // end of jQuery name space


const slider = document.querySelectorAll('.slider');
M.Slider.init(slider, {
  indicators : false,
  height : 500,
  transition : 600,
  interval : 3000
});

const materialbox = document.querySelectorAll('.materialboxed');
M.Materialbox.init(materialbox);

const scroll = document.querySelectorAll('.scrollspy');
M.ScrollSpy.init(scroll,{
  scrollOffset : 70
});