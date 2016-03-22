/**
 * Created by Daniel on 3/21/2016.
 */
(function(){
    $(window).scroll(function(){
        var st = $(this).scrollTop();
        if(st>0){
            $('.nav').switchClass('clear','not-clear',500,'easing');
        }
    });
})();