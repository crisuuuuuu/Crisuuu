document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("login-form");
    const alert = document.getElementById("alert");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        // Definir aquí los usuarios permitidos con sus contraseñas y sus páginas de destino
        const usuarios = {
            "Maxcheto": { password: "Maxcheto", page: "User/Maxcheto@maxcheto.es/Buy/manager.html" },
            // Agregar más usuarios aquí...
            //Se hace como el comando anterios
        };

        if (usuarios.hasOwnProperty(username) && usuarios[username].password === password) {
            // Redirigir al usuario a la página de destino si las credenciales son correctas
            window.location.href = usuarios[username].page;
        } else {
            // Mostrar la alerta si las credenciales son incorrectas
            alert.style.display = "block";
        }
    });
});
