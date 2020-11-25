$(document).ready(
  function(){
    var dropdown = $(".dropdown");
    var relative = $(".relative");

  relative.mouseenter(
    function() {
      var index = $(this).index()-1;
      $(dropdown[index]).show();
    }
  );

  relative.mouseleave(
    function() {
      var index = $(this).index()-1;
      $(dropdown[index]).hide();
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
