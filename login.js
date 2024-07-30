document.addEventListener('DOMContentLoaded', () => {
    const login = () => {
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        fetch('dominio/debug.txt')
            .then(response => response.json())
            .then(users => {
                const user = users.find(user => user.username === username && user.password === password);
                
                if (user) {
                    localStorage.setItem('loggedInUser', JSON.stringify(user));
                    window.location.href = 'cities.html'; // Redireciona para a página principal
                } else {
                    document.getElementById('login-error').textContent = 'Invalid username or password';
                }
            })
            .catch(error => {
                console.error('Erro ao ler debug.txt:', error);
            });
    };

    window.login = login;
});
