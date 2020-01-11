export class Parser {
  constructor(store) {
    this.cells = {}
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

    // subscribe to store
    this.store.subscribe(value => {
      this.cells = value
    })
  }

  parseOperand(op) {
    if (!isNaN(Number(op))) return Number(op)
    if (op in this.cells) return Number(this.parse(this.cells[op]))
    if (/[a-z]+\d+/.test(op)) return 0

    return null
  }

  parseOperation(op, formula) {
    if (!(formula.startsWith('(') && formula.endsWith(')')))
      return this.originalString

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

    let formula = str.slice(1)
    if (formula.slice(0, 3).toLowerCase() in this.operations) {
      return this.parseOperation(
        formula.slice(0, 3).toLowerCase(),
        formula.slice(3).toUpperCase()
      )
    } else {
      return this.cells[formula] || str
    }
  }
}
