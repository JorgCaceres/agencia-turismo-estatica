
/*

//almacenando slider en una variable
var slider = $('#slider');
//almacenando botones
var siguiente = $('#btn-next');
var anterior = $('#btn-prev');

//Mover ultima imagen al comienzo
$('#slider section:last').insertBefore('#slider section:first');
//Mostrar la primera imagen con un margen de -100%
slider.css('margin-left','-'+100+'%')

function moverD(){
    slider.animate({
        marginLeft:'-'+200+'%'
    } ,700, function(){
        $('#slider section:first').insertAfter('#slider section:last');
        slider.css('margin-left','-'+100+'%');
    });
}

function moverI(){
    slider.animate({
        marginLeft:0
    } ,700, function(){
        $('#slider section:last').insertBefore('#slider section:first');
        slider.css('margin-left','-'+100+'%');
    });
}

siguiente.on('click', function() {
    moverD();
});

anterior.on('click', function() {
    moverI();
});

function autoplay(){
    interval = setInterval(function(){
        moverD();
    }, 5000);
}

autoplay();
*/

if(document.querySelector('#container-slider')){
    setInterval('fntExecuteSlide("next")',7000);
 }
 //------------------------------ LIST SLIDER -------------------------
 if(document.querySelector('.listslider')){
    let link = document.querySelectorAll(".listslider li a");
    link.forEach(function(link) {
       link.addEventListener('click', function(e){
          e.preventDefault();
          let item = this.getAttribute('itlist');
          let arrItem = item.split("_");
          fntExecuteSlide(arrItem[1]);
          return false;
       });
     });
 }
 
 function fntExecuteSlide(side){
     let parentTarget = document.getElementById('slider');
     let elements = parentTarget.getElementsByTagName('li');
     let curElement, nextElement;
 
     for(var i=0; i<elements.length;i++){
 
         if(elements[i].style.opacity==1){
             curElement = i;
             break;
         }
     }
     if(side == 'prev' || side == 'next'){
 
         if(side=="prev"){
             nextElement = (curElement == 0)?elements.length -1:curElement -1;
         }else{
             nextElement = (curElement == elements.length -1)?0:curElement +1;
         }
     }else{
         nextElement = side;
         side = (curElement > nextElement)?'prev':'next';
 
     }
     //RESALTA LOS PUNTOS
     let elementSel = document.getElementsByClassName("listslider")[0].getElementsByTagName("a");
     elementSel[curElement].classList.remove("item-select-slid");
     elementSel[nextElement].classList.add("item-select-slid");
     elements[curElement].style.opacity=0;
     elements[curElement].style.zIndex =0;
     elements[nextElement].style.opacity=1;
     elements[nextElement].style.zIndex =1;
 }