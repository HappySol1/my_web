$(document).ready(function () {

    setTimeout(function(){
    $('.head-click').toggleClass('.move');
}, 50);

$(".head-click").on('click',function() {
    $('html, body').animate({
        scrollTop: $(".about").offset().top
    }, 1000); 
});

$('.nav').on('click',function() {
    $('.navmenu').toggleClass('active');
});

$("[data-filter]").on("click", function(event){
    event.preventDefault();
  //  $(this) .css('font-size','30px');
    $(this).parent(1).children().removeClass('main');
    $(this).addClass('main');
    let cat = $(this).data('filter');
    $("[data-cat]").each(function(){
        if(cat == 'all'){
            $(this).parent(1).removeClass('hide');
            console.log(this);
        }else{
            let workcat = $(this).data('cat');
            $(this).parent(1).removeClass('hide');
            if(workcat != cat){
                $(this).parent(1).addClass('hide');
            }
        }
    });
});
$('.loadbtn')
    .on('mouseenter', function(evt) { 
        //console.log(evt.screenY);
        //console.log(evt.screenX);
        //console.log($(this).parent(1).offsetY);
        $('.btnfill').css({'top':evt.offsetY,'left':evt.offsetX});
        //$('.btnfill').css({'top':evt.offsetY,'left':evt.offsetX});
        $('.btnfill').animate({width:550,height:550},400);
    })
    .on('mousemove',function(evt){
        $('.btnfill').css({'top':evt.offsetY,'left':evt.offsetX});
    })
     .on('mouseout', function(evt) {
        $('.btnfill').animate({width:0,height:0},500);
        //delay(500);
        
    });
});