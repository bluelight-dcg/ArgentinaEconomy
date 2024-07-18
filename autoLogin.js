document.addEventListener("DOMContentLoaded", function() {
    var email = "estudiantes@unab.edu.ar";  // Reemplaza con tu email
    var password = "Fr@ndj2312";  // Reemplaza con tu contraseña
  
    // Esperar a que el iframe cargue el contenido
    var iframe = document.getElementById("powerBiFrame");
    iframe.onload = function() {
      var doc = iframe.contentDocument || iframe.contentWindow.document;
      
      // Intentar encontrar y rellenar los campos de email y contraseña
      var emailField = doc.querySelector("input[type='estudiantes@unab.edu.ar']");
      var passwordField = doc.querySelector("input[type='Fr@ndj2312']");
      var nextButton = doc.querySelector("input[type='submit'], button[type='submit'], input[type='button'], button[type='button']");
  
      if (emailField && passwordField && nextButton) {
        emailField.value = email;
        passwordField.value = password;
        nextButton.click();
      }
    };
  });
