$(function () {
  $('.info__title').on('click', function () {
    if ($(this).hasClass('info__title--open')) {
      $(this).removeClass('info__title--open');
      $(this).next('.info__list').removeClass('info__list--open');
    } else {
      $('.info__title').removeClass('info__title--open');
      $('.info__list').removeClass('info__list--open');
      $(this).addClass('info__title--open');
      $(this).next('.info__list').addClass('info__list--open');
    }
  });

  // $(document).on('click', function (e) {
  //   if ( ! ('.block').is(e.target) && listItem.has(e.target).length === 0) {
  //     $('.production__stage-text').removeClass('production__stage-text--open');
  //     $('.production__stage-title').removeClass('production__stage-title--open');
  //   }
  // })
});