import React from 'react'

// {history} destructuración desde las props
export const LoginScreen = ({ history }) => {
    const handleLogin = () => {
        /*
        En el caso trabajes con el React-router-dom, puedes utilizar
        .push() y .replace(). La diferencia es que push deja historial de navegación y replace
        no deja historial de navegación
        */
        // history.push('/');
        history.replace('/');
    }

    return (
        <div>
            <h1>LoginScreen</h1>
            <hr></hr>
            <button className="btn btn-primary"
                    onClick={handleLogin}
                    >
                Notification
            </button>
        </div>
    )
}
