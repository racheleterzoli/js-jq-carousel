// creare uno slider
$(document).ready(function(){


// gestione evento sul prev
 $('.prev').click(
   //funzione di CB
     prevImg
 );

 $(".uno").click(
   prova
 );

 function prova(){
   var imgActive = $( '.images img.active');
   var ballActive = $(' .nav i.active');

   $('.seconda').removeClass('active');
   $('.due').removeClass('active');
   $('.terza').removeClass('active');
   $('.tre').removeClass('active');
   $('.quarta').removeClass('active');
   $('.quattro').removeClass('active');
   $('.prima').addClass('active');
   $('.uno').addClass('active');

 }
 $(".due").click(
   provadue

 );
 function provadue(){
   var imgActive = $('.images img.active');
   var ballActive = $(' .nav i.active');
   $('.prima').removeClass('active');
   $('.uno').removeClass('active');
   $('.terza').removeClass('active');
   $('.tre').removeClass('active');
   $('.quarta').removeClass('active');
   $('.quattro').removeClass('active');
   $('.seconda').addClass('active');
   $('.due').addClass('active');
 }

 $(".tre").click(
   provatre
 );
 function provatre(){
   var imgActive = $( '.images img.active');
   var ballActive = $(' .nav i.active');
   $('.prima').removeClass('active');
    $('.uno').removeClass('active');
    $('.seconda').removeClass('active');
     $('.due').removeClass('active');
     $('.quarta').removeClass('active');
      $('.quattro').removeClass('active');
   $('.terza').addClass('active');
    $('.tre').addClass('active');
 }

 $(".quattro").click(
   provaquattro
 );
 function provaquattro(){
   var imgActive = $( '.images img.active');
   var ballActive = $(' .nav i.active');
   $('.prima').removeClass('active');
    $('.uno').removeClass('active');
    $('.seconda').removeClass('active');
     $('.due').removeClass('active');
     $('.terza').removeClass('active');
      $('.tre').removeClass('active');
   $('.quarta').addClass('active');
    $('.quattro').addClass('active');
 }






// gestione evento sul next
 $('.next').click(
   //funzione di CB
     nextImg
 );

$(".")

 // funzione next
function nextImg() {
   // salvo ref a img attiva al momento del click
   var imgActive = $('.images img.active');
   // console.log(imgActive);
   // salvo il pallino attivo
   var ballActive = $('.nav i.active');
   // tolgo la classe active all'img selezionata
   imgActive.removeClass('active');
   // tolgo la classe active al pallino selezionato
   ballActive.removeClass('active');
   // verifico se questa img era l'ultima
   if(imgActive.hasClass('last')){
     $('.images img.first').addClass('active');
     $('.nav i.first').addClass('active');
   } else {
     // applica classe active alla prox img
     imgActive.next().addClass('active');
     ballActive.next().addClass('active');
     // console.log(imgActive.next());
 }
}

// funzione prevImg
function prevImg() {
  // salvo ref a img attiva al momento del click
  var imgActive = $('.images img.active');
  // tolgo la classe active all'img selezionata
   var ballActive = $('.nav i.active');
  imgActive.removeClass('active');
  ballActive.removeClass('active');
  // verifico se questa img era la prima
  if(imgActive.hasClass('first')){
    $('.images img.last').addClass('active');
         $('.nav i.last').addClass('active');
  } else {
    // applica classe active alla prox img
    imgActive.prev().addClass('active');
    // console.log(imgActive.next());
     ballActive.prev().addClass('active');
  }

}
});
