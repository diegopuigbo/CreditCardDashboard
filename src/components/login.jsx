import { useState } from 'react';

const Login = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        if (username === 'tuUsuario' && password === 'tuContraseña') {
            onLogin();
        } else {
            alert('Credenciales incorrectas');
        }
    };

    return (
        <div>
            <h2>Login</h2>
            <label>
                Usuario:
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            </label>
            <br />
            <label>
                Contraseña:
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </label>
            <br />
            <button onClick={handleLogin}>Iniciar sesión</button>
        </div>
    );
};

export default Login;