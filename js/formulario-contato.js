const nome = document.getElementById('nome')
const email = document.getElementById('email')
const assunto = document.getElementById('assunto')
const mensagem = document.getElementById('mensagem')
const aceito = document.getElementById('aceito')
const formulario = document.getElementById('formulario')
const resposta = document.getElementById('resposta')

/*
// Códigos por aí programando o ENTER em cada campo.
// Isso é desnecessário se você usar um formulário no HTML.

nome.onkeypress = enterPressionado
email.onkeypress = enterPressionado
assunto.onkeypress = enterPressionado
mensagem.onkeypress = enterPressionado

function enterPressionado(event) {
  if (event.keyCode === 13) {
    enviar.click()
  }
}
*/

// Ao invés de programar o click do botão "Enviar",
// é possível programar diretamente o submit do formulário.
formulario.onsubmit = event => {
  event.preventDefault()

  if (
    !validarAceite() |
    !validarMensagem() |
    !validarAssunto() |
    !validarEmail() |
    !validarNome()
  )
    return

  // Aqui salvaria estes dados em algum lugar ou enviaria para o servidor.

  resposta.textContent = 'Relatorio enviado com sucesso, Obrigado !'
  resposta.className = 'success'
}

function validarNome() {
  nome.value = nome.value.trim()

  if (!nome.value) {
    resposta.textContent = 'Campo nome é obrigatório!'
    resposta.className = 'error'
    nome.classList.add('error')
    nome.focus()
    return false
  }

  // Utilização de expressões regulares (ou RegEx).
  const regex = /^([a-z]{2,}([\s-][a-z]{2,})+)$/gi

  if (!regex.test(nome.value)) {
    resposta.textContent = 'Formato de nome inválido!'
    resposta.className = 'error'
    nome.classList.add('error')
    nome.focus()
    return false
  }

  nome.classList.remove('error')
  return true
}



function validarEmail() {
  email.value = email.value.trim()

  if (!email.value) {
    resposta.textContent = 'Campo e-mail é obrigatório!'
    resposta.className = 'error'
    email.classList.add('error')
    email.focus()
    return false
  }

  // Utilização de expressões regulares (ou RegEx).
  const regex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/gi

  if (!regex.test(email.value)) {
    resposta.textContent = 'Formato de e-mail inválido!'
    resposta.className = 'error'
    email.classList.add('error')
    email.focus()
    return false
  }

  email.classList.remove('error')
  return true
}

function validarAssunto() {
  if (!assunto.value) {
    resposta.textContent = 'Campo assunto é obrigatório!'
    resposta.className = 'error'
    assunto.classList.add('error')
    assunto.focus()
    return false
  }

  assunto.classList.remove('error')
  return true
}


function validarMensagem() {
  mensagem.value = mensagem.value.trim()

  if (!mensagem.value) {
    resposta.textContent = 'Campo mensagem é obrigatório!'
    resposta.className = 'error'
    mensagem.classList.add('error')
    mensagem.focus()
    return false
  }

  if (mensagem.value.length < 100) {
    resposta.textContent = 'Informe ao menos 100 caracteres!'
    resposta.className = 'error'
    mensagem.classList.add('error')
    mensagem.focus()
    return false
  }

  mensagem.classList.remove('error')
  return true
}

function validarAceite() {
  if (!aceito.checked) {
    resposta.textContent = 'É necessário aceitar os termos de uso!'
    resposta.className = 'error'
    aceito.classList.add('error')
    aceito.focus()
    return false
  }

  aceito.classList.remove('error')
  return true
}
