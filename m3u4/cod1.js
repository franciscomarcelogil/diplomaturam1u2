
    var nombre = ['Juan Gomez','Pedro Rodriguez', 'Roxana García','Luciano Lopez','Fernanda Gimenez','Florencia Martinez','Raul Sanchez','Sandra Figueroa']
    var notas =[7,4,8,5,6,10,7,8]
    var aprobados =[0,0,0,0,0,0,0,0]
    var nombresap =['','','','','','','','']
    c=0

    for(let i=0; i<=7; i++){
        if(notas[i]>= 6){
           nombresap[c]=nombre[i];
           aprobados[c]=notas[i];
           c++
        }
    }
    for(let i=0; i<=c; i++){
        document.write(nombresap[i],"-",aprobados[i],"/")
    }

 