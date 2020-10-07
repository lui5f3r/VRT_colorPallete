
var diferenciaTonal = 360 / 5;

// Retorna un entero aleatorio entre min (incluido) y max (excluido)
// ¡Usando Math.round() te dará una distribución no-uniforme!
// Tomado de https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Math/random
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}


function obtenerSiguienteTono(inicio, distancia){
    var siguienteTono = inicio + distancia;
    if(siguienteTono>360)
        siguienteTono -= 360;
    return siguienteTono;
}

function configurarColores(coloresPaleta){
    for(var i=0; i<coloresPaleta.length;i++){
        console.log("mostrando paleta: " + coloresPaleta[i])
        document.querySelector('#color'+ (i+1)).style.backgroundColor =  `rgb(${coloresPaleta[i][0]},${coloresPaleta[i][1]},${coloresPaleta[i][2]})`;
    }
  }


function randomPalette() {
    var coloresPaleta = [];    
    var puntoInicio = getRandomInt(0, 359);
    var distancia = 360/5;
    //valor por defecto para usar en la saturacion y brillo
    var sbPuntoInicio = Math.random();
    var rgb, hexa;
  var colors = [];

  for(var i=0; i<5;i++){
    rgb = hsvToRgb(puntoInicio/359,0.5,0.5);
    //se redondea dado que la funcion retorna numeros decimales
    rgb = [Math.floor(rgb[0]), Math.floor(rgb[1]), Math.floor(rgb[2])];
    coloresPaleta.push(rgb);
    puntoInicio = obtenerSiguienteTono(puntoInicio,distancia);
  }
  configurarColores(coloresPaleta);
  generateRules(coloresPaleta);

}

function generateRules(coloresPaleta) {
    const text = `
    .website-background{ color: rgb(${coloresPaleta[0][0]},${coloresPaleta[0][1]},${coloresPaleta[0][2]});}
    .element-text{ color: rgb(${coloresPaleta[1][0]},${coloresPaleta[1][1]},${coloresPaleta[1][2]});}
    
    .element-border{ border-color: rgb(${coloresPaleta[2][0]},${coloresPaleta[2][1]},${coloresPaleta[2][2]})}
    
    .element-background{ background-color: rgb(${coloresPaleta[3][0]},${coloresPaleta[3][1]},${coloresPaleta[3][2]});}
    
    .header{ color: rgb(${coloresPaleta[4][0]},${coloresPaleta[4][1]},${coloresPaleta[4][2]});}
    `;

document.querySelector('#css-rules').textContent = text;
}


function limpiarPaleta(){
    const coloresPaleta = [[255,255,255],[255,255,255],[255,255,255],[255,255,255],[255,255,255]];
    configurarColores(coloresPaleta);
    generateRules(coloresPaleta);
  }