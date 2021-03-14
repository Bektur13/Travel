const scene = document.getElementById('scene');
const parallax = new Parallax(scene);
const scene2 = document.getElementById('scene2');
const parallax2 = new Parallax(scene2);
const scene3 = document.getElementById('scene3');
const parallax3 = new Parallax(scene3);


TweenMax.staggerFrom(".header__menu",1,{
    opacity: 0,
    y:-80,
    ease:Expo.easeInOut
},0.1)
TweenMax.from(".box__header",1.5,{
    opacity: 0,
    y:-40,
    ease:Expo.easeInOut
})
TweenMax.from(".main",2,{
    opacity: 0,
    y:-1000,
    ease:Expo.easeInOut
})