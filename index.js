import nameAnimation from 'nameAnimation'

var container = document.getElementById('bm');
// Set up our animation 

var animData = {
    container: container,
    renderer: 'svg',
    autoplay: true,
    loop: false,
    path : 'name.json'
};
var anim = nameAnimation.loadAnimation(animData);