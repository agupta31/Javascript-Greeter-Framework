
$(document).ready(function(){

	    $("#lang").selectmenu();
});

  (function(){
	var grt=$G('akash','gupta');
	grt.HTMLGreeting(".caption h1");
})();
  


$(".greetButtn").on("click",function(){

    var firstname=$("#firstname").val();
     var lastname=$("#lastname").val();

      grt=$G(firstname,lastname);
      
       grt.setLanguage( 
           $("#lang").val()
       	).HTMLGreeting(".caption h1");
      

});



