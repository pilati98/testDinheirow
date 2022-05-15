const pessoas = [
    { id: 1, nome: "juca", sobrenome: "da silva", idade: 42 },
    { id: 2, nome: "daniel", sobrenome: "gonçalves", idade: 21 },
    { id: 3, nome: "matheus", sobrenome: "garcia", idade: 28 },
    { id: 4, nome: "gabriel", sobrenome: "pinheiro", idade: 21 },
  ]
  
  console.log('\n')
  
  
  // 2.1 - Imprima uma mensagem de saudação com o nome completo para cada um dos objetos. O nome deve ter a primeira letra maiúscula.
  console.log('Exercício 2.1 \n')
  
  pessoas.forEach(formataNome2)
  function formataNome2(pessoa) {
    let nomeFormatado = pessoa.nome[0].toUpperCase() + pessoa.nome.substring(1)
    console.log(`Olá, ${nomeFormatado} ${pessoa.sobrenome}`)
  }
  
  console.log('\n')
  
  
  //2.2 - Imprima a soma das idades.
  console.log('Exercício 2.3 \n')
  
  function somaIdade(listaPessoas) {
    let idades = []
    let soma = 0
  
    for (let i = 0; i < listaPessoas.length; i++) {
      idades[i] = listaPessoas[i].idade 
      soma = soma + idades[i] 
    }
    return soma
  }
  
  console.log(somaIdade(pessoas))
  
  console.log('\n')
  
  
  //2.3 - Imprima o objeto se existir alguem com menos 25 anos.
  console.log('Exercício 2.3 \n')
  
  pessoas.forEach(item => {
    if (item.idade < 25) {
      console.log(item)
    }
  })
  
  console.log('\n')
  
  
  //2.4 - Imprima todos os elementos em que a idade é menor que 30 anos.
  console.log('Exercício 2.4 \n')
  
  pessoas.forEach(item => {
    if (item.idade < 30) {
      console.log(item)
    }
  })
  
  console.log('\n')
  
  
  //2.5 - Ordene o array de forma decrescente por idade, em caso de empate o desempate é pelo id.
  console.log('Exercício 2.5 \n')
  
  
  for (let i = 0; i < pessoas.length; i++) {
    for (let j = 0; j < pessoas.length; j++) {
  
      if (pessoas[i].idade > pessoas[j].idade) {
        let aux = pessoas[j]  
        pessoas[j] = pessoas[i] 
        pessoas[i] = aux  
      }
      else if (pessoas[i].idade == pessoas[j].idade) {
  
      if (pessoas[i].id > pessoas[j].id) {
        let aux = pessoas[j]
        pessoas[j] = pessoas[i]
        pessoas[i] = aux
  
        }
      }
    }
  }
  
  pessoas.forEach(imprimir)
  
  function imprimir(argumento) {
    console.log(argumento)
  }
  
  
  