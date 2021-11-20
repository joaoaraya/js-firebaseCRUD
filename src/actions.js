import { googleEntrar, googleSair } from '../src/firebase/login.js'
import { criarDados, lerDados, lerDoc, procurarDados, atualizarDados, delDados } from '../src/firebase/database.js'

// Sing In, Out
const btnSingIn = document.querySelector('#singIn'); // Botão entrar
const btnSingOut = document.querySelector('#singOut'); // Botão sair
const pAuth = document.querySelector('.gAuth'); // Mostrar página se tiver autenticado com o Google
const userData = document.querySelector('.userData'); // sessão de informçãoes do usuário
// Criar dados
const newName = document.querySelector('#newName'); // Input nome
const newNumber = document.querySelector('#newNumber'); // Input número
const btnSendData = document.querySelector('#sendData'); // Botão enviar dados
// Ler dados
const btnShowData = document.querySelector('#showData'); // Botão mostrar dados
const listDatabase = document.querySelector('#listDatabase'); // Tabela onde os dados vão ser incluídos
// Procurar dados
const searchName = document.querySelector('#searchName'); // input de pesquisa
const btnSearchName = document.querySelector('#btnSearchName'); // Botão pesquisar nomes
// Atualizar dados
const dataIdUpdate = document.querySelector('#dataIdUpdate'); // Input que recebe o ID do doc
const btnSearchData = document.querySelector('#searchData'); // Botão procurar ID
const editName = document.querySelector('#editName'); // Input que recebe o nome do doc
const editNumber = document.querySelector('#editNumber'); // Input que recebe o número do doc
const btnUpdateData = document.querySelector('#updateData'); // botão que envia as atualizações
// Deletar dados
const dataIdDel = document.querySelector('#dataIdDel'); // Input que recebe o ID do doc 
const btnDelData = document.querySelector('#delData'); // botão que deleta o doc

// Funções dos botões
btnSingIn.addEventListener('click', googleEntrar);
btnSingOut.addEventListener('click', googleSair);
btnSendData.addEventListener('click', criarDados);
btnShowData.addEventListener('click', lerDados);
btnSearchData.addEventListener('click', lerDoc);
btnUpdateData.addEventListener('click', atualizarDados);
btnDelData.addEventListener('click', delDados);
btnSearchName.addEventListener('click', procurarDados);

// Exportar inputs para outros modulos js
export { pAuth, userData, newName, newNumber, listDatabase, dataIdDel, dataIdUpdate, editName, editNumber, searchName}