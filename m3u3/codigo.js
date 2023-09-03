


// ej 2

var num = [0,0,0,0,0]
for(let i=0;i<=4; i++){
    num[i] = prompt('ingrese el numero: ');
}
let may = 0;
for(let i=0;i<=4; i++){
    if( num[i]> may){
        may=num[i]
    }
}
document.write('el mayor numero es:' + may)