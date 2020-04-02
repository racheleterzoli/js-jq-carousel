// creare uno slider
$(document).ready(function(){


// gestione evento sul prev
 $('.prev').click(
   //funzione di CB
     prevImg
 );


 $( ".nav i" ).click(function() {
   var imgActive = $( '.images img.active')
   var ballActive = $(' .nav i.active');
   // `this` is the DOM element that was clicked

   //$('.fa-circle').addClass('active');
   //$('.img').addClass('active');

   // data una lista di elementi jquery ottenere l'indice dell'elemnto che gli stiamo passando
   //$(listaPalline).index(pallina)
   var indicePallinaCliccata = $(".nav i").index(this);

   console.log(indicePallinaCliccata);

   imgActive.removeClass("active");
   ballActive.removeClass("active");

   // data una lista di elementi ottenere un elemento dato l'indice che gli passiamo
   // $(listaImmagini).eq(indicePallina)

   var immagineDaMostrare = $(".images img").eq(indicePallinaCliccata);

   $(immagineDaMostrare).addClass("active");
   $(this).addClass("active");

 });
 // funzione specifica per ogni tondo
 //
 // $(".uno").click(
 //   prova
 // );
 //
 // function prova(){
 //   var imgActive = $( '.images img.active');
 //   var ballActive = $(' .nav i.active');
 //
 //   $('.seconda').removeClass('active');
 //   $('.due').removeClass('active');
 //   $('.terza').removeClass('active');
 //   $('.tre').removeClass('active');
 //   $('.quarta').removeClass('active');
 //   $('.quattro').removeClass('active');
 //   $('.prima').addClass('active');
 //   $('.uno').addClass('active');
 //
 // }
 // $(".due").click(
 //   provadue
 //
 // );
 // function provadue(){
 //   var imgActive = $('.images img.active');
 //   var ballActive = $(' .nav i.active');
 //   $('.prima').removeClass('active');
 //   $('.uno').removeClass('active');
 //   $('.terza').removeClass('active');
 //   $('.tre').removeClass('active');
 //   $('.quarta').removeClass('active');
 //   $('.quattro').removeClass('active');
 //   $('.seconda').addClass('active');
 //   $('.due').addClass('active');
 // }



 // $(".tre").click(
 //   provatre
 // );
 // function provatre(){
 //   var imgActive = $( '.images img.active');
 //   var ballActive = $(' .nav i.active');
 //   $('.prima').removeClass('active');
 //    $('.uno').removeClass('active');
 //    $('.seconda').removeClass('active');
 //     $('.due').removeClass('active');
 //     $('.quarta').removeClass('active');
 //      $('.quattro').removeClass('active');
 //   $('.terza').addClass('active');
 //    $('.tre').addClass('active');
 // }
 //
 // $(".quattro").click(
 //   provaquattro
 // );
 // function provaquattro(){
 //   var imgActive = $( '.images img.active');
 //   var ballActive = $(' .nav i.active');
 //   $('.prima').removeClass('active');
 //    $('.uno').removeClass('active');
 //    $('.seconda').removeClass('active');
 //     $('.due').removeClass('active');
 //     $('.terza').removeClass('active');
 //      $('.tre').removeClass('active');
 //   $('.quarta').addClass('active');
 //    $('.quattro').addClass('active');
 // }
 //





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
