
function MatchGame (canvas, images) {//se declaran las variables
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.cWidth;
    this.cHeight;
    this.escenario;    
    this.rectW;
    this.rectH; 
    this.objetos = [];
    this.jugador;
    this.espacio;
    this.images = images;
    var self = this;
    this.score = 0;
    this.time = 0;
    this.min = 0;
    this.hours = 0;
    
    this.registerEvents = function (){//aqui van los eventos que se van a utilizar
        this.canvas.onmousedown = function(event) {
            self.jugador.click (event);         
        };

        this.canvas.onmousemove = function(event) {
            self.jugador.move (event);
        };

        this.canvas.onmouseup = function(event) {    
            self.jugador.unclick (event);
            if (self.objetos[0].collide (self.jugador)){//se detectan las colisiones con el jugador
                //console.log("el id es: " + self.objetos[0].id);
                //console.log("el id del jugador es: " + self.jugador.id);
                if(self.objetos[0].id === self.jugador.id){
                    self.score += 10;
                    console.log(self.score);
                    //alert("Correcto!");
                    //alert($('#myPopup').attr('class'));
                     //$("[data-role=popup]").enhanceWithin().popup({
                         $("#myPopup").enhanceWithin().popup({
                            afterclose: function () {
                                //$(this).remove();
                            }
                        }).popup("open");

                }

            } else if (self.objetos[1].collide (self.jugador)){
                if(self.objetos[1].id != self.jugador.id){
                    self.score -= 3;
                    //alert("Vuelve a intentarlo!");
                    $("#myPopup1").enhanceWithin().popup({
                            afterclose: function () {
                                //$(this).remove();
                                self.initObjects();
                            }
                        }).popup("open");

                    
                }                
            } else if (self.objetos[2].collide (self.jugador)){
                if(self.objetos[2].id != self.jugador.id){
                    self.score -= 3;
                    //alert("Vuelve a intentarlo!");
                    $("#myPopup1").enhanceWithin().popup({
                            afterclose: function () {
                                //$(this).remove();
                                self.initObjects();
                            }
                        }).popup("open");

                    
                }
            }
        };   
    }
    
    this.resize = function() {// funcion para hacer responsivo el canvas 
        this.escenario = document.getElementById("canvas");        
        this.escenario.width = window.innerWidth * 0.8;
        this.escenario.height = window.innerHeight * 0.8;
        this.cWidth = this.escenario.width;
        this.cHeight = this.escenario.height;
        this.rectW = this.cWidth * 0.25;//estas dos variables son para el ancho y alto de las imagenes
        this.rectH = this.cWidth * 0.25;
        this.espacio = this.cWidth * 0.0625;
        this.alto   = this.cHeight * 0.0625;
    };

    this.initObjects = function(){
        x = this.espacio;
        y = this.alto;
        
        this.objetos[0] = new GameObject(this.images[0], x, 10, this.rectW, this.rectH);
        //this.objetos[0] = new GameObject(this.images[0], x + 70, 10 + 50, this.rectW, this.rectH);
        //x += this.cWidth + this.espacio;
        x += this.rectW+this.espacio;
        
        this.objetos[1] = new GameObject(this.images[1], x, 10, this.rectW, this.rectH);
        //x += this.cWidth + this.espacio;
        x += this.rectW+this.espacio;
        
        this.objetos[2] = new GameObject(this.images[2], x, 10, this.rectW, this.rectH);
        //x -= this.cWidth + this.espacio;
        x -= this.rectW+this.espacio;
        
        this.jugador = new GameObject (this.images[0], x, this.rectH+20, this.rectW, this.rectH);
    };

    this.init = function() {        //esta es la primera funcion que se manda llamar
        self.resize ();
        self.initObjects ();
        self.registerEvents ();
        self.timer();

        if (typeof game_loop != "undefined") {
            clearInterval();
        }
        game_loop = setInterval(this.main, 30);
    };

    this.setBackground = function() {

        this.ctx.save();
        this.ctx.fillStyle = "white";
        this.ctx.fillRect(0, 0, this.cWidth, this.cHeight);
        this.ctx.strokeStyle = "#000000";
        this.ctx.lineWidth = 3;
        this.ctx.strokeRect(0, 0, this.cWidth, this.cHeight);
        this.ctx.restore();

    };

    this.drawScore = function(){

        var text = "Puntos: " + self.score;
        var time = "Tiempo: " + self.hours + " : " + self.min + " : " + self.time;
        //var time = "Tiempo: " + self.hours " : " + self.min + " : " + self.time;
        //this.ctx.font = "20px Arial";
        //this.ctx.fillStyle = "black";
        //this.ctx.fillText(text,10,100);

        self.ctx.font = "20px Arial";
        self.ctx.fillStyle = "black";
        self.ctx.fillText(text,this.espacio,this.rectH+200);
        self.ctx.fillText(time,this.espacio,this.rectH+240)
    };

    this.timer = function(){


        setInterval(function(){
                    self.time++;

                    if(self.time === 60){
                        self.time = 0;
                        self.min++;
                    }else if(this.min === 60){
                        self.min = 0;
                        self.hours++;
                    }
                },
                1000);
    }

    this.main = function() {
        //self.time ++;
        self.setBackground();
        self.drawImages();
        self.drawScore();
    };

    

    this.drawImages = function() {
        for (var i = 0; i < this.objetos.length; i++) {
            this.objetos[i].draw (this.ctx);    
        }
        this.jugador.draw(this.ctx);
    };
}



