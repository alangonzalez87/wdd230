const rangevalue = document.getElementById("rangevalue");
const range = document.getElementById("r");


// RANGE event listener
range.addEventListener('change', displayRatingValue);
range.addEventListener('input', displayRatingValue);

function displayRatingValue() {
    rangevalue.innerHTML = range.value;
}

document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita el envío predeterminado del formulario
    
    // Abre una nueva ventana o modal con el mensaje de confirmación
    var confirmationWindow = window.open("", "Confirmation", "width=400,height=200");
    confirmationWindow.document.write("<p>¡Formulario enviado con éxito!</p>");
});


// Cuando se envíe el formulario
document.getElementById("myForm").addEventListener("submit", function(event) {
    
    // Muestra el modal
    modal.style.display = "block";

    // Restablece el formulario
    this.reset();
});


// Obtén el modal
var modal = document.getElementById("myModal");

// Verifica que el modal exista antes de intentar manipularlo
if (modal) {
    // Obtén el botón de cierre
    var closeBtn = modal.querySelector(".close");

    // Cuando se envíe el formulario
    document.getElementById("myForm").addEventListener("submit", function(event) {
        event.preventDefault(); // Evita el envío predeterminado del formulario
        
        // Muestra el modal
        modal.style.display = "block";

        // Restablece el formulario
        this.reset();
    });

    // Cuando el usuario hace clic en el botón de cierre
    if (closeBtn) {
        closeBtn.onclick = function() {
            modal.style.display = "none"; // Oculta el modal
        }
    }

    // Cuando el usuario hace clic en cualquier lugar fuera del modal, ciérralo
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none"; // Oculta el modal
        }
    }
}

document.addEventListener('DOMContentLoaded', function() {
    let form = document.getElementById("myForm");
    let passwordInput = document.getElementById("password-input");
    let repeatPasswordInput = document.getElementById("repeat-password-input");
    let passwordMatchError = document.getElementById("password-match-error");
    let submitBtn = document.querySelector(".submitBtn");

    submitBtn.addEventListener("click", function(event) {
        let password = passwordInput.value;
        let repeatPassword = repeatPasswordInput.value;

        // Verifica si las contraseñas coinciden
        if (password !== repeatPassword) {
            // Si no coinciden, muestra el mensaje de error y previene el envío del formulario
            passwordMatchError.style.display = "block";
            event.preventDefault();
            // Evita el envío del formulario
        } else {
            // Si coinciden, oculta el mensaje de error
            passwordMatchError.style.display = "none";
            
        }
    });
});



