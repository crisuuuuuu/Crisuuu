// Obtener el elemento del porcentaje de batería
const batteryElement = document.getElementById('battery');

// Obtener el elemento de la hora
const clockElement = document.getElementById('clock');

// Función para actualizar el porcentaje de batería
function updateBatteryStatus() {
    navigator.getBattery().then(function(battery) {
        const batteryPercentage = (battery.level * 100).toFixed(0);
        batteryElement.innerText = `Batería: ${batteryPercentage}%`;
    });
}

// Función para actualizar la hora
function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    clockElement.innerText = `Hora: ${hours}:${minutes}:${seconds}`;
}

// Actualizar los datos cada segundo
setInterval(function() {
    updateBatteryStatus();
    updateClock();
}, 1000);
