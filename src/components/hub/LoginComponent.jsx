// LoginComponent.jsx

import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { signIn } from '../../routes/auth';

const LoginComponent = () => {
    const navigate = useNavigate();

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            signInCall();
        }
    };

    const signInCall = async () => {
        try {
            let credentials = {
                email: document.getElementById('loginEMail').value,
                password: document.getElementById('loginPassword').value,
            };
            const response = await signIn(credentials);
            if (response === 'Medecin') {
                navigate('/doctor');
            } else if (response === 'Patient') {
                navigate('/patient');
            } else if (response === 'Proche') {
                navigate('/family');
            }
        } catch (error) {
            console.error('Sign-in error:', error);
        }
    };

    return (
        <div id="loginFrame" className="glassFrame">
            <h1>Bienvenue !</h1>
            <input placeholder="E-mail" type="text" id="loginEMail" onKeyDown={handleKeyDown}/>
            <input placeholder="Mot de passe" type="password" id="loginPassword" onKeyDown={handleKeyDown}/>
            <div id="loginDivMdpOublie"><a>J'ai oublié mon mot de passe</a></div>
            <button id="loginButton" onClick={signInCall}>Connexion</button>
            <Link id="aLink" to="/signup">
                Inscription
            </Link>
            <p id="Loginferepo"><a id="Loginferepo" href="https://iut-git.unice.fr/bl1116261/medtrackr-fe"><img src="/img/gitlab.png" alt="logo de gitlab" id='gitlogo'/>Front-End</a></p>
            <p id="Loginberepo"><a id="Loginberepo" href="https://iut-git.unice.fr/ha110840/medtrackr-be"><img src="/img/gitlab.png" alt="logo de gitlab" id='gitlogo'/>Back-End</a></p>
            <p id="Loginvers">v1.0</p>
        </div>
    );
};

export default LoginComponent;
