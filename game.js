$(document).ready(function() {

	//alert("Bienvenido al Juego");

	
    var canvas = $("#canvas")[0];
  //  var popup = $("#myPopup");
    
    imagenes=[
    	{
    		id:1,
    		url:"dromedario.png",
            linea:null,
            
    	}, 
    	{	
    		id:2,
    		url:"elefante.png",
            linea:null,
    	},
    	{
    		id:3,
    		url:"gorilla.png",
            linea:null,
    	},
    	{
    		id:4,
    		url:"guacamaya.png",
            linea:null,
    	},
    	{
    		id:5,
    		url:"halcon.png",
            linea:null,
    	},
    	{
    		id:6,
    		url:"leon.png",
            linea:null,
    	},
        {
            id:7,
            url:"lobo.png",
            linea:null,
            
        }, 
        {
            id:8,
            url:"mono.png",
            linea:null,
            
        }, 
    	{
    		id:9,
    		url:"panda.png",
            linea:null,
    	}    	
    	];

    lineas = [];    
    
    juego = new MatchGame (canvas, imagenes, lineas);
//    alerta = new resgisterEvents (popup);
    juego.init ();

});

	