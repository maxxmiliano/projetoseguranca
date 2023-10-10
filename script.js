document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("login-form");
    const message = document.getElementById("message");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const username = form.querySelector("#username").value;
        const password = form.querySelector("#password").value;

        if (username === "usuario" && password === "senha123") {
            message.textContent = "Login bem-sucedido!";
            message.style.color = "green";
        } else {
            message.textContent = "Credenciais inválidas. Tente novamente.";
            message.style.color = "red";
        }
    });
});
