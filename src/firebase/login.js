/* Importar dependencias */
import app from './app.js'
import { userData, pAuth } from '../actions.js'
import { getAuth, onAuthStateChanged, signInWithPopup, GoogleAuthProvider, signOut } from 'https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js'//'firebase/auth';

const auth = getAuth(app);
const provider = new GoogleAuthProvider();
let loginStatus = false;

// LogIn (Google)
export function googleEntrar() {
    signInWithPopup(auth, provider)
        .then((result) => {
            // Isso dá a você um Token de acesso do Google. 
            // Você pode usá-lo para acessar a API do Google.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            const user = result.user;
            setLoginStatus(); // Mostrar se logou
            userInfo(result); // Mostrar informações do usuário
        }).catch((error) => {
            // Trate os erros aqui:
            const errorCode = error.code;
            const errorMessage = error.message;
            // E-mail da conta do usuário já usada:
            const email = error.email;
            // O tipo AuthCredential já foi usado:
            const credential = GoogleAuthProvider.credentialFromError(error);
        });
}

// LogOut (Google)
export function googleSair() {
    signOut(auth).then(() => {
        // Desconectado da sua conta
        setLoginStatus(); // Mostrar se deslogou
    }).catch((error) => {
        // ocorreu um erro ao sair
    });
}

// Informar se está logado
const setLoginStatus = () => onAuthStateChanged(auth, (user) => {
    user != null ? userStatusOn() : userStatusOff();
})

const userStatusOn = () => {
    loginStatus = true;
    pAuth.style.display = 'block'; // Esconder página
    console.log('logado!');
}

const userStatusOff = () => {
    loginStatus = false;
    pAuth.style.display = 'none'; // Mostrar página
    userData.innerHTML = '<p>Usuário não logado!</p>';
    console.log('não loagado!');
}

// Informar dados do usuário
const userInfo = (result) => {
    const usuario = result.user;

    userData.innerHTML = `
    <img src='${usuario.photoURL}' alt='foto do usuário'>
    <p>Nome: ${usuario.displayName}</p>
    <p>E-mail: ${usuario.email} </p>`;

    // Mostra tudo:
    // console.log(usuario);
}

export { loginStatus }