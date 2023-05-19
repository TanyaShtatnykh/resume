



$(function () {
  $('.info__title').on('click', function () {
    if (!$(this).hasClass('info__title--open')) {
      $('.info__wrapper').removeClass('info__wrapper--open');
      $('.info__title').removeClass('info__title--open');
    }
    $(this).toggleClass('info__title--open');
    $(this).next('.info__wrapper').toggleClass('info__wrapper--open');
  });
});

