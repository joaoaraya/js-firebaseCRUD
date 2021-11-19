import { googleSair, googleEntrar } from '../src/Firebase/login.js'
import { criarDados } from '../src/Firebase/database.js'

const singin = document.querySelector('#singin')
const singout = document.querySelector('#singout')
const sendData = document.querySelector('#sendData')

singin.addEventListener('click', googleEntrar);
singout.addEventListener('click', googleSair);

sendData.addEventListener('click', criarDados);