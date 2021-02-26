class VGenerator {
  constructor(charset, secretLen) {
    this.currentIndex = 1
    this.charset = charset
    this.charsetLen = charset.length
    this.secretLen = secretLen
    this.totalVariants = this.charsetLen ** this.secretLen
  }

  getNext() {
    if (this.currentIndex > this.totalVariants) {
      return null
    }

    let indexes = []
    for (let i = 0; i < this.secretLen; i++) {
      if (i === 0) {
        indexes[i] = this.currentIndex % this.charsetLen
      } else {
        indexes[i] = Math.ceil(this.currentIndex / this.charsetLen ** i)
      }
      indexes[i] = indexes[i] % this.charsetLen
      if (indexes[i] === 0) {
        indexes[i] = this.charsetLen
      }
    }
    this.currentIndex++

    return indexes.map(i => this.charset[i - 1]).join('')
  }
}

module.exports = VGenerator
