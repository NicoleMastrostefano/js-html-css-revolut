$(document).ready(
  function(){

  $(".relative").click(
    function() {
       $(this).find(".dropdown").toggle();
     }
  );

  $(".relative").mouseenter(
    function(){
      $(this).find(".dropdown").show();
    }
  );


  $(".relative").mouseleave(
    function(){
      $(this).find(".dropdown").hide();
    }
  );

  }
);
// gestire remove/add active
