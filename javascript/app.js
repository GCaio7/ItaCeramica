$(document).ready(function(){

  $(".btn-contact").click(function(){
    $(".contact").toggle();
    $(".btn-contact").hide();
  });

  $("#close-btn").click(function(){
    $(".contact").toggle();
    $(".btn-contact").show();
  })
});