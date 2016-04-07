/**
 * Created by zanmarolt on 4/7/16.
 */

function Circle(radius){

    this.shape = new createjs.Shape();
    //Width of the stroke
    this.shape.graphics.setStrokeStyle(15);
    this.shape.graphics.beginStroke('#113355');
    this.shape.graphics.drawCircle(0, 0, radius);

    this.shape.compositeOperation = 'lighter';

}

Circle.prototype.animateTo = function(vars, duration){

    TweenLite.to(this.shape, duration, vars);

};