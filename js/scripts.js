$(document).ready(function(){
  $("#ball").click(function(){
    $("#celeby").fadeToggle();
    $("#ball").fadeOut();
  });
  $("#megaball").click(function(){
    $("#mewtwo").fadeIn();
    $("#megaball").fadeOut();
  });
  $("#rocket").click(function(){
    $("body").removeClass();
    $("body").addClass("space");
    $("#rocket").fadeOut();
  });
  $("#mewtwo").click(function(){
    $("#mewtwo").slideUp();
    $("#zapdos").fadeIn();
    $("#moltres").fadeIn();
    $("#articuno").fadeIn();
  });

});
