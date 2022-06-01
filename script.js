const init = () => {
    const inputEmail = document.getElementById('email')  
    const inputPassword = document.getElementById('senha')
    const submitButton = document.getElementById('login')

    if(submitButton){
        submitButton.addEventListener('click', (event) => {
            event.preventDefault();

            fetch('https://reqres.in/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: inputEmail.value,
                    password: inputPassword.value,
                })
            }).then((Response) =>{
                return Response.json();
            }).then((data) => {
                    console.log(data)
                })
        })
    }
}
window.onload = init;