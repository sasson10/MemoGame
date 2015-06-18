$(document).ready(function() {

	//alert("Bienvenido al Juego");

	console.log ((3>5) || (6<10));

    var canvas = $("#canvas")[0];
  //  var popup = $("#myPopup");
    
    imagenes=[
    	{
    		id:1,
    		url:"VACA.png"
    	}, 
    	{	
    		id:2,
    		url:"GALLINA.png"
    	},
    	{
    		id:3,
    		url:"BORREGO.png"
    	},
    	{
    		id:4,
    		url:"BORREGO.png"
    	},
    	{
    		id:5,
    		url:"BORREGO.png"
    	},
    	{
    		id:6,
    		url:"BORREGO.png"
    	},
    	{
    		id:7,
    		url:"BORREGO.png"
    	}    	
    	];
    
    juego = new MatchGame (canvas, imagenes);
//    alerta = new resgisterEvents (popup);
    juego.init ();

});

	