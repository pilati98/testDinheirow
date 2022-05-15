exports.validate = function (str) {

    if (str === null || str === undefined) return;
    if (!(str.length >= 11) || !(str.length <= 14)) return;
  
        //Pega uma string separando todos caracteres
    if (!str.split('').every(c => c === str[0])) {
  
      str = str
      .replace('.', '')
      .replace('-', '')
      .replace(' ', '')
      let d1 = d2 = dg1 = dg2 = rest = 0
      let dg1, dg2, rest, digito, nDigResult
  
      for (let nCount = 1; nCount < str.length - 1; nCount++) {
  
        //Pega o digito atual
        digito = parseInt(str.substring(nCount - 1, nCount))
  
        //Multiplica o numero atual da direita pra esquerda seguindo a formula de 10 em diante
        d1 = d1 + (11 - nCount) * digito
  
        //Multiplica o segundo numero atual da direita pra esquerda seguindo a formula (sem contar o primeiro digito) de 11 em diante
        d2 = d2 + (12 - nCount) * digito
      }
  
      rest = (d1 % 11)
      dg1 = (rest < 2) ? dg1 = 0 : 11 - rest
  
      d2 += 2 * dg1
  
      rest = (d2 % 11)
      dg2 = (rest < 2) ? dg2 = 0 : 11 - rest
  
      let nDigVerific = str.substring(str.length - 2, str.length)
      nDigResult = '' + dg1 + '' + dg2
      return nDigVerific == nDigResult
  
    } else return false
  }