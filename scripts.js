const texto = document.getElementById('texto');
const resultadoDiv = document.getElementById('resultado');
const textoResultado = document.getElementById('texto-resultado');
const fotoInicio = document.getElementById('fotoInicio');
const mensajeEncriptado = document.getElementById('mensaje-encriptado');

function encriptar() {
    let textoIngresado = texto.value;
    if (textoIngresado.trim() === '') {
        swal("Error", "No se encontró ningún mensaje", "error");
        return;
    }
    const textoEncriptado = textoIngresado
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
    textoResultado.value = textoEncriptado;
    mostrarResultado();
}

function desencriptar() {
    let textoIngresado = texto.value;
    if (textoIngresado.trim() === '') {
        swal("Error", "No se encontró ningún mensaje", "error");
        return;
    }
    const textoDesencriptado = textoIngresado
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
    textoResultado.value = textoDesencriptado;
    mostrarResultado();
}

function mostrarResultado() {
    fotoInicio.style.display = 'none';
    mensajeEncriptado.style.display = 'none';
    resultadoDiv.style.display = 'flex';
}

function copiarTexto() {
    textoResultado.select();
    document.execCommand('copy');
    swal("Copiado", "El texto ha sido copiado al portapapeles", "success");
}
