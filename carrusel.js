let index = 1;
mostrarElemento(index);

function moverElemento(n) {
    mostrarElemento(index += n);
}

function currentSlide(n) {
    mostrarElemento(index = n);
}

function mostrarElemento(n) {
    let i;
    let elementos = document.getElementsByClassName("elemento");

    if (n > elementos.length) {index = 1}
    if (n < 1) {index = elementos.length}

    for (i = 0; i < elementos.length; i++) {  // No se despliegan los elementos
        elementos[i].style.display = "none";
    }
    elementos[index-1].style.display = "block";
}

function iniciar() {
    mostrarElemento(1);
}