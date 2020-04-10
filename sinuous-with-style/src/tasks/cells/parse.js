import {subscribe} from 'sinuous/observable'

export class Parser {
  constructor(store, columns, rows) {
    this.cells = {}
    this.store = store
    this.columns = columns
    this.rows = rows
    this.operations = {
      sum: (a, b) => a + b,
      sub: (a, b) => a - b,
      mul: (a, b) => a * b,
      div: (a, b) => a / b,
      mod: (a, b) => a % b,
      exp: (a, b) => a ** b
    }

    subscribe(() => this.cells = this.store())
  }

  cartesianProduct(letters, numbers) {
    var result = []
    letters.forEach(letter => {
      numbers.forEach(number => {
        result.push(letter + number)
      })
    })
    return result
  }

  findArrRange(arr, start, end) {
    let startI = arr.indexOf(start)
    let endI = arr.indexOf(end)
    if (startI == -1 || endI == -1 || startI > endI) return []
    return arr.slice(startI, endI + 1)
  }

  getRange(rangeStart, rangeEnd) {
    rangeStart = this.splitOperand(rangeStart)
    rangeEnd = this.splitOperand(rangeEnd)
    let letters = this.findArrRange(this.columns, rangeStart[0], rangeEnd[0])
    let numbers = this.findArrRange(this.rows, rangeStart[1], rangeEnd[1])
    return this.cartesianProduct(letters, numbers)
  }

  splitOperand(operand) {
    return [operand.match(/[a-zA-Z]+/)[0], Number(operand.match(/\d+/)[0])]
  }

  rangeOperation(op, rangeStart, rangeEnd) {
    if (!(this.isWellFormed(rangeStart) && this.isWellFormed(rangeEnd)))
      return this.originalString

    let range = this.getRange(rangeStart, rangeEnd)

    return range
      .map(address => Number(this.parse(this.cells[address]())))
      .reduce(this.operations[op])
  }

  singleOperation(op, operand1, operand2) {
    let first = this.parseOperand(operand1)
    let second = this.parseOperand(operand2)

    if (first === null || second === null) return this.originalString

    return this.operations[op](first, second).toString()
  }

  isWellFormed(operand) {
    return /[a-zA-Z]+\d+/.test(operand)
  }

  parseOperand(operand) {
    if (!isNaN(Number(operand))) return Number(operand)
    if (operand in this.cells) return Number(this.parse(this.cells[operand]()))
    if (this.isWellFormed(operand)) return 0

    return null
  }

  parseOperation(op, formula) {
    if (!(formula.startsWith('(') && formula.endsWith(')')))
      return this.originalString

    formula = formula.slice(1, formula.length - 1)

    let operationType
    let formulaArr
    if (formula.includes(',')) {
      operationType = 'single'
      formulaArr = formula.split(',')
    } else if (formula.includes(':')) {
      operationType = 'range'
      formulaArr = formula.split(':')
    }

    if (formulaArr.length !== 2) return this.originalString

    if (operationType === 'single')
      return this.singleOperation(op, formulaArr[0], formulaArr[1])

    if (operationType === 'range')
      return this.rangeOperation(op, formulaArr[0], formulaArr[1])

    return this.originalString
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
