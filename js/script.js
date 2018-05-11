// all jquery and some javascript commands go here
$(document).ready(function(){



  // Activate Carousel
  $("#myCarousel").carousel();

  // Enable Carousel Indicators
  $(".item").click(function(){
      $("#myCarousel").carousel(1);
  });

  // Enable Carousel Controls
  $(".left").click(function(){
      $("#myCarousel").carousel("prev");
  });

window.sr = ScrollReveal({ reset: true });
sr.reveal('.scroll1', { duration: 400, origin: 'bottom', opacity: 0, easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)', scale: 0.9,});
sr.reveal('.scroll2', { duration: 500, origin: 'bottom', opacity: 0, easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)', scale: 0.9,});
sr.reveal('.scroll3', { duration: 600, origin: 'bottom', opacity: 0, easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)', scale: 0.9,});
sr.reveal('.scroll4', { duration: 700, origin: 'bottom', opacity: 0, easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)', scale: 0.9,});



//text type

var TxtRotate = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtRotate.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 300 - Math.random() * 100;

  // if (this.isDeleting) { delta /= 2; }
  //
  // if (!this.isDeleting && this.txt === fullTxt) {
  //   delta = this.period;
  //   this.isDeleting = true;
  // } else if (this.isDeleting && this.txt === '') {
  //   this.isDeleting = false;
  //   this.loopNum++;
  //   delta = 500;
  // }

  setTimeout(function() {
    that.tick();
  }, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName('txt-rotate');
  for (var i=0; i<elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-rotate');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  // var css = document.createElement("style");
  // css.type = "css/city_pages.css";
  // css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
  // document.body.appendChild(css);
};


  });
