
var canvas = document.getElementById("ventana");
var context = canvas.getContext("2d");
canvas.style.cursor="none";
var run=false;
var salud=1000;
var nivel=0;
var fin;
var max1, max2, max3, max4, maxt;
var punt=[]
var objetos=[];
var armas, seleccion;
var puntaje=0;
var saldo=2000;
var fondo;
var mouse={
    x:0,
    y:0
};

$(document).ready(function(){
    
    var s=document.getElementById("saldo");
    s.innerHTML='Saldo: '+ saldo; 

    fondo=$("#fondo")[0];
});

$(document).keypress(seleccionArma);

$("#cambiar").click(limpiar);

$("#iniciar").click(function(){
    var data=document.getElementById("menu");
    
    iniciar(data.inp1.value, data.inp2.value, data.inp3.value, data.inp4.value);
    
    $("#principal").hide(0);
    $('canvas').css("display", "inline");
});

$("#reset").click(function(){
    limpiar();
    saldo=2000
    salud=1000
    nivel=0
    objetos=[];
    punt=[];
    puntaje=0;
    var s=document.getElementById("inicio").innerHTML='';
    $('canvas').hide(0);
    $("#principal").show(0);
    $("#reset").css("display", "none");
});

$("#ventana").click(function(){
    
    var posx, posy, der, izq;
    puntaje=0;
    if(seleccion){
        for(i=0;i<objetos.length;i++){
            posx=Math.trunc(objetos[i].x);
            der=posx+objetos[i].tamaño;
            posy=Math.trunc(objetos[i].y);
            izq=posy+objetos[i].tamaño;
            
            if((mouse.x < der) && (mouse.x>posx) && (mouse.y<izq) && (mouse.y>posy)){
                
                armas[seleccion-1].disparar();
                objetos[i].vida-=armas[seleccion-1].daño;
            
            }
            
            if(objetos[i].vida<=0){
                
                puntaje+=punt[i];
            }
        }
    }
    
    
    
    
    
});

function costo(){
    
    var saldo1=saldo;
    var p1, p2, p3, p4;
    p1=document.getElementById("arma1");
    p2=document.getElementById("arma2");
    p3=document.getElementById("arma3");
    p4=document.getElementById("arma4");
    var total=0;
    
    total+=p1.value*100;
    total+=p2.value*200;
    total+=p3.value*300;
    total+=p4.value*400;
    
    if(parseInt(p1.value,10)>=0 && parseInt(p2.value,10)>=0 && parseInt(p3.value,10)>=0 && parseInt(p4.value,10)>=0){
        if(total>saldo){
       
            if(parseInt(p1.value,10)>parseInt(max1,10)){
                
                p1.disabled=true;
                p1.value=max1
            }
            if(parseInt(p2.value,10)>parseInt(max2,10)){
                p2.disabled=true;
                p2.value=max2;
            }
            if(parseInt(p3.value,10)>parseInt(max3, 10)){
                p3.disabled=true;
                p3.value=max3;
            }
            if(parseInt(p4.value,10)>parseInt(max4,10)){
                p4.disabled=true;
                p4.value=max4;
            }
                
            saldo1=maxt;  
            
        }else{
            max1=p1.value;
            max2=p2.value;
            max3=p3.value;
            max4=p4.value;
            
            saldo1-=total;
            maxt=saldo1;
            p1.disabled=false;
            p1.value=max1;
            p2.disabled=false;
            p2.value=max2;
            p3.disabled=false;
            p3.value=max3;
            p4.disabled=false;
            p4.value=max4;
            
        }
    }else{
        limpiar();
    }

    var s=document.getElementById("saldo");
    s.innerHTML='Saldo: '+ saldo1;

}

function limpiar(){
    var p1, p2, p3, p4;
    
    p1=document.getElementById("arma1");
    p2=document.getElementById("arma2");
    p3=document.getElementById("arma3");
    p4=document.getElementById("arma4");
    p1.disabled=false;
    p1.value=0;
    p2.disabled=false;
    p2.value=0;
    p3.disabled=false;
    p3.value=0;
    p4.disabled=false;
    p4.value=0;
    var s=document.getElementById("saldo");
    s.innerHTML='Saldo: '+ saldo;
}
        
function posMouse(canvas, evt){
    var ClientRect = canvas.getBoundingClientRect();
    
    mouse.x= Math.round(evt.clientX - ClientRect.left);
    mouse.y= Math.round(evt.clientY - ClientRect.top);
    
}

function iniciar(arma1, arma2, arma3, arma4){
    
    if(canvas){
        
        fin=false;
        run=true;
        
        generar();
        armas=[new arma(arma1,100,0), new arma(arma2,250,1),new arma(arma3, 500,2), new arma(arma4,1000,3)]
        
        ejecutar();
        canvas.addEventListener("mousemove", function(evt){posMouse(canvas,evt);},false);
    }
    
}

function generar(){
    var vel, posx, posy, daño, num;
    num=Math.round(Math.random()*(3+nivel)+(1+nivel));
    
    for(i=0;i<num;i++){
        vel=Math.round(Math.random()*(4+nivel)+1+nivel)/1000;
        posx=Math.round(Math.random()*(300+(200*nivel))+900);
        posy=Math.round(Math.random()*(450)+100);
        daño=Math.round(Math.random()*(900+(nivel*1000))+100);
        
        if(daño<250){
            objetos.push(new roca(posx,posy, vel,daño,0,50));
        }else{
            if(daño<500){
                objetos.push(new roca(posx,posy, vel,daño,1,70));
            }else{
                if(daño<700){
                    objetos.push(new roca(posx,posy, vel,daño,2,90));
                }else{
                    if(daño<1000){
                        objetos.push(new roca(posx,posy, vel,daño,3,100));
                    }else{
                        objetos.push(new roca(posx,posy, vel,daño,4,110));
                    }
                }
            }
        }
        
        punt.push(daño);
    }    
    
       
}

function seleccionArma(event){
    
    if(event.which == 49){
        seleccion=1;
    }
    if(event.which == 50){
        seleccion=2;
    }
    if(event.which == 51){
        seleccion=3;
    }
    if(event.which == 52){
        seleccion=4;
    }
}

function pintarSelec(){

    if (seleccion != null){
        var top, bottom, left, right;
        top=45;
        bottom=105;
        left=180+(180*(seleccion-1));
        right=320+(180*(seleccion-1));
        
        context.moveTo(left,top);
        context.lineTo(right,top);
        context.moveTo(right,top);
        context.lineTo(right,bottom);
        context.moveTo(right,bottom);
        context.lineTo(left,bottom);
        context.moveTo(left,bottom);
        context.lineTo(left,top);
        context.moveTo(mouse.x, mouse.y);
    }else{
        context.font='italic small-caps bold 40px cursive';
        context.fillText("No has Seleccionado un arma",150,250);
    }
    
}

function puntero() {

    context.fillStyle = "rgba(255, 0, 0, 0)";
    context.arc(mouse.x, mouse.y,25,0,Math.PI*2,true);
    context.moveTo(mouse.x-5,mouse.y);
    context.lineTo(mouse.x-25, mouse.y);
    context.moveTo(mouse.x+5,mouse.y);
    context.lineTo(mouse.x+25, mouse.y);
    context.moveTo(mouse.x,mouse.y-5);
    context.lineTo(mouse.x, mouse.y-25);
    context.moveTo(mouse.x,mouse.y+5);
    context.lineTo(mouse.x, mouse.y+25);
    context.moveTo(mouse.x, mouse.y);
    
}

function ejecutar(){
    
    if(run){
        var verificar=0;
        canvas.width = canvas.width;
        
        context.drawImage(fondo, 0,0, canvas.width, canvas.height);
        for(i=0;i<objetos.length; i++){
            objetos[i].operar();
        }
        
        
        for(i=0;i<armas.length;i++){
            armas[i].dibujar(50*((i+1)*3.5),50);
        }
        pintarSelec();
        context.font='italic small-caps bold 20px cursive';
        context.fillText("Salud: "+salud, 10,50);
        context.fillText("Puntaje: "+puntaje, 10,20);
        puntero();
        
        context.fill();
        context.stroke();
        for(i=0;i<objetos.length;i++){
            if(objetos[i].vida<=0){
                
                verificar++;
            }
        }

        if(salud<=0){
            fin=true
            run=false;
        }
        
        if(objetos.length==verificar){
            if(salud<=0){
                fin=true
                run=false;
            }else{
                nivel+=1;
                
                fin=false;
                run=false;
            }
        }
        setTimeout(ejecutar,22);
    }else{
        if(fin){
            terminar();
        }else{
            canvas.width = canvas.width;
            context.drawImage(fondo, 0,0, canvas.width, canvas.height);
            context.font='italic small-caps bold 50px cursive';
            context.fillText("Nivel Superado", 220, 250);
            context.fillText("Proximo Nivel: "+nivel, 220, 300);
            context.fill();
            context.stroke();
            setTimeout(terminar, 2000);
        }
    }
    
}

function terminar(){
    
    if(fin){
        $("#reset").css("display", "inline");

        canvas.width = canvas.width;
        context.drawImage(fondo, 0,0, canvas.width, canvas.height);
        context.font='italic small-caps bold 50px cursive';
        context.fillText("Juego Terminado", 240, 300);
        context.fill();
        context.stroke();
        
    }else{
        
        saldo+=puntaje;
        limpiar(); 
        var s=document.getElementById("inicio");
        s.innerHTML='Salud: '+salud+'<br> Puntaje: '+ puntaje+' <br>'+'Nivel: '+nivel;
        $('canvas').hide(0);
        $("#principal").show(0);
        
    
         
    }

}

function roca(x,y, vel, vida, tipo, tamaño){

    this.img=$("#roca"+tipo)[0]
    
    this.pos=0
    this.x=x
    this.y=y
    this.vel=vel
    this.vida=vida
    this.tamaño=tamaño
    this.operar=function(){
        var img=this.img;
    
        if(this.vida>0){
            if(this.x>40){
                this.pos+=this.vel;
                this.x-=this.pos;
            }else{
                salud-=this.vida;
                this.vida=0;

            }
            context.font='15px sans-serif';
            context.fillText("Vida: "+this.vida,this.x,this.y-10);
            context.drawImage(img, this.x, this.y, this.tamaño,this.tamaño);
        
        }     
    }

}

function arma(municion, daño, tipo){
    this.img=$("#armas"+tipo)[0]
    this.tecla=$("#tecla"+tipo)[0]
    this.municion=municion;
    this.daño=daño;
    this.dibujar=function(x,y){
        context.font='15px sans-serif';
        context.fillText("Municion: "+this.municion,x+51,y+10);
        context.fillText("Daño: "+this.daño,x+51,y+30);
        context.drawImage(this.tecla, x, y-45, 50,50);
        context.drawImage(this.img, x, y, 50,50);
    
    }
    this.disparar=function(){
        if (this.municion != 0){
            this.municion-=1;
            
        }else{
            this.daño=0;
            this.municion=0;
        }
    }
}


 


