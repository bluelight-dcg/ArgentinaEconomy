document.addEventListener("DOMContentLoaded", function() {
    fetch('https://tu_usuario.github.io/tu_repositorio/loginData.json')
        .then(response => response.json())
        .then(data => {
            var email = data.email;
            var password = data.password;

            var iframe = document.getElementById("powerBiFrame");
            iframe.onload = function() {
                var doc = iframe.contentDocument || iframe.contentWindow.document;

                var emailField = doc.querySelector("input[type='email']");
                var passwordField = doc.querySelector("input[type='password']");
                var nextButton = doc.querySelector("input[type='submit'], button[type='submit']");

                if (emailField && passwordField && nextButton) {
                    emailField.value = email;
                    passwordField.value = password;
                    nextButton.click();
                }
            };
        })
        .catch(error => console.error('Error loading JSON:', error));
});
