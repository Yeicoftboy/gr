
let soda=5;
let choco;
function sec01(){
            var USU=prompt("Crea un Usuario");
        var usuario = USU;
        
        document.getElementById('output').innerHTML = "✅"+ usuario +" | NFT GANG🐋";
        
        var x=prompt("Introduce la contraseña(Contraseña Cambiada 5/16/2022)");
        if (x=="thefamily100"){
            alert("Bienvenido " + USU + "😈")

        }
        else{
            alert("Contraseña incorrecta...🤬🤬");
            var win = window.open("about:blank", "_self");
            window.close();
        }
        console.log('secON');
}
function videofon() {

    document.getElementById('vid').play();
    console.log('vfOn')
}
function mutein(){
document.getElementById("mut3");
console.warn("code#001");
 muin3();
}
function muin3(){
	var vid = document.getElementById("video_background");
    if(soda>=7){
		soda=5;
		console.error("code#004");
	}
     if (choco==true) {
		 soda=5;
	 }if (choco==false) {
		 soda=6;
	 }
	if(soda>=6){
		document.getElementById("mut3").src="./fondo/muteig.gif";
		vid.volume = 1;
		soda=5;
		choco=true;
		console.warn("code#002");
	}else{
		document.getElementById("mut3").src="./fondo/inmuteig.gif";
		vid.volume= 0;
		soda=6;
	     choco=false;
		 console.warn("code#003");
}
	
	
    
}

var imagenes=document.getElementsByTagName("img");
for(var i=0;i<imagenes.length;i++)
{
 
	// Creamos el evento mouseover para cada imagen
	imagenes[i].addEventListener("mouseover", function(e){
		document.getElementById("mostrar").style.backgroundImage="url('"+e.target.currentSrc+"')";
		console.warn("hola");
	});
 
	// Creamos el evento mouseout para cada imagen
	imagenes[i].addEventListener("mouseout", function(e){
		document.getElementById("mostrar").style.backgroundImage="";
	});
}

//notificaciones
var btnNotificacion = document.getElementById("buttonN"),  
    btnPermiso = document.getElementById("buttonP")
    titulo = "Fili Santillán",
    opciones = {
        icon: "img/logo.png",
        body: "Notificación de prueba"
    };

function permiso() {  
        Notification.requestPermission();
};

function mostrarNotificacion() {  
    if(Notification) {
        if (Notification.permission == "granted") {
            var n = new Notification(titulo, opciones);
        }

        else if(Notification.permission == "default") {
            alert("Primero da los permisos de notificación");
        }

        else {
            alert("Bloqueaste los permisos de notificación");
        }
    }
};

btnPermiso.addEventListener("click", permiso);  
btnNotificacion.addEventListener("click", mostrarNotificacion);


