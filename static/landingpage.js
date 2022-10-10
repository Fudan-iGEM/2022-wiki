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

const anchors = document.getElementsByClassName('anchor')
    const contents = document.getElementsByClassName('content')

    const ob = new IntersectionObserver(changes => {
      const change = changes[0]
      if (change.isIntersecting) {
        const index = change.target.id.slice(-1)
        window.history.pushState({ key: 'content' }, '', `#${change.target.id}`)
        for (let i = 0; i < anchors.length; i++) {
          console()
          if (i == index - 1) {
            anchors.item(i).classList.add('active')
          } else {
            anchors.item(i).classList.remove('active')
          }
        }
      }
    }, {
      threshold: 0.6
    })

    for (const item of contents) {
      ob.observe(item)
    }
