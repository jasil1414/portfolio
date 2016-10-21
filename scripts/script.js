var controller= new ScrollMagic.Controller();

$('.project_image').each(function(){
    
    var tween = TweenMax.from($(this),0.9,{ opacity:0.1, scale:0.5,boxShadow:'0 0 0 0 grey', ease:Linear.easeIn});
    var scene = new ScrollMagic.Scene({
        triggerElement:this,
        triggerHook:1
    })
    .setTween(tween)
    .addTo(controller);
})