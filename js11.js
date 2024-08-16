function calcularNota() {
    // Capturar las notas del aprendiz
    const producto1 = parseFloat(document.getElementById("producto1").value);
    const producto2 = parseFloat(document.getElementById("producto2").value);
    const producto3 = parseFloat(document.getElementById("producto3").value);
    const desempeño1 = parseFloat(document.getElementById("desempeño1").value);
    const desempeño2 = parseFloat(document.getElementById("desempeño2").value);
    const conocimiento = parseFloat(document.getElementById("conocimiento").value);

    const promedioProductos = (producto1 + producto2 + producto3) / 3;
    const promedioDesempenos = (desempeño1 + desempeño2) / 2;

    const notaFinal = (promedioProductos * 0.4) + (promedioDesempenos * 0.3) + (conocimiento * 0.3);

    // Mostrar resultados
    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = `
        <h2>Resultado</h2>
        <p>Nota Final: ${notaFinal.toFixed(2)}</p>
        <p>${notaFinal >= 7 ? "Aprobado" : "Reprobado"}</p>
    `;
}

function limpiarFormulario() {
    document.getElementById("formulario-notas").reset();
    document.getElementById("resultado").innerHTML = "";
}