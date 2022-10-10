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
  $(window).on('scroll', function(){
    const link = $('#landingpage a');
    const top = $(window).scrollTop();
    $('.section').each(function () {
      const id = $(this).attr('id');
      const height = $(this).height();
      const offset = $(this).offset().top - 150;
      if (top >= offset && top < offset + height) {
        link.removeClass('active');
        $('#landingpage').find('[data-scroll="' + id + '"]').addClass('active');
      }
    });
  });
let arrow = document.querySelectorAll(".arrow");
  for (var i = 0; i < arrow.length; i++) {
    arrow[i].addEventListener("click", (e)=>{
      let arrowParent = e.target.parentElement.parentElement;//selecting main parent of arrow
      arrowParent.classList.toggle("showMenu");
    });
  }
  let sidebar = document.querySelector("#landingpage");
  let sidebarBtn = document.querySelector(".bx-menu");
  console.log(sidebarBtn);
  sidebarBtn.addEventListener("click", ()=>{
    sidebar.classList.toggle("close");
  });



});

