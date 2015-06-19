
function MatchGame (canvas, images, lineas) {//se declaran las variables
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.cWidth;
    this.cHeight;
    this.escenario;    
    this.rectW;
    this.rectH; 
    this.objetos = [];
    this.lines = [];
    this.jugador;
    this.espacio;
    this.lineas = lineas;
    this.images = images;
    var self = this;
    this.score = 0;
    this.time = 0;
    this.min = 0;
    this.hours = 0;
    this.espacioMedio;
    self.linea;    
    this.id1;
    this.id2;

    
    this.registerEvents = function (){//aqui van los eventos que se van a utilizar
        this.canvas.onmousedown = function(event) {
            console.log ("OnMouseDown");
        if(self.objetos[0].click(event)||self.objetos[1].click(event)||self.objetos[2].click(event)||self.objetos[3].click(event)||self.objetos[4].click(event)||self.objetos[5].click(event)){    


            if (self.linea == null){
                for ( i = 0; i<self.objetos.length; i++){
                    if (self.objetos[i].clickInside (event.clientX, event.clientY)){
                        if(self.objetos[i].linea == null){                            
                            self.objetos[i].linea = 1 ; 
                            self.linea = new GameObject(null, event.clientX, event.clientY, event.clientX, event.clientY);
                            self.id1 = self.objetos[i].id;
                            self.obj1 = self.objetos[i];
                            console.log ("obj1:"+self.objetos[i].id);
                        }
                    }
                }     
            }else{                    
                for ( i = 0; i<self.objetos.length; i++){
                    console.log(i);
                    if (self.objetos[i].clickInside (event.clientX, event.clientY)){
                        if(self.objetos[i].linea == null){
                            self.objetos[i].linea = 1;
                            self.obj2 = self.objetos[i];
                            console.log ("obj2:"+self.objetos[i].id);
                            self.lines.push (self.linea);
                            self.id2 = self.objetos[i].id;
                            if(self.id1 == self.id2){
                                self.score += 10;
                                $("#myPopup").enhanceWithin().popup({
                                    afterclose: function () {
                                    //$(this).remove();
                                    }
                                }).popup("open");
                            }else {        

                                self.score -= 3;
                                $("#myPopup1").enhanceWithin().popup({
                                    afterclose: function () {
                                    //$(this).remove();
                                        
                                    }
                                }).popup("open");      
                                
                                //self.initObjects();  
                                self.lines.splice(self.lines.length-1);                    
                                self.drawLines();
                                console.log ("Eliminando lineas de:");
                                console.log ("obj1:"+self.obj1.id);
                                console.log ("obj2:"+self.obj2.id);
                                self.obj2.linea = null;
                                self.obj1.linea = null;
                                break;
                             }
                        } else{
                        self.obj1.linea = null;
                        }
                    }
                } 
                self.linea = null;
            }
        }

    };

    this.canvas.onmousemove = function(event) {
            if (self.linea != null){
                self.linea.setW (event.clientX);
                self.linea.setH (event.clientY);  
            }
        };

        this.canvas.onmouseup = function(event) {    
            //self.jugador.unclick (event);
            
        };   
    }
    
    this.resize = function() {// funcion para hacer responsivo el canvas 
        this.escenario = document.getElementById("canvas");        
        this.escenario.width = window.innerWidth * 0.8;
        this.escenario.height = window.innerHeight * 0.9;
        this.cWidth = this.escenario.width;
        this.cHeight = this.escenario.height;
        this.rectW = this.cWidth * 0.075;//estas dos variables son para el ancho y alto de las imagenes
        this.rectH = this.cWidth * 0.075;
        this.espacio = this.cWidth * 0.07;
        this.espacioTop = this.cWidth * 0.0325;
        this.alto   = this.cHeight * 0.0325;
        this.espacioMedio = this.rectW * 5;
    };

    this.initObjects = function(){
        
        x = this.espacioTop;
        y = this.espacioTop;
        
        this.objetos[0] = new GameObject(this.images[0], this.espacio, x, this.rectW, this.rectH);
        x += this.rectW+this.alto;
        
        this.objetos[1] = new GameObject(this.images[1], this.espacio, x, this.rectW, this.rectH);
        x += this.rectW+this.alto;
        
        this.objetos[2] = new GameObject(this.images[2], this.espacio, x, this.rectW, this.rectH);
        x -= this.rectW+this.alto;


        this.espacio += this.rectW + this.alto;
        this.objetos[3] = new GameObject(this.images[2], this.espacio, y, this.rectW, this.rectH);
        y += this.rectW+this.alto;
        
        this.objetos[4] = new GameObject(this.images[1], this.espacio, y, this.rectW, this.rectH);
        y += this.rectW+this.alto;
        
        this.objetos[5] = new GameObject(this.images[0], this.espacio, y, this.rectW, this.rectH);
        y -= this.rectW+this.alto;


        this.espacio += this.rectW + this.alto;
         y -= this.rectW+this.alto;
        this.objetos[6] = new GameObject(this.images[3], this.espacio, y, this.rectW, this.rectH);
        y += this.rectW+this.alto;
        
        this.objetos[7] = new GameObject(this.images[4], this.espacio, y, this.rectW, this.rectH);
        y += this.rectW+this.alto;
        
        this.objetos[8] = new GameObject(this.images[5], this.espacio, y, this.rectW, this.rectH);
        y -= this.rectW+this.alto;


        this.espacio += this.rectW + this.alto;
         y -= this.rectW+this.alto;
        this.objetos[9] = new GameObject(this.images[5], this.espacio, y, this.rectW, this.rectH);
        y += this.rectW+this.alto;
        
        this.objetos[10] = new GameObject(this.images[4], this.espacio, y, this.rectW, this.rectH);
        y += this.rectW+this.alto;
        
        this.objetos[11] = new GameObject(this.images[3], this.espacio, y, this.rectW, this.rectH);
        y -= this.rectW+this.alto;


        this.espacio += this.rectW + this.alto;
         y -= this.rectW+this.alto;
        this.objetos[12] = new GameObject(this.images[6], this.espacio, y, this.rectW, this.rectH);
        y += this.rectW+this.alto;
        
        this.objetos[13] = new GameObject(this.images[7], this.espacio, y, this.rectW, this.rectH);
        y += this.rectW+this.alto;
        
        this.objetos[14] = new GameObject(this.images[8], this.espacio, y, this.rectW, this.rectH);
        y -= this.rectW+this.alto;


        this.espacio += this.rectW + this.alto;
        y -= this.rectW+this.alto;
        this.objetos[15] = new GameObject(this.images[8], this.espacio, y, this.rectW, this.rectH);
        y += this.rectW+this.alto;
        
        this.objetos[16] = new GameObject(this.images[7], this.espacio, y, this.rectW, this.rectH);
        y += this.rectW+this.alto;
        
        this.objetos[17] = new GameObject(this.images[6], this.espacio, y, this.rectW, this.rectH);
        y -= this.rectW+this.alto;


        
        
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
        //this.ctx.save();
        this.ctx.clearRect(0, 0, this.cWidth, this.cHeight);
        this.ctx.fillStyle = "white";
        this.ctx.fillRect(0, 0, this.cWidth, this.cHeight);
        this.ctx.strokeStyle = "#000000";
        this.ctx.lineWidth = 3;
        this.ctx.strokeRect(0, 0, this.cWidth, this.cHeight);
        //this.ctx.restore();

        

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
        self.ctx.fillText(text,this.espacio+200,this.rectH+200);
        self.ctx.fillText(time,this.espacio+200,this.rectH+240)
    };

    this.drawLine = function(){
        //console.log ('Dibujando linea');
        if (self.linea != null){
            self.linea.draw (self.ctx);
        }
    }

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
        self.drawLines();
        self.drawScore();
        self.drawLine();
    };

    
    this.drawLines = function(){

        for(i=0; i<this.lines.length; i++){
            this.lines[i].draw(self.ctx);
        }
    }

    this.drawImages = function() {
        for (var i = 0; i < this.objetos.length; i++) {
            this.objetos[i].draw (self.ctx);    
        }
        
        //this.jugador.draw(this.ctx);
    };
}



