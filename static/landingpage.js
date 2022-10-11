$(document).ready(function () {
  // footer, div > a
  $(document).delegate('div.logos', 'click', function () {
    window.location = $(this).find('a').attr('href');
  });

  // #landingpage  display: none;
  $(window).on('resize', function () {
    const win = $(this);
    if (win.width() <= 768) {
      $('#landingpage').hide();
    } else {
      $('#landingpage').show();
    }
  });

  // sidebar
  $(window).on('scroll', function () {
    const link = $('.dot-landingpage');
    const top = $(window).scrollTop();
    $('.section').each(function () {
      const id = $(this).attr('id');
      //console.log(id)
      const height = $(this).height();
      const offset = $(this).offset().top - 150;
      if (top >= offset && top < offset + height) {
        link.removeClass('active');
        $('#landingpage').find('[data-scroll="' + id + '"]').addClass('active');
      }
    });
  });
  const arrow = document.querySelectorAll(".arrow");
  //console.log(arrow)
  for (var i = 0; i < arrow.length; i++) {
    arrow[i].addEventListener("click", (e)=>{
      //console.log(arrow)
      const arrowParent = e.target.parentElement.parentElement; // selecting main parent of arrow
      arrowParent.classList.toggle("showmenu");
    });
  }
  const sidebar = document.querySelector("#landingpage");
  //const sidebarBtn = document.querySelector(".bx-menu");
  //console.log(sidebarBtn);
  //sidebarBtn.addEventListener("click", ()=>{
  //  sidebar.classList.toggle("close");
  //});
});
