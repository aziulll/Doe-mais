function Logout(){ 
    fetch(`http://127.0.0.1:8000/api/logout`, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
})
.then(response => {
  
        // Login bem-sucedido, você pode realizar ações após o login
        console.log('Logout realizado!');
        console.log(response)
        // Verifique a autenticação após o login
        window.location.href = 'login.html';
       
    }
)
.catch(error => {
    console.error('Ocorreu um erro:', error);
});

}



