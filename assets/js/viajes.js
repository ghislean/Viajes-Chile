//cambiar color navbar segun posicion scroll
$(window).scroll(function(){
    let pos = $(window).scrollTop() //obtengo posicion scroll
    if(pos < 100){ // comparo si es menor a 100px
       $('nav').addClass('bg-dark') //añado clase bg-dark
       $('nav').removeClass('bg-transparent') //quito clase bg-transparent
    }else{ //si es mayor o igual a 100px la posicion de scroll
       $('nav').removeClass('bg-dark') // quito la clase bg-dark
       $('nav').addClass('bg-transparent') //añado la clase bg-transparent
    }
})
$(function () {
   $('[data-toggle="tooltip"]').tooltip()
 })

$(".nav-link").click(function(e){
   let objetivo= $(this).attr('href')
   e.preventdefault()
   $("html.body").animate({
      scrollTop: $(objetivo).offset().top
   },300)
})


