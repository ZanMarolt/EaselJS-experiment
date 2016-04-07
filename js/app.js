var app = {

    canvas:null,
    stage:null,
    circles:[],
    CIRCLE_NUM:25,

    init:function(){

        app.canvas = document.getElementById('my-canvas');
        app.stage = new createjs.Stage(app.canvas);
        app.stage.enableDOMEvents();
        app.stage.enableMouseOver(10);
        createjs.Touch.enable(app.stage);

        createjs.Ticker.addEventListener('tick', app.update);

    },
    draw:function(){

        for(var i=0;i<app.CIRCLE_NUM;i++) {

            var shape = new createjs.Shape();
            //Width of the stroke
            shape.graphics.setStrokeStyle(15);
            shape.graphics.beginStroke('#113355');
            shape.graphics.drawCircle(0, 0, (i+1)*4);

            shape.x = Math.random()*400;
            shape.y = Math.random()*400;

            app.stage.addChild(shape);

        }

    },
    update:function(evt){

        app.stage.update(evt);


    }

};

app.init();
app.draw();