var container = document.querySelector('.container');

fetch("http://127.0.0.1:8000/api/users/all", {
    method: 'GET'
})
    .then(response => response.json())
    .then(function (data) {
        var results = data.results;

        results.forEach(result => {
            var userDiv = document.createElement('div');
            userDiv.innerHTML = `
                <span>ID: ${result.id}</span><br>
                <span>Login: ${result.login}</span>
            `;
            container.appendChild(userDiv);
        });
    })
    .catch(error => {
        console.error('Ocorreu um erro:', error);
    });
