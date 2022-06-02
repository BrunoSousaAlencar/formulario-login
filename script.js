const init = () => {
    const validateEmail = (event) =>{
        const input = event.currentTarget
        const regex = /^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:\. [a-zA-Z0-9-]+)*$/
        const emailTest = regex.test(input.value)
    }

        if(!emailTest) {
            submitButton.setAttribute('disabled', 'disabled')
            input.nextElementSibling.classList.add("error")
        } else {
            submitButton.setAttribute('disabled');
            input.nextElementSibling.classList.remove("error")
        }

        const validatePassword = (event) => {
            const input = event.currentTarget;
        }

        if(input.value.length < 8) {
            submitButton.setAttribute('disabled', 'disabled')
            input.nextElementSibling.classList.add("error")
        } else {
            submitButton.setAttribute('disabled');
            input.nextElementSibling.classList.remove("error")
        }


    const inputEmail = document.getElementById('email')  
    const inputPassword = document.getElementById('senha')
    const submitButton = document.getElementById('login')

    inputEmail.addEventListener('input', validateEmail)
    inputPassword.addEventListener('input', validatePassword)

    const errorHandler = () => {
        submitButton.classList.remove('success');
        submitButton.classList.add('error');
        submitButton.textContent='Error :('
    }

    const successHandler = () => {
        submitButton.classList.remove('error')
        submitButton.classList.remove('success');
        submitButton.textContent = "Sent! :)"
    }

    if(submitButton){
        submitButton.addEventListener('click', (event) => {
            event.preventDefault();

            submitButton.textContent ="...londing";

            fetch('https://reqres.in/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: inputEmail.value,
                    password: inputPassword.value,
                })
            }).then((response) =>{
                if(response.status !== 200){
                    return errorHandler();
                }
                successHandler();
            }).catch(() =>{
                errorHandler();
            })
      
        })
    }
}
window.onload = init;