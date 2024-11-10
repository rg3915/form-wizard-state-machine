const formWizard = () => ({
  // Estados possíveis do formulário
  states: ['inicio', 'identificacao', 'documentos', 'endereco', 'confirmacao'],
  currentState: 'inicio',
  tipo: null,
  // Adiciona estado para o toast
  toast: {
    message: '',
    visible: false,
    removing: false,
    type: 'success',
    timeoutId: null
  },
  form: {
    nome: '',
    email: '',
    cpf: '',
    rg: '',
    cnpj: '',
    razaoSocial: '',
    cep: '',
    logradouro: '',
    complemento: '',
    bairro: '',
    cidade: '',
    uf: ''
  },

  resetForm() {
    this.form = {
      nome: '',
      email: '',
      cpf: '',
      rg: '',
      cnpj: '',
      razaoSocial: '',
      cep: '',
      logradouro: '',
      complemento: '',
      cidade: '',
      uf: ''
    }
    this.tipo = null
  },

  // Define um estado específico
  setState(state) {
    if (this.states.includes(state)) {
      this.currentState = state
    }
  },

  // Define o tipo de cadastro e inicia o fluxo
  selectTipo(tipo) {
    this.tipo = tipo
    this.setState('identificacao')
  },

  // Verifica se já passou por determinado estado
  hasPassedState(state) {
    // Obtém o índice do estado atual no array
    const currentIndex = this.states.indexOf(this.currentState)

    // Obtém o índice do estado que queremos verificar
    const stateIndex = this.states.indexOf(state)

    // Retorna true se o estado verificado está antes do atual
    return stateIndex < currentIndex

  },

  // Avança para o próximo estado
  nextState() {
    // Obtém o índice do estado atual
    const currentIndex = this.states.indexOf(this.currentState)

    // Verifica se não é o último estado
    if (currentIndex < this.states.length - 1) {
      // Avança para o próximo estado
      this.currentState = this.states[currentIndex + 1]
    }
  },

  // Retorna ao estado anterior
  prevState() {
    // Obtém o índice do estado atual
    const currentIndex = this.states.indexOf(this.currentState)

    // Verifica se não é o primeiro estado
    if (currentIndex > 0) {
      // Volta para o estado anterior
      this.currentState = this.states[currentIndex - 1]
    }
  },

  // Manipula o envio do formulário
  handleSubmit() {
    console.log('Formulário enviado:', {
      tipo: this.tipo,
      dados: this.form
    })
    this.showToast('Cadastro realizado com sucesso!')
    // Reset e retorno ao início
    this.resetForm()
    this.setState('inicio')
  },

  // Função para mostrar toast
  showToast(message, type = 'success') {
    // Limpa timeout anterior se existir
    if (this.toast.timeoutId) {
      clearTimeout(this.toast.timeoutId)
    }

    // Reset do estado do toast
    this.toast.removing = false
    this.toast.message = message
    this.toast.type = type
    this.toast.visible = true

    // Auto-hide após 3 segundos
    this.toast.timeoutId = setTimeout(() => {
      this.hideToast()
    }, 3000)
  },

  // Função para esconder toast com animação
  hideToast() {
    this.toast.removing = true

    // Aguarda a animação terminar antes de esconder
    setTimeout(() => {
      this.toast.visible = false
      this.toast.removing = false
    }, 300)

    // Limpa o timeout se existir
    if (this.toast.timeoutId) {
      clearTimeout(this.toast.timeoutId)
    }
  },

  // Função para pesquisar o CEP no viacep
  getAddressByCep(cep) {
    if (cep.length !== 8 && cep.length !== 9) {
      return Promise.reject(new Error('Invalid CEP length'))
    }

    return fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then(response => response.json())
      .then(data => {
        // Update input fields
        this.form.logradouro = data.logradouro
        this.form.bairro = data.bairro
        this.form.cidade = data.localidade
        this.form.uf = data.uf

        console.log('Address updated:', data)
      })
      .catch(error => {
        console.error(error.message)
      })
  },

})