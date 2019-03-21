document.addEventListener("DOMContentLoaded", function() {

  document.querySelector('.enterBlock').addEventListener("click", function(event) {
    event.preventDefault();
    let offset = 0, y = 0, dy, call = setInterval(function(){
      if( Math.abs(dy=offset-y)>1 ) y += dy/8;
      else { clearInterval(call); y = offset; }
      document.documentElement.scrollTop = y;
    },10);
    offset = document.getElementById(event.srcElement.dataset.scroll).offsetTop-95;
    y = document.documentElement.scrollTop;
  });

  document.querySelector('.backToTop').addEventListener("click", function(event) {
    event.preventDefault();
    let offset = 0, y = 0, dy, call = setInterval(function(){
      if( Math.abs(dy=offset-y)>1 ) y += dy/8;
      else { clearInterval(call); y = offset; }
      document.documentElement.scrollTop = y;
    },10);
    offset = document.getElementById(event.srcElement.dataset.scroll).offsetTop;
    y = document.documentElement.scrollTop;
  });

  document.addEventListener("scroll", function() {
    let scrollTop = document.documentElement.scrollTop;
    let header = document.getElementsByClassName('header')[0];


    if(scrollTop) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

  });




  let trigger = document.getElementById('hamburger');
  let header = document.getElementById('header');
  let isClosed = false;
  trigger.addEventListener('click', function () {
    if (isClosed === true) {
      trigger.classList.remove('is-open');
      trigger.classList.add('is-closed');
      header.classList.remove('isMobileOpen');
      isClosed = false;
    } else {
      trigger.classList.remove('is-closed');
      trigger.classList.add('is-open');
      header.classList.add('isMobileOpen');

      isClosed = true;
    }
  })

  
});