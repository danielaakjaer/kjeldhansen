(function ($) {
  $('.team-list .team-member').on('touchend click', function( event ){
        $(this).siblings().removeClass('active');
        $(this).toggleClass('active');
  });
  
  var el = $('[data-source="vehicle-count"]');
  if (el.length > 0) {
    $.get('https://api.connectedcars.io/vehicle-count', function (data) {
      var count = data.count.toString();
      el.each(function () {
        $(this).text(count.replace(/000$/, $(this).attr('data-lang') === 'da' ? '.000' : ',000'));
      });
    }, 'json');
  }

})(jQuery);
