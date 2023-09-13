const email = document.getElementById('email')
const password = document.getElementById('password')

    fetch(`http://127.0.0.1:8000/api/login?email=${email}&password=${password}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
    })
    .then(response => {
        if (!response.ok) {
            return response.json().then(data => {
                document.getElementById('email-error').textContent = data.errors.email ? data.errors.email[0] : '';
                document.getElementById('password-error').textContent = data.errors.password ? data.errors.password[0] : '';
            });
        } else {
            // Login bem-sucedido, você pode realizar ações após o login
            console.log('Login realizado!');
            console.log(response)
            // Verifique a autenticação após o login
          
           
        }
    })
    .catch(error => {
        console.error('Ocorreu um erro:', error);
    });


// Função para verificar se o usuário está autenticado
// function verificarAutenticacao() {
//     const token = localStorage.getItem('token'); // Supondo que o token esteja armazenado no Local Storage

//     if (token) {
//         // O usuário está autenticado
//         console.log('O usuário está autenticado.');
//         // Redirecione-o para a página desejada após o login
//         window.location.href = 'pagina-de-autenticacao.html';
//     } else {
//         // O usuário não está autenticado
//         console.log('O usuário não está autenticado.');
//     }
// }

