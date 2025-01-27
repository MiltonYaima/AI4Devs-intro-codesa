// Función que invierte el texto ingresado
function invertirTexto() {
    // Obtener el valor del campo de texto de entrada
    const textoOriginal = document.getElementById('inputText').value;
    
    // Invertir el texto usando los métodos de JavaScript
    const textoInvertido = textoOriginal.split('').reverse().join('');
    
    // Mostrar el resultado en el campo de texto de salida
    document.getElementById('outputText').value = textoInvertido;
}