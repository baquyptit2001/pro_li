var countDownDate = new Date("MAR 19, 2021 09:49:00").getTime();

// Update the count down every 1 second
var x = setInterval(function () {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  if (days < 10) {
    days = '0' + days;
  }
  if (hours < 10) {
    hours = '0' + hours;
  }
  if (minutes < 10) {
    minutes = '0' + minutes;
  }
  if (seconds < 10) {
    seconds = '0' + seconds;
  }


  // Output the result in an element with id="demo"
  document.getElementById("daysc").innerHTML = days;
  document.getElementById("hoursc").innerHTML = hours;
  document.getElementById("minutesc").innerHTML = minutes;
  document.getElementById("secondsc").innerHTML = seconds;

  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("daysc").innerHTML = "XX";
    document.getElementById("hoursc").innerHTML = "XX";
    document.getElementById("minutesc").innerHTML = "XX";
    document.getElementById("secondsc").innerHTML = "XX";
  }
}, 1000);

var clicks = 1;

function increase() {
  clicks += 1;
  document.getElementById("pro_detail_info_bot_amount_number").innerHTML = clicks;
  document.getElementById("pro_detail_info_top_price").innerHTML = '$' + clicks * 7 + '.00';
};

function decrease() {
  if (clicks > 1)
    clicks -= 1;
  document.getElementById("pro_detail_info_bot_amount_number").innerHTML = clicks;
  document.getElementById("pro_detail_info_top_price").innerHTML = '$' + clicks * 7 + '.00';
};

$(function () {
  $(".product-detail-desc-review-nav-rev").click(function () {
    $(".product-detail-desc-review-nav-desc").removeClass("show");
  });
  $(".product-detail-desc-review-nav-desc").click(function () {
    $("product-detail-desc-review-nav-rev").removeClass("show");
  });
  $(".product-list-right-prod-list-display-list").show();
  $(".product-list-right-prod-list-display-menu").hide();
  $(".product-list-right-prod-top-display-btn").click(function () {
    $(this).addClass("on-target");
    $(this).siblings().removeClass("on-target");
    $(".product-list-right-prod-list-display-list").toggle("fade", "fast", "swing");
    $(".product-list-right-prod-list-display-menu").toggle("fade", "fast", "swing");
  });
});

function calcRate(r) {
  const f = ~~r, //Tương tự Math.floor(r)
    id = 'star' + f + (r % f ? 'half' : '')
  id && (document.getElementById(id).checked = !0)
}

$(function () {
  $("#slider-range").slider({
    range: true,
    min: 5,
    max: 100,
    values: [5, 50],
    slide: function (_event, ui) {
      $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
    }
  });
  $("#amount").val("$" + $("#slider-range").slider("values", 0) +
    " - $" + $("#slider-range").slider("values", 1));
});

// When the user clicks anywhere outside of the modal, close it
var modal = document.getElementById("id01");
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function w3_open() {
  document.getElementById("mySidebar").style.display = "block";
}

function w3_close() {
  document.getElementById("mySidebar").style.display = "none";
}