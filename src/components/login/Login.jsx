import React, { useState } from 'react';

const Login = ({onSubmit}) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    console.log(email, password);

    const handleSubmit = (e) => {
            e.preventDefault()
            onSubmit ({ email, password})
    }

    return (
        <>
            <div class="card mt-4 p-4  col-sm-4 border">
                <div class="card-body">
                    <h5 class="card-title">Iniciar sesión</h5>

                    <form onSubmit={handleSubmit}>

                        <div class="mb-3">
                            <label for="email" class="form-label">Email</label>
                            <input type="email" class="form-control" id="email" onChange={(e) => setEmail(e.target.value)} />
                        </div>

                        <div class="mb-3">
                            <label for="password" class="form-label">Contraseña</label>
                            <input type="password" class="form-control" id="password" onChange={(e) => setPassword(e.target.value)} />
                        </div>

                        <button type="submit" disabled={!email.trim() || !password.trim()}>Iniciar sesión</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login;