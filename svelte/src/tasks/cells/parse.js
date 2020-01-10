class Parser {
  constructor(store) {
    this.store = store
    this.letters = 'abcdefghijklmnopqrstuvwxyz'
    this.operations = {
      sum: (a, b) => a + b,
      sub: (a, b) => a - b,
      mul: (a, b) => a * b,
      div: (a, b) => a / b,
      mod: (a, b) => a % b,
      exp: (a, b) => a ** b
    }
  }

  isLetter(str) {
    return str.length === 1 && letters.includes(str)
  }

  getLetterAsNumber(letter) {
    return letters.indexOf(letter)
  }

  getLettersAsNumber(letters) {
    // TODO
  }

  resolveCell(letters, number) {
    // TODO
  }

  parseCell(formula) {
    let i = 0
    while (this.isLetter(formula[i])) {
      i++
    }
    let letters = formula.slice(0, i)
    let number = Number(formula.slice(i))

    if (isNaN(number) || letters === '') return this.originalString

    return this.resolveCell(letters, number)
  }

  parseOperand(operand) {
    let i = 0
    while (this.isLetter(operand[i])) {
      i++
    }
    let letters = operand.slice(0, i)
    let number = Number(operand.slice(i))

    if (isNaN(number)) return null

    if (letters === '') return number

    return this.resolveCell(letters, number)
  }

  parseOperation(op, formula) {
    if (!(formula.startsWith('(') && formula.endsWith(')'))) return this.originalString

    formula = formula.slice(1, formula.length - 1)
    let formulaArr = formula.split(':')

    if (formulaArr.length !== 2) return this.originalString

    let first = this.parseOperand(formulaArr[0])
    let second = this.parseOperand(formulaArr[1])

    if (first === null || second === null) return this.originalString

    return this.operations[op](first, second).toString()
  }

  parse(str) {
    this.originalString = str
    if (typeof str !== 'string') return ''
    if (!str.startsWith('=')) return str

    let formula = str.slice(1).toLowerCase()

    if (formula.slice(0, 3) in this.operations) {
      return this.parseOperation(formula.slice(0, 3), formula.slice(3), str)
    } else {
      return this.parseCell(formula, str)
    }
  }
}
