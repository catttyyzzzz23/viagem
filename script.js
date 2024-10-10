// Definir data e hora do voo de ida e volta
const flightDeparture = new Date('2024-10-11T19:30:00'); // 11 de outubro de 2024, às 12:00
const flightReturn = new Date('2024-10-16T22:05:00'); // 16 de outubro de 2024, às 18:00
// Função para iniciar a contagem regressiva
function startCountdown(targetDate, timerElement) {
    const interval = setInterval(() => {
        const now = new Date().getTime();
        const distance = targetDate.getTime() - now;

        // Calcular dias, horas, minutos e segundos
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Atualizar o timer no elemento correspondente com formatação
        const timerMessage = `Faltam ${days} dias, ${hours} horas, ${minutes} minutos e ${seconds} segundos`;
        document.getElementById(timerElement).innerHTML = timerMessage;

        // Se a contagem regressiva terminar, mostrar mensagem
        if (distance < 0) {
            clearInterval(interval);
            document.getElementById(timerElement).innerHTML = "Voo em andamento!";
            updateStatus(timerElement);
        }
    }, 1000);
}

// Função para atualizar o status do voo
function updateStatus(timerElement) {
    const statusElem = document.getElementById("status");
    if (timerElement === "departure-timer") {
        statusElem.innerHTML = "Voo de ida em andamento!";
    } else if (timerElement === "return-timer") {
        statusElem.innerHTML = "Voo de volta em andamento!";
    }
    setTimeout(() => {
        statusElem.innerHTML = "Atenção, prepare-se para a aterrissagem!";
    }, 5000); // Muda o status após 5 segundos
}

// Iniciar as contagens regressivas
startCountdown(flightDeparture, "departure-timer");
startCountdown(flightReturn, "return-timer");

// Definir informações do voo
document.getElementById("departure-time").innerHTML = flightDeparture.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
document.getElementById("return-time").innerHTML = flightReturn.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
document.getElementById("departure-date").innerHTML = flightDeparture.toLocaleDateString();
document.getElementById("return-date").innerHTML = flightReturn.toLocaleDateString();