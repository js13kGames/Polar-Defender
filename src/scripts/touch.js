var direction = 0;

var exported = {
    x: 0,
    y: 0,
    h: 0,
    hStart: 0,
    max:0
};
module.exports = exported;

var db = document.body;

function isTouchTarget(e){
    return e.target.className != 'menu';
}

var touchStart;
db.ontouchstart = function(e){
    if(!isTouchTarget(e)){
        return;
    }
    exported.x = 0;
    touchStart = e.targetTouches[0].clientX;
    e.preventDefault();
};
db.ontouchmove = function(e){
    e.preventDefault();
    if(!isTouchTarget(e)){
        return;
    }
    exported.x = e.targetTouches[0].clientX - touchStart;
    var max = exported.max/2.5;
    exported.x = m.min(max,m.max(0-max,exported.x));
    exported.h = exported.x/(max/20);
    e.preventDefault();
};

db.ontouchend = function(e){
    if(!isTouchTarget(e)){
        return;
    }
    if(m.abs(exported.x) < 10 && m.abs(exported.y) < 10){
        exported.click();
    }
    exported.x = 0;
    exported.h = 0;
};


db.onmouseup = function(e){
    if(isTouchTarget(e)){
        exported.click && exported.click();
    }
};


var firing = false;
var fireKeys = [32,27];
db.onkeydown = function(e){
    if(e.which == 37 && exported.h != -1){
        exported.h = -1;
        exported.hStart = now();
    }
    if(e.which == 39 && exported.h != 1){
        exported.h = 1;
        exported.hStart = now();
    }
    if(fireKeys.indexOf(e.which) != -1 && !firing){
        exported.click && exported.click();
        firing = true;
    }
};

db.onkeyup = function(e){
    if(e.which == 37 && exported.h == -1){
        exported.h = 0;
        exported.hStart = 0;
    }
    if(e.which == 39 && exported.h == 1){
        exported.h = 0;
        exported.hStart = 0;
    }
    if(fireKeys.indexOf(e.which) != -1){
        firing = false;
    }
};