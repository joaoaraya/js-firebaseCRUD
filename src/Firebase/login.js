/* Importar dependencias */
import app from './app.js'
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
    console.log('logado!')
}

const userStatusOff = () => {
    loginStatus = false;
    console.log('não loagado!');
}


// Informar dados do usuário
const userInfo = (result) => {
    const usuario = result.user;

    console.log(usuario.displayName);
    console.log(usuario.email);
    console.log(usuario.photoURL)

    // tudo
    // console.log(usuario);
}

export { loginStatus }