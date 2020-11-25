$(document).ready(
  function(){
    var dropdown = $(".dropdown");
    var relative = $(".relative");

  relative.mouseenter(
    function() {
      var index = $(this).index()-1;
      $(dropdown[index]).toggle();
    }
  );

  relative.click(
    function() {
      var index = $(this).index()-1;
       $(dropdown[index]).toggle();
     }
   );

  }
);
// gestire remove/add active
// bonus
// sistemare skin
