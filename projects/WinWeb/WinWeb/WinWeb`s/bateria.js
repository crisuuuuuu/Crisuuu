// Función para actualizar el widget de batería
function updateBatteryWidget() {
    navigator.getBattery().then(function(battery) {
        const batteryPercentage = (battery.level * 100).toFixed(0);
        document.getElementById("battery-percentage").innerText = `${batteryPercentage}%`;
    });
}

// Actualizar el widget de batería al cargar la página
updateBatteryWidget();

// Actualizar el widget de batería cada vez que cambie el nivel de batería
navigator.getBattery().then(function(battery) {
    battery.addEventListener("levelchange", function() {
        updateBatteryWidget();
    });
});
