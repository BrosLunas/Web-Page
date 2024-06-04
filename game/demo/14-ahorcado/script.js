let arrayPalabras = [
    "GUITARRA", "ELEFANTE", "TURQUESA", "MARIELA", "TECLADO", "INGLATERRA",
    "COMPUTADORA", "MUSICOTRONICA", "ECUACION", "MONEDAS", "CLAVECINELLO",
    "BIENESTAR", "TELEFONO", "LINGUISTICA", "GERENCIADOR", "INFORMATICA",
    "MICROSCOPIO", "SATURNO", "TELEVISOR", "ZAPATOS", "COCODRILO", "CANGREJO",
    "RADIADOR", "LIBERTAD", "PINTURA", "QUIMICA", "SOLSTICIO", "MARMOL",
    "AUTOBUS", "CASCADA", "VOLCAN", "TURISMO", "PALABRA", "GALAXIA", "COMETA",
    "PERRO", "GATO", "ELEFANTE", "JIRAFA", "DICCIONARIO", "ENFERMERIA", "AVIACION",
    "BICICLETA", "TREN", "AVION", "BARCO", "BIBLIOTECA", "ARQUITECTURA", "DIAMANTE",
    "ORQUESTA", "FLAUTA", "TROMPETA", "BATUTA", "ASTRONOMIA", "BIOLOGIA", "FISICA",
    "ELECTRONICA", "MATEMATICA", "ESTADISTICA", "FILOSOFIA", "PSICOLOGIA", "SOCIOLOGIA",
    "ANTROPOLOGIA", "METEOROLOGIA", "GEOLOGIA", "OCEANO", "RIVER", "LAGO", "MAR",
    "TIERRA", "ESPACIO", "PLANETA", "LUNA", "SOL", "ESTRELLA", "CONSTELACION", "UNIVERSO",
    "ATOMO", "MOLECULA", "ELEMENTO", "COMPUESTO", "CELULA", "ORGANO", "SISTEMA",
    "ORGANISMO", "ECOSISTEMA", "BIOSFERA", "GENETICA", "HERENCIA", "ADN", "CROMOSOMA",
    "PROTEINA", "ENZIMA", "METABOLISMO", "FOTOSINTESIS", "RESPIRACION", "EVOLUCION",
    "SELECCION", "ADAPTACION", "MUTACION", "ESPECIE", "POBLACION", "COMUNIDAD",
    "ECOSISTEMA", "BIOMA", "BIOSFERA", "TRIANGULO", "PENTAGONO", "HEXAGONO",
    "RECTANGULO", "ROMBO", "CIRCULO", "OVALO", "CUBO", "ESFERA", "CILINDRO",
    "CONO", "PIRAMIDE", "TETRAEDRO", "POLIGONO", "PARALELOGRAMO", "TRAPECIO",
    "PATRON", "SIMETRIA", "ESCALA", "PROPORCION", "TRIANGULACION", "PUNTO",
    "LINEA", "SUPERFICIE", "SOLIDO", "PERIMETRO", "AREA", "VOLUMEN",
    "DENSIDAD", "MASA", "PESO", "INERCIA", "GRAVEDAD", "ENERGIA",
    "FUERZA", "TRABAJO", "POTENCIA", "IMPULSO", "MOVIMIENTO", "VELOCIDAD",
    "ACELERACION", "FRECUENCIA", "LONGITUD", "ALTURA", "PROFUNDIDAD",
    "ANCHURA", "GROSOR", "RADIO", "DIAMETRO", "CIRCUNFERENCIA", "ARCO",
    "SECTOR", "SEGMENTO", "CUERDA", "ANGULO", "VERTICE", "CENTRO",
    "FOCO", "EJE", "PLANO", "ORIGEN", "COORDENADA", "VECTOR",
    "MATRIZ", "ESCALAR", "FUNCION", "DERIVADA", "INTEGRAL",
    "ECUACION", "INECUACION", "LOGARITMO", "EXPONENCIAL", "POLINOMIO",
    "RADICAL", "SERIE", "SECUENCIA", "PROGRESION", "REGRESION",
    "ESTADISTICA", "PROBABILIDAD", "DISTRIBUCION", "MUESTRA",
    "VARIABLE", "CONSTANTE", "MEDIANA", "MODA", "DESVIACION",
    "INTERVALO", "HIPOTESIS", "TENDENCIA", "CORRELACION", "CAUSALIDAD",
    "PREDICCION", "EXPERIMENTO", "OBSERVACION", "ENSAYO", "PRUEBA"
  ];
  
  let ayudas = [
    "Instrumento Musical", "Animal de la selva", "Es un color", "Nombre de mujer",
    "Hardware de computadora", "Es un Pais", "Tejido de la computadora",
    "Instrumento Musical electrónico", "Expresión matemática", "Unidad monetaria",
    "Instrumento musical de cuerda", "Concepto filosófico", "Dispositivo de comunicación",
    "Estudio del lenguaje", "Persona que dirige", "Campo de la tecnología",
    "Instrumento de laboratorio", "Planeta del sistema solar", "Dispositivo electrónico",
    "Calzado", "Reptil", "Crustáceo", "Parte del motor", "Concepto abstracto", 
    "Arte visual", "Ciencia natural", "Evento astronómico", "Roca metamórfica", 
    "Medio de transporte", "Caída de agua", "Formación geológica", "Actividad recreativa",
    "Unidad de lenguaje", "Sistema estelar", "Cuerpo celeste", "Animal doméstico",
    "Animal doméstico", "Animal grande", "Animal alto", "Libro de referencia", 
    "Área médica", "Campo de transporte", "Medio de transporte", "Medio de transporte", 
    "Medio de transporte", "Medio de transporte acuático", "Edificio con libros", 
    "Campo de diseño", "Piedra preciosa", "Grupo musical", "Instrumento de viento", 
    "Instrumento de viento", "Herramienta musical", "Ciencia del espacio", 
    "Ciencia de la vida", "Ciencia de la naturaleza", "Campo de la física", 
    "Campo de la matemática", "Campo de la estadística", "Campo filosófico", 
    "Ciencia del comportamiento", "Ciencia social", "Ciencia humana", 
    "Ciencia del clima", "Ciencia de la tierra", "Cuerpo de agua", "Cuerpo de agua", 
    "Cuerpo de agua", "Cuerpo de agua", "Cuerpo celeste", "Cuerpo celeste", 
    "Cuerpo celeste", "Cuerpo celeste", "Cuerpo celeste", "Grupo de estrellas", 
    "Todo lo existente", "Partícula pequeña", "Unidad química", "Sustancia química", 
    "Sustancia química", "Unidad biológica", "Parte del cuerpo", "Sistema biológico", 
    "Entidad biológica", "Grupo de organismos", "Capa de vida", "Campo biológico", 
    "Proceso biológico", "Material genético", "Estructura genética", 
    "Biomolécula", "Catalizador biológico", "Proceso biológico", "Proceso biológico", 
    "Cambio genético", "Proceso evolutivo", "Cambio genético", "Grupo biológico", 
    "Grupo de organismos", "Grupo ecológico", "Grupo ecológico", "Capa de vida",
    "Figura geométrica", "Figura geométrica", "Figura geométrica",
    "Figura geométrica", "Figura geométrica", "Figura geométrica", 
    "Figura geométrica", "Sólido geométrico", "Sólido geométrico", "Sólido geométrico",
    "Sólido geométrico", "Sólido geométrico", "Sólido geométrico", "Figura geométrica", 
    "Figura geométrica", "Figura geométrica", "Patrón de diseño", "Equilibrio visual", 
    "Relación de tamaño", "Comparación de tamaño", "Método de medición", "Ubicación específica", 
    "Forma básica", "Superficie plana", "Forma tridimensional", "Longitud del contorno", 
    "Medida de superficie", "Cantidad de espacio", "Relación masa-volumen", "Cantidad de materia", 
    "Medida gravitacional", "Resistencia al movimiento", "Fuerza que atrae", "Capacidad de realizar trabajo", 
    "Interacción que cambia el movimiento", "Transferencia de energía", "Trabajo por unidad de tiempo", 
    "Cantidad de movimiento", "Desplazamiento en el tiempo", "Cambio de posición", 
    "Cambio de velocidad", "Repetición en el tiempo", "Medida lineal", "Distancia vertical", 
    "Medida de profundidad", "Extensión horizontal", "Dimensión transversal", "Distancia al centro", 
    "Línea que atraviesa el centro", "Perímetro de un círculo", "Parte de la circunferencia", 
    "Sección de un círculo", "Parte de un círculo", "Línea recta que une dos puntos", "Apertura entre dos líneas", 
    "Punto de intersección", "Punto medio", "Punto de convergencia", "Línea alrededor de la cual gira algo", 
    "Plano de referencia", "Punto de referencia", "Sistema de puntos", "Cantidad con dirección y magnitud", 
    "Arreglo rectangular de números", "Número sin dirección", "Relación matemática", "Tasa de cambio instantáneo", 
    "Área bajo una curva", "Igualdad matemática", "Desigualdad matemática", "Operador matemático", 
    "Función de crecimiento", "Expresión algebraica", "Operador de raíz", "Suma infinita", 
    "Sucesión de números", "Serie de términos", "Retroceso estadístico", "Análisis de datos", 
    "Medida de incertidumbre", "Distribución de valores", "Conjunto representativo", "Factor que varía", 
    "Cantidad fija", "Valor central", "Valor más frecuente", "Medida de dispersión", 
    "Rango de valores", "Suposición basada en datos", "Dirección del cambio", "Relación entre variables", 
    "Relación causa-efecto", "Estimación futura", "Prueba científica", "Recopilación de datos", 
    "Intento experimental", "Evaluación científica"
  ];


//variable que guarda la cantidad de palabras ya jugadas
let cantPalabrasJugadas = 0;

//Variable que guarda la cantidad de intentos restantes
let intentosRestantes = 5;

//variable que guarda el indice de la Palabra actual
let posActual;

//arreglo que contiene la palabra actual con la que estoy judando
let arrayPalabraActual = [];

//Cantidad de de letras acertadas por cada jugada
let cantidadAcertadas = 0;

//Arreglo que guarda cada letra en divs
let divsPalabraActual = [];

//Cantidad de palabras que debe acertar en cada jugada.
let totalQueDebeAcertar;

//Funcion que carga la  palabra nueva para jugar
function cargarNuevaPalabra(){
    //Aumento en uno cantidad de palabras jugadas y controlo si llego a su limite
    cantPalabrasJugadas++;
    if(cantPalabrasJugadas>6){
        //volvemos a cargar el arreglo
        arrayPalabras =[
            "GUITARRA", "ELEFANTE", "TURQUESA", "MARIELA", "TECLADO", "INGLATERRA",
            "COMPUTADORA", "MUSICOTRONICA", "ECUACION", "MONEDAS", "CLAVECINELLO",
            "BIENESTAR", "TELEFONO", "LINGUISTICA", "GERENCIADOR", "INFORMATICA",
            "MICROSCOPIO", "SATURNO", "TELEVISOR", "ZAPATOS", "COCODRILO", "CANGREJO",
            "RADIADOR", "LIBERTAD", "PINTURA", "QUIMICA", "SOLSTICIO", "MARMOL",
            "AUTOBUS", "CASCADA", "VOLCAN", "TURISMO", "PALABRA", "GALAXIA", "COMETA",
            "PERRO", "GATO", "ELEFANTE", "JIRAFA", "DICCIONARIO", "ENFERMERIA", "AVIACION",
            "BICICLETA", "TREN", "AVION", "BARCO", "BIBLIOTECA", "ARQUITECTURA", "DIAMANTE",
            "ORQUESTA", "FLAUTA", "TROMPETA", "BATUTA", "ASTRONOMIA", "BIOLOGIA", "FISICA",
            "ELECTRONICA", "MATEMATICA", "ESTADISTICA", "FILOSOFIA", "PSICOLOGIA", "SOCIOLOGIA",
            "ANTROPOLOGIA", "METEOROLOGIA", "GEOLOGIA", "OCEANO", "RIVER", "LAGO", "MAR",
            "TIERRA", "ESPACIO", "PLANETA", "LUNA", "SOL", "ESTRELLA", "CONSTELACION", "UNIVERSO",
            "ATOMO", "MOLECULA", "ELEMENTO", "COMPUESTO", "CELULA", "ORGANO", "SISTEMA",
            "ORGANISMO", "ECOSISTEMA", "BIOSFERA", "GENETICA", "HERENCIA", "ADN", "CROMOSOMA",
            "PROTEINA", "ENZIMA", "METABOLISMO", "FOTOSINTESIS", "RESPIRACION", "EVOLUCION",
            "SELECCION", "ADAPTACION", "MUTACION", "ESPECIE", "POBLACION", "COMUNIDAD",
            "ECOSISTEMA", "BIOMA", "BIOSFERA", "TRIANGULO", "PENTAGONO", "HEXAGONO",
            "RECTANGULO", "ROMBO", "CIRCULO", "OVALO", "CUBO", "ESFERA", "CILINDRO",
            "CONO", "PIRAMIDE", "TETRAEDRO", "POLIGONO", "PARALELOGRAMO", "TRAPECIO",
            "PATRON", "SIMETRIA", "ESCALA", "PROPORCION", "TRIANGULACION", "PUNTO",
            "LINEA", "SUPERFICIE", "SOLIDO", "PERIMETRO", "AREA", "VOLUMEN",
            "DENSIDAD", "MASA", "PESO", "INERCIA", "GRAVEDAD", "ENERGIA",
            "FUERZA", "TRABAJO", "POTENCIA", "IMPULSO", "MOVIMIENTO", "VELOCIDAD",
            "ACELERACION", "FRECUENCIA", "LONGITUD", "ALTURA", "PROFUNDIDAD",
            "ANCHURA", "GROSOR", "RADIO", "DIAMETRO", "CIRCUNFERENCIA", "ARCO",
            "SECTOR", "SEGMENTO", "CUERDA", "ANGULO", "VERTICE", "CENTRO",
            "FOCO", "EJE", "PLANO", "ORIGEN", "COORDENADA", "VECTOR",
            "MATRIZ", "ESCALAR", "FUNCION", "DERIVADA", "INTEGRAL",
            "ECUACION", "INECUACION", "LOGARITMO", "EXPONENCIAL", "POLINOMIO",
            "RADICAL", "SERIE", "SECUENCIA", "PROGRESION", "REGRESION",
            "ESTADISTICA", "PROBABILIDAD", "DISTRIBUCION", "MUESTRA",
            "VARIABLE", "CONSTANTE", "MEDIANA", "MODA", "DESVIACION",
            "INTERVALO", "HIPOTESIS", "TENDENCIA", "CORRELACION", "CAUSALIDAD",
            "PREDICCION", "EXPERIMENTO", "OBSERVACION", "ENSAYO", "PRUEBA"
          ];
          
        ayudas = [
            "Instrumento Musical", "Animal de la selva", "Es un color", "Nombre de mujer",
            "Hardware de computadora", "Es un Pais", "Tejido de la computadora",
            "Instrumento Musical electrónico", "Expresión matemática", "Unidad monetaria",
            "Instrumento musical de cuerda", "Concepto filosófico", "Dispositivo de comunicación",
            "Estudio del lenguaje", "Persona que dirige", "Campo de la tecnología",
            "Instrumento de laboratorio", "Planeta del sistema solar", "Dispositivo electrónico",
            "Calzado", "Reptil", "Crustáceo", "Parte del motor", "Concepto abstracto", 
            "Arte visual", "Ciencia natural", "Evento astronómico", "Roca metamórfica", 
            "Medio de transporte", "Caída de agua", "Formación geológica", "Actividad recreativa",
            "Unidad de lenguaje", "Sistema estelar", "Cuerpo celeste", "Animal doméstico",
            "Animal doméstico", "Animal grande", "Animal alto", "Libro de referencia", 
            "Área médica", "Campo de transporte", "Medio de transporte", "Medio de transporte", 
            "Medio de transporte", "Medio de transporte acuático", "Edificio con libros", 
            "Campo de diseño", "Piedra preciosa", "Grupo musical", "Instrumento de viento", 
            "Instrumento de viento", "Herramienta musical", "Ciencia del espacio", 
            "Ciencia de la vida", "Ciencia de la naturaleza", "Campo de la física", 
            "Campo de la matemática", "Campo de la estadística", "Campo filosófico", 
            "Ciencia del comportamiento", "Ciencia social", "Ciencia humana", 
            "Ciencia del clima", "Ciencia de la tierra", "Cuerpo de agua", "Cuerpo de agua", 
            "Cuerpo de agua", "Cuerpo de agua", "Cuerpo celeste", "Cuerpo celeste", 
            "Cuerpo celeste", "Cuerpo celeste", "Cuerpo celeste", "Grupo de estrellas", 
            "Todo lo existente", "Partícula pequeña", "Unidad química", "Sustancia química", 
            "Sustancia química", "Unidad biológica", "Parte del cuerpo", "Sistema biológico", 
            "Entidad biológica", "Grupo de organismos", "Capa de vida", "Campo biológico", 
            "Proceso biológico", "Material genético", "Estructura genética", 
            "Biomolécula", "Catalizador biológico", "Proceso biológico", "Proceso biológico", 
            "Cambio genético", "Proceso evolutivo", "Cambio genético", "Grupo biológico", 
            "Grupo de organismos", "Grupo ecológico", "Grupo ecológico", "Capa de vida",
            "Figura geométrica", "Figura geométrica", "Figura geométrica",
            "Figura geométrica", "Figura geométrica", "Figura geométrica", 
            "Figura geométrica", "Sólido geométrico", "Sólido geométrico", "Sólido geométrico",
            "Sólido geométrico", "Sólido geométrico", "Sólido geométrico", "Figura geométrica", 
            "Figura geométrica", "Figura geométrica", "Patrón de diseño", "Equilibrio visual", 
            "Relación de tamaño", "Comparación de tamaño", "Método de medición", "Ubicación específica", 
            "Forma básica", "Superficie plana", "Forma tridimensional", "Longitud del contorno", 
            "Medida de superficie", "Cantidad de espacio", "Relación masa-volumen", "Cantidad de materia", 
            "Medida gravitacional", "Resistencia al movimiento", "Fuerza que atrae", "Capacidad de realizar trabajo", 
            "Interacción que cambia el movimiento", "Transferencia de energía", "Trabajo por unidad de tiempo", 
            "Cantidad de movimiento", "Desplazamiento en el tiempo", "Cambio de posición", 
            "Cambio de velocidad", "Repetición en el tiempo", "Medida lineal", "Distancia vertical", 
            "Medida de profundidad", "Extensión horizontal", "Dimensión transversal", "Distancia al centro", 
            "Línea que atraviesa el centro", "Perímetro de un círculo", "Parte de la circunferencia", 
            "Sección de un círculo", "Parte de un círculo", "Línea recta que une dos puntos", "Apertura entre dos líneas", 
            "Punto de intersección", "Punto medio", "Punto de convergencia", "Línea alrededor de la cual gira algo", 
            "Plano de referencia", "Punto de referencia", "Sistema de puntos", "Cantidad con dirección y magnitud", 
            "Arreglo rectangular de números", "Número sin dirección", "Relación matemática", "Tasa de cambio instantáneo", 
            "Área bajo una curva", "Igualdad matemática", "Desigualdad matemática", "Operador matemático", 
            "Función de crecimiento", "Expresión algebraica", "Operador de raíz", "Suma infinita", 
            "Sucesión de números", "Serie de términos", "Retroceso estadístico", "Análisis de datos", 
            "Medida de incertidumbre", "Distribución de valores", "Conjunto representativo", "Factor que varía", 
            "Cantidad fija", "Valor central", "Valor más frecuente", "Medida de dispersión", 
            "Rango de valores", "Suposición basada en datos", "Dirección del cambio", "Relación entre variables", 
            "Relación causa-efecto", "Estimación futura", "Prueba científica", "Recopilación de datos", 
            "Intento experimental", "Evaluación científica"
          ];
    }

    //Selecciono una posicion random
    posActual = Math.floor(Math.random()*arrayPalabras.length);

    //Tomamos la palabra nueva
    let palabra = arrayPalabras[posActual];
    //cantidad de letras que tiene esa palabra
    totalQueDebeAcertar = palabra.length;
    //coloco en 0 la cantidad acertadas hata el momento
    cantidadAcertadas = 0;

    //Guardamos la palabra que esta en formato string en un arreglo
    arrayPalabraActual = palabra.split('');

    //limpiamos los contenedores que quedaron cargadas con la palabra anterior
    document.getElementById("palabra").innerHTML = "";
    document.getElementById("letrasIngresadas").innerHTML = "";

    //Cargamos la cantidad de divs (letras) que tiene la palabra
    for(i=0;i<palabra.length;i++){
        var divLetra = document.createElement("div");
        divLetra.className = "letra";
        document.getElementById("palabra").appendChild(divLetra);
    }

    //Selecciono todos los divs de la palabra
    divsPalabraActual = document.getElementsByClassName("letra");

    //setemos los intentos
    intentosRestantes = 5;
    document.getElementById("intentos").innerHTML = intentosRestantes;

    //Cargamos la ayuda de la pregunta
    document.getElementById("ayuda").innerHTML = ayudas[posActual];

   //elimino el elemento ya seleccionado del arreglo.
    //splice(posActual,1): A partir de la posicon posActual elimino 1 elemento
    arrayPalabras.splice(posActual,1);
    ayudas.splice(posActual,1);

}

//Llamada para cargar la primera palabra del juego
cargarNuevaPalabra();

//Detecto la tecla que el usuario presion
document.addEventListener("keydown", event => {
    //Controlo si la tecla presionada es una letra
    if(isLetter(event.key)){
        //Tomo las letras ya ingresadas hasta el momento
        let letrasIngresadas = document.getElementById("letrasIngresadas").innerHTML;
        //arma un a arreglo con las letras ingresadas
        letrasIngresadas = letrasIngresadas.split('');
        
        //controlo si la letra presionada ya ha sido ingresada
        if(letrasIngresadas.lastIndexOf(event.key.toUpperCase()) === -1){
            //variable bandera para saber si la letra ingresada esta en la palabra a descrubir
            let acerto = false;

            //Recorro el arreglo que ocntiene la palabra para verificar si la palabra ingresada esta
            for(i=0;i<arrayPalabraActual.length;i++){
                if(arrayPalabraActual[i] == event.key.toUpperCase()){//acertó
                    divsPalabraActual[i].innerHTML = event.key.toUpperCase();
                    acerto = true;
                    //Aumento en uno la cantidad de letras acertadas 
                    cantidadAcertadas = cantidadAcertadas + 1;
                }
            }
        
            //Controlo si acerto al menos una letra
            if(acerto==true){
                //controlamos si ya acerto todas
                if(totalQueDebeAcertar == cantidadAcertadas){
                    //asigno a cada div de la palabra la clase pintar para ponerlo en verde cada div
                    for(i=0;i<arrayPalabraActual.length;i++){
                        divsPalabraActual[i].className="letra pintar";
                    }
                }
            }else{
                //No acerto, decremento los intentos restantes
                intentosRestantes = intentosRestantes - 1;
                document.getElementById("intentos").innerHTML = intentosRestantes;

                //controlamos si ya acabo todas la oportunidades
                if(intentosRestantes<=0){
                    for(i=0;i<arrayPalabraActual.length;i++){
                        divsPalabraActual[i].className="letra pintarError";
                    }
                }
            }

            //agrega la letra ingresada a las letras ya ingresadas que se visualizan
            document.getElementById("letrasIngresadas").innerHTML += event.key.toLocaleUpperCase() + " - ";
        }
    }
});

//Funcion que me determina si un caracter es una letra
function isLetter(str) {
    return str.length === 1 && str.match(/[a-z]/i);
}
