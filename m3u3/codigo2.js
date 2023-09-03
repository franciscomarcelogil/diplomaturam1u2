const i = prompt('ingrese la cantidad de metros: ');

let cond = '';
if(i <= 1000){
    cond='pie';
}else if (i> 1000 &&  10000>= i){
    cond='bicicleta';
}else if (i> 10000 && 30000>=i){
    cond='colecivo';
}else if (i> 30000 && 100000>= i){
    cond='auto';
}else{
    cond='avion';
}
document.write('el medio de transporte adecuado es ' + cond)