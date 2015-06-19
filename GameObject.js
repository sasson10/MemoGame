function GameObject (object, x, y, width, height) {

    this.image = new Image ();
    if (object != null){
        this.image.src = object.url;
        this.id = object.id;
        this.linea = object.linea;
    }
    else{
        this.image = null;
    }
    //console.log ("creando objeto: "+ object+" ("+x+","+y+")"+"("+width+","+height+")");
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.left = x;
    this.top = y;
    this.right = x+width;
    this.bottom = y+height;
    var clickFlag = false;
    var xoffset;
    var yoffset;

    this.clickInside = function ( x,  y){
        /*console.log (x + ", "+ y);
        console.log ("-"+self.x + ", "+ self.y);
        console.log ("<"+this.x + ", "+ this.y);
        console.log (">"+this.width + ", "+ this.height);*/
        if ((x >= this.x) && (x <= this.x+this.width) && 
            (y >= this.y) && (y <= this.y+this.height)){
            return true;
        }
        return false;
    }

    this.setW = function (w){
        this.width = w;
        this.right = x+width;
    }

    this.setH = function (h){
        this.height = h;
        this.bottom = y+height;
    }

    this.draw = function(ctx) {
        if (this.image != null){
            ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
        }
        else{

            if(this.x != null){
                ctx.beginPath(); 
                ctx.moveTo(this.x,this.y);
                ctx.lineTo( this.width, this.height);
                ctx.stroke();
                ctx.closePath();
            }
        }
    };

    this.click = function(evento) {
        if (    evento.clientX > this.x &&
                evento.clientX < (this.x + this.width) &&
                evento.clientY > this.y &&
                evento.clientY < (this.y + this.height)
                ) {

            clickFlag = true;
            xoffset = evento.clientX - this.x;
            yoffset = evento.clientY - this.y;
            return true;
        }
    };

    this.move = function(evento) {
        if (clickFlag == true) {
            this.x = evento.clientX-xoffset;
            this.y = evento.clientY-yoffset;
            this.left = this.x;
            this.top = this.y;
            this.right = this.x + this.width;
            this.bottom = this.y + this.height;
        }
    };
    
    this.collide = function (gameObject){

       
        return (
                (   (gameObject.left   > this.left)&&
                    (gameObject.left   < this.right)&&
                    (gameObject.top    > this.top)&&
                    (gameObject.top   < this.bottom)) ||

                (   (gameObject.right  > this.left)&&
                    (gameObject.right  < this.right)&&
                    (gameObject.top    > this.top)&&
                    (gameObject.top < this.bottom)) ||

                (   (gameObject.right   > this.left)&&
                    (gameObject.right  < this.right)&&
                    (gameObject.bottom > this.top)&&
                    (gameObject.bottom < this.bottom)) ||

                (   (gameObject.left   > this.left)&&
                    (gameObject.left  < this.right)&&
                    (gameObject.bottom    > this.top)&&
                    (gameObject.bottom    < this.bottom)) 

            );
    };

    this.unclick = function (event){
        clickFlag = false;
        return clickFlag;
    }

    this.isClicked = function (){
        return clickFlag ;
    }
    
}

