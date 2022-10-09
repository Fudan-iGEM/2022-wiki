$(document).ready(function () {
  // footer, div > a
  $(document).delegate('div.logos', 'click', function () {
    window.location = $(this).find('a').attr('href');
  });

  $(window).on('scroll', function () {
    const link = $('#navbar a.dot');
    const top = $(window).scrollTop();
    $('.sec').each(function () {
      const id = $(this).attr('id');
      const height = $(this).height();
      const offset = $(this).offset().top - 150;
      if (top >= offset && top < offset + height) {
        link.removeClass('active');
        $('#navbar').find('[data-scroll="' + id + '"]').addClass('active');
      }
    });
  });
});
