function registrar(login, email, password) {
    document.getElementById('registration-form').addEventListener('submit', function (e) {
        e.preventDefault();

        const formData = new FormData(this);

        fetch('http://127.0.0.1:8000/api/registrar?login=' + formData.get('login') + '&email=' + formData.get('email') + '&password=' + formData.get('password'), {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(response => {
                if (!response.ok) {
                    return response.json().then(data => {
                        document.getElementById('login-error').textContent = data.errors.login ? data.errors.login[0] : '';
                        document.getElementById('email-error').textContent = data.errors.email ? data.errors.email[0] : '';
                        document.getElementById('password-error').textContent = data.errors.password ? data.errors.password[0] : '';
                    });
                } else {
                    // Registro bem-sucedido, redirecione ou execute outra ação desejada
                    console.log('Registro bem-sucedido!');
                    window.location.href = 'dashboard.html';
                }
            })
            .catch(error => {
                console.error('Ocorreu um erro:', error);
            });
    });
}
