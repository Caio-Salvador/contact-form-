
const fields = document.querySelectorAll("[required]")

function ValidateField(field) {
    function verifyErrors() {
        let foundError = false;

        for(let error in field.validity) {
            if (field.validity[error] && !field.validity.valid ) {
                foundError = error
            }
        }
        return foundError;
    }

    function customMessage(typeError) {
        const messages = {
            text: {
                valueMissing: "Este campo é obrigatório"
            },
            email: {
                valueMissing: "Este campo é obrigatório",
                typeMismatch: "Por favor, preencha um email válido"
            }
            
        }

        return messages[field.type][typeError]
    }

    function setCustomMessage(message) {
        const spanError = field.parentNode.querySelector("span.error")
        
        if (message) {
            spanError.classList.add("active")
            spanError.innerHTML = message
        } else {
            spanError.classList.remove("active")
            spanError.innerHTML = ""
        }
    }

    return function() {

        const error = verifyErrors()

        if(error) {
            const message = customMessage(error)

            field.style.borderColor = "red"
            setCustomMessage(message)
        } else {
            field.style.borderColor = "#3e2494"
            setCustomMessage()
        }
    }
}

function customValidation(event) {

    const field = event.target
    const validation = ValidateField(field)

    validation()

}

for( field of fields ){
    field.addEventListener("invalid", event => { 
        event.preventDefault()

        customValidation(event)
    })
    field.addEventListener("blur", customValidation)
}


document.querySelector("form")
.addEventListener("submit", event => {
    console.log("enviar o formulário")
})

    var input = document.querySelector("#name");

    var texto = input.value;
    
    console.log(texto);

function exibeAlert() {
    alert( texto + input + `Cadastrado com sucesso!`)
}