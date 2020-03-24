var imgInicio, imgOvni, imgOvniMuerto, imgNube, imgRoca, ImgSuelo;
 function cargaImagenes(){
    imgInicio = new Image();
    imgOvni = new Image();
    imgNube = new Image();
    imgRoca = new Image();
    ImgSuelo = new Image();
    imgOvniMuerto = new Image();

    imgInicio.src = 'img/Ovni.png';
    imgOvni.src = 'img/Ovni.png';
    imgNube.src = 'img/roca.png';
    imgRoca.src = 'img/roca.png';
    ImgSuelo.src = 'img/suelo.png';
    imgOvniMuerto.src = 'img/ovnim.png';
 }

var ancho = 1000;
var alto = 600;
var canvas, ctx;
function inicializa(){
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');
    cargaImagenes();
}



var techo = 10;
var suelo = 465;
var tovni = {x:100, y: suelo, vy:0, gravedad:2, salto:24, vymax:9, saltando: false};
var nivel = {velocidad: 9, puntuacion: 0, muerto: false};
var roca={x:ancho+100 ,y:suelo}
var roca3={x:ancho+100 ,y:suelo-200, velocidad:12}
var roca4={x:ancho+200 ,y:suelo-300, velocidad:9}
var roca5={x:ancho+100 ,y:suelo, velocidad:6}
var nube = {x: ancho+300, y: suelo-100, velocidad:6};
var fondog = {x: 0, y: suelo, velocidad:6};

document.addEventListener('keydown', function(evento){
    if(evento.keyCode == 32){
        console.log("salta");
        if(nivel.muerto==false){
            saltar();
        }else{
            nivel.velocidad=9;
            fondog.velocidad=6;
            nube.velocidad=6;
            nube.x=ancho+300;
            roca3.velocidad=12;
            roca3.x=ancho+100;
            roca4.velocidad=9;
            roca4.x=ancho+200;
            roca5.velocidad=6;
            roca5.x=ancho+100;
            roca.x=ancho+100;
            nivel.puntuacion=0;
            imgOvni=imgInicio;
            tovni.x=100;
            nivel.muerto=false;
        }
    }
    if(evento.keyCode == 38){
        console.log("salta");
        if(nivel.muerto==false){
            saltar();
        }
    }
    if(evento.keyCode == 37){
        console.log("izquierda");
        if(nivel.muerto==false){
            tovni.x -= 10;
        }
    }
    if(evento.keyCode == 39){
        console.log("derecha");
        if(nivel.muerto==false){
            tovni.x += 15;
        }
    }
 });



function dibujaOvni(){

    if(nivel.muerto==false){
        ctx.drawImage(imgOvni,0,0,840,502,tovni.x,tovni.y,100,80)
    }else{
        ctx.drawImage(imgOvniMuerto,0,0,840,502,tovni.x,tovni.y,100,80) }
        
        
}
//-------------------------  ROCA 1  ------------------------------
function dibujaRocas(){
    ctx.drawImage(imgRoca,0,0,900,900,roca.x,roca.y,60,60)
}

function logicaRoca(){
    if(roca.x < -100){
        roca.x = ancho + 100;
    }
    else{
        roca.x -= nivel.velocidad;
    }

}
//----------------------------------------------------------------
//---------------------------  ROCA 2 ----------------------------
function dibujaNube(){
    ctx.drawImage(imgRoca,0,0,900,900,nube.x,nube.y,60,60)
}

function logicaNube(){
    if(nube.x < -100){
        nube.x = ancho + 100;
    }
    else{
        nube.x -= nube.velocidad;
    }
}
//-----------------------------------------------------------------
//-------------------------  ROCA 3  ------------------------------
function dibujaRoca3(){
    ctx.drawImage(imgRoca,0,0,900,900,roca3.x,roca3.y,60,60)
}

function logicaRoca3(){
    if(roca3.x < -100){
        roca3.x = ancho + 100;
    }
    else{
        roca3.x -= roca3.velocidad;
    }

}
//----------------------------------------------------------------
//-------------------------  ROCA 4  ------------------------------
function dibujaRoca4(){
    ctx.drawImage(imgRoca,0,0,900,900,roca4.x,roca4.y,60,60)
}

function logicaRoca4(){
    if(roca4.x < -100){
        roca4.x = ancho + 100;
    }
    else{
        roca4.x -= roca4.velocidad;
    }

}
//----------------------------------------------------------------
//-------------------------  ROCA 5  ------------------------------
function dibujaRoca5(){
    ctx.drawImage(imgRoca,0,0,900,900,roca5.x,roca5.y,60,60)
}

function logicaRoca5(){
    if(roca5.x < -100){
        roca5.x = ancho + 100;
    }
    else{
        roca5.x -= roca5.velocidad;
    }

}
//----------------------------------------------------------------
//--------------------------  FONDO  ------------------------------
function dibujarFondo(){
    ctx.drawImage(ImgSuelo,fondog.x,0,2160,480,0,0,3600,600)

}
function logicaFondo(){
    if(fondog.x > 1500){
        fondog.x = 0;
    }else{
        fondog.x += fondog.velocidad;
    }
}

//-----------------------------------------------------------------
//--------------------------  MOVIMIENTO  -------------------------
function saltar(){
    tovni.saltando=true;
    tovni.vy = tovni.salto;
    console.log(tovni.vy)
}

function gravedad(){
    if(tovni.saltando == true){
        if(tovni.y - tovni.vy - tovni.gravedad > suelo){
            tovni.saltando = false;
            tovni.vy=0;
            tovni.y=suelo;
            //tovni.gravedad += 1
        }
        else if(tovni.y < techo){
            //tovni.saltando = false;
            tovni.vy=0;
            tovni.y=techo;

        }
        else{
            tovni.vy -= tovni.gravedad;
            tovni.y -= tovni.vy;
        }
    }
}

function colision(){
    if(roca.x>=tovni.x && roca.x <=(tovni.x+60)){
        if(tovni.y >= roca.y - 25){
            nivel.muerto=true;
            imgOvni=imgOvniMuerto;
            nivel.velocidad=0;
            fondog.velocidad=0;
            nube.velocidad=0;
            roca3.velocidad=0;
            roca4.velocidad=0;
            roca5.velocidad=0;

        }
    }

    if(nube.x>=tovni.x && nube.x <=(tovni.x+60)){
        if(tovni.y >= (nube.y-5) && tovni.y <= nube.y+65){
            nivel.muerto=true;
            imgOvni=imgOvniMuerto;
            nivel.velocidad=0;
            fondog.velocidad=0;
            nube.velocidad=0;
            roca3.velocidad=0;
            roca4.velocidad=0;
            roca5.velocidad=0;

        }
    }
    if(roca3.x>=tovni.x && roca3.x <=(tovni.x+60)){
        if(tovni.y >= (roca3.y-5) && tovni.y <= roca3.y+65){
            nivel.muerto=true;
            imgOvni=imgOvniMuerto;
            nivel.velocidad=0;
            fondog.velocidad=0;
            nube.velocidad=0;
            roca3.velocidad=0;
            roca4.velocidad=0;
            roca5.velocidad=0;

        }
    }

    if(roca4.x>=tovni.x && roca4.x <=(tovni.x+60)){
        if(tovni.y >= (roca4.y-5) && tovni.y <= roca4.y+65){
            nivel.muerto=true;
            imgOvni=imgOvniMuerto;
            nivel.velocidad=0;
            fondog.velocidad=0;
            nube.velocidad=0;
            roca3.velocidad=0;
            roca4.velocidad=0;
            roca5.velocidad=0;

        }
    }
    if(roca5.x>=tovni.x && roca5.x <=(tovni.x+60)){
        if(tovni.y >= (roca5.y-5) && tovni.y <= roca5.y+65){
            nivel.muerto=true;
            imgOvni=imgOvniMuerto;
            nivel.velocidad=0;
            fondog.velocidad=0;
            nube.velocidad=0;
            roca3.velocidad=0;
            roca4.velocidad=0;
            roca5.velocidad=0;

        }
    }
}

//--------------------------------------------------------------------


setInterval(function(){
    if(nivel.muerto==false){
        nivel.puntuacion++    
    }else{
        console.log("vacio")
    }

},1000);

function puntuacion(){
    ctx.font = "30px impact";
    ctx.fillStyle = 'black';
    ctx.fillText("PUNTAJE: "+nivel.puntuacion,20,50);

    if(nivel.muerto==true){
        ctx.font = "90px impact";
        ctx.fillText("BART AVIADOR",170,250);

        ctx.font = "20px impact";
        ctx.fillText("Presiona - espacio - para volver a jugar",280,320);

        ctx.font = "20px impact";
        ctx.fillText("su puntaje fue de: "+nivel.puntuacion,360,300);
    }
}

//-----------------------------  MAIN  ---------------------------------

 var FPS = 60
 setInterval(function(){
     principal();

 },1000/FPS);

 function borraCanvas(){
    canvas.width = ancho;
    canvas.height = alto;

}

 function principal(){
     borraCanvas();
     gravedad();
     colision();
     logicaFondo();
     logicaNube();
     logicaRoca();
     dibujarFondo();
     dibujaRocas();
     logicaRoca3();         
     dibujaRoca3(); 
     logicaRoca4();         
     dibujaRoca4();
     logicaRoca5();         
     dibujaRoca5();
     dibujaNube();
     dibujaOvni();
     puntuacion();
 }
//-----------------------------------------------------------------------
