const Mask = {
    cep(input){
        let value = input.value;
        value = value.replace(/\D/,"");
        if(value.length > 8){
            value = value.slice(0,-1);
        }
        value = value.replace(/(\d{5})(\d{3})/, "$1-$2");

        input.value = value;
    }
}

const Validate = {
    isCEP(input){
        Validate.clearErrors(input);
        let value = input.value;
        let error = null;
        const cleanValues = value.replace(/\D/g, '');

        if(cleanValues.length != 8){
            error = "CEP incorreto";
            Validate.displayError(input, error);
        }
        input.value = value;
    },

    isEmail(input){
        Validate.clearErrors(input);
        let value = input.value;
        let error = null;
        
        const formatEmail = /^\w+([\.-_]?\w+)*@\w+([\.-_]?\w+)*(\.\w{2,3})+$/;
        if(!value.match(formatEmail)){
            error="Email inválido";
            Validate.displayError(input, error);
            return;
        }
        input.value = value;
    },

    clearErrors(input){
        const errorDiv = input.parentNode.querySelector('.error');
        if(errorDiv){
            errorDiv.remove()
        }
    },
    displayError(input, error){
        const div = document.createElement('div');
        div.classList.add('error');
        div.innerHTML = error;
        input.parentNode.appendChild(div);
        input.focus();
    }
}