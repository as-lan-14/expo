$("nav a").click(function () {
  var tabID = $(this).attr("data-tab");

  $(this).addClass("active").siblings().removeClass("active");

  $("#tab-" + tabID)
    .addClass("active")
    .siblings()
    .removeClass("active");
});

$(" .skill-nav a").click(function () {
    var tabID = $(this).attr("data-tab");
  
    $(this).addClass("active").siblings().removeClass("active");
  
    $("#tab-" + tabID)
      .addClass("active")
      .siblings()
      .removeClass("active");
  });

 