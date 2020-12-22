AOS.init();
window.onload = function() {
  let spinner = document.getElementById('my-spinner');
  // .box に .loaded を追加してローディング表示を消す
  spinner.classList.add('loaded');
}

$(function () {
  $('.animate-hover').hover(
    function(){
      $(this).addClass('animated infinite bounce');
    },
    function () {
      $(this).removeClass();
    }
  );
  $("#slider").slick({
    speed: 1000,
    prevArrow: '<button class="slide-arrow prev-arrow"></button>',
    nextArrow: '<button class="slide-arrow next-arrow"></button>'
  });

  $('#odagiri-show').click(function(){
    $('#odagiri-modal').fadeIn();
  });
  $('.close-modal').click(function(){
    $('#odagiri-modal').fadeOut();
  });

  $('#imachi-show').click(function(){
    $('#imachi-modal').fadeIn();
  });
  $('.close-modal').click(function(){
    $('#imachi-modal').fadeOut();
  });

  $('#mako-show').click(function(){
    $('#mako-modal').fadeIn();
  });
  $('.close-modal').click(function(){
    $('#mako-modal').fadeOut();
  });

  $('#oeee-show').click(function(){
    $('#oeee-modal').fadeIn();
  });
  $('.close-modal').click(function(){
    $('#oeee-modal').fadeOut();
  });

  $('#yukiya-show').click(function(){
    $('#yukiya-modal').fadeIn();
  });
  $('.close-modal').click(function(){
    $('#yukiya-modal').fadeOut();
  });

  $('#yuuki-show').click(function(){
    $('#yuuki-modal').fadeIn();
  });
  $('.close-modal').click(function(){
    $('#yuuki-modal').fadeOut();
  });

  $('#kazuki-show').click(function(){
    $('#kazuki-modal').fadeIn();
  });
  $('.close-modal').click(function(){
    $('#kazuki-modal').fadeOut();
  });

  $('#megu-show').click(function(){
    $('#megu-modal').fadeIn();
  });
  $('.close-modal').click(function(){
    $('#megu-modal').fadeOut();
  });

  $('#tomo-show').click(function(){
    $('#tomo-modal').fadeIn();
  });
  $('.close-modal').click(function(){
    $('#tomo-modal').fadeOut();
  });

  $('#kakeru-show').click(function(){
    $('#kakeru-modal').fadeIn();
  });
  $('.close-modal').click(function(){
    $('#kakeru-modal').fadeOut();
  });
});
