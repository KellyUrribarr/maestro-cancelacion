/*$(document).ready(function (){
  $('#inputGroupSuccess3').keyup(function(){
   inputGroupSuccess3.value = (inputGroupSuccess3.value + '');
 });
});



$("#ingresarBuscar").click(function(){
  var codigos = $("#inputGroupSuccess3").val();
  localStorage.setItem("valor_telefonico", codigos);

  if (codigos == null || codigos.length==0) {
    alert("Ingrese código")
    return false;
  }

  else{
    var ingrese_numero = $("#inputGroupSuccess3").val();
    if($("#inputGroupSuccess3").attr("maxlength") == ingrese_numero.length){
     
     
   } else{
    alert ("Ingresa al menos 4 caracter")
    return false;
  }
}

});
*/


function main() {

(function () {
   'use strict';

   /*====================================
    Page a Link Smooth Scrolling 
    ======================================*/
    $('a.page-scroll').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top
            }, 900);
            return false;
          }
        }
      });

    /*====================================
    Menu Active Calling Scroll Spy
    ======================================*/
    $('body').scrollspy({ 
      target: '.navmenu',
      offset: 80,
    });


    /* ==============================================
	Testimonial Slider
	=============================================== */ 

	$(document).ready(function() {
	 
	  $("#testimonial").owlCarousel({
	 
	      navigation : false, // Show next and prev buttons
	      slideSpeed : 300,
	      paginationSpeed : 400,
	      singleItem:true,
	      autoHeight : true
	 
	      // "singleItem:true" is a shortcut for:
	      // items : 1, 
	      // itemsDesktop : false,
	      // itemsDesktopSmall : false,
	      // itemsTablet: false,
	      // itemsMobile : false
	 
	  });
	 
	});
 

 


}());


}
main();

$(document).ready(function(){ 
 
    $('#alternar-panel-oculto').toggle( 
 
        
 
    );
 
});