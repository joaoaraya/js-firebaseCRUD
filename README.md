## CRUD Firebase com Firestore 

OBS: Esse projeto está em JavaScript puro, para aplica-lo em um projeto com Node.JS siga os passos abaixo:

#### 1º no terminal do seu vs digite: 

```npm
npm install firebase
```
#### 2º nas imports dos arquivos .js, apague as urls e deixe apenas por ex: "...from {firebase/firestore}"

## Configuração do Firebase:

#### 1º Crie uma pasta na raiz do projeto com o nome ``token`` e crie um arquivo dentro dela ``firebase.js``
##### Inclua a configuração do projeto, acessando as configuraçẽos do seu aplicativo no Firebase:

### firebase.js
```js
const firebaseConfig = {
    apiKey: "xxx",
    authDomain: "xxx",
    projectId: "xxx",
    storageBucket: "xxx",
    messagingSenderId: "xxx",
    appId: "xxx"
}
export default firebaseConfig;
```

### Regras do Firestore (no Firebase):
```js
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if request.auth != null;
    }
  }
}
```
#### Acesse em: https://firebase.google.com/
