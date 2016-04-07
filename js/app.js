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

            var circle = new Circle((i+1)*4);

            circle.shape.x = Math.random()*400;
            circle.shape.y = Math.random()*400;

            circle.shape.scaleX = 2;
            circle.shape.scaleY = 2;

            app.stage.addChild(circle.shape);

            TweenLite.to(circle.shape, 1, {x:400, y:400, ease:Elastic.easeOut})

        }

    },
    update:function(evt){

        app.stage.update(evt);


    }

};

app.init();
app.draw();