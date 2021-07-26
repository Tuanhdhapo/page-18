$('.slick').slick({
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  prevArrow: '<button class="slide-arrow prev-arrow"><i class="fas fa-angle-left prev"></i></button>',
  nextArrow: '<button class="slide-arrow next-arrow"><i class="fas fa-angle-right next"></i></button>',
  responsive: [{
    breakpoint: 769,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
    }
  },
  ]
});

$(function () {
  $("#draggable").draggable();
});

function show() {
  document.getElementById("hide").style.display = "block";
}

function hide() {
  document.getElementById("hide").style.display = "none";
}

$(function () {
  $("#tabs").tabs();
});

function register() {
  document.getElementById('register-change').style.backgroundColor = "#B2D235";
  document.getElementById('register-change').style.color = "#ffffff";
  document.getElementById('login-change').style.backgroundColor = "#ffffff";
  document.getElementById('login-change').style.color = "#B2D235";
}

function login() {
  document.getElementById('login-change').style.backgroundColor = "#B2D235";
  document.getElementById('login-change').style.color = "#ffffff";
  document.getElementById('register-change').style.backgroundColor = "#ffffff";
  document.getElementById('register-change').style.color = "#B2D235";
}
