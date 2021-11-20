import { loginStatus } from './login.js'
import { newName, newNumber, listDatabase, dataIdDel, dataIdUpdate, editName, editNumber, searchName } from '../actions.js'
import { getFirestore, collection, doc, addDoc, updateDoc, getDoc, getDocs, deleteDoc, query, orderBy, startAt, endAt,collectionGroup , where} from 'https://www.gstatic.com/firebasejs/9.0.0/firebase-firestore.js' //'firebase/firestore';

// Databse do Firestore
const db = getFirestore();
const dbCollection = 'contatos' // Nome da coleção que escolher

// Mostrar Tabela
const montarTabela = (querySnapshot) => {
    let n = 0;

    listDatabase.innerHTML = `
        <tr>
            <th>Pos</th>
            <th>Doc ID</th>
            <th>Nome</th>
            <th>Número</th>
        </tr>`;

    querySnapshot.forEach((doc) => {
        listDatabase.innerHTML += `
            <tr>
                <td>${n++}</td>
                <td>${doc.id}</td>
                <td>${doc.data().nome}</td>
                <td>${doc.data().numero}</td>
            </tr>`
        // Mostrar todos os dados do doc:
        //console.log(doc.id, " => ", doc.data());
    });
}

/* ---------------- CRUD ----------------- */

// Ler todos os dados dos documentos
export async function lerDados() {
    if (loginStatus) {
        const q = query(collection(db, dbCollection), orderBy("id", "asc"));
        const querySnapshot = await getDocs(q);
        
        montarTabela(querySnapshot);
    }
}

// Ler dados de um documento
export async function lerDoc() {
    if (loginStatus) {
        const colecao = doc(db, dbCollection, dataIdUpdate.value);
        const docSnap = await getDoc(colecao);

        if (docSnap.exists()) {
            editName.value = docSnap.data().nome;
            editNumber.value = docSnap.data().numero;
            console.log("Dados encontrados!");
        }
        else {
            console.log("Não encontrado!");
        }
    }
}

// Procurar dados nos documentos
export async function procurarDados() {
    if (loginStatus) {
        if (loginStatus) {
            const q = query(collection(db, dbCollection), orderBy('nome'), startAt(searchName.value), endAt(searchName.value+'\uf8ff'));
            //const q = query(collection(db, dbCollection), where("nome", "==", searchName.value));
            const querySnapshot = await getDocs(q);
            
            montarTabela(querySnapshot);
            // console.log(searchName.value)
        }
    }
}

// Criar novos documentos com os dados
export async function criarDados() {
    if (loginStatus) {
        // Qual database e grupo?
        const colecao = collection(db, dbCollection);
        // Dados que deseja incluir
        const dados = await addDoc(colecao, {
            id: `${Date.now()}`,
            nome: `${newName.value.toString()}`,
            numero: `${newNumber.value.toString()}`
        });

        try {
            // Dados enviado com sucesso
            lerDados();
            const inserirDados = dados;
            console.log("ID do doc adicionado: ", inserirDados.id);
        } catch (e) {
            // Erro ao enviar os dados
            console.error("Erro ao adicionar doc: ", e);
        }
    }
}

// Atualizar dados do documento
export async function atualizarDados() {
    if (loginStatus) {
        // Qual database, grupo e ID do Doc?
        const colecao = doc(db, dbCollection, dataIdUpdate.value);
        // Dados que deseja atualizar
        const dados = await updateDoc(colecao, {
            nome: editName.value,
            numero: editNumber.value
        });

        try {
            // Dados enviado com sucesso
            lerDados();
            const inserirDados = dados;
            console.log("Dados atualizados!");
        } catch (e) {
            // Erro ao enviar os dados
            console.error("Erro ao atualizar doc: ", e);
        }
    }
}

// Deletar documento
export async function delDados() {
    if (loginStatus) {
        const colecao = doc(db, dbCollection, dataIdDel.value); //database, coleção e ID do doc
        const dados = await deleteDoc(colecao);
        //console.log(dataIdDel.value);

        try {
            // Dados apagados com sucesso
            lerDados();
            const deletarDados = dados;
            console.log("ID apagado: ", deletarDados.id);
        } catch (e) {
            // Erro ao apagar doc
            console.error("Erro ao apagar doc: ", e);
        }
    }
}