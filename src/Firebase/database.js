import { loginStatus } from './login.js'
import { getFirestore, collection, addDoc } from 'https://www.gstatic.com/firebasejs/9.0.0/firebase-firestore.js' //'firebase/firestore';

const db = getFirestore();

export function criarDados() {
    if (loginStatus == true) {
        // qual database e grupo?
        const colecao = collection(db, 'users');
        // dados que deseja incluir 
        const dados = addDoc(colecao, {
            first: "Ada",
            last: "Lovelace",
            born: 123456
        });

        try {
            const inserirDados = dados;
            console.log("Document written with ID: ", inserirDados.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }
}