// hacer una calculadora
// cada funcionalidad debe estar en una funcion
// recomienda usar switch

function appendToDisplay(value) {
  
    let inputUsuario = document.getElementById('pantalla'); //   // obtenemos el dom de la pantalla y lo que se selecciona
      // Si el valor actual es "0", lo reemplazamos
      if (inputUsuario.value === "0") {
        inputUsuario.value = value;
        
    } else {
        inputUsuario.value += value;
        
    }

}

function clearDisplay() { // el boton c limpia todo la pantalla y la deja como estaba al principio
    
    document.getElementById('pantalla').value = 0; // limpiar el input

}



function calculateResult() {
    let inputUsuario = document.getElementById('pantalla').value;
    
    // Expresión regular para separar números y operador
    let regex = /(\d+\.?\d*)([+\-*/])(\d+\.?\d*)/;
    let match = inputUsuario.match(regex);

    
    if (!match) {
        document.getElementById('pantalla').value = "Error";
        return;
    }

    let num1 = parseFloat(match[1]);
    let operador = match[2];
    let num2 = parseFloat(match[3]);
    let resultado;

    switch (operador) {
        case '+':
            resultado = num1 + num2;
            break;
        case '-':
            resultado = num1 - num2;
            break;
        case '*':
            resultado = num1 * num2;
            break;
        case '/':
            resultado = num2 !== 0 ? num1 / num2 : "Error";
            break;
        default:
            resultado = "Error";
            break;
    }

    document.getElementById('pantalla').value = resultado;
}