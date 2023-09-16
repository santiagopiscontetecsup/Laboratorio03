document
  .getElementById("formularioContacto")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    var nombre = document.getElementById("nombre").value.trim();
    var correo = document.getElementById("correo").value.trim();
    var mensaje = document.getElementById("mensaje").value.trim();

    if (nombre === "" || correo === "" || mensaje === "") {
      alert("Por favor, completa todos los campos.");
      return;
    }

    document.getElementById("formularioContacto").style.display = "none";
    document.getElementById("mensajeExito").style.display = "block";
  });
