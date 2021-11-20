# js-firebaseCRUD
Autenticação com Google. Criar, atualizar, remover e ler dados no Firestore

#Crie uma pasta na raiz do projeto com o nome 'token' e crie um arquivo dentro dela 'firebase.js'
inclua a configuração do projeto, acessando as configuraçẽos do seu aplicativo no firebase, inclua:

const firebaseConfig = {
    apiKey: "xxx",
    authDomain: "xxx",
    projectId: "xxx",
    storageBucket: "xxx",
    messagingSenderId: "xxx",
    appId: "xxx"
}
export default firebaseConfig;

#regras do firestore:
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if request.auth != null;
    }
  }
}
