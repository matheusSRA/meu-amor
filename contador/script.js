function atualizarContador() {
    const dataInicial = new Date("2024-06-24T00:00:00"); // Data inicial (24 de junho de 2024)
    const agora = new Date();
    const diferenca = agora - dataInicial; // Calcula o tempo que passou desde a data inicial

    // Cálculos para dias, horas, minutos e segundos
    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

    // Atualiza o conteúdo do contador nas caixas
    document.getElementById("dias").innerText = dias;
    document.getElementById("horas").innerText = horas;
    document.getElementById("minutos").innerText = minutos;
    document.getElementById("segundos").innerText = segundos;
}

// Atualiza o contador a cada 1 segundo
setInterval(atualizarContador, 1000);

// Chama a função imediatamente para não esperar 1 segundo
atualizarContador();
